#!./venv/bin/python
from fastapi import HTTPException, APIRouter, Query, status
from typing import Annotated, Optional, List
from db.models.user import User
from db.connection import db_client
from db.schemas.user_schema import user_schema, users_list_schema
from pymongo.errors import DuplicateKeyError, PyMongoError
from pymongo.collection import Collection

router = APIRouter(
    prefix="/usersdb", tags=["usersdb"], responses={404: {"description": "Not found"}}
)

db_collection = db_client.local.users


def handle_pymongo_error(error: Exception, context: str):
    """
    handle PyMongo errors and raise the appropriate HTTPException.

    Args:
        error (Exception): The PyMongo error that occurred.
        context (str): The context in which the error occurred.

    Raises:
        HTTPException: The appropriate HTTPException based on the error.
    """
    if isinstance(error, DuplicateKeyError):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Duplicate key error occurred during {context}",
        )
    elif isinstance(error, PyMongoError):
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error during {context}: {str(error)}",
        )
    elif isinstance(error, Exception):
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during {context}: {str(error)}",
        )


def get_user_by_email_or_username(
    email: str, username: str, db_collection: Collection
) -> Optional[dict]:
    """
    search for a user by email or username in the database.

    Args:
        email (str): user email to search for.
        username (str): user username to search for.
        db_collection (Collection): the collection to search in.

    Returns:
        Optional[dict]: The user data if found, otherwise None.
    """
    try:
        user = db_collection.find_one(
            {"$or": [{"email": email}, {"username": username}]}
        )
        return user
    except PyMongoError as error:
        # Handle internal database errors
        handle_pymongo_error(error, context="user search")


## ! TIP: if we want to search by ID we need to use bson.ObjectId(id) to convert the id to the ObjectId type


@router.get("/", response_model=List[User])
async def read_users():
    users_list = db_collection.find()
    return users_list_schema(users_list)


## ? Query Parameters
# * Query parameters are used to pass data to the server. The data is passed in the URL as key-value pairs.
# * Query parameters are defined in the URL path using a question mark ? followed by the key-value pair.


@router.get("/search", response_model=User)
async def read_users_by_query(
    username: Optional[str] = Query(None), email: Optional[str] = Query(None)
):
    # check if at least one query parameter is provided
    if username is None and email is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="At least one query parameter must be provided",
        )

    # Use the function to check if the user exists by either email or username
    user_data = get_user_by_email_or_username(
        email=email, username=username, db_collection=db_collection
    )

    if not user_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    parsed_user = user_schema(user_data)
    return User(**parsed_user)


## ? Path Parameters
# * Path parameters are used to pass data to the server. The data is passed in the URL itself.
# * Path parameters are defined in the URL path using curly braces {parameter_name}.
@router.get("/{user_username}", response_model=User)
async def read_user_by_path(user_username: str):
    # Use the function to check if the user exists by username
    user_data = get_user_by_email_or_username(
        email=None, username=user_username, db_collection=db_collection
    )

    if not user_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    parsed_user = user_schema(user_data)
    return User(**parsed_user)


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=User)
async def create_user(user: Annotated[User, "User data"]):
    ## * in mongodb we don't need to check the id because it will be generated automatically using the ObjectId (_id)
    """
    Create a new user in the database.

    Args:
        user (User): The user data to create.

    Returns:
        User: The created user data.
    """

    # Check if the email or username is already registered in the database
    user_data = get_user_by_email_or_username(user.email, user.username, db_collection)

    if user_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email or username already exists",
        )

    # convert the model to a dictionary and remove the id field
    user_dict = user.model_dump()
    user_dict.pop("id", None)

    # Insert the user data into the database and fetch the inserted ID
    try:
        inserted_user = db_collection.insert_one(user_dict)
        id = inserted_user.inserted_id
    except (DuplicateKeyError, PyMongoError) as error:
        handle_pymongo_error(error, context="user creation")

    # Fetch the newly created user from the database
    try:
        db_user = db_collection.find_one({"_id": id})
        if not db_user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
            )
    except PyMongoError as error:
        handle_pymongo_error(error, context="user fetch")

    # Convert the DB document to a valid schema
    new_user = user_schema(db_user)

    return User(**new_user)


@router.put("/{user_username}", response_model=User)
async def update_user(
    user_username: str, user_data_to_update: Annotated[User, "User data"]
):
    """
    Update a user in the database.

    Args:
        user_username (str): The username of the user to update.
        user_data_to_update (User): The updated user data.

    Returns:
        User: The updated user data.
    """

    # Check if the user to update exists in the database
    user_data = get_user_by_email_or_username(
        email=None, username=user_username, db_collection=db_collection
    )

    if not user_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    # Convert the model to a dictionary and remove the 'id' field
    user_dict = user_data_to_update.model_dump()
    user_dict.pop("id", None)

    # Check if the new email or username already exists in another user
    existing_user = db_collection.find_one(
        {
            "$or": [
                {"email": user_data_to_update.email},
                {"username": user_data_to_update.username},
            ],
            "username": {
                "$ne": user_username
            },  # Exclude the current user from the check
        }
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email or username already exists",
        )

    # existing_user = valid_user_data_to_update.to_list(length=None)
    # if len(existing_user) > 0:
    #     raise HTTPException(
    #         status_code=status.HTTP_400_BAD_REQUEST,
    #         detail="User with this email or username already exists",
    #     )

    # Try to update the user in the database
    try:
        user_to_update = db_collection.find_one_and_replace(
            {"username": user_username}, user_dict, return_document=True
        )
        if not user_to_update:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
            )
    except PyMongoError as error:
        handle_pymongo_error(error, context="user update")

    updated_user = user_schema(user_to_update)
    return User(**updated_user)


@router.delete("/{user_username}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_username: str):
    """
    Delete a user from the database.

    Args:
        user_username (str): The username of the user to delete.
    """
    try:
        user_to_delete = db_collection.find_one_and_delete({"username": user_username})
        if not user_to_delete:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
            )
    except PyMongoError as error:
        handle_pymongo_error(error, context="user deletion")
