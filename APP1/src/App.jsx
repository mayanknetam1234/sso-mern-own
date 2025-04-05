import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes,Navigate, useNavigate, useLocation} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import {Toaster} from "react-hot-toast"
import useAuthStore from './useAuthStore'
import { Loader } from 'lucide-react'
function App() {
    const {authUser,checkAuthUser,isLoadingUser}=useAuthStore();

    useEffect(()=>{
      checkAuthUser();
    },[checkAuthUser])


    if(isLoadingUser) return(
      <div className='w-full h-screen grid place-content-center'>
        <Loader/>
      </div>
    )
    console.log("hiii",authUser)
  return (
    <>
       <h1>Website 1</h1>
     <BrowserRouter>
        <Routes>
          <Route path="/login" element={authUser?<Navigate to="/dashboard"/>:<Login/>}/>
          <Route path="/dashboard" element={authUser?<Dashboard/>:<Navigate to="/login"/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
