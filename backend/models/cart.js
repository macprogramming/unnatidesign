const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cart_id: {
        type: Number,
        unique: ture
    },
    user_id: {
        type: Number,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cart', cartSchema);