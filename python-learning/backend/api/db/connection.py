from pymongo import MongoClient


# local client
# db_client = MongoClient("mongodb://localhost:27017/").local


# remote client
db_client = MongoClient(
    "mongodb+srv://test:9a6ZKNyVytVQo1FF@clustertest.vmiea.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTest"
).test
