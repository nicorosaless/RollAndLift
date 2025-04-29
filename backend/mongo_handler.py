from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient("mongodb+srv://nirogo06:GztrMsrpzYJtvnja@cluster0.szcy1xz.mongodb.net/")
db = client["roll_with_ryan"]

# Ensure the 'users' collection exists
users_collection = db["users"]

def save_user(user_data):
    """Save a new user to the MongoDB 'users' collection."""
    if not users_collection.find_one({"email": user_data["email"]}):
        users_collection.insert_one(user_data)
        return True
    return False