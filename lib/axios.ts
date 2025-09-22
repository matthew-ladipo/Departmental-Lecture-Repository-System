// lib/axios.ts
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://dlrs-be.onrender.com/api", 
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // only if using cookies (sessions/JWT in httpOnly)
});

// 🔑 Automatically attach token from localStorage (for client-side requests)
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 🚨 Handle 401 responses globally
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token");
      window.location.href = "/auth/login"; // redirect to login
    }
    return Promise.reject(err);
  }
);

export default API;
