const express = require('express')
const app = express()
let port = 8080
app.listen(port)
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "+"//البرفكس هنا 
client.on('message', message => {
if(message.content.startsWith(prefix + "زاجل")){
if (message.attachments.size == 0){
if(message.guild) return message.channel.send(`خاص بس`)
var aaa = message.content.split(' ')
const aa = aaa[1]
if(!aa) return message.channel.send(`${prefix}زاجل ايدي الشخص السوال`)
const user = client.users.cache.get(aa)
if(!user) return 
const args = message.content.split(' ').slice(2).join(' ')
if(!args) return message.channel.send(`${prefix}زاجل ايدي الشخص السوال`)
var c = client.channels.cache.get('918173195780128858')//ايدي الروم الي بوصلها الزاجل
let embedd = new Discord.MessageEmbed()
.setTitle(`${user.username}`)
.setDescription(`> ${args}`)
.setTimestamp()
.setThumbnail(user.avatarURL({dynamic: true}))
.setColor('RANDOM')
.setFooter(user.tag, user.avatarURL({dynamic: true}))
c.send({content: `<@${user.id}>`, embed: embedd})
message.channel.send(`تم الارسال`)
} else {

if(message.guild) return
var aaa = message.content.split(' ')
const aa = aaa[1]
if(!aa) return message.channel.send(`${prefix}زاجل ايدي الشخص السوال`)
const user = client.users.cache.get(aa)
if(!user) return 
var c = client.channels.cache.get('918173195780128858')//ايدي الروم الي بوصلها الزاجل
let embedd = new Discord.MessageEmbed()
.setTitle(`${user.username}`)
.setImage(`${message.attachments.first().url}`)
.setTimestamp()
.setThumbnail(user.avatarURL({dynamic: true}))
.setColor('RANDOM')
.setFooter(user.tag, user.avatarURL({dynamic: true}))
c.send({content: `<@${user.id}>`, embed: embedd})
message.channel.send(`تم الارسال`)

}
}
})
client.login(process.env.token)