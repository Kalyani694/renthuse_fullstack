import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://rent-house-backend-vlsq.onrender.com",
    //baseURL: "http://localhost:8800/api",
    withCredentials: true,
});

export default apiRequest;