const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan") // for logs
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const asset = require('assert')
const corse = require('cors')

const app = express();
const url = 'mongodb://localhost:27017/';
const database = 'students';
let db;

app.use(corse);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false,
})); // For parsing the request the body
app.use(bodyParser.json());
// app.use(morgan('combined'))


MongoClient.connect(url, (err, client) => {
    console.log(err);
    db = client.db(database);
});


app.get("/Welcome", (req, res) => {
    console.log(req); // to access request body
    db.collection('students').find().toArray((err, docs) => {
        console.log(err, docs);
        res.json(docs);
    });

    // res.send('<h3>Hello ' + req.body.name + '!</h3>');
});

// app.get("/", (req, res) =>res.sendStatus(404);)
/* app.get("/login", (req, res) => {
    console.log(req.query);
    res.send('<h3>Hello! ' + req.query.name + '</h1>');
}); */

app.listen(8080, () => console.log('Server started!'));
// Port 80 for http and 443 for https, 8080 for dev


//  EJS Jade/Purge Nunchuks templating languages for node