const mongoose = require('mongoose');

const topicsCatrgorySchema = new mongoose.Schema({
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
        max: 25,
        required: true
    },
    description: {
        type: String,
        min: 5,
        max: 50,
        required: true
    },
    icon: {
        type: String,
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
})

topicsCatrgorySchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'topicsCatrgory' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.auto_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('topicsCatrgory', topicsCatrgorySchema);