def user_schema(user) -> dict:
    return {
        "id": str(user["_id"]),  # convert the MongoDB ObjectId to a string
        "username": user["username"],
        "email": user["email"],
    }
