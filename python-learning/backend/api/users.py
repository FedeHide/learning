#!./venv/bin/python
from fastapi import FastAPI
from pydantic import BaseModel

# Pydantic is a data validation library in Python. It is used to validate the data sent to the server. Define the data types of the request body and response body in FastAPI.

app = FastAPI()


# User entity
class User(BaseModel):
    id: int
    name: str
    surname: str
    email: str
    age: int


users_list = [
    User(id=1, name="ruki", surname="purris", email="elpurris@gmail.com", age=25),
    User(id=2, name="anya", surname="mamitas", email="mananitas@gmail.com", age=20),
]


@app.get("/userslist")
async def read_users():
    return users_list


## ? Path Parameters
# * Path parameters are used to pass data to the server. The data is passed in the URL itself.
# * Path parameters are defined in the URL path using curly braces {parameter_name}.
@app.get("/usersparams/{user_id}")
async def read_user_by_param(user_id: int):
    users = filter(lambda user: user.id == user_id, users_list)
    try:
        return list(users)[0]
    except IndexError:
        return "User not found"


## ? Query Parameters
# * Query parameters are used to pass data to the server. The data is passed in the URL as key-value pairs.
# * Query parameters are defined in the URL path using a question mark ? followed by the key-value pair.


@app.get("/usersquery/")
async def read_user_by_query(user_id: int):
    users = filter(lambda user: user.id == user_id, users_list)
    try:
        return list(users)[0]
    except IndexError:
        return "User not found"
