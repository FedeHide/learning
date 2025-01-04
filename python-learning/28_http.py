#!./venv/bin/python

## ? requests - HTTP library
# requests is a popular library for making HTTP requests in Python. It allows you to send HTTP requests and handle responses easily.

import requests

# make a GET request
response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=9")
print("requests:", response.status_code)  # 200

# get the response content
print("requests content:", response.text)

print("\n")

# get the response JSON
print("requests json:", response.json())

# print pokemon names in a list
pokemon_names = [pokemon["name"] for pokemon in response.json()["results"]]
print("pokemon names:", pokemon_names)
