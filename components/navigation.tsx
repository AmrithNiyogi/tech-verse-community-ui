"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth"
import {
  Users,
  Code,
  Home,
  Info,
  CalendarIcon,
  Network,
  Shield,
  ArrowRight,
  LogOut,
  User,
  Settings,
} from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export function Navigation({ currentPage }: NavigationProps) {
  const { user, logout, isAdmin } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">TechVerse</h1>
                <p className="text-xs text-cyan-300 font-medium">Where Innovation Meets Community</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                currentPage === "home" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/about"
              className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                currentPage === "about" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">About</span>
            </Link>
            <Link
              href="/events"
              className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                currentPage === "events" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              <CalendarIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Events</span>
            </Link>
            <Link
              href="/groups"
              className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                currentPage === "groups" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Groups</span>
            </Link>
            <Link
              href="/community"
              className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                currentPage === "community" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              <Network className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Networking</span>
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={`transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group ${
                  currentPage === "admin" ? "text-white hover:text-cyan-300" : "text-slate-300 hover:text-white"
                }`}
              >
                <Shield className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Admin</span>
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-cyan-500 text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-900/95 border-white/20 text-white" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-slate-400">{user.email}</p>
                      <p className="text-xs text-cyan-400 capitalize">{user.role}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem
                    className="hover:bg-red-500/10 text-red-400 hover:text-red-300 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-cyan-300 transition-all duration-200 font-medium"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 font-semibold">
                  <Link href="/auth/register" className="flex items-center space-x-2">
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
