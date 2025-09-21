// services/auth.api.ts
import api from "@/lib/api";
import axios from "axios";
import { AxiosInstance } from "axios";
import API from "@/lib/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"


export interface RegisterPayload {
  fullName: string
  email: string
  password: string
  role: "student" | "lecturer"
  studentId?: string
  department?: string
  lecturerId?: string
  specialization?: string
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface VerifyEmailPayload {
  token: string
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface SendEmailPayload {
  to: string
  subject: string
  message: string
}

// ✅ Register
export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await API.post("/auth/register", payload);
  return data;
};

// ✅ Login
export const loginUser = async (payload: LoginPayload) => {
  const { data } = await API.post("/auth/login", payload);
  if (typeof window !== "undefined") {
    localStorage.setItem("token", data.token);
  }
  return data;
};


// ✅ Verify Email
export const verifyEmail = async (token: string) => {
  const { data } = await API.get(`/auth/verify-email?token=${token}`);
  return data;
};

// ✅ Forgot Password
export const forgotPassword = async (email: string) => {
  const { data } = await API.post("/auth/forgot-password", { email });
  return data;
};

// ✅ Reset Password
export const resetPassword = async (token: string, password: string) => {
  const { data } = await API.post("/auth/reset-password", { token, password});
  return data;
};

// ✅ Send Email (generic)
export const sendEmail = async (email: string, subject: string, message: string) => {
  const { data } = await API.post("/auth/send-email", { email, subject, message });
  return data;
};
// ✅ Logout
export const logoutUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }
};
