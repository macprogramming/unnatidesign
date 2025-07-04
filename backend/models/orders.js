const mongoose = require('mongoose');
const Decimal = mongoose.Schema.Types.Decimal128;

const orderSchema = new mongoose.Schema({
    orde_id: {
        type: Number,
        unique: true
    },
    user_id: {
        type: String,
        unique: true
    },
    order_date: {
        type: Date,
        default: Date.now
    },
    status:{
        type: String
    },
    totalamout: {
        type: Decimal,
        required: true
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

module.exports = mongoose.model('orders', orderSchema);