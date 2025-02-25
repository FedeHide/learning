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
    species = "Canis familiaris"

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
print(
    "{} is {} and {} is {}.".format(philo.name, philo.age, mikey.name, mikey.age)
)  # Philo is 5 and Mikey is 6.

# Is Philo a mammal?
if philo.species == "Canis familiaris":
    print(
        "{0} is a {1}!".format(philo.name, philo.species)
    )  # Philo is a Canis familiaris!


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
        return "{} is {} years old".format(self.name, self.age)

    # instance method
    def speak(self, sound):
        return "{} says {}".format(self.name, sound)


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
        return "{} says {}".format(self.name, sound)


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
        return f"🗡️ {self.class_type} {self.name} swings a mighty sword, dealing {damage} damage!"


# Mage class
class Mage(Character):
    def __init__(self, name):
        super().__init__(name, class_type="Mage")

    # Overriding the attack method
    def attack(self):
        damage = randint(15, 25)
        return f"🔥 {self.class_type} {self.name} casts a fireball, dealing {damage} damage!"


# Rogue class
class Rogue(Character):
    def __init__(self, name):
        super().__init__(name, class_type="Rogue")

    # Overriding the attack method
    def attack(self):
        damage = randint(5, 30)  # Higher damage range due to critical strikes
        return f"🗡️ {self.class_type} {self.name} backstabs the enemy, dealing {damage} damage!"


# Function demonstrating polymorphism
def battle_simulation(characters):
    for character in characters:
        print(character.attack())


# Creating instances of different character types
heroes = [Warrior("Thorin"), Mage("Merlin"), Rogue("Luthien")]

# Running the battle simulation
battle_simulation(heroes)
