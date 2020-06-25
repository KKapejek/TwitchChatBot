function shoutoutCommand(isModUp, params) {
    if (isModUp)
        if (params != "")
            return `Shoutouts to my friend ${params} at https://twitch.tv/${params} . Leave them a follow!`;
        else
            return `Shoutouts to my imaginary friend!`;
}

module.exports = shoutoutCommand;