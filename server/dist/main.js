"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// const api = require("./routes/api");
var port = 3000;
var app = express();
app.use(express.static(path.join(__dirname, "../views")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use("/", api);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});
app.listen(port, function () {
    console.log("Server running on localhost:" + port);
});
//# sourceMappingURL=main.js.map