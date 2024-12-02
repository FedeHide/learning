from fastapi import FastAPI
from pydantic import BaseModel

# Pydantic is a data validation library in Python. It is used to validate the data sent to the server. Define the data types of the request body and response body in FastAPI.

app = FastAPI()


# User entity
class User(BaseModel):
    name: str
    surname: str
    email: str
    age: int


users_list = [
    User(name="ruki", surname="purris", email="elpurris@gmail.com", age=25),
    User(name="anya", surname="mamitas", email="mananitas@gmail.com", age=20),
]


@app.get("/users")
async def read_users():
    return users_list
