const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URL;

module.exports = () => {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
}