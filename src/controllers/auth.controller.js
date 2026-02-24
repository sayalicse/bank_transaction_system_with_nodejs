const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
/**
 * -user register controller
 * -Post /api/auth/register
 */


async function userRegisterController(req, res,next) {
    try {
        const { email, name, password } = req.body;
        const isexist = await userModel.findOne(
            { email: email }
        )
        if (isexist) {
            return res.status(422).json({
                message: "user already exist with this email",
                status: "fail"
            })
        }
        const user = await userModel.create({
            email,
            name,
            password
        })
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "3d" }
        )
    
        res.cookie("jwt_token", token);
        res.status(201).json({
         user: {
            _id: user._id,
            email: user.email,
            name: user.name
         },
         token
        
        })


}catch (err) {
   next(err);
}
}
module.exports = { userRegisterController };