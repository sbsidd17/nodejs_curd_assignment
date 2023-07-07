const { userModel } = require("../model/userModel")

exports.signup = async (req, res)=>{
    const {name, email, password} = req.body
    try {
        await userModel.create({...req.body})
        res.status(200).send({msg:"User Registered Successfully"})
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
}

exports.login = async (req, res)=>{
    const {email , password} = req.body
    try {
        
        const userData = await userModel.findOne({email})
        if(userData){
            if(userData.password == password){
                res.status(200).send("User Login Successfully")
            }else{
                res.status(400).send("Password is wrong")
            }
        }else{
            res.status(400).send("No Account Associate with this account")
        }
    } catch (error) {
        throw error.message
    }
}