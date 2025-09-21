import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://dlrs-be.vercel.app/api", // your Node.js backend
  withCredentials: true, // if using cookies/sessions
});

export default api;