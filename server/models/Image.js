const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    src: String,
    details: [String],
    title: String,
    size: String,
    price: Number,
    dimensions: String,
    type: String
});

module.exports = mongoose.model("Image", imageSchema, "Images");
