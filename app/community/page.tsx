"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Code,
  Linkedin,
  Twitter,
  Github,
  Home,
  Info,
  CalendarIcon,
  Network,
  Shield,
  ArrowRight,
  MessageCircle,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
} from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        username: "@sarahc_dev",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      content:
        "Just shipped a new feature using React Server Components! The performance improvements are incredible. Anyone else experimenting with RSCs?",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["React", "Performance", "ServerComponents"],
    },
    {
      id: 2,
      author: {
        name: "Marcus Rodriguez",
        username: "@marcus_codes",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      content: "Attending the AI/ML panel tomorrow! Super excited to learn from industry experts. Who else is going?",
      timestamp: "4 hours ago",
      likes: 18,
      comments: 12,
      shares: 5,
      tags: ["AI", "ML", "Events"],
    },
    {
      id: 3,
      author: {
        name: "Aisha Patel",
        username: "@aisha_tech",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      content:
        "Looking for teammates for the Climate Tech hackathon! I'm working on a carbon footprint tracking app. DM me if interested! 🌱",
      timestamp: "6 hours ago",
      likes: 31,
      comments: 15,
      shares: 8,
      tags: ["Hackathon", "Climatetech", "Collaboration"],
    },
    {
      id: 4,
      author: {
        name: "David Kim",
        username: "@david_builds",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      content:
        "Just finished the Cloud Architecture workshop. Mind = blown 🤯 The patterns we learned will definitely improve our system design.",
      timestamp: "8 hours ago",
      likes: 22,
      comments: 6,
      shares: 4,
      tags: ["Cloud", "Architecture", "Learning"],
    },
    {
      id: 5,
      author: {
        name: "Elena Vasquez",
        username: "@elena_frontend",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      content:
        "Hot take: CSS Grid + Flexbox is still the best layout combination in 2024. Fight me! 😄 What's your go-to layout strategy?",
      timestamp: "12 hours ago",
      likes: 45,
      comments: 23,
      shares: 7,
      tags: ["CSS", "Frontend", "WebDev"],
    },
  ]

  const trendingTopics = [
    { tag: "React19", posts: 156 },
    { tag: "AI", posts: 234 },
    { tag: "WebDev", posts: 189 },
    { tag: "Hackathon", posts: 87 },
    { tag: "CloudComputing", posts: 145 },
    { tag: "JavaScript", posts: 298 },
  ]

  const suggestedConnections = [
    {
      name: "Alex Thompson",
      role: "Senior DevOps Engineer",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 12,
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 8,
    },
    {
      name: "James Wilson",
      role: "Full Stack Developer",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=60&width=60",
      mutualConnections: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 font-inter">
      {/* Navigation */}
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
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">About</span>
              </Link>
              <Link
                href="/events"
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <CalendarIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Events</span>
              </Link>
              <Link
                href="/groups"
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Groups</span>
              </Link>
              <Link
                href="/community"
                className="text-white hover:text-cyan-300 transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Network className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Networking</span>
              </Link>
              <Link
                href="/admin"
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Shield className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Admin</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
            Community{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Feed
            </span>
          </h1>
          <p className="text-2xl text-slate-300 leading-relaxed font-medium">
            Connect with fellow developers, share your journey, and stay updated with the latest in tech.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Trending */}
            <div className="lg:col-span-1">
              <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span>Trending Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer group"
                    >
                      <div>
                        <p className="font-semibold text-cyan-300 group-hover:text-cyan-200">#{topic.tag}</p>
                        <p className="text-sm text-slate-400">{topic.posts} posts</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-white">{post.author.name}</h3>
                          {post.author.verified && (
                            <div className="w-4 h-4 bg-cyan-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-400 text-sm">
                          {post.author.username} • {post.timestamp}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">{post.content}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors duration-200 cursor-pointer"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors duration-200 group">
                          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 group">
                          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors duration-200 group">
                          <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                      <button className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                        <Bookmark className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Sidebar - Suggested Connections */}
            <div className="lg:col-span-1">
              <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>Suggested Connections</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {suggestedConnections.map((connection, index) => (
                    <div key={index} className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name} />
                          <AvatarFallback>
                            {connection.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{connection.name}</h4>
                          <p className="text-slate-400 text-xs">{connection.role}</p>
                          <p className="text-slate-500 text-xs">{connection.company}</p>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs mb-3">{connection.mutualConnections} mutual connections</p>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 text-xs font-semibold"
                      >
                        Connect
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-xl py-16 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TechVerse</h3>
                  <p className="text-sm text-slate-400 font-medium">Where Innovation Meets Community</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Building the future of tech collaboration, one connection at a time.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Community</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/events"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/groups"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    Groups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
                  <Twitter className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-200" />
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-200" />
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-indigo-500/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 transition-colors duration-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2024 TechVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
