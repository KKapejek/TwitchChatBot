const client = require("../client.js");

//called when someone cheers
function onCheerHandler(channel, userstate, message) {
  client.say(channel, `Thank you ${userstate['display-name']} for cheering ${userstate.bits} bits to the channel.`);
}

module.exports = onCheerHandler;