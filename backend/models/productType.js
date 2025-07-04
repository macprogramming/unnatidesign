const mongoose = require('mongoose');
const User = require('./user');

const productsTypeSchema = new mongoose.Schema({
    productType_id: {
        type: Number,
        unique: true
    },
    productTypeName: {
        type: String,
        unique: true,
        required: true
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    timestamps: true
});

productsTypeSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'ProductTypes' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.productType_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('ProductTypes', productsTypeSchema);