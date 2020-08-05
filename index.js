const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const config = require("./config");
const client = new Client({
  disableEveryone: false,
  fetchAllMembers: true
});

client.login(config.token);

const { prefix, token } = config;

// Activity Function
function Activity() {
  return client.user.setActivity(`${prefix}help | Made by Derpy`, { type: "PLAYING" });
}

// Updates the bot's status when he online
client.on("ready", async () => {
  console.log(`Bot is Online!`);
  Activity();
});

// Updates the bot's status if he joins a server
client.on("guildCreate", guild => {
  Activity();
});

/// Updates the bot's status if he leaves a servers
client.on("guildDelete", guild => {
  Activity();
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let msg = message.content.toLowerCase() || message.content.toUpperCase();
  if (!msg.startsWith(prefix)) return;
  let args = message.content.slice(bot.prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
message.channel.send("Pong!"); // Normal Message
  }
  if (command === "hey") {
message.reply("Hello!"); // Reply Message
  }
  if (command === "help") {
message.author.send("your help commands"); // DM Message
  }
  if (command === "embed") {
let embed = new MessageEmbed()
.setTitle("Title")
.setDescription("Description");

message.author.send(embed); // Embed Message
  }
});
