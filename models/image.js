const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Images', ImageSchema);