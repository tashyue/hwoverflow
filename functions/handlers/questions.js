const { db, admin } = require('../utils/admin');

const config = require('../utils/config');
const firebase = require('firebase');

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

  exports.getQuestions = (req, res) => {
    db.collection('questions')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
        let questions = [];
        data.forEach((doc) => {
            questions.push({
                questionId: doc.id,
                body: doc.data().body,
                userHandle: doc.data().userHandle,
                createdAt: doc.data().createdAt,
                questionImage: doc.data().questionImage,
                questionVideo: doc.data().questionVideo,
                userImage: doc.data().userImage
            });
        });
        return res.json(questions);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({error: err.code});
    })
}

exports.postQuestion = (req, res) => {
  if (req.body.body.trim() === '') {
    return res.status(400).json({ body: 'Body must not be empty' });
  }
  
  const newQuestion = {
    body: req.body.body,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    createdAt: new Date().toISOString(),
    questionImage: this.uploadQuestionImage
  };
  
  db.collection('questions')
    .add(newQuestion)
    .then((doc) => {
      const resQuestion = newQuestion;
      resQuestion.questionId = doc.id;
      res.json(resQuestion);
    })
    .catch((err) => {
      res.status(500).json({ error: 'something went wrong' });
      console.error(err);
    });
  };


   
//fix post questions

exports.uploadQuestionImage = (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy({ headers: req.headers });
  
    let imageToBeUploaded = {};
    let imageFileName;
  
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log(fieldname, file, filename, encoding, mimetype);
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
          return res.status(400).json({ error: 'Wrong file type submitted' });
        }
        // my.image.png => ['my', 'image', 'png']
        const imageExtension = filename.split('.')[filename.split('.').length - 1];
        // 32756238461724837.png
        imageFileName = `${Math.round(
          Math.random() * 1000000000000
        ).toString()}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFileName);
        imageToBeUploaded = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });
      busboy.on('finish', () => {
        admin
          .storage()
          .bucket()
          .upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
              metadata: {
                contentType: imageToBeUploaded.mimetype
              }
            }
          })
          .then(() => {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
              config.storageBucket
            }/questionImages/${imageFileName}?alt=media`;
            return db.doc(`/questions/${req.questions.questionId}`).update({ imageUrl });
          })
          .then(() => {
            return res.json({ message: 'image uploaded successfully' });
          })
          .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: 'something went wrong' });
          });
      });
      busboy.end(req.rawBody);
    }

  
