const mongoose = require('mongoose');
const user = require('./user')
const HomebannerSchema = new mongoose.Schema({
    banner_id: {
        type: Number,
        unique: true
    },
    title : {
        type: String,
        unique: true,
        required: true
    },
    description : {
        type: String
    },
    url: {
        type: String,
    },
    image: {
        type: String,
        required: true
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

HomebannerSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'HomeBanner' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.banner_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('HomeBanner', HomebannerSchema);