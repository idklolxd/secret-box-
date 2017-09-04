const Discord = require('discord.js');
const client = new Discord.Client();
const ud = require('urban-dictionary');
const bing = require('nodejs-bing');
const prefix = ""
const ms = require('ms');
client.on('ready', () => {
  console.log("I am on this many servers.." + client.guilds.size);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)
  console.log(command);

  let args = message.content.split(" ").slice(1);


  if (command === "say") {
      message.channel.sendMessage(args.join(" "));
  }

  if (command === "urban") {
    let definition = args.join(' ');
    message.channel.sendMessage("Looking... :mag:");
    
   ud.term(definition, function (error, entries, tags, sounds) {
     if (error) {
       console.error(error.message)
       message.channel.sendMessage(error.message);
     } else {
       message.channel.sendMessage("**" + entries[0].word + "**")
       message.channel.sendMessage(entries[0].definition)
       message.channel.sendMessage(entries[0].example)
     }
   })
  }

  if (command === "announce") {
      if (message.member.hasPermission("ADMINISTRATOR")) {
       let args = message.content.split(" ").slice(1).join(" ");
    let split = args.split("-");
    let url = args[2];
        message.channel.sendMessage("@everyone", {
          embed: {
            color: 0xFFFF00,
            author: {
              name: message.author.username,
              icon_url: message.author.avatarURL
            },
            title: ":information_source: Announcement",
            description: split[0],
            url: split[1],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: message.author.username
            }
          }
      });
    }
  }

  if (command === "setgame") {
    if (message.author.id == "195700732828188673") {
    var argresult = args.join(' ');
    if (!argresult) argresult = null;
    client.user.setGame(argresult);
    message.reply("It has been set..");
    } else {
      message.reply("DONT EVEN TRY IT BOI!");
    }
  }

  if (command === "setstatus") {
    if (message.author.id == "195700732828188673") {
    var argresult = args.join(' ');
    client.user.setStatus(argresult);
    message.reply("It has been set..");
    } else {
      message.reply("DONT EVEN TRY IT BOI!");
    }
  }



