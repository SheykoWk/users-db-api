const router = require("express").Router();

//! const express = require('express')
//! const router = express.Router()

const userServices = require("./users.services");

// router.get('/users', userServices.getAllUsers)
// router.post('/users', userServices.postNewUser)

router.route("/users")
  .get(userServices.getAllUsers)
  .post(userServices.postNewUser);

// router.get('/users/:id', userServices.getUserById)
// router.patch('/users/:id', userServices.patchUser)
// router.delete('/users/:id', userServices.deleteUser)

router.route("/users/:id")
  .get(userServices.getUserById)
  .patch(userServices.patchUser)
  .delete(userServices.deleteUser);

module.exports = router;
