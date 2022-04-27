import "dotenv/config";
import { Client, Intents } from "discord.js";

const discord = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});

discord.on("ready", () => {
  console.log(`* Logged in as ${discord.user.tag}`);
});

discord.on("messageCreate", async (message) => {
  console.log(message.content);
  if (message.content == ".ping") await message.reply("Pong!");
});

const TOKEN = process.env.TOKEN;
discord.login(TOKEN);
