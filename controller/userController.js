const { User } = require('../models')

const createnewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, gender, city} = req.body;
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            gender,
            city
        })

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            message: "Users found successfully",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findbyemail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ where: { email }});
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            message: "User found successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { email } = req.params;
        const { firstName, lastName, city } = req.body;
        const updateuser = await User.update({ firstName, lastName, city }, { where: { email }});
        res.status(200).json({
            message: "User updated successfully",
            data: updateuser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteuser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.destroy({ where: { email }});
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        await User.destroy({ where: {email}});
        res.status(200).json({
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createnewUser,
    getAllUsers,
    findbyemail,
    updateUser,
    deleteuser
}