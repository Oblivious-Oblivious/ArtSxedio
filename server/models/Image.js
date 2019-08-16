const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    src: String,
    caption: String,
    thumb: String
});

module.exports = mongoose.model("Image", imageSchema, "Images");
