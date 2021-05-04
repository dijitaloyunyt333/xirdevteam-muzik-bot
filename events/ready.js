const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"dijitaloyunyt",
"TCFH",
"Her Daim!",
    "adamsısınız"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.roblox.com/games/6485916835/TCFH-T-RK-S-LAHLI-KUVVETLER?refPageId=7e5316ec-6bc8-49df-a029-cb3968e0bd30#!/store' })
}, 5000);
    console.log(`Asreaper başarıyla giriş yaptı.`);
}