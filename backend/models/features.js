const mongoose = require('mongoose');
const User = require('./user');

const FeatureSchema = new mongoose.Schema({
    feature_id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
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

FeatureSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'Features' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.feature_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('Features', FeatureSchema);