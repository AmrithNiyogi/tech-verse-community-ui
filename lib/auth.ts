"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "member" | "mentor"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem("techverse_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem("techverse_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would be an API call
    const mockUsers = [
      {
        id: "1",
        name: "Admin User",
        email: "admin@techverse.com",
        password: "admin123",
        role: "admin" as const,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "2",
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "member" as const,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "3",
        name: "Sarah Chen",
        email: "sarah@example.com",
        password: "mentor123",
        role: "mentor" as const,
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ]

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("techverse_user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("techverse_user")
  }

  const isAdmin = user?.role === "admin"

  return <AuthContext.Provider value={{ user, login, logout, isLoading, isAdmin }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
