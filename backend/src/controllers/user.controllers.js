import User from "../models/user.model.js"

export const currUser = async (req, res)=>{
    try {
        const userId = req.userId
        const user = await User.findById(userId).select("-password")

        if(!user){
            return res.status(400).json("User does not exist")
        }
        
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}