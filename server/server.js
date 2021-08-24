const express = require("express");
const path = require("path");

const images = require("./routes/images");
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../views")));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use("/", images);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.listen(port, () => {
    console.log("Server running on localhost:" + port);
});
