### databases
# are used to store data in a structured way so that it can be easily accessed, managed, and updated.
# There are many types of databases, relational databases, non-relational databases.

## ? Relational databases
# are databases that store data in tables and rows.
# Each table contains rows that represent individual records and columns that represent different attributes of the data.
# The tables are related to each other through keys that are used to establish relationships between the data.
# examples of relational databases are MySQL, PostgreSQL, SQLite, and Oracle.


## ? Non-relational databases
# are databases that store data in a more flexible way than relational databases.
# They do not require a fixed schema and can store data in a variety of formats, such as key-value pairs, documents, or graphs.
# examples of non-relational databases are MongoDB, Cassandra, and Redis.


## * choosing a type of database depends on the specific requirements of the application.
# 5 guide questions to choosing a database:
# 1. What type of data will be stored in the database?
#    - structured data, such as user information, product details, or financial records, relational databases are a good choice.
#    - unstructured data, such as log files, sensor data, or social media posts, non-relational databases are more suitable.

# 2. How will the data be accessed and queried?
#    - relational databases are better suited for complex queries that involve multiple tables and relationships.
#    - non-relational databases are better suited for simple queries that involve retrieving or updating individual documents or records.

# 3. What are the performance requirements of the application?
#    - relational databases are generally slower than non-relational databases when it comes to read and write operations.
#    - non-relational databases are designed for high-performance applications that require fast access to data.

# 4. What are the scalability requirements of the application?
#    - relational databases are designed to scale vertically by adding more resources to a single server.
#    - non-relational databases are designed to scale horizontally by adding more servers to a cluster.

# 5. What are the consistency requirements of the application?
#    - relational databases provide strong consistency guarantees, which ensure that data is always up-to-date and accurate.
#    - non-relational databases provide eventual consistency guarantees, which allow data to be inconsistent for a short period of time.


## ? MongoDB
# is a popular open-source NoSQL database that stores data in a flexible, JSON-like format.
# It is designed to be scalable, high-performance, and easy to use.
# MongoDB uses collections to store data, which are similar to tables in relational databases.
# Each collection contains documents that represent individual records and can have a different schema.

## * installing MongoDB
# 1. go to the MongoDB website and download the Community Server edition.
# 2. install MongoDB on your system by following the installation instructions.
# 3. start the MongoDB server by running the mongod command in your terminal with systemd.
#    sudo systemctl start mongod  --> if you receive an error, you may need to run the following command to enable the service: sudo systemctl daemon-reload
#    sudo systemctl status mongod --> to check the status of the MongoDB server
#    sudo systemctl enable mongod  --> to start the MongoDB server automatically on system boot
#    sudo systemctl stop mongod  --> to stop the MongoDB server
#    sudo systemctl restart mongod  --> to restart the MongoDB server
#    mongosh --> to connect to the MongoDB server
# 4. connect to the MongoDB server by running the mongo command in another terminal window.
#    mongo


## * using MongoDB
# 1. create a new database by running the use command.
#    use mydatabase
# 2. create a new collection by running the db.createCollection command.
#    db.createCollection('users')
# 3. insert a new document into the collection by running the db.collection.insertOne command.
#    db.users.insertOne({name: 'Alice', age: 30})
# 4. query the collection by running the db.collection.find command.
#    db.users.find()
# 5. update a document in the collection by running the db.collection.updateOne command.
#    db.users.updateOne({name: 'Alice'}, {$set: {age: 31}})
# 6. delete a document from the collection by running the db.collection.deleteOne command.
#    db.users.deleteOne({name: 'Alice'})

## * connecting to MongoDB using Python
# 1. install the pymongo package using pip.
#    pip install pymongo
# 2. import the pymongo package in your Python code.
#    import pymongo
# 3. create a new MongoClient object to connect to the MongoDB server.
#    client = pymongo.MongoClient('mongodb://localhost:27017/')
# 4. access a specific database by using the client object.
#    db = client.mydatabase
# 5. access a specific collection by using the db object.
#    collection = db.users
# 6. perform operations on the collection, such as inserting, querying, updating, or deleting documents.
#    collection.insert_one({'name': 'Alice', 'age': 30})
#    collection.find_one()
#    collection.update_one({'name': 'Alice'}, {'$set': {'age': 31}})
#    collection.delete_one({'name': 'Alice'})

## * using MongoDB Atlas
# MongoDB Atlas is a cloud-based database service that provides a fully managed MongoDB database.
# It allows you to deploy, manage, and scale MongoDB databases in the cloud without having to worry about the infrastructure.
# To use MongoDB Atlas, you need to create an account on the MongoDB website and set up a new cluster.
# You can then connect to the cluster using the connection string provided by MongoDB Atlas and start using the database.
