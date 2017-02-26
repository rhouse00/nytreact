const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const app = express();
const PORT = process.env.PORT || 8080;

const Article = require('./models/article');

const db = mongoose.connection;
mongoose.Promise = Promise;
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('./public'));

app.use(allowCrossDomain);

// development
// mongoose.connect('mongodb://localhost/nyt');
// production
mongoose.connect("mongodb://heroku_4jcgb9s3:21gqph78dr3kh740l3tn6je7lm@ds161169.mlab.com:61169/heroku_4jcgb9s3");
db.on('error', (err) =>{
    console.log('Mongoose Error: ' + err );
});

db.once('open', () => {
    console.log('Mongoose connection successful');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/api', (req, res) => {
    Article.find({}).exec( (err, doc) => {
        err ? console.log(err) : res.json(doc);
    });
});

app.post('/api', (req, res) => {
    let title = req.body.title;
    let link = req.body.link
    Article.findOneAndUpdate(
        {title: title},
        { $set: {link: link} }, 
        { upsert: true }
    ).exec( (err) =>{
        err ? console.log(err) : console.log('You saved an article!');
    });
});

app.delete('/api/:title', (req, res) => {
    Article.remove({title: req.params.title}).exec( (err) =>{
        err ? console.log(err) : console.log('You deleted an article!');
    });
});

app.listen(PORT, () =>{
    console.log(`App listening on PORT: ${PORT}`);
});