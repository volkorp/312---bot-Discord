class Menus {
    constructor() { }

    description = 'Pie tierno';

    // Propiedades perfil
    setPerfil(nombre, avatar) {
        this.perfil.author.name = "Perfil de " + nombre;
        this.perfil.author.icon_url = avatar;
        this.perfil.thumbnail.url = avatar;
    }

    mensajeAyuda = {
        color: 0x0099ff,
        title: 'Ayuda de 312 bot',
        url: 'https://discord.js.org',
        description: 'Todos los comandos listados aquí deben ir precedidos por "312". Por ejemplo: "312 ayuda".',
        thumbnail: {
            url: 'https://cdn.discordapp.com/app-icons/709159403667980358/925e65988bf1caa7df4a894a10e2ea9d.png',
        },
        fields: [
            { name: '\u200b', value: '\u200b', inline: false },
            { name: ':one: Novedades ', value: 'Entérate de las novedades del grupo.' },
            { name: ':two:  Info', value: '¿Tienes dudas sobre datos del grupo o próximas salidas? ¡Pregúntame! :yum:' },
            { name: ':three:  Jugar', value: '¡Juega contra el bot! :space_invader:' },
            { name: ':four:  Perfil', value: 'Muestra tu perfil.' },
            { name: ':five:  Cumple', value: 'Escribe "cumple" un espacio y el nombre de la persona a la que quieras felicitar.' },
            { name: ':six:  Scouter', value: 'Muestra la ayuda de comandos para scouters. :fleur_de_lis:' },
        ],
        timestamp: new Date(),
        footer: {
            text: '312 - Cruz del sur'
        }
    }

    ayudaScouter = {}

    perfil = {
        color: 0xB200B2,
        title: this.description,
        author: { name: '', icon_url: '' },
        thumbnail: { url: '' },
        fields: [
            { name: '\u200b', value: '\u200b', inline: false },
            { name: 'Progresión ', value: ':military_medal: Nivel: 1\n:regional_indicator_x: Experiencia: 1000' },
            { name: 'Preguntas acertadas', value: '7/12' }
        ]
    }
}

module.exports = Menus;