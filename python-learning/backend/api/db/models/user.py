from pydantic import BaseModel, EmailStr


# User entity
class User(BaseModel):
    id: str | None
    # in mongodb we don't need to check the id because it will be generated automatically using the ObjectId (_id)
    # in mongodb the id is not an integer, it is an ObjectId, that's why we use str instead of int
    username: str
    email: EmailStr

    class Config:
        extra = "forbid"
        # ? extra = "forbid" is used to prevent extra fields from being accepted in the request body.
