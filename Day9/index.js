const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan") // for logs

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({})); // For parsing the request the body
app.use(bodyParser.json());
app.use(morgan, 'tiny')

app.POST("/", (req, res) => {
    console.log(req.body); // to access request body
});

// app.get("/", (req, res) =>res.sendStatus(404);)
app.get("/login", (req, res) => {
    console.log(req.query);
    res.send('<h3>Hello! ' + req.query.name + '</h1>');
});

app.listen(8080, () => console.log('Server started!'));

//  EJS Jade/Purge Nunchuks templating languages for node