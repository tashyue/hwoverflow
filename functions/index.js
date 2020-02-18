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

const {
    getQuestions,
    uploadQuestionImage,
    postQuestion
} = require('./handlers/questions');


//user routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image',FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser)

//question routes
app.get('/questions', getQuestions)
app.post('/questions/image', FBAuth, uploadQuestionImage);
app.post('/questions/ask', FBAuth, postQuestion);


exports.api = functions.https.onRequest(app);
