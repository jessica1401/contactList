const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const AllContacts = mongoose.model('AllContacts', contactSchema);

module.exports = AllContacts;