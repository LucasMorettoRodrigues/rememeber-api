const User = require('../models/User')

const register = async (req, res) => {
    const user = await User.create(req.body)
    const token = user.createJWT()
    res.status(200).json({ user: {name: user.name}, token })
}

const login = async (req, res) => {
    const { name, password } = req.body

    if(!name || !password) {
        throw new Error('Provide user and password')
    }

    const user = await User.findOne({ name })

    if(!user) {
        throw new Error('User does not exist')
    }

    const isPasswordCorret = await user.comparePassword(password)

    if(!isPasswordCorret) {
        throw new Error ('Invalid Password')
    }

    const token = user.createJWT()

    res.status(200).json({ user: {name: user.name}, token })
}

module.exports = {
    register,
    login,
}