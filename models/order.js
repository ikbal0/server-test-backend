const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    ItemData: [{
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
        
    }],
    status: {
        type: String,
        required: true
    }, 
    total_order: { 
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Order', OrderSchema);