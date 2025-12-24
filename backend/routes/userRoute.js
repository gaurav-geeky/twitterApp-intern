// user route. 

const express = require('express');
const route = express.Router();
const userController = require('../controllers/UserControllers');
const Auth = require('../config/auth'); 

route.post('/register', userController.userRegister);
route.post('/login', userController.userLogin);
route.get('/logout', userController.userLogout);
route.put('/bookmark/:id', Auth, userController.userBookmark);
route.get('/profile/:id', Auth, userController.userProfile);
route.get('/otheruser/:id', Auth, userController.otherUser);
route.post('/follow/:id', userController.Follow); 
route.post('/unfollow/:id', userController.Unfollow); 

module.exports = route; 


