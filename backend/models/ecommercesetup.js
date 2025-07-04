const mongoose = require('mongoose');
const User = require('./user');

const ecommerceSetupSchema = new mongoose.Schema({
    auto_id: {
        type: Number,
        unique: true
    },
    title: {
        type:  Number,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    icon: {
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

ecommerceSetupSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'EcommerceSetup' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.auto_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('EcommerceSetup', ecommerceSetupSchema);