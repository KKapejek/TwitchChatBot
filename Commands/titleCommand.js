const requestHandler = require("../RequestHandlers/requestHandler.js");

async function titleCommand(user) {
  var answer = await requestHandler("twitch", "channelByID", user)
  if (answer.status == 200) {
    var answer = answer.data.status;
    return answer;
  } else
    return `${answer}. Call the Dev`;
}

module.exports = titleCommand;