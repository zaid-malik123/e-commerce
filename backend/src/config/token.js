import jwt from "jsonwebtoken"

export const genToken = (id)=>{
    try {
       const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "7d"})
       return token
    } catch (error) {
        console.log(error)
    }
}

export const genToken1 = (email)=>{
    try {
       const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "7d"})
       return token
    } catch (error) {
        console.log(error)
    }
}