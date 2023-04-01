const Posts = require('../models/posts.model')
const Users = require('../models/users.model')

const findAllPosts = async () => {
    const posts = await Posts.findAll({
        include: {
            model: Users
        }
    })
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

const createNewPost = async (postObj) => {
    const newPost = await Posts.create({
        title: postObj.title,
        content: postObj.content,
        category: postObj.category,
        userId: postObj.userId
    })
    return newPost
}

const updatePost = async (id, postObj) => {
    const selectedPost = await Posts.findOne({
        where: {
            id: id
        }
    })

    if(!selectedPost) return null

    const updatedPost = await selectedPost.update(postObj)
    return updatedPost
}

const deletePost = async (id) => {
    const post = await Posts.destroy({
        where: {
            id
        }
    })
    return post 
}


module.exports = {
    findAllPosts,
    findPostById,
    createNewPost,
    updatePost,
    deletePost
}