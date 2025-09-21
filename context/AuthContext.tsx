"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { loginUser, logoutUser } from "@/services/auth.api"

type User = {
  id: string
  fullName: string
  email: string
  role: "student" | "lecturer"
} | null

interface AuthContextType {
  user: User
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  // Load token on first render
  useEffect(() => {
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
      // (Optional) you can fetch user profile with this token
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const res = await loginUser({email, password})
      setToken(res.token)
      setUser(res.user)

      // save token
      localStorage.setItem("token", res.token)

      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    logoutUser()
    setUser(null)
    setToken(null)
    router.push("/auth/login")
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook for easy usage
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
