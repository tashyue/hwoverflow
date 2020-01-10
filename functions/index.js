const functions = require('firebase-functions');
const express = require('express');
const FBAuth = require('./utils/fbAuth');

const app = express();

const { signup } = require('./handlers/users');


//user routes
app.post('/signup', signup);


exports.api = functions.https.onRequest(app);
