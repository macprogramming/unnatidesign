const mongoose = require('mongoose');
const Decimal = mongoose.Schema.Types.Decimal128

const reviewSchema = new mongoose.Schema({
    review_id: {
        type: Number,
        unique: true
    },
    product_id: {
        type:  Number,
        unique: true
    },
    user_id: {
        type: Number,
        unique: true
    },
    rating: {
        type: Decimal
    },
    comments: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

reviewSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'reviews' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.review_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.export = mongoose.model('reviews', reviewSchema);