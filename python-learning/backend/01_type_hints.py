### type hints

# python is a dynamically typed language, but we can use type hints to specify the type of the parameters and return values of functions.
# This won't change the behavior of the code, but it will help us to understand the code better and to catch errors earlier.

# type hints are optional, but they are recommended for larger projects.

# example:


def get_name_and_age(name: str, age: int) -> str:
    return f"{name} is {age} years old."


# in this example, we are specifying that the function get_name_and_age receives a string and an integer as parameters and returns a string.

# we can also use type hints for variables:

name: str = "John"
age: int = 30

# simple types:
# int, float, str, bool


# for some data structures, we can use the following types from the typing module:

from typing import List, Tuple, Dict, Set, Any, Union, Optional

# List: list of elements of a specific type
# Tuple: tuple of elements of specific types
# Dict: dictionary with keys and values of specific types
# Set: set of elements of a specific type
# Any: any type
# Union: union of types
# Optional: optional type (is not modern, use | instead ; for example -> dict | None)

# example:


def get_name_and_age(name: str, age: int) -> Tuple[str, int]:
    return name, age


# in this example, the function get_name_and_age returns a tuple with a string and an integer.


## * classes and type hints

# we can also use type hints for classes:


class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def get_name_and_age(self) -> Tuple[str, int]:
        return self.name, self.age


# in this example, we are specifying that the class Person receives a string and an integer as parameters and returns a tuple with a string and an integer.

# we can also use type hints for class attributes:


class Cat:
    name: str
    age: int

    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age


# in this example, we are specifying that the class Cat has two
# attributes: name and age, both of type str and int, respectively.


## * type hints for functions that return None

# if a function returns None, we can use None as the return type:


def print_name(name: str) -> None:
    print(name)


# in this example, the function print_name returns None.


## * type hints for functions that return nothing

# if a function doesn't return anything, we can use None as the return type:


def print_name(name: str) -> None:
    print(name)


## * type hints for functions that return a value or None

# if a function can return a value or None, we can use Optional:


def get_name(name: str) -> Optional[str]:
    if name:
        return name
    else:
        return None


# in this example, the function get_name returns a string or None.


## * list of types and Union

# we can use a list of types or Union to specify multiple types:


def get_name(name: Union[str, None]) -> Optional[str]:
    if name:
        return name
    else:
        return None


# in this example, the function get_name receives a string or None and returns a string or None.


## * example with List


def get_names(names: List[str]) -> List[str]:
    return names


# in this example, the function get_names receives a list of strings and returns a list of strings.


## * example with Tuple


def get_name_and_age(name: str, age: int) -> Tuple[str, int]:
    return name, age


# in this example, the function get_name_and_age returns a tuple with a string and an integer.


## * example with Dict


def get_name_and_age(name: str, age: int) -> Dict[str, int]:
    return {"name": name, "age": age}


# in this example, the function get_name_and_age returns a dictionary with a string key and an integer value.


## * example with Set


def get_names(names: List[str]) -> Set[str]:
    return set(names)


# in this example, the function get_names returns a set of strings.


## * example with Any


def get_name(name: Any) -> Any:
    return name


# in this example, the function get_name receives any type and returns any type.


## * example with Optional


def get_name(name: Optional[str]) -> Optional[str]:
    return name


# in this example, the function get_name receives a string or None and returns a string or None.
