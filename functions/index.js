const functions = require('firebase-functions');
const express = require('express');
const FBAuth = require('./utils/fbAuth');

const app = express();

const { signup } = require('./handlers/users');
const {helloWorld } = require('./handlers/helloWorld')

//user routes
app.post('/signup', signup);
app.post('/helloWorld', helloWorld);

exports.api = functions.https.onRequest(app);
