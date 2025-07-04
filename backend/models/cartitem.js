const mongoose = require('mongoose');

const cartitemSchema = new mongoose.Schema({
    cart_item_id: {
        type: Number,
        unique: true
    },
    cart_id: {
        type: Number,
        unique: true
    },
    product_id: {
        type: Number,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('cartitems', cartitemSchema);