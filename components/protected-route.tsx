"use client"

import type React from "react"

import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
  fallbackPath?: string
}

export function ProtectedRoute({ children, requireAdmin = false, fallbackPath = "/auth/login" }: ProtectedRouteProps) {
  const { user, isLoading, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push(fallbackPath)
        return
      }

      if (requireAdmin && !isAdmin) {
        router.push("/")
        return
      }
    }
  }, [user, isLoading, isAdmin, requireAdmin, router, fallbackPath])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white p-8">
          <CardContent className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            <span className="text-lg">Loading...</span>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white p-8 text-center">
          <CardContent className="space-y-4">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto" />
            <h2 className="text-2xl font-bold">Authentication Required</h2>
            <p className="text-cyan-200">Please log in to access this page.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
        <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white p-8 text-center">
          <CardContent className="space-y-4">
            <Shield className="w-16 h-16 text-red-400 mx-auto" />
            <h2 className="text-2xl font-bold">Access Denied</h2>
            <p className="text-cyan-200">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
