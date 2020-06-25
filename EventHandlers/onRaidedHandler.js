const client = require("../client.js");
const requestHandler = require("../RequestHandlers/requestHandler.js");

//called when someone raids
async function onRaidedHandler(channel, username, viewers) {
  var payload = {
    username: username
  };
  var answer = await requestHandler("twitch", "users", payload)

  if(answer.status == 200){
    var payload = {
      'room-id': answer.data.users[0]['_id']
    }
    var answer = await requestHandler("twitch", "channelbByID", payload)

    if (answer.status == 200){
      client.say(channel, `Alert, ${viewers} ${username} spies are in our base! They were last playing ${answer.data.game}`);
    }
  }
}

module.exports = onRaidedHandler;