fs = require('fs');

const xmasMessagesRecording = require('./xmasMessagesRecording.js')
const directMessagesRecording = new xmasMessagesRecording();

class XmasMessager {
    constructor() { }

    christmas(message, client) {

        // Args
        let args = message.content.toLowerCase();
        let output = "", lateMessage = "";

        // Manda mensajes al recorder
        directMessagesRecording.record(message.content, message.author.toString(), client, message);

        switch (args) {
            ///////////////////////////
            //  Búsqueda del tesoro  //
            ///////////////////////////
            // Primera prueba
            case 'búsqueda del tesoro':
            case 'busqueda del tesoro':
                output = "¡Hola! ¿Qué haces aquí " + message.author.toString() + "? :thinking:" +
                    "\n\nEstoy buscando un/a ayudante. ¿Quieres serlo tú?" +
                    "\n\nVerás… Hace muuuuchos, muchos años, conocí a una persona extraordinaria. " +
                    "Ya no me acuerdo de su nombre, hace demasiado tiempo de eso. " +
                    "\n\nSolo recuerdo que me dejó un tesoro escondido, pero nunca pude encontrarlo." +
                    "\n\nPara poder ayudarme a encontrarlo, es necesario que escribas las palabras que estoy buscando." +
                    "\n\n**¡Allá va la primera!**" +
                    "\n\n```bash\nPrueba 1: \"Si quieres saber dónde estás, este objeto deberás mirar\"\n```" +
                    "\n\nSi necesitas una pista dime:" +
                    "\n\n- *Pista 1 prueba 1*" +
                    "\n- *Pista 2 prueba 1*" +
                    "\n\nSi no consigues averiguarlo siempre puedes decirme:" +
                    "\n\n -*Respuesta prueba 1*";
                this.send(message, output);
                break;
            case 'pista 1 prueba 1':
                output = "Déjame ver... **¡Tiene forma circular!** :ok_hand:";
                this.send(message, output);
                break;
            case 'pista 2 prueba 1':
                output = "¡¿Otra más?! Pues... **¡Tiene agujas!** :arrow_lower_right:";
                this.send(message, output);
                break;
            case 'respuesta prueba 1':
                output = "La palabra que estaba buscando era... **¡Brújula!**"
                    + "\nPrueba a decirme la palabra ahora :eyes:"
                this.send(message, output);
                break;
            case 'brújula':
            case 'brujula':
                output = "¡Genial! ¡Eso es! ¿Sabías que la brújula sirve para encontrar tu rumbo y poder orientarte?" +
                    "\nHa sido fácil, ¿verdad? ¡Vamos con la siguiente!" +
                    "\n\n```bash\nPrueba 2: \"Se decide de manera libre y voluntaria por cada persona\" (No es el tótem)\n```" +
                    "\n\n ¡Me puedes pedir pistas en cada prueba de la misma manera! En este caso serían:" +
                    "\n\n- *Pista 1 prueba 2*" +
                    "\n- *Pista 2 prueba 2*" +
                    "\n\nY si no consigues averiguarlo siempre puedes decirme:" +
                    "\n\n -*Respuesta prueba 2*";
                this.send(message, output);
                break;

            // Segunda prueba
            case 'pista 1 prueba 2':
                output = "Aquí tienes tu pista, aventurer@: 5X4ST5N T25S T4P9S";
                this.send(message, output);
                break;
            case 'pista 2 prueba 2':
                output = "¿Aún nada? Vaya, aquí tienes entonces: 5S 1N 390P2904S9 P52S9N76";
                this.send(message, output);
                break;
            case 'respuesta prueba 2':
                output = "La palabra que esta buscando era **Promesa** :fleur_de_lis:. ¡Dímela ahora para seguir investigando!"
                this.send(message, output);
                break;

            // Tercera prueba            
            case 'promesa':
                output = "¡Exacto! ¿Sabes que hay una promesa del/de la castor/a, una del/de la lobato/a y una scout?" +
                    "\n¡Todas significan exactamente lo mismo, solo se adaptan según la edad que tengas!" +
                    "\n¿Tú has hecho ya tu promesa? Bueno, bueno, que me enrollo... ¡Vamos con la siguiente prueba!" +
                    "\n\n¡Vaya! Esta prueba está encriptada y yo no entiendo nada... **Creo que tienes que buscar una base.** Puede que este pergamino te ayude en algo:\n\n";
                this.sendWithImg(message, output, ["./assets/Pergamino.png"], "\nSi no consigues averiguarlo puedes decirme: *Respuesta prueba 3*");
                break;

            case 'respuesta prueba 3':
                this.send(message, "¡Necesitaba la palabra **obispado**! :sweat_smile:\nDímela para continuar...");
                break;

            // Cuarta prueba
            case 'obispado':
                output = "¡Si! ¿Sabes el nombre de las bases en las que ha estado el grupo Cruz del sur? Yo te las cuento:" +
                    "\n\n ```\n - Armengual (Iglesia de San Lorenzo) \n - Obispado\n - San Juan (una casa)\n - Alameda Apodaca (una casa)\n - Bendición de Dios (una casa)\n - Iglesia del Carmen\n - Iglesia de Capuchinos\n - Colegio Campo del sur\n```" +
                    "\n\nTe estoy dando mucha información, ¿verdad? :smile: Venga, venga... No me enrollo: ¡Seguimos!" +
                    "\n\n```bash\nPrueba 4: \"Existen varios y solo las personas que los conocen pueden comunicarse utilizándolos\"\n```" +
                    "\n\n¡Recuerda que puedes pedirme pistas!";
                this.send(message, output);
                break;
            case 'pista 1 prueba 4':
                output = "Puedes encontrar tu respuesta en el **señalero**.";
                this.send(message, output);
                break;
            case 'pista 2 prueba 4':
                output = "¡Puede que un **murciélago** te dé la respuesta!";
                this.send(message, output);
                break;
            case 'respuesta prueba 4':
                output = "¿Te rindes? La palabra que quería era... **¡Códigos!** Dime ahora la palabra para seguir :yum:";
                this.send(message, output);
                break;

            // Quinta prueba
            case 'códigos':
            case 'codigos':
                output = "Muy bien, ¡sí señor! Sabes un montón, ¿eh? Si seguimos así, encontraremos el tesoro rapidísimo. ¡Vamos, vamos!" +
                    "\n\n```bash\nPrueba 5: \"Tradición que proviene de tribus de todo el mundo\"\n```";
                this.send(message, output);
                break;

            case 'pista 1 prueba 5':
                output = "Está bien... aquí tienes tu pista: **5S 1N7 T27D4349N 01Y 40P92T7NT5 D5NT29 D5 N15ST29 821P9*";
                this.send(message, output);
                break;
            case 'pista 2 prueba 5':
                output = "¡Otra más! Aquí tienes: **B7D5N-P9W566 2534B49 56 N90B25 D5 40P55S7**"
                this.send(message, output);
                break;
            case 'respuesta prueba 5':
                output = "La respuesta que buscaba era... **¡Tótem!** Díme la palabra y seguimos :smiling_face_with_3_hearts:";
                this.send(message, output);
                break;

            // Sexta prueba
            case 'totem':
            case 'tótem':
                output = "Que tradición más bonita, ¿verdad? ¿Sabías que no todos los grupos scouts utilizan tótems?" +
                    "\n¿Y que muchos grupos se ponen tótem pero no los utilizan para llamarse entre ellos/as? En Cádiz sois el único grupo que lo utilizáis, aunque otros muchos también los tienen." +
                    "\n¡No dejéis de llamaros por vuestros tótems, es una tradición de grupo preciosa!" +
                    "\n\nA ver qué tal se te da la siguiente:" +
                    "\n\n```bash\nPrueba 6: \"Fecha exácta de formación de Cruz del sur (Formato: dd-mm-aaaa)\"\n```" +
                    "\n\n¡Puedes pedir pistas como siempre!";
                this.send(message, output);
                break;
            case 'pista 1 prueba 6':
                output = "¡Aquí tienes tu pista!\n\n";
                this.sendWithImg(message, output, ["./assets/Pista1Prueba6.png"], "");
                break;
            case 'pista 2 prueba 6':
                output = "Otra, aquí te va:\n\n";
                this.sendWithImg(message, output, ["./assets/Pista2Prueba6.png"], "");
                break;
            case 'respuesta prueba 6':
                output = "¿La fecha de fundación? ¡Yo la sé! Fue: **18-9-1978** Dime en qué fecha fue para comprobar que te acuerdas :thinking:";
                this.send(message, output);
                break;

            // Séptima prueba
            case '18-9-1978':
            case '18/9/1978':
            case '1891978':
                output = "¡Te las sabes todas! Los fundadores de vuestro grupo fueron Puma y Saki, hace 41 años." +
                    "¡Gracias a vosotros/as el grupo sigue más vivo que nunca! Espera, espera… ¿por qué se tantas cosas de los scouts? No recuerdo nada…" +
                    "En fin, que más da, ¡sigamos!" +
                    "\n\n```bash\nPrueba 7: \"Se utiliza a la hora de presentar y despedir\"\n```" +
                    "\n\n¿Necesitas pistas? ¡Pídelas! :rolling_eyes:";
                this.send(message, output);
                break;
            case 'pista 1 prueba 7':
                output = "Recien sacada de nuestra fábrica de pistas: **67 25SP15ST7 5ST7 F9207D7 P92 D9S P767B27S**";
                this.send(message, output);
                break;
            case 'pista 2 prueba 7':
                output = "Esta pista me la encontré entre dos coles: **9S S391T52S 69 1T464Z9N P727 P5D42 S465N349**";
                this.send(message, output);
                break;
            case 'respuesta prueba 7':
                output = "¿Nada? ¡La respuesta era el **saludo scout**! Si me dices la respuesta podemos seguir :muscle:.";
                this.send(message, output);
                break;

            // Octava prueba
            case 'saludo scout':
            case 'el saludo scout':
                output = "¡Me encanta el saludo Scout! ¿Sabes que significa un montón de cosas súper interesantes?" +
                    "\nYo me acuerdo de algunas, como “el/la scout aspira a más”, pero la memoria no me da para más. Siguiente pregunta :smile:" +
                    "\n\n```bash\nPrueba 8: \"Es la patrulla más longeva del escultismo en España.\"\n```" +
                    "\n\nTe puedo ayudar con pistas como siempre si lo necesitas, ¡aunque seguro que no te hacen falta!"
                this.send(message, output);
                break;
            case 'pista 1 prueba 8':
                output = "Vale... **Fue fundada en Cádiz**.";
                this.send(message, output);
                break;
            case 'pista 2 prueba 8':
                output = "Vamos allá: **Está formada por dos palabras y la segunda empieza por K**";
                this.send(message, output);
                break;
            case 'respuesta prueba 8':
                output = "¿No se te ocurre? ¡Era **la patrulla Kanguro!** ¡Escríbemelo, rápido!";
                this.send(message, output);
                break;
            case 'patrulla canguro':
            case 'la patrulla canguro':
                output = "¡Casi! Pero no es así como se escribe...";
                this.send(message, output);
                break;
            case 'patrulla kanguro':
            case 'la patrulla kanguro':
                output = "¡Bravo! Efectivamente, la Patrulla Kanguro es la patrulla activa más antigua de España, y la tenéis en Cádiz, en el local de Delegación de Scouts de Cádiz." +
                    "\nSus integrantes son mayores, es decir, que no es una patrulla como la Tigre, la Azor o la Cobra, que está formada por niños y niñas entre 11 y 13 años," +
                    "\n¡sino que tienen 40, 50 o incluso 60! Han ido creciendo con la patrulla." +
                    "\n\n¡Guau chicos/as! ¡Lo habéis hecho genial! Parece que habéis desenterrado algo… ¡Del mismísimo Baden Powell! ¡Enhorabuena! ¡Habéis desenterrado el tesoro!\n";
                this.sendWithImg(message, output, ["./assets/recompensaFinal.jpeg"], "\n\n¡Por cierto! También ha aparecido algo que pone que es para el Espíritu de la Navidad, pero no sé exactamente a qué se refiere:" +
                    "\n\n**“Tiene un hermano”**");
                break;



            ///////////////////////////
            //      Escape room      //
            ///////////////////////////

            // Escape 1
            case 'escape room':
            case 'Escape room':
                output = "¡Hola! ¡Qué bueno verte de nuevo! Hoy tengo malas noticias…" +
                    "\n\n**¡El Grinch ha apagado las estrellas de la Cruz del Sur!**" +
                    "\n\nAlfa cruz (la estrella de abajo), beta cruz (la de la izquierda), gamma cruz (la de arriba), delta cruz (la de la derecha) y epsilon cruz (la del centro)" +
                    "\nson las 5 estrellas de la constelación… ¡Y no encuentro ninguna! Mira como ha quedado el cielo…\n\n\n"
                lateMessage = "Tenemos que encontrar las 5 estrellas." +
                    "\n\nHasta que la Cruz del Sur no esté completa, ¡la Navidad no llega a Australia!" +
                    "Australia es el primer sitio donde llega la Navidad, y si no llega allí, no habrá Navidad en ninguna parte del mundo." +
                    "\n\nIré guiándote a través de unas pistas que se ha dejado olvidadas el Grinch y que yo, por suerte, he encontrado. ¡Espero que te sirvan!" +
                    "\n\n¿Quieres ayudarme en esta aventura? Si respondes \"**quiero ayudarte**\" te contaré lo que he averiguado hasta ahora."
                this.sendWithImg(message, output, ["./assets/universo.jpeg"], lateMessage);
                break;

            case 'quiero ayudarte':
                output = "¡Mira esto! El Grinch ha hecho un recorrido que tenemos que seguir para descubrir por dónde comenzar a buscar.\n";
                this.sendWithImg(message, output, ["./assets/Codigo.jpg"], "\n\nTengo una idea de qué ruta ha podido seguir... Si quieres que te la diga dime: **pista recorrido**.");
                break;

            case 'pista recorrido':
                output = "";
                this.sendWithImg(message, output, ["./assets/Espiral.jpg"], "\n\n¡Aquí tienes! Dime qué ruta crees que ha seguido el Grinch.");
                break;

            // Escape 2
            case '4036297':
                output = "¡Genial! ¡Has encontrado la estrella alfa!";
                lateMessage = "\n\nAquí tienes tu siguiente pista." +
                    "\nTenemos estos números, pero no tienen sentido. Necesitamos ordenarlos. Estos números nos guiarán a un nuevo lugar." +
                    "\n\nYo tengo alguna idea... Si quieres que te la diga dime: “**Pista escape room 1**” o “**Pista escape room 2**”\n";

                this.sendWithImg(message, output, ["./assets/primeraEstrella.jpeg", "./assets/Coordenadas.jpeg"], lateMessage);
                break;

            case 'pista escape room 1':
                output = "Pues... ¡Sospecho que son coordenadas! :thinking:";
                this.send(message, output);
                break;
            case 'pista escape room 2':
                output = "¡Busca un sitio cerca de estas coordenadas cuando las tengas ordenadas! ¿Te resulta algún nombre familiar?";
                this.send(message, output);
                break;

            // Escape 3
            case 'brownsea':
                output = "¡Wow! Sí que era difícil." +
                    "\n\n¿Así que la siguiente estrella estaba en Brownsea, eh? ¿Sabes que allí se hizo el primer campamento scout?" +
                    "\n\n¡Aquí tienes la estrella beta!\n" +
                    "\nTambién he encontrado esto, quizás te sea útil en el futuro.";

                this.sendWithImg(message, output, ["./assets/segundaEstrella.jpeg", "./assets/abecedario.jpeg"], "").then(() => {

                    output = "Veamos si gracias a esta prueba conseguimos recuperar la próxima estrella..." +
                        "\n¡Aquí tienes las reglas!" +
                        "\n• Hay que completar las casillas vacías con una sola insignia" +
                        "\n• En una misma fila no puede haber insignias repetidas" +
                        "\n• En una misma columna no puede haber insignias repetidas" +
                        "\n• En un mismo cuadrante no puede haber insignias repetidas" +
                        "\n• Recorta las insignias y pégalas en su lugar hasta completar el sudoku. Cuando esté completo dime **“Solución sudoku”** y comprueba que lo has hecho correctamente\n\n"

                    // Foto extra
                    this.sendWithImg(message, output, ["./assets/sudoku.jpg", "./assets/insignias.jpg"], "");
                });

                break;

            // Escape 4
            case 'solución sudoku':
            case 'solucion sudoku':
                output = "¡Aquí tienes! ¡Seguro que lo tienes correcto! Y como el scout es digno de confianza… ¡Aquí está la estrella gamma!";
                lateMessage = '\n\nVaya, acabo de encontrar este pergamino... ¿Sabes de qué sitio habla? ¡Suerte!';
                this.sendWithImg(message, output + " " + lateMessage, ["./assets/terceraEstrella.jpeg", "./assets/jeroglificos.jpeg"], "");
                break;

            // Escape 5
            case 'egipto':
                output = "¡Fantástico! En Egipto estaba la estrella delta. ¡Aquí la tienes!";
                lateMessage = '\n\n¡Ya sabemos dónde está la última estrella! Está en este lugar, pero no lo reconozco. Solo sé que se encuentra en la Cordillera Oriental del sur de Perú.';

                this.sendWithImg(message, output + " " + lateMessage, ["./assets/cuartaEstrella.jpeg", "./assets/machupichu.png"], "");
                break;

            case 'machu pichu':
                output = '¡Casi! Pero no se escribe así...';
                this.send(message, output);
                break;

            // Escape final
            case 'machu picchu':
                output = "¡Perfecto! ¡Sí que lo es! Detrás del Machu Picchu se encontraba épsilon… ¡Lo has conseguido! ¡Has reunido todas las estrellas de la Cruz del Sur!";
                lateMessage = '¡Enhorabuena! ¡Has salvado la Navidad! La cruz del sur ya está completa y la Navidad podrá llegar a Australia y… \n\n¡a nuestras casas! \n\n**¡Feliz Navidad!\n:christmas_tree::snowflake:**';
                this.sendWithImg(message, output, ["./assets/quintaEstrella.jpeg"], lateMessage).then(() => {
                    directMessagesRecording.winner(message.author.toString(), client);
                });
                break;

            // Default
            default:
                output = "¡Hola " + message.author.toString() + "! Lo que me dices no forma parte de ningún juego... ¡Felices fiestas! :tada:";
                this.send(message, output);
                break;

        }

    }


    sendWithImg(message, output, path, lateMessage) {
        return new Promise((resolve, reject) => {

            message.author.send(output, { files: path }).then(() => {
                this.send(message, lateMessage);
            }).catch(console.error);

            resolve();
        });
    }

    send(message, output) {
        return new Promise((resolve, reject) => {
            message.author.send(output).catch(console.error);
            resolve();
        });
    }
}

module.exports = XmasMessager;