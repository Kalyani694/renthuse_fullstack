import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://rent-house-backend-vlsq.onrender.com",
    withCredentials: true,
});

export default apiRequest;