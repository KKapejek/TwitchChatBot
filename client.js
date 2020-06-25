const tmi = require("tmi.js");
const options = require("./Variables/options.js");
const client = new tmi.client(options);

module.exports = client;