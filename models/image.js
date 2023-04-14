const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Images', ImageSchema);