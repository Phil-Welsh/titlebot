const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TitleSchema = new Schema({
    favicon: String,
    title: String,
});

const Title = mongoose.model('Title', TitleSchema);

module.exports = Title;
