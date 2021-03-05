'use strict';

// Setting up imports
const Discord = require('discord.js');
const ModuleMaster = require('./modules/moduleMaster.js');

// Json
const { token } = require('./config.json');

// Objects from classes
const client = new Discord.Client();
const moduleMaster = new ModuleMaster();

//Ready
client.on('ready', () => {
  console.log('¡Siempre listos para servir!');
});


// Message recieved
client.on('message', message => {
  moduleMaster.dispatcher(message);
});

// Login
client.login(token);