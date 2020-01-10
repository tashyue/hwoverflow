const functions = require('firebase-functions');
const express = require('express');
const FBAuth = require('./utils/fbAuth');

const app = express();

const { signup, login } = require('./handlers/users');


//user routes
app.post('/signup', signup);
app.post('/login', login)


exports.api = functions.https.onRequest(app);
