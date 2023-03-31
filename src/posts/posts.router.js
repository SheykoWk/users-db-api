const router = require('express').Router()

const postServices = require('./posts.services')

router.route("/posts")
    .get(postServices.getAllPosts)
    .post(postServices.postNewPost)

router.route("/posts/:id")
    .get(postServices.getPostById)
    .patch(postServices.patchPost)
    .delete(postServices.deletePost)

module.exports = router
