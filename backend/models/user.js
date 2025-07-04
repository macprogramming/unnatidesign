const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);

// Pre-save hook to auto-increment user_id
// userSchema.pre('save', async function(next) {
//     if (this.isNew) {
//         const sequenceDocument = await AutoIncrement.findOneAndUpdate(
//             { model: 'User ' },
//             { $inc: { sequence_value: 1 } },
//             { new: true, upsert: true }
//         );
//         this.user_id = sequenceDocument.sequence_value;
//     }
//     next();
// });