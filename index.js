const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const moment = require('moment');

const discordClient = new Client({
  checkUpdate: false,
});
const token = process.env.DISCORD_TOKEN;
console.log('Process Started');
console.log('-------------------------------');

discordClient.on('messageCreate', async (message) => {
  if (
    message.content === 'summon the legion!!' &&
    message.author.id === discordClient.user.id
  ) {
    message.delete();
    console.log('Magic Word Detected! Farming Begins');
    console.log('-------------------------------');
    console.log('First Message Will Send In 5seconds!');
    console.log('-------------------------------');

    logEventStart = () => {
      setTimeout(() => {
        message.channel
          .send('.')
          .then((msg) => {
            msg.delete(100);
          })
          .catch(console.error);
        console.log(
          ` [${moment().format(
            'DD MMMM YYYY, hh:mm:ss'
          )}] First Message Sent Successfully`
        );
      }, 5000);
    };

    logEventStart(0);

    //set message interval and text sent
    setInterval(() => {
      message.channel
        .send('.')
        .then((msg) => {
          msg.delete(100);
        })
        .catch(console.error);
      console.log(`[${moment().format('DD MMMM YYYY, hh:mm:ss')}] Sent!`);
    }, 10000); //set time interval here
  }
});

discordClient.login(token);
