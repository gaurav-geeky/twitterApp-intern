// tweet route
const express = require('express');
const route = express.Router();
const tweetController = require('../controllers/tweetController');
const Auth = require('../config/auth');

route.post('/createtweet', Auth, tweetController.createTweet);
route.delete('/deletetweet/:id', Auth, tweetController.deleteTweet);
route.put('/liketweet/:id', Auth, tweetController.likeOrDislike);
route.get('/getalltweets/:id', Auth, tweetController.GetAllTweets); 

module.exports = route; 