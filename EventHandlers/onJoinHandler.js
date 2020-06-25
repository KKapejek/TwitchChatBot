const client = require("../client.js");
const scheduledMessageVariables = require("../Variables/scheduledMessageVariables");

var messageActive = false;
var messageCount = 0;

//called when someone joins
function onJoinHandler(channel, username, self){
  if (self && !messageActive) {
    messageActive = true;
    scheduledMessage(channel);
  }
}

function scheduledMessage(channel) {
  setTimeout(() => {
    if (scheduledMessageVariables.scheduledMessageRepeat) {
      client.say(
        channel,
        scheduledMessageVariables.scheduledMessages[messageCount++ % scheduledMessageVariables.scheduledMessages.length]
      )
    }
    scheduledMessage(channel);
  }, scheduledMessageVariables.scheduledMessageDelay * 60 * 1000);
}

module.exports = onJoinHandler;