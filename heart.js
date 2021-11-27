global.config = require("./config.json")
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: config.TOKEN, 
  prefix: config.PREFIX,
  intents: "all",
  database: {
    type : "custom",
    db : require('quick.db'), // dont modify unless you want a new db provider
    tables : ['main'], // add more if you want
    promisify : true
  } // delete this if you want json db and not sqlite db
})
bot.onMessage()


bot.variables({
  "prefix": "C!"
}, 'main')
