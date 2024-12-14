from pydantic import BaseModel, EmailStr, Field


# User entity
class User(BaseModel):
    id: str | None = None
    # in mongodb we don't need to check the id because it will be generated automatically using the ObjectId (_id)
    # in mongodb the id is not an integer, it is an ObjectId, that's why we use str instead of int
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr

    class Config:
        extra = "forbid"
        # ? extra = "forbid" is used to prevent extra fields from being accepted in the request body.
