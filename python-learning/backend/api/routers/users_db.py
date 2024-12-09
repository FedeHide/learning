#!./venv/bin/python
from fastapi import HTTPException, APIRouter, Query, status
from typing import Annotated, Optional, List
from db.models.user import User
from db.connection import db_client

router = APIRouter(
    prefix="/usersdb", tags=["usersdb"], responses={404: {"description": "Not found"}}
)


users_list: list[User] = []


# search for a user by ID
# podria usar esta funcion en lugar de repetir el codigo en cada endpoint, pero no la uso para ejemplificar
def get_user_by_id(user_id: int) -> Optional[User]:
    return next((user for user in users_list if user.id == user_id), None)


@router.get("/", response_model=List[User])
async def read_users():
    return users_list


## ? Query Parameters
# * Query parameters are used to pass data to the server. The data is passed in the URL as key-value pairs.
# * Query parameters are defined in the URL path using a question mark ? followed by the key-value pair.


@router.get("/search", response_model=List[User])
async def read_users_by_query(
    id: Optional[int] = Query(None), name: Optional[str] = Query(None)
):
    # check if at least one query parameter is provided
    if id is None and name is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="At least one query parameter ('id' or 'name') is required",
        )
    # filter users based on query parameters
    filtered_users = users_list
    if id is not None:
        filtered_users = [user for user in filtered_users if user.id == id]
    if name is not None:
        filtered_users = [user for user in filtered_users if user.name == name]
    if not filtered_users:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )
    return filtered_users


## ? Path Parameters
# * Path parameters are used to pass data to the server. The data is passed in the URL itself.
# * Path parameters are defined in the URL path using curly braces {parameter_name}.
@router.get("/{user_id}", response_model=User)
async def read_user_by_path(user_id: int):
    user = next((user for user in users_list if user.id == user_id), None)
    # ? next(generator, default)
    # generator: A generator that produces values
    # default: A default value to return if the generator is exhausted
    if user:
        return user
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=User)
async def create_user(user: Annotated[User, "User data"]):
    ## * in mongodb we don't need to check the id because it will be generated automatically using the ObjectId (_id)

    # Check if the email is already registered
    if any(
        existing_user.email == user.email
        for existing_user in db_client.local.users.find()
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists",
        )

    id = db_client.local.users.insert_one(user.model_dump()).inserted_id
    new_user = db_client.local.users.find_one({"_id:": id})

    return {"message": "User added successfully", "user": new_user}


@router.put("/{user_id}")
async def update_user(user_id: int, user: Annotated[User, "User data"]):
    # Check if the email is already registered or is the same as the user's email
    if any(
        existing_user.email == user.email
        for existing_user in users_list
        if existing_user.id != user_id
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists",
        )

    for index, existing_user in enumerate(users_list):
        if existing_user.id == user_id:
            users_list[index] = user.model_copy(update={"id": existing_user.id})
            # ? model_copy() method is used to create a copy of the model with the specified updates.
            return {"message": "User updated successfully", "user": users_list[index]}
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")


@router.delete("/{user_id}")
async def delete_user(user_id: int):
    user_to_delete = next((user for user in users_list if user.id == user_id), None)

    if user_to_delete is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    users_list.remove(user_to_delete)
    return {"message": "User deleted successfully", "user": user_to_delete}
