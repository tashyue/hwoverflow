const config = require('../utils/config');

const firebase = require('firebase');

const firebaseInit = firebase.initializeApp(config);
module.exports(firebaseInit)