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


# Function for converting a list of MongoDB user documents to a list of Pydantic model schemas
def users_list_schema(users) -> list[dict]:
    """
    Converts a list of MongoDB user documents to a list of Pydantic model schemas.

    Args:
        users (list): The list of MongoDB user documents.

    Returns:
        list: The converted list of user data in the form of Pydantic model schemas.
    """
    return [user_schema(user) for user in users]
