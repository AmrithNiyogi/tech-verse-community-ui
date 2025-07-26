"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Target,
  Lightbulb,
  Heart,
  Globe,
} from "lucide-react"

export default function AboutPage() {
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
                className="text-white hover:text-cyan-300 transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
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
                className="text-slate-300 hover:text-white transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
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
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              TechVerse
            </span>
          </h1>
          <p className="text-2xl text-slate-300 leading-relaxed font-medium">
            We're building the future of tech collaboration, connecting innovators, creators, and dreamers from around
            the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  To create an inclusive platform where tech professionals can connect, learn, and grow together,
                  fostering innovation and collaboration across all levels of expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  To be the world's leading tech community platform, empowering millions of professionals to shape the
                  future of technology through meaningful connections and shared knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Innovation, inclusivity, collaboration, and continuous learning. We believe in the power of community
                  to drive technological advancement and personal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Our Story</h2>
          <div className="text-lg text-slate-300 leading-relaxed space-y-6">
            <p>
              TechVerse was born from a simple idea: technology is better when we build it together. Founded in 2020 by
              a group of passionate developers, designers, and entrepreneurs, we saw the need for a platform that truly
              connects the global tech community.
            </p>
            <p>
              What started as a small meetup group has grown into a thriving community of over 10,000 professionals from
              startups to Fortune 500 companies, from students to industry veterans, all united by their passion for
              technology and innovation.
            </p>
            <p>
              Today, TechVerse hosts hundreds of events monthly, facilitates thousands of meaningful connections, and
              continues to be the place where the next generation of tech leaders are born.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Meet Our Team</h2>
            <p className="text-xl text-slate-300 font-medium">The passionate individuals behind TechVerse</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Marcus Rodriguez", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Aisha Patel", role: "Head of Community", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-300 text-lg font-medium">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Join Our Mission</h2>
          <p className="text-xl text-slate-300 mb-8 font-medium">
            Be part of the community that's shaping the future of technology.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-lg px-10 py-4 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 font-bold group"
          >
            <Link href="/auth/register" className="flex items-center space-x-3">
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Join TechVerse Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
