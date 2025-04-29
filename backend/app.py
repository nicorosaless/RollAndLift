
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from typing import Dict, Any

# MongoDB connection setup
client = MongoClient("mongodb+srv://nirogo06:GztrMsrpzYJtvnja@cluster0.szcy1xz.mongodb.net/")
db = client["roll_with_ryan"]

# Ensure the 'users' collection exists
users_collection = db["users"]

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserModel(BaseModel):
    id: str
    username: str
    email: str

@app.post("/api/users")
async def create_user(user: UserModel):
    """Save a new user to the MongoDB 'users' collection."""
    if not users_collection.find_one({"email": user.email}):
        users_collection.insert_one(user.dict())
        return {"message": "User saved successfully"}
    return {"message": "User already exists"}

@app.get("/api/")
async def root():
    return {"message": "Lift&Roll API is running"}
