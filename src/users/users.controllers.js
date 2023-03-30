const Users = require('../models/users.model')

const findAllUsers = async () => {
    const users = await Users.findAll()
    return users
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const createUser = async (userObj) => {
    const newUser = await Users.create({
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password
    })
    return newUser
}


module.exports = {
    findAllUsers,
    findUserById,
    createUser,
}
