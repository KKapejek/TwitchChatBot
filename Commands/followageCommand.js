const requestHandler = require("../RequestHandlers/requestHandler.js");

async function followageCommand(user) {
    var answer = await requestHandler("twitch", "usersFollows", user);
    if(answer.status == 200){
        try {
            var followAge = new Date(new Date() - Date.parse(answer.data.data[0].followed_at));
            return (
                `${user["display-name"]} has been following the channel for ` +
                `${followAge.getUTCFullYear() - 1970 ? followAge.getUTCFullYear() - 1970 + " years, " : ""}` +
                `${followAge.getUTCMonth() ? followAge.getUTCMonth() + " months, " : ""}` +
                `${followAge.getUTCDate() - 1 ? followAge.getUTCDate() - 1 + " days, " : ""}` +
                `${followAge.getUTCHours() ? followAge.getUTCHours() + " hours, " : ""}` +
                `${followAge.getUTCMinutes() ? followAge.getUTCMinutes() + " minutes." : ""}`
            );
        } catch (error) {
            return `${user["display-name"]} is not following the channel.`;
        }
    } else return `${answer}. Call the Dev`;
}

module.exports = followageCommand;