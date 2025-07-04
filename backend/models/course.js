const mongoose = require('mongoose');
const User = require('./user');

const CourseSchema = new mongoose.Schema({
    course_id: {
        type: Number,
        unique: true
    },
    courseName: {
        type: String,
        unique: true,
        required: true
    },
    courseDescription: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    features: [
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

CourseSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'Courses' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.course_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.exports = mongoose.model('Courses', CourseSchema);