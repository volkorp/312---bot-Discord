'use strict';

const DBMaster = require('../dbMaster.js');
const dbMaster = new DBMaster();


class PaiMain {
    message;

    dispatcher(message, args) {
        this.message = message;

        switch (args[2]) {
            case 'iniciar':
                this.generateProfile();
                message.channel.send("Has seleccionado iniciar tu aventura");
                break;
            case 'perfil':
                message.channel.send("Has seleccionado el perfil");
                break;
        }

    }

    generateProfile(){
        //dbMaster.createDatabase();
        //dbMaster.createCollection();
        dbMaster.insertData(this.message);
    }
}

module.exports = PaiMain;