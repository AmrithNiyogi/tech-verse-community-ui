"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = await login(formData.email, formData.password)

    if (success) {
      router.push("/")
    } else {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 flex items-center justify-center py-12">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <span className="text-2xl font-bold text-cyan-600">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">TechVerse</h1>
          </Link>
        </div>
      </nav>

      <div className="max-w-md w-full mx-auto px-6">
        <Card className="bg-gradient-to-br from-white/80 to-cyan-100/60 border-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.1)]">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</CardTitle>
            <p className="text-gray-600">Sign in to your TechVerse account</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            {error && (
              <Alert className="mb-6 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: !!checked }))}
                    className="rounded-lg"
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm text-cyan-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_6px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-200 py-3 disabled:opacity-50"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gradient-to-r from-white/80 to-cyan-100/60 text-gray-500">
                      Don't have an account?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/auth/register" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full bg-white/80 text-gray-700 border-2 border-gray-200 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    >
                      Join as Member
                    </Button>
                  </Link>
                  <Link href="/auth/mentor-register" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-2 border-green-200 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    >
                      Become Mentor
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials:</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p>
                    <strong>Admin:</strong> admin@techverse.com / admin123
                  </p>
                  <p>
                    <strong>Member:</strong> john@example.com / password123
                  </p>
                  <p>
                    <strong>Mentor:</strong> sarah@example.com / mentor123
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
