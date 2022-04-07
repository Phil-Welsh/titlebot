const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TitleSchema = new Schema({
    title: String,
    url: String
});

const Title = mongoose.model('Title', TitleSchema);

module.exports = Title;
