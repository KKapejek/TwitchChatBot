const client = require("../client.js");

//called when someone resubs
function onResubHandler(channel, username, months, message, userstate, methods) {
    client.say(channel, `Thank you ${username} for resubscribing for ${userstate['msg-param-cumulative-months']} months!`);
}

module.exports = onResubHandler;