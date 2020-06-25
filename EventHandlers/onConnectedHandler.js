// Called every time the bot connects to Twitch channel
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

module.exports = onConnectedHandler;