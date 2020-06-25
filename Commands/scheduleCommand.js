const scheduledMessageVariables = require("../Variables/scheduledMessageVariables");

function scheduleCommand(isBroadcaster, params) {
    if (isBroadcaster) {
        if (params != "") {
            if (!isNaN(params) && params > 0) {
                scheduledMessageVariables.scheduledMessageDelay = params;
                return `Schedule delay set to: ${params} mins.`;
            } else {
                return `Need to specify minutes.`;
            }
        } else {
            scheduledMessageVariables.scheduledMessageRepeat = !scheduledMessageVariables.scheduledMessageRepeat;
            return `Schedule repeat set to: ${scheduledMessageVariables.scheduledMessageRepeat}.`;
        }
    } else {
        return `Broadcaster only command.`;
    }
}

module.exports = scheduleCommand;