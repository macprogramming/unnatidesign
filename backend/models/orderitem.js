const mongoose = require('mongoose');
const Decimal = mongoose.Schema.Types.Decimal128;
const orderitemSchema = new mongoose.Schema({
    order_item_id: {
        type: Number,
        unique: true
    },
    order_id: {
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
    },
    price: {
        type: Decimal,
        required: true
    }
});

module.exports = mongoose.model('orderitems', orderitemSchema)