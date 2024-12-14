# Function for converting MongoDB user documents to Pydantic model schemas
def user_schema(user) -> dict:
    """
    Converts a MongoDB user document to a Pydantic model schema.

    Args:
        user (dict): The MongoDB user document.

    Returns:
        dict: The converted user data in the form of a Pydantic model schema.
    """
    return {
        "id": str(user["_id"]),  # Convert the MongoDB ObjectId to a string
        "username": user["username"],
        "email": user["email"],
    }
