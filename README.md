# DiscordEmbedSender
**Discord.js v12系で作られています。気が向いたら書き換えます**
トークンをDISCORD_TOKEN.jsonに置いといてね♡
```json
{
    "アカウント名": "TOKEN HERE"
}
```
# 使い方
```bash
$ node main.js 設定ファイル名
```

# 設定ファイルの書き方
```js
// Embedを送るだけの例
module.exports = {
    config: {
        account: 'account',
        channel: 'channelId',
    },
    embed: {
        title: 'サーバールール',
        color: 0xbdbdbd,
        timestamp: new Date(),
        description: 
        '1. 常識の範囲を超えないこと\n' +
        '2. [Discord 利用規約](https://discord.com/terms), [Discord コミュニティ・ガイドライン](https://discord.com/guidelines)に違反しないこと\n' +
        '3. えっちすぎる話や画像をここで送らないこと\n' +
        '4. 仲良くしてくださいまし',
        footer: {
            text: 'Hiro',
            icon_url: 'https://cdn.discordapp.com/avatars/680343744423395329/e673554cafc4ac0ffa1d6e01ccfb3fcb.webp?size=128',
        },
    },
}
```
```js
// ボタンなどを必要とする場合
module.exports = {
    config: {
        account: 'mrvn',
        channel: '752093558789505134',
    },
    execute: async (client, channel) => {
        const { MessageButton, MessageActionRow } = require('discord-buttons');
        const ruleButton = new MessageButton()
        .setStyle('url')
        .setURL('https://discord.com/channels/751692700113305612/752093558789505134/869855853413543976')
        .setLabel('ルールの最初へ');
        const confirmButton = new MessageButton()
        .setLabel('ルールに同意します')
        .setStyle('green')
        .setEmoji('851416424706211860')
        .setID('CONFIRM_RULE');
        const actionRow = new MessageActionRow()
        .addComponents([ ruleButton, confirmButton ]);
        await channel.send('', { 
            embed: {
                title: '<:rank_predator:844950262337896478>あぺもば！ サーバールール<:rank_master:844950261953069097>',
                color: 0xb30000,
                timestamp: new Date(),
                description: 
                '**あぺもば！ へようこそ！**\n' +
                'まずはここでルールを確認してください！\n' +
                '-----------------------------------------------------',
                fields: [
                    {
                        name: '最終更新',
                        value: 
                        '2021/07/28 <@680343744423395329>\n' +
                        '-----------------------------------------------------'
                    },
                    {
                        name: 'FOR NON-JAPANESE-SPEAKERS',
                        value: 
                        '**THIS IS A COMMUNITY FOR JAPANESE APEX LEGENDS MOBILE PLAYERS. WE DO NOT SUPPORT ANY OTHER LANGUEGES EXCEPT JAPANESE.**\n' +
                        '-----------------------------------------------------'
                    },
                    {
                        name: '1. 禁止事項',
                        value: 
                        'A. **他のユーザーへの迷惑行為(暴言、無意味なメンション、スパム行為)**\n' +
                        'B. **以下の条件のいずれかに当てはまるコンテンツを他メンバーの目に触れる可能性がある箇所に使用すること**\n' +
                        '   B-1. **宗教的・政治的なものや差別的なコンテンツ**\n' +
                        '   B-2. **R-18に相当すると判断されるコンテンツ**\n' +
                        'C. **他人になりすます行為や故意の紛らわしいユーザー名、ニックネームやアイコン**\n' +
                        'D. **[Discord サービス利用規約](https://discordapp.com/terms), [Discordコミュニティガイドライン](https://discord.com/guidelines)に違反する行為**\n' +
                        'E. **その他運営チームが不適切であると判断したコンテンツや行為**\n' +
                        '-----------------------------------------------------'
                    },
                    {
                        name: '2. 処罰について',
                        value: 
                        'A. **上記の禁止事項に反する行動などが確認された場合、以下の処罰が加えられます。**\n' +
                        '   A-1. __**警告**__\n' +
                        '   A-2. __**キック**__\n' +
                        '   A-3. __**BAN**__\n' +
                        'B. **ただし、特例としてスパム行為などを含む被害の大きいものは即刻BANするものとします。**\n' +
                        'C. **処罰内容に不服がある場合は**<@680343744423395329>**までDMで異議申し立てをすることができるものとします。これは処罰が必ず解除されることを意味しているわけではありません。**\n' +
                        '-----------------------------------------------------'
                    },
                    {
                        name: '3. サーバールールについて',
                        value: 
                        'A. **当サーバー運営チームは予告なくこのルールの一部、またはすべてを改変することができるものとします。**\n' +
                        'B. **ルール改変時は必ず全メンバーに告知するとともに、告知した時から有効とします。**\n' +
                        '-----------------------------------------------------'
                    },
                    {
                        name: '認証',
                        value: '上記の内容を理解し、同意する場合は下のチェックマークのボタンをクリックしてください。'
                    },
                ]
            },
            component: actionRow,
        });
    }
}
```
# アカウントの併用について
設定ファイル内のconfig.accountでアカウント名を指定してください。
DISCORD_TOKEN.json内で指定している名前と完全に一致する必要があります。