const mongoose = require("mongoose");
const Image = require("./models/Image");

mongoose.Promise = global.Promise;
const db = "mongodb://localhost/images";

mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false
});


Image.deleteMany({}, (err, item) => {
    console.log(`Removed: ${item}`);
});
