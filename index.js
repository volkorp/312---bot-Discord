'use strict';

// Setting up imports
const Discord = require('discord.js');
const fs = require('fs');
const News = require('./news.js');
const Menus = require('./menus.js');
const { prefix, token, saludos } = require('./config.json');

// Objects from classes
const client = new Discord.Client();
const menu = new Menus();
const news = new News();

//Ready
client.on('ready', () => {
  console.log('¡Siempre listos para servir!');
});


// Braindead
client.on('message', message => {
  // Comprobar prefijo
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Args
  let args = message.content.toLowerCase().split(" ");

  // DM
  if (message.channel.type == "dm") {
    message.author.send("¡Hola! Aún no está listo el sistema de mensajes privados, lo siento :).");
  }

  switch (args[1]) {
    // TEST
    case 'test':
      console.log(message.author.toString());

      var m = JSON.parse(fs.readFileSync('data.json'));

      m.forEach(function (p) {
        console.log(p);
      });

      

      //fs.writeFile('data.json', JSON.stringify(tib), function () {
      console.log("¡Datos guardados!");
      //});
      break;

    // SALUDOS
    case 'hola':
      let output = saludos[Math.floor(Math.random() * saludos.length)];

      if (output.includes("%nombre%"))
        output = output.replace("%nombre%", message.author.username);

      message.channel.send(output);
      break;

    // NOVEDADES
    case 'novedades':
      break;

    // AYUDA
    case 'ayuda':
      message.channel.send({ embed: menu.mensajeAyuda });
      break;

    // AVATAR
    case 'avatar':
      message.reply(message.author.displayAvatarURL());
      break;

    // 4. PERFIL
    case 'perfil':
      // Setea los datos del perfil      
      menu.setPerfil(message.author.username, message.author.displayAvatarURL());
      message.channel.send({ embed: menu.perfil });
      break;

    // 5. CUMPLEAÑOS
    case 'cumple':
      if (typeof args[2] !== 'undefined') {
        message.channel.send("¡Feliz cumpleaños " + args[2] + "! :partying_face::gift:");
      } else {
        message.channel.send("¡Feliz cumpleaños! :partying_face::gift:");
      }
      break;

    // 6. SCOUTERS
    case 'scouter':
      // Comprueba si la persona que utiliza el comando tiene el rol "kraal"
      if (message.member.roles.cache.some(rol => rol.name === "RPG Player")) {
        // TODO menú de ayuda scouters
      } else { message.channel.send("No tienes permiso para utilizar este comando. :sweat_smile:") }
      break;
  }
});

// Login
client.login(token);