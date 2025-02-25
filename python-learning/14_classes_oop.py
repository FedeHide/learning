## Classes
# Class is a blueprint for creating objects (a particular data structure),
# providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).


# Example:
print("\n", "Class example:")


class Person:
    # class constructor
    def __init__(
        self, name, surname, nickname="no nickname", age=10
    ):  # self is a reference to the current instance of the class
        self.full_name = f"{name} {surname} ({nickname})"
        self.__age = age  #! private attribute (encapsulation)

    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age = age

    def walk(self):
        print(f"{self.full_name} is walking")


my_person = Person("John", "Doe")
print("Full name:", my_person.full_name)  # John Doe (no nickname)
print("Age:", my_person.get_age())  # 10
my_person.set_age(20)
print("Age after set:", my_person.get_age())  # 20
my_person.walk()  # John Doe (no nickname) is walking
my_other_person = Person("Jane", "Doe", "JD")


# Other Example:
print("\n", "Other class example:")


class Dog:
    # Class Attribute
    species = "Canis familiaris"  #! Class attributes or static attributes are shared by all instances of a class.

    # Initializer / Instance Attributes or constructor
    def __init__(
        self, name, age
    ):  # __init__ is a special method in Python classes and used to initialize the object's state.
        self.name = name  # By using the "self" keyword we can access the attributes and methods of the class.
        self.age = age


# Create an instance of Dog
philo = Dog("Philo", 5)
mikey = Dog("Mikey", 6)

# Access the instance attributes
print(f"{mikey.name} is {mikey.age} years old.")  # Mikey is 6 years old.
print(f"{philo.name} is {philo.age} years old.")  # Philo is 5 and Mikey is 6.

# Is Philo a mammal?
if philo.species == "Canis familiaris":
    print(f"{philo.name} is a {philo.species}!")  # Philo is a Canis familiaris!


###* Methods
# Methods are functions defined inside the body of a class. They are used to define the behaviors of an object.

# Example:
print("\n", "Methods:")


class Dog:
    # Class Attribute
    species = "Canis familiaris"

    # Initializer / Instance Attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # instance method
    def description(self):  #! self is needed when defining instance methods
        return f"{self.name} is {self.age} years old"

    # instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"


# Instantiate the Dog object
mikey = Dog("Mikey", 6)

# call our instance methods
print(mikey.description())  # Mikey is 6 years old
print(mikey.speak("Gruff Gruff"))  # Gruff Gruff


###* Modifying Attributes
# You can change the value of attributes based on some behavior:
print("\n", "Modifying attributes:")


class Email:
    def __init__(self):
        self.is_sent = False

    def send_email(self):
        self.is_sent = True


my_email = Email()
print("Is sent:", my_email.is_sent)  # False
my_email.send_email()
print("Is sent after send:", my_email.is_sent)  # True


###* Inheritance
# Inheritance is a way to form new classes using classes that have already been defined.
# The derived classes (descendants) override or extend the functionality of base classes (ancestors).
print("\n", "Inheritance:")


# Example:
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self, sound):
        return f"{self.name} says {sound}"


class Dog(Animal):
    def __init__(self, name, age):
        super().__init__(name, species="Canis familiaris")
        self.age = age

    def make_sound(self, sound="Woof Woof"):
        return super().make_sound(sound)


class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name, species="Felis catus")
        self.age = age

    def make_sound(self, sound="Meow Meow"):
        return super().make_sound(sound)


# Instantiate the Dog object
mikey = Dog("Mikey", 6)
print(mikey.make_sound())  # Mikey says Woof Woof

# Instantiate the Cat object
felix = Cat("Felix", 5)
print(felix.make_sound())  # Felix says Meow Meow


###* Encapsulation
# In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class.
print("\n", "Encapsulation:")


# Example:
class Computer:
    def __init__(self):
        self.__maxprice = 900  #! private attribute (with double underscore)

    # getter and setter methods

    def getMaxPrice(self):
        return self.__maxprice

    def setMaxPrice(self, price):
        if price < 1:
            print("Price can't be less than 1")
            return
        self.__maxprice = price


c = Computer()
print("Max price:", c.getMaxPrice())  # 900

# change the price without using setter function
c.__maxprice = 1000  #! This will not change the price because we are trying to change a private attribute
print("Max price after change without using setter:", c.getMaxPrice())  # 900

# using setter function
c.setMaxPrice(
    1000
)  #! This will change the price because we are using the setter function
print("Max price after change using setter:", c.getMaxPrice())  # 1000


###* Polymorphism
# Polymorphism is an ability (in OOP) to use a common interface for multiple forms (data types).
print("\n", "Polymorphism:")


# Example:

from random import randint


# Base class
class Character:
    def __init__(self, name, class_type):
        self.name = name
        self.class_type = class_type

    def attack(self):
        """Each subclass must implement its own attack method"""
        raise NotImplementedError("Subclasses must implement this method")


# Warrior class
class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, class_type="Warrior")

    # Overriding the attack method
    def attack(self):
        damage = randint(10, 20)
        return f"🗡️ \033[092m{self.class_type} {self.name} swings a mighty sword, dealing {damage} damage!"


# Mage class
class Mage(Character):
    def __init__(self, name):
        super().__init__(name, class_type="Mage")

    # Overriding the attack method
    def attack(self):
        damage = randint(15, 25)
        return f"🔥 \033[091m{self.class_type} {self.name} casts a fireball, dealing {damage} damage!"


# Rogue class
class Rogue(Character):
    def __init__(self, name):
        super().__init__(name, class_type="Rogue")

    # Overriding the attack method
    def attack(self):
        damage = randint(5, 30)  # Higher damage range due to critical strikes
        return f"🗡️ \033[94m{self.class_type} {self.name} backstabs the enemy, dealing {damage} damage!\033[0m"


# Function demonstrating polymorphism
def battle_simulation(characters):
    for character in characters:
        print(character.attack())


# Creating instances of different character types
heroes = [Warrior("Thorin"), Mage("Merlin"), Rogue("Luthien")]

# Running the battle simulation
battle_simulation(heroes)


###* Abstract Base Classes (ABC)
# Abstract Base Classes are a way to define a common interface for a set of subclasses.
# ABCs allow you to define a blueprint for a set of classes, ensuring that all subclasses implement the required methods.
print("\n", "Abstract Base Classes (ABC):")


from abc import ABC, abstractmethod

#! Decorator: is a design pattern in Python that allows a user to add new functionality to an object without modifying its structure.


# Base class
class Shape(ABC):
    number_of_shapes = 0

    def __init__(self):
        Shape.number_of_shapes += 1

    @abstractmethod  #! This decorator indicates that the method is abstract and must be implemented by subclasses.
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

    # class method (cls)
    @classmethod
    def obtain_number_of_shapes(cls):
        return cls.number_of_shapes


# Circle class
class Circle(Shape):
    def __init__(self, radius):
        super().__init__()
        self.radius = radius

    def area(self):
        return 3.14 * self.radius**2

    def perimeter(self):
        return 2 * 3.14 * self.radius


# Rectangle class
class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__()
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)


# Function to calculate the total area of shapes
def total_area(shapes):
    return sum([shape.area() for shape in shapes])


# Creating instances of different shapes
shapes = [Circle(5), Rectangle(3, 4)]

# Calculating the total area
print("Total area:", total_area(shapes))  # Total area: 71.42

# class method
print("Number of shapes:", Shape.obtain_number_of_shapes())  # Number of shapes: 2
