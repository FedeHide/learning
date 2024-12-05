#!./venv/bin/python
from fastapi import HTTPException, APIRouter

# Pydantic is a data validation library in Python. It is used to validate the data sent to the server. Define the data types of the request body and response body in FastAPI.
# BaseModel is a class in Pydantic that is used to define the data types of the request body and response body in FastAPI.
# EmailStr is a class in Pydantic that is used to validate email addresses.
from pydantic import BaseModel, EmailStr

# The typing module provides a way to specify the type of variables, functions, and arguments in Python. Annotated is used to add metadata to the data types.
# Annotated is used to add metadata to the data types. It is used to provide additional information about the data types.
from typing import Annotated, Optional


router = APIRouter()


@router.get("/")
async def read_root():
    return {"Hello": "Users"}


# User entity
class User(BaseModel):
    id: int
    name: str
    surname: str
    email: EmailStr
    age: int

    class Config:
        extra = "forbid"
        # ? extra = "forbid" is used to prevent extra fields from being accepted in the request body.


users_list: list[User] = [
    User(id=1, name="ruki", surname="purris", email="elpurris@gmail.com", age=25),
    User(id=2, name="anya", surname="mamitas", email="mananitas@gmail.com", age=20),
]


# search for a user by ID
# podria usar esta funcion en lugar de repetir el codigo en cada endpoint, pero no la uso para ejemplificar
def get_user_by_id(user_id: int) -> Optional[User]:
    return next((user for user in users_list if user.id == user_id), None)


@router.get("/userslist")
async def read_users():
    return users_list


## ? Path Parameters
# * Path parameters are used to pass data to the server. The data is passed in the URL itself.
# * Path parameters are defined in the URL path using curly braces {parameter_name}.
@router.get("/usersparams/{user_id}")
async def read_user_by_param(user_id: int):
    user = next((user for user in users_list if user.id == user_id), None)
    # ? next(generator, default)
    # generator: A generator that produces values
    # default: A default value to return if the generator is exhausted
    if user:
        return user
    raise HTTPException(status_code=404, detail="User not found")


## ? Query Parameters
# * Query parameters are used to pass data to the server. The data is passed in the URL as key-value pairs.
# * Query parameters are defined in the URL path using a question mark ? followed by the key-value pair.


@router.get("/usersquery/", response_model=User)
async def read_user_by_query_id(id: int):
    user = next((user for user in users_list if user.id == id), None)
    if user:
        return user
    raise HTTPException(status_code=404, detail="User not found")


@router.get("/usersqueryname/", response_model=User)
async def read_user_by_query_id_and_name(id: int, name: str):
    user = next(
        (user for user in users_list if user.id == id and user.name == name), None
    )
    if user:
        return user
    raise HTTPException(status_code=404, detail="User not found")


# query example: http://127.0.0.1:8080/usersqueryname/?id=1&name=ruki
# query example: http://127.0.0.1:8080/usersqueryname/?id=2&name=anya


## ? Request Body
# * Request body is used to pass data to the server. The data is passed in the body of the request.
# * Request body is defined using the Pydantic BaseModel class.


@router.post("/adduser/", status_code=201, response_model=User)
async def create_user(user: Annotated[User, "User data"]):
    # Generate a new ID for the user
    if users_list:
        new_id = max(existing_user.id for existing_user in users_list) + 1
    else:
        new_id = 1

    # assign the new ID to the user
    user.id = new_id

    # Check if the user already exists
    if any(existing_user.id == user.id for existing_user in users_list):
        raise HTTPException(status_code=400, detail="User with this ID already exists")

    # Check if the email is already registered
    if any(existing_user.email == user.email for existing_user in users_list):
        raise HTTPException(
            status_code=400, detail="User with this email already exists"
        )

    users_list.append(user)
    return {"message": "User added successfully", "user": user}


@router.put("/updateuser/{user_id}")
async def update_user(user_id: int, user: Annotated[User, "User data"]):
    # Check if the email is already registered or is the same as the user's email
    if any(
        existing_user.email == user.email
        for existing_user in users_list
        if existing_user.id != user_id
    ):
        raise HTTPException(
            status_code=400, detail="User with this email already exists"
        )

    for index, existing_user in enumerate(users_list):
        if existing_user.id == user_id:
            users_list[index] = user.model_copy(update={"id": existing_user.id})
            # ? model_copy() method is used to create a copy of the model with the specified updates.
            return {"message": "User updated successfully", "user": users_list[index]}
    raise HTTPException(status_code=404, detail="User not found")


@router.delete("/deleteuser/{user_id}")
async def delete_user(user_id: int):
    user_to_delete = next((user for user in users_list if user.id == user_id), None)

    if user_to_delete is None:
        raise HTTPException(status_code=404, detail="User not found")

    users_list.remove(user_to_delete)
    return {"message": "User deleted successfully", "user": user_to_delete}


## * Once a user is deleted and removed from the list, the user ID is not reused. The user ID is unique and is not reused even after the user is deleted.
## * the best practice is to use a unique identifier for each user, such as a UUID, to avoid conflicts when deleting and adding users.


# ? optimize the code

"""
ID Lookup: The current approach of using any(existing_user.id == user.id for existing_user in users_list) works fine for small lists but is inefficient for large ones (O(n) complexity). Consider using a dictionary for faster O(1) lookups.

ID Generation: The method new_id = max(existing_user.id for existing_user in users_list) + 1 is simple but inefficient for large lists (O(n) complexity). A better approach would be to use a global ID counter to ensure O(1) performance.

Email Lookup: The method for checking if the email already exists also has O(n) complexity. Using a dictionary with emails as keys would allow O(1) lookups.

model_copy() in Update: Using model_copy() is valid, but ensure it's not introducing unnecessary overhead in your models, especially for complex data structures.

User Deletion: The approach of finding and removing the user with next((user for user in users_list if user.id == user_id), None) is efficient for search, but IDs are not reused. For better long-term management, consider using UUIDs to avoid ID conflicts.
- remove() method: The remove() method has O(n) complexity. Consider using a dictionary for faster removals.
- del statement: The del statement can be used to remove an item from a list by index, which is faster than the remove() method for large lists.
example:
```	
@app.delete("/deleteuser/{user_id}")
async def delete_user(user_id: int):
    for index, user_to_delete in enumerate(users_list):
        if user_to_delete.id == user_id:
            del users_list[index]
            return {"message": "User deleted successfully", "user": user_to_delete}
    raise HTTPException(status_code=404, detail="User not found")
```
it more efficient than the remove() method for large lists but remember that the del statement is not atomic and may cause issues in concurrent environments because it modifies the list in place, so do not modify the list while iterating over it.

Recommendations:
Use a dictionary for faster lookups (by ID or email).
Maintain a global ID counter to avoid searching for the max ID.
Use UUIDs for unique user identifiers, preventing conflicts and ensuring scalability.
"""
