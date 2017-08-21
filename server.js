// ==================================
//            DEPENDANCIES
// ==================================
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");

// ==================================
//            Require SCHEMA
// ==================================

// ==================================
//            Express
// ==================================
let app = express();
let PORT = process.env.PORT || 8000;

// ==================================
//            MORGAN
// ==================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// ==================================
//            MONGODB CONFIG
// ==================================
mongoose.connect("mongodb://localhost/nytreact");
let db = mongoose.connection;

db.on("error", function(err) {
      console.log("Mongoose Error: " + err);
});

db.once("open", function () {
      console.log("MONGOOSE CONNECTION SUCCESS!");
});

// ==================================
//            ROUTES
// ==================================

//REACT
app.get("*", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/saved", function(req,res) {
});

app.post("/api/saved", function(req,res) {
});

app.delete("/api/saved", function(req,res) {
});

// ==================================
//           PORT LISTENER
// ==================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
