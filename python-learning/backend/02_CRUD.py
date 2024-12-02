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
