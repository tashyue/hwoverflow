const { admin, db } = require('../utils/admin');

const config = require('../utils/config');

const firebase = require('firebase');
firebase.initializeApp(config);

const { validateSignupData } = require('../utils/validators');

exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    }

    const {valid, errors} = validateSignupData(newUser);
    
    const noImg = 'no-img.png'

    let token, userId;
    db.doc(`user/${newUser.handle}`)
    .get()
    .then((doc) => {
        if(doc.exists) {
            return res.status(400).json({
                handle: 'this handle is already taken'
            });
        }
        else {
            return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email,newUser.password);
        }
    })
    .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
    })
    .then((idToken) => {
        token = idToken;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${
                config.storageBucket
              }/o/${noImg}?alt=media`,
              userId
        };
        return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
        return res.status(201).json({token});
    })
    .catch((err) => {
        console.error(err);
    })
}