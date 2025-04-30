import requests

def test_add_user():
    url = "http://localhost:8000/api/users"
    user_data = {
        "id": "12345",
        "username": "testuser",
        "email": "testuser@example.com"
    }

    response = requests.post(url, json=user_data)

    if response.status_code == 200:
        print("User added successfully:", response.json())
    else:
        print("Failed to add user:", response.status_code, response.text)

if __name__ == "__main__":
    test_add_user()