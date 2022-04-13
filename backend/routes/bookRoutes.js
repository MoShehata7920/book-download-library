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



const secreteKey = "Error404"




const storage = multer.diskStorage({
    // filename: (req, file, next) => {
    //     const extension = file.mimetype.split("/")[1]
    //     const fileName = file.originalname.toLowerCase().split(' ').join('-');


    //     let path = `${__dirname}/public/${fileName}-${Date.now()}.${extension}`
    //     req.body.filePath = path
    //     fs.writeFileSync(path, file, (err) => {
    //         console.log(err);
    //         if (!error) {
    //             console.log("done");
    //             next()
    //         }

    //     })

    // }
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
    result = Book.findById(req.body.id)
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






module.exports = router