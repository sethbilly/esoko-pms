const PersonSchema = require('../models/Person');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const groupSchema = new mongoose.Schema({
    name: String,
    description: String,
    person: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema'
    }
});

module.exports = mongoose.model('Group', groupSchema);