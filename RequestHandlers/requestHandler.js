const twitchRequestHandler = require("./twitchRequestHandler.js");

async function requestHandler(api, call, payload){
    switch(api){
        case "twitch":
            answer = await twitchRequestHandler(call, payload);
            break;
    }

    return answer;
}

module.exports = requestHandler;