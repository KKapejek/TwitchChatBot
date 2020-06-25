var BOT_USERNAME = USERNAME
var OAUTH_TOKEN = OAUTH
var CHANNELS = CHANNEL

// Define configuration options
const options = {
	connection: {
		reconnect: true
	},
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: CHANNELS.channels
};

module.exports = options;
