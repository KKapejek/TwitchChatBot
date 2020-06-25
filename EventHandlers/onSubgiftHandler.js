const client = require("../client.js");

//called when someone gifts a sub
function onSubgiftHandler(channel, username, streakMonths, recipient, methods, userstate) {
  client.say(channel, `Thank you ${username} for gifting a sub to ${recipient}!`);
}

module.exports = onSubgiftHandler;