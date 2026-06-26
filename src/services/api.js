import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-posts-backend-n7k5.onrender.com/api",
});

export default api;