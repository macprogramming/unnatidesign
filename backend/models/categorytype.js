const mongoose = require('mongoose');
const User = require('./user');

const CategoryTypeSchema = new mongoose.Schema({
    auto_id: {
        type: Number,
        unique: true
    },
    user_id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        min: 5,
        max: 15,
        required: true
    },
    description: {
        type: String,
        min: 5,
        max: 50,
    },
    isActive: {
        type: Boolean,
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

CategoryTypeSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'workCategories' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.auto_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('CategoryType', CategoryTypeSchema);