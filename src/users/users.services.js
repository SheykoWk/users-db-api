const userControllers = require('./users.controllers')
//! const { findAllUsers, findUserById, createUser, updateUser } = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getUserById = (req, res) => {
    const id = Number(req.params.id)
    userControllers.findUserById(id)
        .then(data => {
            //? En caso de que data no exista (el usuario no exista)
            if(!data){
                return res.status(404).json({message: `User with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    userControllers.createUser(userObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}
