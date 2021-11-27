global.config = require("./config.json")
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: config.TOKEN, 
  prefix: "C!", 
  intents: "all"
})
bot.onMessage()
