const mongoose = require('../database/connection');

const model = new mongoose.Schema({
    name: { type: String, required: true, trim: true, unique: true },
    url:  { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, trim: true, unique: true }
});

module.exports = mongoose.model('Movies', model);