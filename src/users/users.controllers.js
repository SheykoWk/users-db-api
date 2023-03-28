const userDb = [
    {
        id: 1,
        name: 'Sahid',
        email: "sahid.kick@academlo.com",
        password: 'root'
    },
    {
        id:2,
        name: 'Alejandro Aguilar',
        email: "alejandro@gmail.com",
        password: 'root'
    }
]

let userId = 3

const findAllUsers = async () => {
    return userDb
}

const findUserById = async (id) => {
    const data = userDb.find(user => user.id === id)
    return data
}

const createUser = async (userObj) => {
    const newUser = {
        id: userId++,
        name: userObj.name || 'Anonymous',
        email: userObj.email || 'example@example.com',
        password: userObj.password || 'root'
    }
    userDb.push(newUser)
    return newUser
}


module.exports = {
    findAllUsers,
    findUserById,
    createUser,
}
