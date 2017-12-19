const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan") // for logs

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false,
})); // For parsing the request the body
app.use(bodyParser.json());
app.use(morgan('combined'))

app.post("/Welcome", (req, res) => {
    console.log(req); // to access request body
    res.send('<h3>Hello ' + req.body.name + '!</h3>');
});

// app.get("/", (req, res) =>res.sendStatus(404);)
app.get("/login", (req, res) => {
    console.log(req.query);
    res.send('<h3>Hello! ' + req.query.name + '</h1>');
});

app.listen(8080, () => console.log('Server started!'));

//  EJS Jade/Purge Nunchuks templating languages for node