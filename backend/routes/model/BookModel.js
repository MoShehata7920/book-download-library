const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    data: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    img: {
        type: String,
        required: true,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"

    },

}, {
    timestamps: true,
});





const Book = mongoose.model("Book", bookSchema);

module.exports = Book