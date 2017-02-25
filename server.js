import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const PORT = process.envPORT || 8080;
const db = mongoose.connection;
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
app.use(bodyParser,json({type: 'application/vnd.api+json'}));
app.use(express.static('./public'));

app.use(allowCrossDomain);

mongoose.connect('mongodb://localhost/');

db.on('error', (err) =>{
    console.log('Mongoose Error: ' + err );
});

db.once('open', () => {
    console.log('Mongoose connection successful');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// MONGOdb ROUTES HERE!!!!!

app.listen(PORT, () =>{
    console.log(`App listening on PORT: ${PORT}`);
});