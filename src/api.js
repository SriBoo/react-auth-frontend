import axios from "axios";

const api = axios.create({
  baseURL: "https://node-auth-backend-lime.vercel.app/auth", // 🔥 updated backend URL
  withCredentials: true, // important for cookies
});

export default api;
