import {create} from "zustand"
import axiosInstance from "./axios.lib.js"
import { toast } from "react-hot-toast"

const useAuthStore=create((set)=>({
    authUser:null,
    lucky_no:null,
    isLoadingUser:false,
    isLoggingUser:false,
    isLogoutUser:false,
    checkAuthUser:async()=>{
        set({isLoadingUser:true})
        try {
            const res=await axiosInstance.get("/dashboard")
            set({authUser:res.data?.user,lucky_no:res.data?.lucky_no})
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isLoadingUser:false})
        }
    },
    login:async(user)=>{
        set({isLoggingUser:true})
        try {
            const res=await axiosInstance.post("/auth/login",user)
            set({authUser:res.data?.user,lucky_no:res.data?.lucky_no})
            toast.success("login successful")
        } catch (error) {
            toast.error(error.response.data.message)
            
        }finally{
            set({isLoggingUser:false})
        }
    },
    logout:async()=>{
        set({isLogoutUser:true})
        try {
            const res=await axiosInstance.get("/auth/logout")
            toast.success(res.data.message)
            set({authUser:null,lucky_no:null})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isLogoutUser:false})
        }
    }
}))

export default useAuthStore