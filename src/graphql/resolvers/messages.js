const MessagesModel = require('../../model/mongo/messages');
module.exports = {
    messages: () => {
        return MessagesModel.find({});
    },
    addMessage: async (input) => {
        const messageObject = new MessagesModel({
            message: input.message
        });

        await messageObject.save();

        return {
            id: messageObject._id,
            message: messageObject.message
        };
    }
}