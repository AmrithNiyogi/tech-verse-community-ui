"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import {
  Users,
  Code,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Zap,
  Target,
  Rocket,
  CalendarIcon,
  Network,
} from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm">Join 10,000+ Tech Professionals</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              TechVerse
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Connect, collaborate, and grow with the most vibrant tech community. Join thousands of developers,
            designers, and innovators shaping the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-lg px-10 py-4 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 font-bold group"
            >
              <Link href="/auth/register" className="flex items-center space-x-3">
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 text-lg px-10 py-4 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold group"
            >
              <Link href="/about" className="flex items-center space-x-2">
                <span>Learn More</span>
                <Target className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">Why Choose TechVerse?</h2>
            <p className="text-2xl text-slate-300 font-medium">Everything you need to accelerate your tech journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group animate-slide-in">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Professional Networking</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Connect with industry professionals, mentors, and peers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>10,000+ active members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Industry expert mentors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Career guidance sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group animate-slide-in [animation-delay:200ms]">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <CalendarIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Tech Events</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Attend workshops, hackathons, and tech talks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Weekly tech workshops</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Monthly hackathons</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Expert speaker sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 group animate-slide-in [animation-delay:400ms]">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Study Groups</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Join or create groups for collaborative learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>500+ active study groups</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>All skill levels welcome</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>Project collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4">
                10,000+
              </div>
              <div className="text-slate-300 text-lg font-semibold">Active Members</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:100ms]">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text mb-4">
                500+
              </div>
              <div className="text-slate-300 text-lg font-semibold">Study Groups</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:200ms]">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text mb-4">
                200+
              </div>
              <div className="text-slate-300 text-lg font-semibold">Events Monthly</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 animate-fade-in [animation-delay:300ms]">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text mb-4">
                50+
              </div>
              <div className="text-slate-300 text-lg font-semibold">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">Ready to Join the Community?</h2>
          <p className="text-2xl text-slate-300 mb-12 font-medium leading-relaxed">
            Start your journey with TechVerse today and connect with like-minded tech enthusiasts.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-xl px-12 py-6 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 font-bold group"
          >
            <Link href="/auth/register" className="flex items-center space-x-3">
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Join TechVerse Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
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
