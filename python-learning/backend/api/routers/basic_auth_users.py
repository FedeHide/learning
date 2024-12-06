#!./venv/bin/python
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, EmailStr

# import the OAuth2PasswordBearer and OAuth2PasswordRequestForm classes for the OAuth2 password flow
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

# import the password hashing library
## other hashing libraries can be used, like bcrypt, hashlib, passlib, etc.
from argon2 import PasswordHasher

router = APIRouter(
    prefix="/login", tags=["login"], responses={404: {"description": "Not found"}}
)

# Configure password hashing
ph = PasswordHasher()

# configure the OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login"
)  ## the tokenUrl is the endpoint where the user will send the username and password to get the token


class User(BaseModel):
    username: str
    full_name: str
    email: EmailStr
    disabled: bool


class UserInDB(User):
    password: str


# no relation db example with hashed passwords
users_db = {
    "purris": {
        "username": "purris",
        "full_name": "ruki sanchez",
        "email": "elpurro@gmail.com",
        "disabled": False,
        "password": ph.hash("123456"),
    },
    "nanitas": {
        "username": "nanitas",
        "full_name": "anya sanchez",
        "email": "lagorda@gmail.com",
        "disabled": True,
        "password": ph.hash("asdqwe123"),
    },
}


def search_user_in_db(username: str):
    user = users_db.get(username)
    if not user:
        return None
    return UserInDB(
        **user
    )  ## the ** is to unpack the dictionary into the UserInDB model


def search_user(username: str):
    user = users_db.get(username)
    if not user:
        return None
    return User(**user)  ## the ** is to unpack the dictionary into the User model


## ? the above function aproach is the most "pythonic" way to do it, because:
# ? Efficiency: Using users_db.get(username) is more idiomatic in Python for looking up keys in a dictionary. It avoids performing two lookups in the dictionary, as happens when using if username in users_db followed by users_db[username].
# ? Readability: It is clear and easy to read, with a structure that handles the error case early and returns the value directly.
# ? Easier to maintain: If you need to change the way the user is retrieved, you only need to change it in one place.
# ? Consistency: Using the same pattern in all your code makes it easier to read and maintain.
# ? handle the error case early: This is a good practice in general, as it makes the code easier to read and understand.


async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = search_user(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return user


# ? the above function is a dependency that will be used to get the current user from the token
# ? the token is passed as a parameter to the function, and the function will return the user if it exists
# ? in this case the token is the username, but in a real application, you would use the token to get the user information from the database


@router.post("/")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    ## Depends() is used to inject the dependency into the path operation function. Allows you to declare the dependency directly in the path operation function.
    user = search_user_in_db(form_data.username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

    try:
        ph.verify(user.password, form_data.password)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

    return {"access_token": user.username, "token_type": "bearer"}
    ## the access_token is the username, but in a real application, you would return a JWT token here
    ## the token_type is the type of token, in this case, a bearer token (the most common type of token)


@router.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
    ## the current_user is returned by the get_current_user dependency, and it will be the user that is currently authenticated
    ## in a real application, you would return the user information from the database, using the token to get the user information
