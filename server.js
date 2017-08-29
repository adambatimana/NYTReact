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
var Article = require("./models/Article");

// ==================================
//            Express
// ==================================
let app = express();
let PORT = process.env.PORT || 9000;

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
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/saved", function(req,res) {
      Article.find({})
        .sort({"date": -1})
        .limit(5).exec(function(err,doc)
      {
        if (err)
        {
          console.log(err);
        }
        else {
          {
            res.send(doc);
          }
        }
      });
});

app.post("/api/saved", function(req,res) {
    console.log("BODY: " + req.body.location);

    Article.create({
      title: req.body.title,
      date: Date.now(),
      url: req.body.url
    }, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Saved Article");
      }
    });
});

// app.delete("/api/saved/:id, function(req,res) {
// });

// ==================================
//           PORT LISTENER
// ==================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
