const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.route('/users/')
    
    .get([
        userController.userid
    ])
    
module.exports = router;