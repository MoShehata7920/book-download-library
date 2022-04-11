const express = require('express');
const router = express.Router()
const userModel = require('./model/userModel')
const asyncHAndler = require('express-async-handler')
const generateToken = require('../utils/generateTokens')


router.route('/').post(asyncHAndler(async(req, res) => {

    const { name, email, password } = req.body;
    const isExist = await userModel.findOne({ email })
    if (isExist) {
        res.json({ messege: "user already Exists" })

    } else {
        const user = await userModel.create({ name, email, password })
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)

            })
        } else {
            res.json({ messege: "Error happened while Addin th User Please try again" })
        }
    }
}))

router.route('/login').post(asyncHAndler(async(req, res) => {

    const { email, password } = req.body;
    const isExist = await userModel.findOne({ email })
    if (isExist) {
        if (await isExist.matchPassword(password)) {
            res.json({
                _id: isExist._id,
                name: isExist.name,
                email: isExist.email,
                isAdmin: isExist.isAdmin,
                token: generateToken(isExist._id)
            })

        } else {
            res.json({ messege: "incorrect password" })
        }

    } else {
        res.json({ messege: `there is no account with email: ${email}` })
    }
}))


module.exports = router