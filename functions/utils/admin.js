const admin = require('firebase-admin');

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hwoverflow-app.firebaseio.com",
    storageBucket: "hwoverflow-app.appspot.com"
  });

const db = admin.firestore();

module.exports = { admin, db };