const postControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad Request', err})
        })
}

const getPostById = (req, res) => {
    const id = Number(req.params.id)
    postControllers.findPostById(id)
        .then(data => {
            if(!data) return res.status(404).json({message: 'Invalid ID'})

            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad Request', err})
        })
}

const postNewPost = (req, res) => {
    const postObj = req.body 
    postControllers.createNewPost(postObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad Request', err})
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body 

    postControllers.updatePost(id, postObj)
        .then(data => {
            if(!data) return res.status(404).json({message: 'Invalid ID'})

            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad Request', err})
        })
}

const deletePost = (req, res) => {
    const id = req.params.id 

    postControllers.deletePost(id)
        .then(data => {
            if(!data) return res.status(404).json({message: 'Invalid Id'})

            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: 'Bad Request', err})
        })
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    patchPost,
    deletePost
}
