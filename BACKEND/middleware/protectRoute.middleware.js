
import jwt from "jsonwebtoken"

const protectRoute=(req,res,next)=>{
    try {
        const token=req.cookies.jwt;

        const decode=jwt.verify(token,"secret")

        req.user={...decode}
        next();
    } catch (error) {
        res.status(400).json({message:"not authorized , login"})
    }
}

export default protectRoute