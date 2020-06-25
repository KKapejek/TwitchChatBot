const client = require("../client.js");
const commandHandler = require("../Commands/commandHandler.js");

var incrementalValue = 0;

//called when someone posts a message
function onMessageHandler(channel, user, message, self) {
  let params = message.slice(1).split(" ");
  var command = params[0].toLowerCase();

  if (self || message[0] != "!") {
    return;
  }

  commandHandler(user, params).then(response => {
    if (response) {
      client.say(channel, response);
    }
  }).catch(error => {
    console.log(error);
  });

  if (command === "death") {
      incrementalValue += 1;
      client.say(channel, `WesternSpy has died ${incrementalValue} times`);
  }

  if (command === "deaths"){
    client.say(channel, `WesternSpy has died ${incrementalValue} times`);
  }
}

module.exports = onMessageHandler;