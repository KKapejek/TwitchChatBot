const requestHandler = require("../RequestHandlers/requestHandler.js");

async function gameCommand(user) {
  var answer = await requestHandler("twitch", "channelByID", user)
  if(answer.status == 200){
    var answer = answer.data.game;
    return answer;
  } else 
    return `${answer}. Call the Dev`;
}

module.exports = gameCommand;