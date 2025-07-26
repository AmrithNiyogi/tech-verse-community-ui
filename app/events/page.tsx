"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Clock,
  MapPin,
  User,
  Filter,
} from "lucide-react"

export default function EventsPage() {
  const [filter, setFilter] = useState("all")

  const events = [
    {
      id: 1,
      title: "React 19 Deep Dive Workshop",
      description: "Learn the latest features and best practices in React 19 with hands-on coding exercises.",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub Downtown",
      attendees: 45,
      maxAttendees: 60,
      type: "workshop",
      level: "Intermediate",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "AI/ML Career Panel Discussion",
      description:
        "Industry experts share insights on building a successful career in artificial intelligence and machine learning.",
      date: "2024-02-18",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      attendees: 120,
      maxAttendees: 200,
      type: "panel",
      level: "All Levels",
      tags: ["AI", "ML", "Career", "Panel"],
    },
    {
      id: 3,
      title: "48-Hour Hackathon: Climate Tech",
      description: "Build innovative solutions for climate change in this intensive 48-hour hackathon.",
      date: "2024-02-22",
      time: "Friday 6:00 PM - Sunday 6:00 PM",
      location: "Innovation Center",
      attendees: 89,
      maxAttendees: 100,
      type: "hackathon",
      level: "All Levels",
      tags: ["Hackathon", "Climate", "Innovation"],
    },
    {
      id: 4,
      title: "Cloud Architecture Masterclass",
      description: "Advanced patterns and practices for designing scalable cloud architectures.",
      date: "2024-02-25",
      time: "1:00 PM - 4:00 PM",
      location: "Tech Campus",
      attendees: 32,
      maxAttendees: 40,
      type: "workshop",
      level: "Advanced",
      tags: ["Cloud", "Architecture", "AWS", "Azure"],
    },
    {
      id: 5,
      title: "Women in Tech Networking Mixer",
      description: "Connect with fellow women in technology over drinks and meaningful conversations.",
      date: "2024-02-28",
      time: "5:30 PM - 8:30 PM",
      location: "Rooftop Lounge",
      attendees: 67,
      maxAttendees: 80,
      type: "networking",
      level: "All Levels",
      tags: ["Networking", "Women in Tech", "Community"],
    },
    {
      id: 6,
      title: "Blockchain Development Bootcamp",
      description: "Intensive 3-day bootcamp covering smart contracts, DeFi, and Web3 development.",
      date: "2024-03-05",
      time: "9:00 AM - 5:00 PM (3 days)",
      location: "Blockchain Institute",
      attendees: 28,
      maxAttendees: 30,
      type: "bootcamp",
      level: "Intermediate",
      tags: ["Blockchain", "Web3", "Smart Contracts"],
    },
  ]

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.type === filter)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      case "panel":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "hackathon":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
      case "networking":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "bootcamp":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-300"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300"
      case "Advanced":
        return "bg-red-500/20 text-red-300"
      default:
        return "bg-slate-500/20 text-slate-300"
    }
  }

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
                className="text-white hover:text-cyan-300 transition-all duration-200 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
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
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black text-white mb-8 tracking-tight">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-2xl text-slate-300 leading-relaxed font-medium">
            Discover workshops, hackathons, networking events, and more. Connect with the community and level up your
            skills.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
          <Button
              onClick={() => setFilter("all")}
              variant="ghost"
              className={`transition-all duration-200 hover:scale-105 flex items-center capitalize border ${
                filter === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none shadow-lg shadow-cyan-500/25"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Events
            </Button>
           {["workshop", "panel", "hackathon", "networking", "bootcamp"].map((type) => (
              <Button
                key={type}
                onClick={() => setFilter(type)}
                variant="ghost" // ← Change from "outline" to "ghost"
                className={`transition-all duration-200 hover:scale-105 capitalize border ${
                  filter === type
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none shadow-lg shadow-cyan-500/25"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`${getTypeColor(event.type)} border font-medium`}>{event.type}</Badge>
                    <Badge className={`${getLevelColor(event.level)} font-medium`}>{event.level}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <CalendarIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <User className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">
                      {event.attendees}/{event.maxAttendees} attendees
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 font-semibold group">
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Host Your Own Event</h2>
          <p className="text-xl text-slate-300 mb-8 font-medium">
            Have an idea for a workshop, meetup, or tech talk? We'd love to help you bring it to life.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-lg px-10 py-4 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 font-bold group"
          >
            <span>Propose an Event</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
