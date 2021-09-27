const Discord = require('discord.js');
const configFile = require(process.argv[2]);
const DISCORD_TOKEN = require('./DISCORD_TOKEN.json')[configFile.config.account];
const client = new Discord.Client();
const disbut = require('discord-buttons');
disbut(client);

client.login(DISCORD_TOKEN).catch();

// イベントハンドラ
client.on('ready', async () => {
    console.log('準備完了');
    const channel = client.channels.cache.get(configFile.config.channel);
    console.log(`送信開始: ${process.argv[2]}`);
    if (configFile.execute) {
        await configFile.execute(client, channel);
    } else {
        if (configFile.config.ping) {
            await channel.send(`${configFile.config.ping === 'everyone' ? '@everyone' : `<@${configFile.config.ping}>`}`, { embed: configFile.embed, files: configFile.files ? configFile.files : null }).catch(console.log());
        } else {
            await channel.send({ embed: configFile.embed, files: configFile.files ? configFile.files : null }).catch(console.log());
        }
    }
    console.log('送信完了');
    process.exit();
})