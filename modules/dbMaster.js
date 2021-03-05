const { mongoUri, dbName } = require('../config.json');
const characterData = require('./PAI/paiProgress.json');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

class DBMaster {
    createDatabase() {
        client.connect(err => {
            const collection = client.db(dbName).collection("PAI");
            client.close();
        });
    }

    createCollection() {
        client.connect(function (err) {
            if (err) throw err;
            var dbo = client.db(dbName);

            dbo.createCollection("PAI", function (err, res) {
                if (err) throw err;
                console.log("Collection created!");
                client.close();
            });
        });
    }

    // insertData(message) {
    //     let pruebita = {
    //         "discordId": message.author.id,
    //         "name": "Tibu",
    //         "rank": "Ranguito",
    //         "experience": "17/200",
    //         "completedMissions": "12/21",
    //         "mentor": "Qui Gon-Jinn"
    //     };

    //     client.connect(function (err) {
    //         if (err) throw err;
    //         var dbo = client.db(dbName);

    //         dbo.collection("PAI").insertOne(pruebita, function (err, res) {
    //             if (err) throw err;
    //             console.log("1 document inserted");
    //             client.close();
    //         });
    //     });
    // }

    updateData(message) {
        client.connect(function (err) {
            if (err) throw err;
            var dbo = client.db(dbName);

            dbo.collection("PAI").updateOne({ discordId: message.author.id }, {
                $set: {
                    rank: "Otro rango más",
                    mentor: "Otro mentor"
                }
            }, function (err, res) {
                if (err) throw err;
                console.log("Row updated");
                client.close();
            });
        });
    }

    updateName(message) { };
    updateRank(message) { };
    updateExperience(message) { };
    updateCompletedMissions(message) { };
    updateMentor(message) { };
}

module.exports = DBMaster;