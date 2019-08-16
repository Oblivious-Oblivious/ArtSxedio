import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");

// const api = require("./routes/api");
const port: number = 3000;

const app: express.Application = express();

app.use(express.static(path.join(__dirname, "../views")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.use("/", api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.listen(port, () => {
    console.log("Server running on localhost:" + port)
});