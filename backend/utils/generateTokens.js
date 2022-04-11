const jwt = require('jsonwebtoken')
const secreteKey = "Error404"
const generateToken = (id) => {
    return jwt.sign({ id }, secreteKey, { expiresIn: "10d" })
}

module.exports = generateToken