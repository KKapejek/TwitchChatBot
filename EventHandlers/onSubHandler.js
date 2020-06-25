const client = require("../client.js");

//called when someone subs
function onSubHandler(channel, username, method, message, userstate) {
  client.say(channel, `Thank you ${username} for subscribing!`);
}

module.exports = onSubHandler;