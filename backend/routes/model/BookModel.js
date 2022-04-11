const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"

    },

}, {
    timestamps: true,
});





userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User