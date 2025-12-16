const express = require('express');
const route = express.Router();
const userController = require('../controllers/UserControllers');
const Auth = require('../config/auth');


route.post('/register', userController.userRegister);
route.post('/login', userController.userLogin);
route.get('/logout', userController.userLogout);
route.put('/bookmark/:id', Auth, userController.userBookmark);
route.put('/profile/:id', Auth, userController.userP);

module.exports = route; 