if (command === "cusannounce") {
      if (message.member.hasPermission("ADMINISTRATOR")) {
       let args = message.content.split(" ").slice(1).join(" ");
    let split = args.split("-");
    let url = args[2];
        message.channel.sendMessage("@everyone", {
          embed: {
            color: 0xFF0000,
            author: {
              name: message.author.username,
              icon_url: message.author.avatarURL
            },
            title: split[0],
            description: split[1],
            url: split[2],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: message.author.username
            }
          }
      });
    }
  }

  

  if (command === "ping") {
    message.channel.sendMessage("pong!")
  }

  if (command === "help" || command === "cmds" || command === "commands" ) {
    message.author.sendMessage("Announce - admin - Announces whatever you want it to say. Usage is... N!announce (your message)\n cusannounce - admin - Same as announcement, but the usage is.. N!cusannounce <title>-<description>-<URL(Optional)>\n 8ball - misc - Makes an inference of what you put after 8ball\n roll - misc - Chooses a random number\n ban - admin - Bans a user - Has to have  'mod-log' channel\n kick - admin - Kicks a user - Has to have  'mod-log' channel\n mute - admin - Has to have  'mod-log' channel \n ping - misc - tests the speed of the bot. \n say - misc - repeats after what you put after it.\n help - misc - Obvious..\n contact - misc - Ways you could contact me.\n invite - misc The bot's invite link. Usage... >invite\n lockdown - admin - Locks a specific channel, so people without roles cannot talk in the channel till the lockdown us lifted. Usage is... >lockdown <milliseconds> \n warn - admin - Wans a user. \n mydinfo - Tells **_YOUR_** info. Usage... >mydinfo \n crockblock - mutes someone - admin. Usage... N!crockblock \n urban **@user** - finds an urban dictionary definition - member. Usage... N!urban **WORD**");
    message.reply("Check your DMs.")
  }

  if (command === "contact") {
    message.reply("Contact me by owners' YouTube channel: http://youtube.com/jonjon419RBLX By the owners' discord: GreatlyMean#8507 Noobinator#8507 And Skype: jonjon419alt. I love that you love me. And I love your support. Thank you guys!");
  }

  if (command === "invite") {
    message.channel.sendMessage("Oh I am so glad you want to invite me to your server!  So invite me now! https://discordapp.com/oauth2/authorize?client_id=243226166469722114&scope=bot&permissions=104324171")
  }

  if (command === "kms") {
    message.channel.sendMessage(`:knife: I have successfully killed ${message.author}. :knife:`)
  }

  if (command === "stab") {
    let user = message.mentions.users.first();
    var randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    if (message.mentions.users.first().id !== "331830406355877890") {
    message.channel.sendMessage(`Took ` + randomNum + ` damage from ` + user +  `!`)
    } else {
        message.channel.sendMessage(`Ouch.`)
    }
  }

  if (command == "eval") {
    if (message.author.id !== "195700732828188673") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util")
        .inspect(evaled);
        message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  if (command === "8ball") {
   var ball = ['Yes','No doubt about it','Try again','signs point to yes','I say no','No chance','Dont think so'];
   message.channel.sendMessage(ball[Math.floor(Math.random () * ball.length)]);
  }

if (command === "roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
}

const Kaori = require('kaori');

if (command === "e621" || command === ("oh" || "Oh" || "OH") || command === ("shit" || "Shit" || "SHIT") || command === ("fuck" || "Fuck" || "FUCK") || command === "yes" || command ===  "you're" || command === "your" || command === "ur") {

  let searchTag = args.join(' ' || '');
  
 const moreSites = require('./moreSites');
  
 const kaori = new Kaori(moreSites);
  
 kaori.search('e621', { tags: [searchTag], limit: 1, random: true })
     .then(images => message.channel.sendMessage("", {
        file: images[0].common.fileURL
    }))
     .catch(err => message.channel.sendMessage(err), message.delete());
}

if (command === "danbooru") {
  
  
    let searchTag = args.join(' ');
    
   const moreSites = require('./moreSites');
    
   const kaori = new Kaori(moreSites);

    
   kaori.search('danbooru', { tags: [searchTag], limit: 1, random: true })
       .then(images => message.channel.sendMessage("", {
          file: images[0].common.fileURL
      }))
       .catch(err => message.channel.sendMessage(err), message.delete());
  }

  if (command === "konachan") {
    
      let searchTag = args.join(' ');
      
     const moreSites = require('./moreSites');
      
     const kaori = new Kaori(moreSites);
    
      
     kaori.search('konachan', { tags: [searchTag], limit: 1, random: true })
         .then(images => message.channel.sendMessage("", {
            file: images[0].common.fileURL
        }))
         .catch(err => message.channel.sendMessage(err));
    }

    if (command === "konachannet") {
      
      
        let searchTag = args.join(' ');
        
       const moreSites = require('./moreSites');
        
       const kaori = new Kaori(moreSites);
      
        
       kaori.search('konachannet', { tags: [searchTag], limit: 1, random: true })
           .then(images => message.channel.sendMessage("", {
              file: images[0].common.fileURL
          }))
           .catch(err => message.channel.sendMessage("" + err));

      }

      if (command === "yandere") {
        
        
          let searchTag = args.join(' ');
          
         const moreSites = require('./moreSites');
          
         const kaori = new Kaori(moreSites);
      
          
         kaori.search('yandere', { tags: [searchTag], limit: 1, random: true })
             .then(images => message.channel.sendMessage("", {
                file: images[0].common.fileURL
            }))
             .catch(err => message.channel.sendMessage(err));
        }

        if (command === "lolibooru" || command === "loli") {
          
          
            let searchTag = args.join(' ');
            
           const moreSites = require('./moreSites');
            
           const kaori = new Kaori(moreSites);
            
           kaori.search('lolibooru', { tags: [searchTag], limit: 1, random: true })
               .then(images => message.channel.sendMessage("", {
                  file: images[0].common.fileURL
              }))
               .catch(err => message.channel.sendMessage(err));
          }

          if (command === "r34" || command === "rule34") {
            
            
              let searchTag = args.join(' ');
              
             const moreSites = require('./moreSites');
              
             const kaori = new Kaori(moreSites);
              
             kaori.search('rule34', { tags: [searchTag], limit: 1, random: true })
                 .then(images => message.channel.sendMessage("", {
                    file: images[0].common.fileURL
                }))
                 .catch(err => message.channel.sendMessage(err));
            }
            
if (command === "mute") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('Action:', 'Un/Mute')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);


  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });


  }
  }
};

if (command === "warn") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  message.delete();
  const embed = new Discord.RichEmbed()
  .setColor(0x32CD32)
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);

  }
}

if (command === "ban") {
  if (message.member.hasPermission("BAN_MEMBERS")) {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
  message.guild.ban(user, 2);
  message.delete();

  const embed = new Discord.RichEmbed()
    .setColor(0xa50d0d)
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
  }
}

if (command === "crockblock") {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
    message.delete();
    if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
    if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
    message.channel.sendMessage(user, {
        file: "http://i.imgur.com/4eTiU9t.png" // Or replace with FileOptions object
    });
    message.channel.sendMessage("For: " + reason);

    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
    
    
      if (message.guild.member(user).roles.has(muteRole.id)) {
        message.guild.member(user).removeRole(muteRole).then(() => {
          client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });
      } else {
        message.guild.member(user).addRole(muteRole).then(() => {
          client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });
    }
}

if (command === "kick") {
  if (message.member.hasPermission("KICK_MEMBERS")) {
    let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
message.delete();
  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0xe5ac10)
    .addField('Action:', 'kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
  }
}

if (command === "lockdown") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
  }
}

if (command === "mydinfo") {

  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setDescription("This is **_YOUR_** info!")
  .setColor("0x008B8B")
  .addField("Username", `${message.author.username}#${message.author.discriminator}`)
  .addField("ID", message.author.id)
  .addField("Created on/at", message.author.createdAt)

  message.channel.sendEmbed(embed);

}
});

function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

            client.login("Mjg1MTQwODIxMTY5Mjc0ODgx.DI5JpQ.WjPxFBHx0GQyqzLdTEfBNr63wpQ");
            //
            //