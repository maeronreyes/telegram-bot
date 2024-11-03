const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7435146748:AAFiQ70JfpOI0Nq2ENj3kfEE-xTxN4jxZeA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
    "keyboard": [
        ["Sample text"],
        ["Keyboard"], 
        ["I'm robot"],
        ["I'm robots"],
        ["I'm robot2"]
    ]
    }
    });

});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
const chatId = msg.chat.id;
var Hi = "hi";
var Vote = "voting";
var tt = msg.text;

if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
}

if (msg.text.toString().toLowerCase().indexOf(Vote) === 0) {
bot.sendMessage(msg.chat.id,"Let Start the voting");
}

if (msg.text.toString().toLowerCase()) {
bot.sendMessage(msg.chat.id,"Let Start the voting");
}
console.log(msg.text);
});