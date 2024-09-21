const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var query = require("samp-query");

let prefix = config.prefix;

client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'foro') {
    let icono = message.guild.iconURL({size : 2048, dynamic: true});
    
    const embed = new Discord.MessageEmbed()
      .setTitle("Click para ingresar al Foro de Ciudad Latina")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor(0x00AE86)
      .setDescription("**Deseas conocer más sobre el servidor?** (Reportes, Comunicados, Guías, Solicitudes) **Haz click en el título** para que puedas conocer todo lo que el foro tiene para ti.")
      .setFooter("Ciudad Latina RP")
      .setThumbnail(`${icono}`)
      .setTimestamp()
      .setURL("https://cl-rp.com/foro");

    message.channel.send({embed: embed});
  }

  if (command === 'ip') {
    const emoji = "<:greenpoint:1285835319459053568>";

    const embed = new Discord.MessageEmbed()
      .setColor('#29f47f')
      .setDescription(`\n\n${emoji}  **IP del servidor:**\n\`\`\`diff\n+ samp.cl-rp.com:7777\n+ 51.79.85.248:7777\`\`\``)
      .setFooter('Ciudad Latina RP')
      .setTimestamp();

    message.channel.send({ embed: embed });
  }

  if(command === 'pornoRonald') {
    const embed = new Discord.MessageEmbed();
    message.channel.send("Se culea a Ronald y se va *");
    message.channel.send("https://media.discordapp.net/attachments/836400775449411595/1272082274170568785/93d0c18b3c0378c031b2908550755b4b.png?ex=66b9ae70&is=66b85cf0&hm=2ea0bea6354f5d3e1152b90b78edaf303569f3311ddd95a64c826f9a3862bbe1&=&format=webp&quality=lossless&width=320&height=320");
  }

  if (message.content.startsWith(prefix + 'pornoronald')) {
    message.channel.send("Se culea a Ronald y se va *");
    message.channel.send("https://media.discordapp.net/attachments/836400775449411595/1272082274170568785/93d0c18b3c0378c031b2908550755b4b.png?ex=66b9ae70&is=66b85cf0&hm=2ea0bea6354f5d3e1152b90b78edaf303569f3311ddd95a64c826f9a3862bbe1&=&format=webp&quality=lossless&width=320&height=320");
  }

  /*
  if (message.content.startsWith(prefix + 'players')) {
    const options = {
      host: 'samp.cl-rp.com', 
      port: 7777 
    };

    query(options, (error, response) => {
      if (error) {
        return message.channel.send('No se pudo conectar al servidor. Verifica que el servidor está en línea.');
      }

      if (response.online === 0) {
        return message.channel.send('No hay jugadores conectados en este momento en Ciudad Latina Roleplay.');
      }

      const playerList = response.players.map(player => `**${player.name}** - Score: ${player.score}, Ping: ${player.ping}`).join('\n');

      const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Jugadores Conectados (${response.online}/${response.maxplayers})`)
        .setDescription(playerList)
        .setFooter('Ciudad Latina RP', message.author.displayAvatarURL())
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();

      message.channel.send({ embed: embed });
    });
  }

  if (message.content.startsWith(prefix + 'status')) {
    const options = {
      host: 'samp.cl-rp.com',
      port: 7777
    };
  
    query(options, (error, response) => {
      if (error) {
        return message.channel.send('No se pudo conectar al servidor. Verifica que el servidor está en línea.');
      }
  
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: message.author.username,
            icon_url: message.author.displayAvatarURL()
          },
          title: "Estado de Ciudad Latina RP",
          fields: [
            {
              name: "Dirección IP:",
              value: `${options.host}:${options.port}`
            },
            {
              name: "Jugadores Conectados:",
              value: `${response.online}/${response.maxplayers}`
            },
            {
              name: "Modo de Juego",
              value: response.gamemode
            }
          ],
          timestamp: new Date(),
          footer: {
            text: "Ciudad Latina RP"
          },
          thumbnail: {
            url: client.user.avatarURL()
          }
        }
      });
    });
  }
  */
});

client.login(config.token);
