import express from "express"
import cors from "cors"
import { dashboard, login,logout } from "../controllers/auth.controllers.js";
import cookieParser from "cookie-parser"
import protectRoute from "../middleware/protectRoute.middleware.js"
const app=express();

app.use(express.json())



// ✅ CORS Configuration
app.use(cors({
  origin: [/localhost:\d+$/], // Accepts requests from any localhost port
  // origin: ["http://app1:5000", "http://app2:5001"],
  credentials: true           // ✅ Allows cookies to be sent
}));
app.use(cookieParser())
app.post("/v1/api/auth/login",login);
app.get("/v1/api/dashboard",protectRoute,dashboard);
app.get("/v1/api/auth/logout",logout)



app.listen(3000,()=>{
    console.log("server started at 3000")
})