const router = require('express').Router()

//! const express = require('express')
//! const router = express.Router()

const userServices = require('./users.services');

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)

router.get('/users/:id', userServices.getUserById)

module.exports = router