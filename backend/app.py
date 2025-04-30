from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel, Field # Import Field
from typing import Dict, Any, Optional # Import Optional
from passlib.context import CryptContext
from bson import ObjectId # Import ObjectId

# MongoDB connection setup
client = MongoClient("mongodb+srv://nirogo06:heyho@cluster0.ythepr9.mongodb.net/")
# Use a dedicated database for the application instead of 'admin'
db = client["liftrolldb"]  # Changed database name

# Ensure the 'users' collection exists in the new database
users_collection = db["users"]

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

app = FastAPI()

# Enable CORS with specific configuration
origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    # Add any other origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Pydantic model for user creation (input)
class UserCreateModel(BaseModel):
    username: str
    email: str
    password: str

# Pydantic model for user representation (output/database)
# Use Field alias for MongoDB's _id
class UserModel(BaseModel):
    id: str = Field(..., alias="_id") # Map _id to id
    username: str
    email: str
    # Password should likely not be sent back to the client
    # password: str # Consider removing password from the response model

    class Config:
        populate_by_name = True # Allow using alias in model creation
        json_encoders = {ObjectId: str} # Serialize ObjectId to str
        arbitrary_types_allowed = True # Allow ObjectId type

# Pydantic model for login input
class LoginModel(BaseModel):
    email: str
    password: str

@app.post("/api/users")
async def create_user(user: UserCreateModel): # Use UserCreateModel for input
    """Save a new user to the MongoDB 'users' collection with a hashed password."""
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        # Use HTTPException for standard error responses
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = pwd_context.hash(user.password)
    
    # Prepare user data using the input model's dict
    user_data = user.dict()
    user_data["password"] = hashed_password # Store the hashed password

    # Insert data, MongoDB will generate _id
    result = users_collection.insert_one(user_data)
    
    # Optionally, retrieve the created user to return it
    created_user = users_collection.find_one({"_id": result.inserted_id})
    if created_user:
         # Convert to UserModel for response, ensuring _id is handled
         # Manually map _id to id if needed, or adjust UserModel
         created_user['id'] = str(created_user['_id'])
         # del created_user['_id'] # Remove original _id if using alias doesn't suffice
         # del created_user['password'] # Ensure password hash isn't returned
         # return UserModel(**created_user) # Return the created user data (without password)
         return {"message": "User saved successfully", "userId": str(result.inserted_id)}
    else:
        raise HTTPException(status_code=500, detail="Failed to create user")

@app.post("/api/login")
async def login_user(login_data: LoginModel):
    """Authenticate a user and return user data if successful."""
    user = users_collection.find_one({"email": login_data.email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Verify the password
    if not pwd_context.verify(login_data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")

    # Return user data (excluding password)
    # Ensure _id is converted to string for JSON serialization
    user_id = str(user["_id"])
    return {
        "message": "Login successful",
        "user": {
            "id": user_id,
            "username": user["username"],
            "email": user["email"]
            # Do not return the password hash
        }
    }

@app.get("/api/")
async def root():
    return {"message": "Lift&Roll API is running"}
