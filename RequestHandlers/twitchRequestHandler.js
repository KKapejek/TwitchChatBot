const axios = require("axios");
const headers = require("../Variables/headers.js");

async function twitchRequestHandler(call, payload) {
    var url = "";
    switch (call) {
        case "channelByID":
            url = `https://api.twitch.tv/kraken/channels/${payload['room-id']}?api_version=5`;
            break;

        case "usersFollows":
            url = `https://api.twitch.tv/helix/users/follows?from_id=${payload['user-id']}&to_id=${payload['room-id']}`;
            break;

        case "streams":
            url = `https://api.twitch.tv/helix/streams?user_id=${payload['room-id']}`;
            break;

        case "users":
            url = `https://api.twitch.tv/kraken/users?login=${payload['username']}&api_version=5`;
            break;

        default:
            console.log("Invalid call");
    }

    return axios.get(url, { headers: headers }).then(axiosResponse => {
        return axiosResponse;
    }).catch(function (error) {
        return error;
    });
}

module.exports = twitchRequestHandler;