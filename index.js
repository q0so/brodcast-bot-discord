const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const prefix = "-";
const http = require('http');

const requestHandler = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Ya Allah\n');
};

const server = http.createServer(requestHandler);

const port = 3000;

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong: ', err);
  }

  console.log(`Server is listening on port ${port}`);
});

client.on("ready", () => {
  console.log(` Netflix `)
  console.log(`Prefix : ${prefix}`)
  console.log(`Ya Allah`)
  client.user.setActivity({ type: "WATCHING", name: `Ya Allah` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'bc')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply('لاتملك صلاحية القيام بهذاالأمر')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] Mensagem com sucesso | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] O membro pode ter DM's desativado ou o Bot Caiu | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Com sucesso.`)
      message.channel.send(`:white_check_mark: | **تم الارسال لجميع الاعضاء**`).then(message.delete({ timeout: 15000 }));
    }
  }

})
 

keepAlive();
client.login(process.env.token);
