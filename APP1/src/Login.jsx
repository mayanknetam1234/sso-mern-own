import { useState } from "react";
import { FaRegEye ,FaEyeSlash} from "react-icons/fa";

import { Link } from "react-router-dom";
import {Loader} from 'lucide-react'
import toast from "react-hot-toast";
import useAuthStore from "./useAuthStore.js";
const Login = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  })
  const {isLoggingUser,login}=useAuthStore((state)=>(state))
  const handleShowPassword=()=>{
    setShowPassword(!showPassword)
  }
  
  const validateForm=()=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    if(!user.name.trim()) return toast.error("Please provide the name")
    if(!user.email.trim()) return toast.error("please provide email")
    if(!emailRegex.test(user.email)) return toast.error("please provide valid email")
    if(!user.password) return toast.error("please provide the password")
    if(user.password.length<6) return toast.error("password must be of length 6")
    return true;
  }

  const handleForm=(e)=>{
    e.preventDefault();
    const success=validateForm();
    if(success){
        login(user)
    }
    // const formData=new FormData(e.target);
    // const obj=Object.fromEntries(formData.entries());
    // console.log()
  }
  return (
    <div className="h-full grid place-content-center ">
      <form onSubmit={handleForm} className="flex flex-col border-solid border-2 border-black rounded-md p-2 w-80">


        <label htmlFor="fullName">Name:</label>
        <input 
        value={user?.name}
        onChange={(e)=>{
          setUser({...user,name:e.target.value})
        }}
        className="border-solid border-2 border-slate-600 rounded-md"
        name="fullName"
        placeholder="Enter name"
        type="name" />



        <label htmlFor="fullName">Email:</label>
        <input 
        value={user?.email}
        onChange={(e)=>{
          setUser({...user,email:e.target.value})
        }}
        className="border-solid border-2 border-slate-600 rounded-md"
        name="email"
        placeholder="Enter email"
        type="email" />



        <label htmlFor="fullName " className="flex flex-row"> 
        <span>Password:</span>
        <button type="button" onClick={handleShowPassword}>
          {!showPassword?<FaRegEye/>:<FaEyeSlash />}
        </button>
        </label>
        <input 
        value={user?.password}
        className="border-solid border-2 border-slate-600 rounded-md"
        name="password"
        onChange={(e)=>{
          setUser({...user,password:e.target.value})
        }}
        placeholder="Enter password"
        type={showPassword?"text":"password"} />


        <button 
        className="bg-slate-500 p-1 rounded-md font-medium m-2"
        type="submit" disabled={isLoggingUser}>
          {isLoggingUser?(
              <div className="grid place-content-center">
              <Loader className="size-6 animate-spin"/>
            </div>
          ):(
            "Login"
          )}
        </button>
       


      </form>
    </div>
  )
}
export default Login