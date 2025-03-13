import axios  from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/v1/api', // Your API base URL
    withCredentials: true, // ✅ Enables cookies to be sent
  });


  export default axiosInstance