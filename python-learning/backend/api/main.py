#!./venv/bin/python
from fastapi import FastAPI

# Pydantic is a data validation library in Python. It is used to validate the data sent to the server.
# Define the data types of the request body and response body in FastAPI.
from pydantic import BaseModel

# The typing module provides a way to specify the type of variables, functions, and arguments in Python.
# Union is used to specify that a variable can have multiple types.
from typing import Union

# Import the routers module from the routers package.
# The routers module contains the routers for different endpoints in the API.
from routers import products, users

app = FastAPI()

# routers
app.include_router(products.router)
app.include_router(users.router)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
# tip: the app.get() decorator is used to define a GET endpoint.
# decorator is a function that takes another function as input and returns a new function that adds some additional functionality to the original function.
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}


### ? Run the FastAPI server
# * to run the FastAPI server, we use the following instructions:

# * pip install "fastapi[standard]" --> to install FastAPI and its dependencies

# * create a main.py file with the following content:

##*
# from typing import Union
#
# from fastapi import FastAPI
#
# app = FastAPI()
#
#
# @app.get("/")
# def read_root():
#     return {"Hello": "World"}
#
#
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
# *#

## * or async version
# from typing import Union
#
# from fastapi import FastAPI
#
# app = FastAPI()
#
#
# @app.get("/")
# async def read_root():
#     return {"Hello": "World"}
#
#
# @app.get("/items/{item_id}")
# async def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
# *#

# * run the FastAPI server with the following command:
# fastapi dev main.py

## ! remember to:
# ! activate the venv before running the FastAPI server
# ! check the interpreter path in the first line of the main.py file


## ? upgrade the FastAPI server

# * example:

## *
# from typing import Union
# from fastapi import FastAPI
# from pydantic import BaseModel
#
# app = FastAPI()
#
#
# class Item(BaseModel):
#    name: str
#    price: float
#    is_offer: Union[bool, None] = None
#
#
# @app.get("/")
# def read_root():
#    return {"Hello": "World"}
#
#
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#    return {"item_id": item_id, "q": q}
#
#
# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: Item):
#    return {"item_name": item.name, "item_id": item_id}
## * #


# * in the above example, we use pydantic to define a model Item that has three attributes: name, price, and is_offer.
# * pydantic is a data validation library that uses Python type annotations to validate data.
# * we use the BaseModel class from pydantic to define the model Item.
# * we add a PUT endpoint to update an item with the given item_id and item data.


## ? interactive API documentation

# FastAPI provides interactive API documentation that allows you to test your API endpoints directly from the browser.
# to access go to http://127.0.0.1:8000/docs
# the interactive API documentation is generated automatically based on the type annotations in your code.
# you can use the interactive API documentation to test your API endpoints by providing input data and clicking the "Try it out" button.

## * alternative API docs with redoc
# FastAPI also provides an alternative API documentation interface called Redoc.
# to access go to http://127.0.0.1:8000/redoc


## ?
