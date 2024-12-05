### CRUD Operations in FastAPI
# CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that can be performed on a database.

# Create: Inserting a new record into the database
# Read: Selecting records from the database
# Update: Modifying records in the database
# Delete: Removing records from the database

# FastAPI provides decorators for each of these operations. The decorators are as follows:
# @app.post(): Create
# @app.get(): Read
# @app.put(): Update
# @app.delete(): Delete

# there are other operations that can be performed on a database, such as:
# @app.patch(): Partial Update
# @app.options(): Get Metadata
# @app.head(): Get Headers
# @app.trace(): Debugging


## Tip: put and patch are similar, but put is used to update the entire record, while patch is used to update only a part of the record.

## ? api rest
# REST stands for Representational State Transfer. It is an architectural style for designing networked applications.
# RESTful APIs are APIs that adhere to the principles of REST.
# RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.
# RESTful APIs use URLs to identify resources and HTTP methods to perform operations on those resources.
# RESTful APIs use status codes to indicate the success or failure of an operation.


## ? graphql
# GraphQL is a query language for APIs developed by Facebook.
# GraphQL allows clients to request only the data they need, reducing the amount of data transferred over the network.
# GraphQL APIs have a single endpoint that accepts queries and mutations to fetch and modify data.
# GraphQL APIs use a schema to define the types and operations that can be performed on the API.
# GraphQL APIs use resolvers to fetch data for queries and mutations.
