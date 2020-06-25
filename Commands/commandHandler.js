const scheduleCommand = require("./scheduleCommand.js");
const shoutoutCommand = require("./shoutoutCommand.js");
const uptimeCommand = require("./uptimeCommand.js");
const titleCommand = require("./titleCommand.js");
const gameCommand = require("./gameCommand.js");
const followageCommand = require("./followageCommand.js");

async function commandHandler(user, params) {
    var command = params.shift().toLowerCase();
    var parameter = params.shift();
    var description = params.join(" ");

    var specialRoles = user.badges;
    var isMod = specialRoles.moderator;
    var isBroadcaster = specialRoles.broadcaster;
    var isModUp = isBroadcaster || isMod;

    switch (command) {
        case "schedule":
            return scheduleCommand(isBroadcaster, parameter);

        case "shoutout":
        case "so":
            return shoutoutCommand(isModUp, parameter);

        case "uptime":
            return uptimeCommand(user);

        case "title":
            return titleCommand(user);

        case "game":
            return gameCommand(user);

        case "followage":
            return followageCommand(user);

        case "about":
            return `I'm a bot made by Kapejek. If you have any ideas how to improve me, message my dev on Discord @ Kape#1379`;

        default:
            var customCommands = {
                "ping": "Pong",
                "discord": "Join my discord at https://discord.gg/MBcvZfA",
                "lurk": `ATTENTION, ${user["display-name"]} is lurking.`,
            };

            if (customCommands.hasOwnProperty(command))
                return customCommands[command];
    }
    return false;
}

module.exports = commandHandler;