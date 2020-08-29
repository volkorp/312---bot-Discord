
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://312boterino:<password>@312-bot-gpdk2.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
