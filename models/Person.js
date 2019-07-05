const groupSchema = require('../models/Group');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    gender: String,
    age: Number,
    homeAddress: String,
    occupation: String,
    hobbies: String,
    comments: String,
    country: String,
    profilePicture: String,
    groups: {
        type: Schema.Types.ObjectId,
        ref: 'GroupSchema'
    }

});

module.exports = mongoose.model('Person', personSchema);