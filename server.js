import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const PORT = process.envPORT || 8080;

app.use(logger('dev'));
app.use(bodyParser.json());