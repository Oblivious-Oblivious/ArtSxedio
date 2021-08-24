const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Image = require("../models/Image");

mongoose.Promise = global.Promise;

const db = "mongodb://localhost/images";
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

router.get("/paintings", (req, res) => {
    Image.find({}).exec((err, images) => {
        if (err) console.log("Error retrieving images");
        else {
            res.json(images);
        }
    });
});

module.exports = router;
