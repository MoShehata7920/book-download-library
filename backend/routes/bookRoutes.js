const express = require('express');
const router = express.Router()
const Book = require('./model/BookModel')
const userModel = require('./model/userModel')
const asyncHAndler = require('express-async-handler')
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const multer = require('multer')
fs = require('fs');
const uuid = require('uuid')
const path = require('path')
var ObjectID = require('mongodb').ObjectID;









const storage = multer.diskStorage({

    filename: (req, file, cb) => {
        cb(null, uuid.v4() + path.extname(file.originalname))
    },
    destination: `${__dirname}/public/`

});

var upload = multer({
    storage: storage,
    dest: `public/`
}).single('data');





let protect = async(req, res, next) => {
    const secreteKey = "Error404"

    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, secreteKey)
            console.log(decoded);
            req.body.user = await userModel.findById(decoded.id).select("-password")
            next();
        } catch (err) {
            res.status(401)
            throw new Error("sorry you are nor authorized")
        }
    } else {
        res.status(401)
        throw new Error("sorry you are nor authorized")
    }
}

router.route('/:id').get(protect, asyncHAndler(async(req, res) => {
    result = await Book.findById(req.params.id)
    console.log(result);
    res.json(result)
}))
router.route('/').get(protect, asyncHAndler(async(req, res) => {
    result = await Book.find()
    console.log(result);
    res.json(result)
}))
router.route('/addBook').post(protect, asyncHAndler(async(req, res) => {
    console.log(req.body);
    let { title, category, data, user } = req.body
    book = await Book.create({ title, category, user, data: data.path })
    if (book) {
        console.log(book);
        res.json(book)
    }



}))

router.route('/upload').post(upload, asyncHAndler(async(req, res) => {

    console.log((req.file));
    res.json({ path: req.file.path })


}))

router.route('/download/:id').get(asyncHAndler(async(req, res) => {
    console.log(req.params.id);
    const id = ObjectID(req.params.id)
    await Book.find({ _id: id }).then((rees) => {
            console.log(rees);

            res.download(rees[0].data)
        }

    )




}))



router.route('/search/:params').get(asyncHAndler(async(req, res) => {
    const s = req.params.params
    const book = await Book.find({
        title: { $regex: ".*" + s, $options: 'i' }
    })

    res.send(book)

}))








module.exports = { router, protect }