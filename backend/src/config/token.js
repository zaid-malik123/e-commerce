import jwt from "jsonwebtoken"

export const genToken = (id)=>{
    try {
       const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "7d"})
       return token
    } catch (error) {
        console.log(error)
    }
}