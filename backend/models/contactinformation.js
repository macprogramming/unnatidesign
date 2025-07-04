const mongoose = require('mongoose');

const contactInformationSchema = new mongoose.Schema({
    auto_id: {
        type: Number,
        unique: true
    },
    shop_address: {
        type:  String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    telephone: {
        type: Number,
        unique: true,
    },
    primary_email: {
        type:  String,
        unique: true,
        required: true
    },
    secondary_email: {
        type:  String,
        unique: true,
    },
    working_hours: {
        type:  String,
        unique: true,
    },
    social_media: [
        {
            type: String,
            // required: true,
            // validate: [(val) => val.length > 0, 'At least one feature is required.']
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

contactInformationSchema.pre('save', async function(next) {
    if (this.isNew) {
        const sequenceDocument = await mongoose.model('AutoIncrement').findOneAndUpdate(
            { model: 'contactInformation' }, // Adjusted to match the model name
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.auto_id = sequenceDocument.sequence_value; // Set the banner_id
    }
    next();
});

module.export = mongoose.model('contactInformation', contactInformationSchema);