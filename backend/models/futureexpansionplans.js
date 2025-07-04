const mongoose = require('mongoose');

const futureExpansionPlansSchema = new mongoose.Schema({
    auto_id: {
        type: Number,
        unique: true
    },
    futureExpansion: [
        {
            type: String,
            required: true,
            validate: [(val) => val.length > 0, 'At least one feature is required.']
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

futureExpansionPlansSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'futureExpansionPlans' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.auto_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.export = mongoose.model('futureExpansionPlans', futureExpansionPlansSchema);
