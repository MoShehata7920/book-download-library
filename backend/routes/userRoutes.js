const express = require('express');
const router = express.Router()
const userModel = require('./model/userModel')
const Book = require('./model/BookModel')
const asyncHAndler = require('express-async-handler')
const generateToken = require('../utils/generateTokens')



router.route('/register').post(asyncHAndler(async(req, res) => {

    const { name, email, password } = req.body;
    const isExist = await userModel.findOne({ email })
    if (isExist) {
        res.status(401);
        throw new Error("Email ALready exists");

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
            res.status(402)
            throw new Error("Error happened while Addin th User Please try again")
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
            res.status(401);
            throw new Error("Invalid Password");
        }

    } else {
        res.status(404);

        throw new Error(`there is no account with email: ${email}`);
    }
}))


router.route('/Allusers').get(asyncHAndler(async(req, res) => {

    users = await userModel.find().select("-password")

    res.json(users)

}))

router.route('/userinfo/:id').get(asyncHAndler(async(req, res) => {

    const id = req.params
    books = await Book.find({ user: id })
    user = await userModel.findById(id).select("-password")

    res.json(books, user)

}))


module.exports = router