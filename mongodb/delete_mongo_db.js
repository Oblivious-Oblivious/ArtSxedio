const mongoose = require("mongoose");
const Image = require("./Image");

mongoose.Promise = global.Promise;
const db = "mongodb://localhost/images";

mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false
});


Image.deleteMany({}, (err, item) => {
    console.log(`Removed: ${item}`);
});
