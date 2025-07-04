const mongoose = require('mongoose');

const workCategoriesSchema = new mongoose.Schema({
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
        max: 20,
        required: true
    },
    description: {
        type: String,
        min: 5,
        max: 50,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categoryType: [
        {
            type: Object,
            // required: true,
            // validate: [(val) => val.length > 0, 'At least one image is required.']
        }
    ],
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

workCategoriesSchema.pre('save', async function(next) {
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

module.exports = mongoose.model('workCategories', workCategoriesSchema);