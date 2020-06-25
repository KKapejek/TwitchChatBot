const requestHandler = require("../RequestHandlers/requestHandler.js");

async function uptimeCommand(user) {
    var answer = await requestHandler("twitch", "streams", user)
    if (answer.status == 200) {
        try {
            var uptime = new Date(new Date() - Date.parse(answer.data.data[0].started_at));
            return `@${user['display-name']}, ${answer.data.data[0].user_name} has been live for: ${uptime.getUTCHours() ? uptime.getUTCHours() + " hours " : ""}${uptime.getUTCMinutes()} mins.`;
        } catch {
            return `Channel is offline.`;
        }
    } else
        return `${answer}. Call the Dev`;
}

module.exports = uptimeCommand;