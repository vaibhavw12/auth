import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup =async (req, res) =>{
    const {username, email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    try{
        await User.create({username, email, password : hashedPassword})
        res.json({
            status : 'SUCCESS',
            message : 'records saved successfully'
        })
    }catch(err){
        console.log(err.message)
        res.json({
            status : 'FAILED',
            message : 'Duplicate entry'
        })
    }
}

export const signin = async (req, res, next)=>{
    const {email , password} = req.body
    // console.log(req.body)
    try{
        const validUser = await User.findOne({email})
        // console.log(validUser)
        if(validUser){
            const validPass = bcryptjs.compareSync(password, validUser.password)
            if(validPass){
                const token = jwt.sign({id : validUser._id},process.env.PrivateKey)
                // res.cookie('access_token', token, {httpOnly : true}).json(validUser)
                // sending all details to client except password
                const {password: hashedPassword, ...rest} = validUser._doc
                res.cookie('access_token', token, {httpOnly : true}).json(rest)
            }else{
                res.json({
                    status : 'FAILED',
                    message : 'incorrect password'
                })
            }
        }else{
            res.json({
                status : 'FAILED',
                message : 'user not found'
            })
        }
    }catch(err){
        console.log(err)
    }
}