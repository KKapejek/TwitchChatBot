const client = require("./client.js");
const axios = require("axios");
const headers = require("./Variables/headers.js");

const clientsecret = SECRET;

//event handlers
const onSubHandler = require("./EventHandlers/onSubHandler.js");
const onResubHandler = require("./EventHandlers/onResubHandler.js");
const onSubgiftHandler = require("./EventHandlers/onSubgiftHandler.js");
const onCheerHandler = require("./EventHandlers/onCheerHandler.js");
const onRaidedHandler = require("./EventHandlers/onRaidedHandler.js");
const onMessageHandler = require("./EventHandlers/onMessageHandler.js");
const onConnectedHandler = require("./EventHandlers/onConnectedHandler.js");
const onJoinHandler = require("./EventHandlers/onJoinHandler.js");

client.on("subscription", onSubHandler);
client.on("resub", onResubHandler);
client.on("subgift", onSubgiftHandler);
client.on("cheer", onCheerHandler);
client.on("raided", onRaidedHandler);
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.on("join", onJoinHandler);

//get api token
axios.post(`https://id.twitch.tv/oauth2/token?client_id=${haeders['Client-ID']}&client_secret=${clientsecret}&grant_type=client_credentials`)
  .then(axiosResponse => {
    var token = axiosResponse.data.access_token;
    headers.Authorization = `Bearer ${token}`;
  })
  .catch(error => {
    console.log(error);
  })

// Connect to Twitch:
client.connect();