const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const { userSignup, userLogin} = require('./src/users')

const app = express()
app.use(cors())
app.use(express.json())

// routes here...
app.post('/signup', userSignup)
app.post('/login', userLogin)

exports.app = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
