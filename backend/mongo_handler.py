from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient("mongodb+srv://nirogo06:heyho@cluster0.ythepr9.mongodb.net/")
db = client["users"]

# Ensure the 'usuariosliftandroll' collection exists
users_collection = db["usuariosliftandroll"]

def save_user(user_data):
    """Save a new user to the MongoDB 'users' collection."""
    if not users_collection.find_one({"email": user_data["email"]}):
        users_collection.insert_one(user_data)
        return True
    return False