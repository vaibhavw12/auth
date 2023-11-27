import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

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