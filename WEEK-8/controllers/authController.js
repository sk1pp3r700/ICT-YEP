const bcrypt = require('bcryptjs')
const user = require('../models/userModel')

exports.signup = async (req, res, next) => {
    let {id, name, age, phone} = req.body
    phone = await bcrypt.hash(phone, 12);

    jwt.sign({id}, process.env.JWT_SE)

    next()
};

