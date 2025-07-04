const mongoose = require('mongoose');
const Decimal = mongoose.Schema.Types.Decimal128;
const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        unique: true
    },
    productname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type : Decimal,
        required: true,
    },
    category_id: {
        type: Number,
        required: true,
    },
    image_url: [
        {
            type: String,
            required: true,
            validate: [(val) => val.length > 0, 'At least one image is required.']
        }
    ],
    stock_quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);

// Auto-increment hook for category_id
// categorySchema.pre('save', async function(next) {
//     if (this.isNew) {
//         const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
//             { model: 'Category' },
//             { $inc: { sequence_value: 1 } },
//             { new: true, upsert: true }
//         );
//         this.category_id = sequenceDocument.sequence_value;
//     }
//     next();
// });