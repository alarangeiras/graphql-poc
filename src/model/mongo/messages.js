const mongoose = require('mongoose');

const Messages = mongoose.model('Messages', {
    message: String
});

module.exports = Messages;