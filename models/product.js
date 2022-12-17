const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }, 
    price: { 
        type: Number,
        required: true
    },
    total: { 
        type: Number,
        required: true    
    },
    type: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cart', CartSchema);