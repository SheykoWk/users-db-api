const Posts = require('../models/posts.model')

const findAllPosts = async () => {
    const posts = await Posts.findAll()
    return posts
}

const findPostById = async (id) => {
    const post = await Posts.findOne({
        where: {
            id: id
        }
    })
    return post
}


module.exports = {
    findAllPosts,
    findPostById
}