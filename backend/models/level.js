const mongoose = require('mongoose');
const User = require('./user');

const LevelSchema = new mongoose.Schema({
    level_id : {
        type: Number,
        unique: true
    },
    levelname: {
        type: String,
        unique: true
    },
    levelDescription: {
        type: String,
    },
    isActive: {
        type: Boolean
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

LevelSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'Level' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.level_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('Level', LevelSchema);