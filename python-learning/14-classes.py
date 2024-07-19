## Classes
# Class is a blueprint for creating objects (a particular data structure), 
# providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).
# The user-defined objects are created using the class keyword.

# Example:
class Dog:
    pass  # pass is a null statement in Python. Nothing happens when it is executed. It is used as a placeholder.

# Here, we use the class keyword to define an empty class Dog. From classes,
# we can construct instances. An instance is a specific object created from a particular class.


# Example:
class Person:
    def __init__(self, name, surname, nickname = "no nickname"):
        self.full_name = f"{name} {surname} ({nickname})"

    def walk(self):
        print(f"{self.full_name} is walking")

my_person = Person("John", "Doe")
print(my_person.full_name) # John Doe (no nickname)
my_person.walk() # John Doe (no nickname) is walking
my_other_person = Person("Jane", "Doe", "JD")
print(my_other_person.full_name) # Jane Doe (JD)
my_other_person.full_name = "Ruko"
print(my_other_person.full_name) # Ruko

# Other Example:
class Dog:
    # Class Attribute
    species = "Canis familiaris"

    # Initializer / Instance Attributes
    def __init__(self, name, age): # __init__ is a special method in Python classes and used to initialize the object's state.
        self.name = name   # self represents the instance of the class. By using the "self" keyword we can access the attributes and methods of the class in python.
        self.age = age

# In the above example, Dog is the class, which has two attributes: species and name.
# The __init__ method is the constructor method. The self parameter refers to the instance itself.
# Also, the __init__ method sets the initial values for the Dog instance's name and age attributes.


# Create an instance of Dog
philo = Dog("Philo", 5)
mikey = Dog("Mikey", 6)

# Access the instance attributes
print(philo.name) # Philo
print(philo.age) # 5
print(f"{mikey.name} is {mikey.age} years old.") # Mikey is 6 years old.
print("{} is {} and {} is {}.".format(philo.name, philo.age, mikey.name, mikey.age)) # Philo is 5 and Mikey is 6.

# Is Philo a mammal?
if philo.species == "Canis familiaris": 
    print("{0} is a {1}!".format(philo.name, philo.species)) # Philo is a Canis familiaris!



### Methods
# Methods are functions defined inside the body of a class. They are used to define the behaviors of an object.
# Example:

class Dog:
    # Class Attribute
    species = "Canis familiaris"

    # Initializer / Instance Attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # instance method
    def description(self):
        return "{} is {} years old".format(self.name, self.age)

    # instance method
    def speak(self, sound):
        return "{} says {}".format(self.name, sound)
    
# Instantiate the Dog object
mikey = Dog("Mikey", 6)

# call our instance methods
print(mikey.description()) # Mikey is 6 years old
print(mikey.speak("Gruff Gruff")) # Gruff Gruff


### Modifying Attributes
# You can change the value of attributes based on some behavior:
class Email:
    def __init__(self):
        self.is_sent = False
    def send_email(self):
        self.is_sent = True

my_email = Email()
print(my_email.is_sent) # False
my_email.send_email()
print(my_email.is_sent) # True


### Inheritance
# Inheritance is a way to form new classes using classes that have already been defined.
# The newly formed classes are called derived classes, the classes that we derive from are called base classes.
# Important benefits of inheritance are code reuse and reduction of complexity of a program.
# The derived classes (descendants) override or extend the functionality of base classes (ancestors).

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
print(mikey.make_sound()) # Mikey says Woof Woof

# Instantiate the Cat object
felix = Cat("Felix", 5)
print(felix.make_sound()) # Felix says Meow Meow


### Encapsulation
# Encapsulation is an another powerful way to extend the functionality of classes.
# In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class.
# This is one of the most important concepts that is used in Object-Oriented Programming (OOP) to restrict the access to the variables and prevent the data from being modified directly.

# Example:
class Computer:
    def __init__(self):
        self.__maxprice = 900

    def sell(self):
        print("Selling Price: {}".format(self.__maxprice))

    def setMaxPrice(self, price):
        self.__maxprice = price

c = Computer()
c.sell() #

# change the price
c.__maxprice = 1000
c.sell() # Selling Price: 900

# using setter function
c.setMaxPrice(1000)
c.sell() # Selling Price: 1000


### Polymorphism
# Polymorphism is an ability (in OOP) to use a common interface for multiple forms (data types).

# Example:
class Parrot:
    def fly(self):
        print("Parrot can fly")
    def swim(self):
        print("Parrot can't swim")

class Penguin:
    def fly(self):
        print("Penguin can't fly")
    def swim(self):
        print("Penguin can swim")

# common interface
def flying_test(bird):
    bird.fly()

# instantiate objects
blu = Parrot()
peggy = Penguin()

# passing the object
flying_test(blu) # Parrot can fly
flying_test(peggy) # Penguin can't fly
