const functions = require('firebase-functions');
const express = require('express');
const FBAuth = require('./utils/fbAuth');

const app = express();

const { 
    signup, 
    login, 
    uploadImage,
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users');


//user routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image',FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser)


exports.api = functions.https.onRequest(app);
