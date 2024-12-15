#!./venv/bin/python
from fastapi import HTTPException, APIRouter, Query, status
from typing import Annotated, Optional, List
from db.models.user import User
from db.connection import db_client
from db.schemas.user import user_schema
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
        Optional[dict]: the user document if found, None otherwise.
    """
    try:
        user = db_collection.find_one(
            {"$or": [{"email": email}, {"username": username}]}
        )
        if user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email or username already exists",
            )
        return None
    except PyMongoError as error:
        # Handle internal database errors
        handle_pymongo_error(error, context="user search")


# TODO: refactor the code from here
@router.get("/")
async def read_users():
    users_list = db_collection.find()
    parsed_users = [user_schema(user) for user in users_list]
    return [User(**user) for user in parsed_users]


## ? Query Parameters
# * Query parameters are used to pass data to the server. The data is passed in the URL as key-value pairs.
# * Query parameters are defined in the URL path using a question mark ? followed by the key-value pair.


# @router.get("/search", response_model=List[User])
# async def read_users_by_query(
#     id: Optional[int] = Query(None), name: Optional[str] = Query(None)
# ):
#     # check if at least one query parameter is provided
#     if id is None and name is None:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="At least one query parameter ('id' or 'name') is required",
#         )
#     # filter users based on query parameters
#     filtered_users = users_list
#     if id is not None:
#         filtered_users = [user for user in filtered_users if user.id == id]
#     if name is not None:
#         filtered_users = [user for user in filtered_users if user.name == name]
#     if not filtered_users:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
#         )
#     return filtered_users


## ? Path Parameters
# * Path parameters are used to pass data to the server. The data is passed in the URL itself.
# * Path parameters are defined in the URL path using curly braces {parameter_name}.
# @router.get("/{user_id}", response_model=User)
# async def read_user_by_path(user_id: int):
#     user = next((user for user in users_list if user.id == user_id), None)
#     # ? next(generator, default)
#     # generator: A generator that produces values
#     # default: A default value to return if the generator is exhausted
#     if user:
#         return user
#     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")


# TODO to here


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
    get_user_by_email_or_username(user.email, user.username, db_collection)

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
            raise HTTPException(status_code=404, detail="User not found after creation")
    except PyMongoError as error:
        handle_pymongo_error(error, context="user fetch")

    # Convert the DB document to a valid schema
    new_user = user_schema(db_user)

    return User(**new_user)


# TODO: refactor the code from here
# @router.put("/{user_id}")
# async def update_user(user_id: int, user: Annotated[User, "User data"]):
#     # Check if the email is already registered or is the same as the user's email
#     if any(
#         existing_user.email == user.email
#         for existing_user in users_list
#         if existing_user.id != user_id
#     ):
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="User with this email already exists",
#         )

#     for index, existing_user in enumerate(users_list):
#         if existing_user.id == user_id:
#             users_list[index] = user.model_copy(update={"id": existing_user.id})
#             # ? model_copy() method is used to create a copy of the model with the specified updates.
#             return {"message": "User updated successfully", "user": users_list[index]}
#     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")


# @router.delete("/{user_id}")
# async def delete_user(user_id: int):
#     user_to_delete = next((user for user in users_list if user.id == user_id), None)

#     if user_to_delete is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
#         )

#     users_list.remove(user_to_delete)
#     return {"message": "User deleted successfully", "user": user_to_delete}


# TODO to here
