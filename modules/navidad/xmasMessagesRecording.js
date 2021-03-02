fs = require('fs');

class xmasMessagesRecording {
    constructor() { }

    record(message, author, client, messageObject) {
        if (messageObject.author.bot) {
            // Setting embed
            this.botMessage.fields[0].value = author;
            this.botMessage.fields[1].value = message;

            const logChannel = client.channels.cache.find(channel => channel.id === "791658463746064414");
            logChannel.send({ embed: this.botMessage });
        } else {
            // Setting embed
            this.recordMessage.fields[0].value = author;
            this.recordMessage.fields[1].value = message;

            const logChannel = client.channels.cache.find(channel => channel.id === "791658463746064414");
            logChannel.send({ embed: this.recordMessage });
        }
    }

    winner(author, client) {
        const logChannel = client.channels.cache.find(channel => channel.id === "690530695189364770");
        logChannel.send("¡ " + author + " acaba de completar nuestra escape room y ha salvado la navidad! :tada:");
    }

    // Embed:
    recordMessage = {
        color: 0x0099ff,
        title: 'Mensaje que escribió el usuario:',
        fields: [
            { name: 'Usuario: ', value: '' },
            { name: 'Mensaje: ', value: '' },
        ],
        timestamp: new Date()
    }

    botMessage = {
        color: 0x00C094,
        title: 'Mensaje que respondió el bot:',
        fields: [
            { name: 'Usuario: ', value: '' },
            { name: 'Mensaje: ', value: '' },
        ],
        timestamp: new Date()
    }
}

module.exports = xmasMessagesRecording;