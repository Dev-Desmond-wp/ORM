const express = require('express');

const { createnewUser, getAllUsers, findbyemail, updateUser, deleteuser } = require('../controller/userController.js')

const router = express.Router();

router.post('/newuser', createnewUser);

router.get('/getallusers', getAllUsers);

router.get('/findbyemail/:email', findbyemail);

router.put('/updateuser/:email', updateUser);

router.delete('/deleteuser/:email', deleteuser);

module.exports = router