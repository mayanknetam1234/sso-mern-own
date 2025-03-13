import jwt from "jsonwebtoken"

export const login=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"provide all the details"})
        }
        const token=jwt.sign({name,email},"secret",{expiresIn:"7d"})

        res.cookie("jwt",token,{
            maxAge:7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict",
          })
          return res.status(200).json({message:"cookie created", user:{name,email},lucky_no:Math.ceil(Math.random()*100)})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"login failed"})
    }
}

export const dashboard=async(req,res)=>{
    try {
        res.status(200).json({message:"login successful",user:req.user,lucky_no:Math.ceil(Math.random()*100)})
    
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export const logout=(req,res)=>{
  try {
    res.cookie("jwt","",{
        maxAge:0,

      })
    res.status(200).json({message:"logout successful"})
  } catch (error) {
    res.status(500).json({message:"logout unsuccessful"})
  }
}