global.config = require("./config.json")
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: config.TOKEN, //Discord Bot Token
prefix: "C!", //Discord Bot Prefix
intents: "all" //Discord Intents
})
bot.onMessage()
