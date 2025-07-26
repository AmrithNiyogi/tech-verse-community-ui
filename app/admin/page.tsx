"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Navigation } from "@/components/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  UserCheck,
  Settings,
  BarChart3,
  Plus,
  MapPin,
  AlertTriangle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function AdminPageContent() {
  const [userFilter, setUserFilter] = useState("all")
  const [eventFilter, setEventFilter] = useState("all")

  // Mock user data
  const allUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "member",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedDate: "2024-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "mentor",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedDate: "2023-12-10",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@techverse.com",
      role: "admin",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedDate: "2023-01-01",
      lastActive: "5 minutes ago",
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "member",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedDate: "2024-02-20",
      lastActive: "Never",
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa@example.com",
      role: "member",
      status: "suspended",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedDate: "2024-01-05",
      lastActive: "1 week ago",
    },
  ]

  // Mock event data
  const allEvents = [
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
      status: "upcoming",
      organizer: {
        name: "Sarah Chen",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
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
      status: "ongoing",
      organizer: {
        name: "David Kim",
        email: "david@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      tags: ["AI", "ML", "Career", "Panel"],
    },
    {
      id: 3,
      title: "48-Hour Hackathon: Climate Tech",
      description: "Build innovative solutions for climate change in this intensive 48-hour hackathon.",
      date: "2024-01-22",
      time: "Friday 6:00 PM - Sunday 6:00 PM",
      location: "Innovation Center",
      attendees: 89,
      maxAttendees: 100,
      type: "hackathon",
      status: "completed",
      organizer: {
        name: "Alex Thompson",
        email: "alex@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      tags: ["Hackathon", "Climate", "Innovation"],
    },
  ]

  // Add pending events data after the existing mock data
  const pendingEvents = [
    {
      id: 1,
      title: "Advanced TypeScript Workshop",
      description: "Deep dive into advanced TypeScript features including generics, decorators, and advanced type manipulation.",
      date: "2024-03-01",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Innovation Center",
      maxAttendees: 40,
      type: "workshop",
      organizer: {
        name: "Emily Rodriguez",
        email: "emily@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      submittedDate: "2024-02-18",
      tags: ["TypeScript", "JavaScript", "Advanced", "Programming"],
    },
    {
      id: 2,
      title: "Startup Pitch Night",
      description: "Local entrepreneurs present their startup ideas to a panel of investors and get feedback from the community.",
      date: "2024-03-05",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Business Hub",
      maxAttendees: 100,
      type: "networking",
      organizer: {
        name: "James Wilson",
        email: "james@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      submittedDate: "2024-02-19",
      tags: ["Startup", "Networking", "Pitch", "Investment"],
    },
    {
      id: 3,
      title: "Women in Tech Leadership Panel",
      description: "Inspiring panel discussion with female tech leaders sharing their journey and insights on leadership in tech.",
      date: "2024-03-08",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      maxAttendees: 200,
      type: "panel",
      organizer: {
        name: "Dr. Priya Sharma",
        email: "priya@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      submittedDate: "2024-02-20",
      tags: ["Women in Tech", "Leadership", "Panel", "Career"],
    },
  ];

  // Add pending user registrations data
  const pendingUsers = [
    {
      id: 1,
      name: "Alex Thompson",
      email: "alex.thompson@email.com",
      role: "member",
      avatar: "/placeholder.svg?height=40&width=40",
      submittedDate: "2024-02-20",
      experience: "Intermediate",
      expertise: ["React", "Node.js", "Python"],
      bio: "Full-stack developer with 3 years of experience looking to connect with the tech community.",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      role: "mentor",
      avatar: "/placeholder.svg?height=40&width=40",
      submittedDate: "2024-02-19",
      experience: "Expert",
      expertise: ["Machine Learning", "Data Science", "Python", "TensorFlow"],
      bio: "Senior ML Engineer at Google with 8+ years of experience. Passionate about mentoring junior developers.",
      linkedin: "https://linkedin.com/in/mariagarcia",
      github: "https://github.com/mariagarcia",
      company: "Google",
      currentRole: "Senior ML Engineer",
    },
    {
      id: 3,
      name: "David Chen",
      email: "david.chen@email.com",
      role: "member",
      avatar: "/placeholder.svg?height=40&width=40",
      submittedDate: "2024-02-21",
      experience: "Beginner",
      expertise: ["JavaScript", "HTML", "CSS"],
      bio: "Recent bootcamp graduate eager to learn and contribute to open source projects.",
      linkedin: "https://linkedin.com/in/davidchen",
      github: "https://github.com/davidchen",
    },
  ];

  const userStats = {
    total: allUsers.length,
    active: allUsers.filter((u) => u.status === "active").length,
    pending: allUsers.filter((u) => u.status === "pending").length,
    suspended: allUsers.filter((u) => u.status === "suspended").length,
  }

  const eventStats = {
    total: allEvents.length,
    upcoming: allEvents.filter((e) => e.status === "upcoming").length,
    ongoing: allEvents.filter((e) => e.status === "ongoing").length,
    totalAttendees: allEvents.reduce((sum, e) => sum + e.attendees, 0),
  }

  const filteredUsers =
    userFilter === "all" ? allUsers : allUsers.filter((user) => user.role === userFilter || user.status === userFilter)
  const filteredEvents = eventFilter === "all" ? allEvents : allEvents.filter((event) => event.status === eventFilter)

  // Helper functions
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      case "mentor":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "member":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-400/30"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "suspended":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-400/30"
    }
  }

  const getEventTypeBadgeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      case "panel":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "hackathon":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
      case "networking":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const getEventStatusBadgeColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      case "ongoing":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "completed":
        return "bg-slate-500/20 text-slate-300 border-slate-400/30"
      case "cancelled":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-400/30"
    }
  }

  // Action handlers
  const handleSuspendUser = (userId: number) => {
    console.log(`Suspending user ${userId}`)
    // Here you would typically make an API call to suspend the user
  }

  const handleActivateUser = (userId: number) => {
    console.log(`Activating user ${userId}`)
    // Here you would typically make an API call to activate the user
  }

  const handleDeleteUser = (userId: number) => {
    console.log(`Deleting user ${userId}`)
    // Here you would typically make an API call to delete the user
  }

  const handleCancelEvent = (eventId: number) => {
    console.log(`Cancelling event ${eventId}`)
    // Here you would typically make an API call to cancel the event
  }

  // Add event approval handlers
  const handleApproveEvent = (eventId: number) => {
    console.log(`Approving event ${eventId}`)
    // Here you would typically make an API call to approve the event
  };

  const handleRejectEvent = (eventId: number) => {
    console.log(`Rejecting event ${eventId}`)
    // Here you would typically make an API call to reject the event
  };

  // Add user approval handlers
  const handleApproveUser = (userId: number) => {
    console.log(`Approving user ${userId}`)
    // Here you would typically make an API call to approve the user
  };

  const handleRejectUser = (userId: number) => {
    console.log(`Rejecting user ${userId}`)
    // Here you would typically make an API call to reject the user
  };

  // Add group approval handlers
  const handleApproveGroup = (groupId: number) => {
    console.log(`Approving group ${groupId}`)
    // Here you would typically make an API call to approve the group
  };

  const handleRejectGroup = (groupId: number) => {
    console.log(`Rejecting group ${groupId}`)
    // Here you would typically make an API call to reject the group
  };

  const [activeTab, setActiveTab] = useState("overview")

  const pendingGroups = [
    {
      id: 1,
      name: "Blockchain Development Bootcamp",
      description:
        "Comprehensive course covering smart contracts, DeFi protocols, and Web3 development using Solidity and JavaScript.",
      category: "Blockchain",
      organizer: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      maxMembers: 20,
      meetingSchedule: "Saturdays 10:00 AM PST",
      submittedDate: "2024-02-10",
      tags: ["Blockchain", "Solidity", "Web3", "DeFi"],
    },
    {
      id: 2,
      name: "Advanced Python for Data Science",
      description:
        "Deep dive into pandas, numpy, scikit-learn, and advanced data manipulation techniques for data scientists.",
      category: "Data Science",
      organizer: {
        name: "Dr. Sarah Williams",
        email: "sarah.williams@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      maxMembers: 15,
      meetingSchedule: "Wednesdays 7:00 PM PST",
      submittedDate: "2024-02-12",
      tags: ["Python", "Data Science", "Pandas", "Machine Learning"],
    },
    {
      id: 3,
      name: "Game Development with Unity",
      description:
        "Learn game development fundamentals using Unity engine, C# scripting, and 2D/3D game design principles.",
      category: "Game Dev",
      organizer: {
        name: "Alex Rodriguez",
        email: "alex.rodriguez@email.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      maxMembers: 25,
      meetingSchedule: "Sundays 3:00 PM PST",
      submittedDate: "2024-02-14",
      tags: ["Unity", "C#", "Game Development", "3D Modeling"],
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "group_approved",
      message: "React Advanced Patterns group was approved",
      timestamp: "2 hours ago",
      user: "Sarah Chen",
    },
    {
      id: 2,
      type: "user_joined",
      message: "15 new users joined the platform",
      timestamp: "4 hours ago",
      user: "System",
    },
    {
      id: 3,
      type: "event_created",
      message: "AI/ML Career Panel event was created",
      timestamp: "6 hours ago",
      user: "David Kim",
    },
    {
      id: 4,
      type: "group_rejected",
      message: "Cryptocurrency Trading group was rejected",
      timestamp: "1 day ago",
      user: "Admin Team",
    },
    {
      id: 5,
      type: "user_reported",
      message: "User reported for inappropriate behavior",
      timestamp: "2 days ago",
      user: "Community",
    },
  ]

  // Update platform stats to include pending approvals
  const platformStats = {
    totalUsers: 10247,
    activeGroups: 156,
    pendingGroups: 3,
    pendingEvents: 3,
    pendingUsers: 3,
    monthlyEvents: 23,
    userGrowth: "+12.5%",
    groupGrowth: "+8.3%",
    eventAttendance: "89.2%",
    userSatisfaction: "4.8/5",
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "group_approved":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "group_rejected":
        return <XCircle className="w-4 h-4 text-red-400" />
      case "user_joined":
        return <UserCheck className="w-4 h-4 text-blue-400" />
      case "event_created":
        return <Calendar className="w-4 h-4 text-cyan-400" />
      case "user_reported":
        return <AlertCircle className="w-4 h-4 text-yellow-400" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <Navigation currentPage="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-xl text-cyan-200">Manage groups, users, and platform activities</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/10 border-white/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="groups" className="data-[state=active]:bg-white/20 text-white">
              Groups
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-white/20 text-white">
              Events
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-white/20 text-white">
              Users
            </TabsTrigger>
            <TabsTrigger value="approvals" className="data-[state=active]:bg-white/20 text-white">
              Approvals
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white/20 text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-5 gap-6">
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{platformStats.totalUsers.toLocaleString()}</div>
                    <p className="text-xs text-green-400 mt-1">{platformStats.userGrowth} from last month</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Active Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{platformStats.activeGroups}</div>
                    <p className="text-xs text-green-400 mt-1">{platformStats.groupGrowth} from last month</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Monthly Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{platformStats.monthlyEvents}</div>
                    <p className="text-xs text-blue-400 mt-1">{platformStats.eventAttendance} attendance rate</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Pending Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {platformStats.pendingGroups + platformStats.pendingEvents + platformStats.pendingUsers}
                    </div>
                    <p className="text-xs text-yellow-400 mt-1">Require attention</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">User Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{platformStats.userSatisfaction}</div>
                    <p className="text-xs text-green-400 mt-1">Community rating</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription className="text-cyan-200">Latest platform activities and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1">
                          <p className="text-sm text-white">{activity.message}</p>
                          <p className="text-xs text-slate-300">
                            {activity.timestamp} • {activity.user}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Group Reviews Tab */}
          <TabsContent value="groups" className="mt-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Pending Group Reviews</h2>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                  {pendingGroups.length} Pending
                </Badge>
              </div>

              <div className="grid gap-6">
                {pendingGroups.map((group) => (
                  <Card key={group.id} className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{group.name}</CardTitle>
                          <CardDescription className="text-cyan-200 mb-4">{group.description}</CardDescription>

                          <div className="flex items-center space-x-4 text-sm text-slate-300">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>Max {group.maxMembers} members</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{group.meetingSchedule}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Submitted {new Date(group.submittedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                          {group.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Organizer Info */}
                      <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={group.organizer.avatar || "/placeholder.svg"} alt={group.organizer.name} />
                          <AvatarFallback className="bg-cyan-500 text-white">
                            {group.organizer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">{group.organizer.name}</div>
                          <div className="text-xs text-slate-300">{group.organizer.email}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                        <Button
                          onClick={() => handleApproveGroup(group.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve Group
                        </Button>
                        <Button
                          onClick={() => handleRejectGroup(group.id)}
                          variant="outline"
                          className="flex-1 border-red-400/30 text-red-300 hover:bg-red-500/10"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users" className="mt-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">User Management</h2>
                <div className="flex items-center space-x-4">
                  <select
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all" className="bg-slate-900">
                      All Users
                    </option>
                    <option value="admin" className="bg-slate-900">
                      Admins
                    </option>
                    <option value="mentor" className="bg-slate-900">
                      Mentors
                    </option>
                    <option value="member" className="bg-slate-900">
                      Members
                    </option>
                    <option value="pending" className="bg-slate-900">
                      Pending Approval
                    </option>
                    <option value="suspended" className="bg-slate-900">
                      Suspended
                    </option>
                  </select>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Invite User
                  </Button>
                </div>
              </div>

              {/* User Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-cyan-400">{userStats.total}</div>
                    <div className="text-sm text-slate-300">Total Users</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-400">{userStats.active}</div>
                    <div className="text-sm text-slate-300">Active Users</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-yellow-400">{userStats.pending}</div>
                    <div className="text-sm text-slate-300">Pending Approval</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-red-400">{userStats.suspended}</div>
                    <div className="text-sm text-slate-300">Suspended</div>
                  </CardContent>
                </Card>
              </div>

              {/* Users Table */}
              <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription className="text-cyan-200">Manage user accounts and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="bg-cyan-500 text-white">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-white">{user.name}</h3>
                              <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                              <Badge className={getStatusBadgeColor(user.status)}>{user.status}</Badge>
                            </div>
                            <p className="text-sm text-slate-300">{user.email}</p>
                            <p className="text-xs text-slate-400">
                              Joined {new Date(user.joinedDate).toLocaleDateString()} • Last active {user.lastActive}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                              >
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-slate-900/95 border-white/20 text-white">
                              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                <Settings className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-white/20" />
                              {user.status === "active" ? (
                                <DropdownMenuItem
                                  className="hover:bg-yellow-500/10 text-yellow-400 cursor-pointer"
                                  onClick={() => handleSuspendUser(user.id)}
                                >
                                  <AlertTriangle className="mr-2 h-4 w-4" />
                                  Suspend User
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem
                                  className="hover:bg-green-500/10 text-green-400 cursor-pointer"
                                  onClick={() => handleActivateUser(user.id)}
                                >
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Activate User
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                className="hover:bg-red-500/10 text-red-400 cursor-pointer"
                                onClick={() => handleDeleteUser(user.id)}
                              >
                                <XCircle className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-8">
            <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription className="text-cyan-200">
                  Detailed insights and metrics about platform usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-cyan-200 mb-6">Comprehensive analytics dashboard coming soon</p>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    View Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Management Tab */}
          <TabsContent value="events" className="mt-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Event Management</h2>
                <div className="flex items-center space-x-4">
                  <select
                    value={eventFilter}
                    onChange={(e) => setEventFilter(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all" className="bg-slate-900">
                      All Events
                    </option>
                    <option value="upcoming" className="bg-slate-900">
                      Upcoming
                    </option>
                    <option value="ongoing" className="bg-slate-900">
                      Ongoing
                    </option>
                    <option value="completed" className="bg-slate-900">
                      Completed
                    </option>
                    <option value="cancelled" className="bg-slate-900">
                      Cancelled
                    </option>
                  </select>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </div>
              </div>

              {/* Event Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-cyan-400">{eventStats.total}</div>
                    <div className="text-sm text-slate-300">Total Events</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-400">{eventStats.upcoming}</div>
                    <div className="text-sm text-slate-300">Upcoming</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-blue-400">{eventStats.ongoing}</div>
                    <div className="text-sm text-slate-300">Ongoing</div>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-purple-400">{eventStats.totalAttendees}</div>
                    <div className="text-sm text-slate-300">Total Attendees</div>
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="grid gap-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getEventTypeBadgeColor(event.type)}>{event.type}</Badge>
                            <Badge className={getEventStatusBadgeColor(event.status)}>{event.status}</Badge>
                          </div>
                          <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                          <CardDescription className="text-cyan-200 mb-4">{event.description}</CardDescription>

                          <div className="flex items-center space-x-4 text-sm text-slate-300">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>
                                {event.attendees}/{event.maxAttendees} attendees
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Organizer Info */}
                      <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} alt={event.organizer.name} />
                          <AvatarFallback className="bg-cyan-500 text-white">
                            {event.organizer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">{event.organizer.name}</div>
                          <div className="text-xs text-slate-300">{event.organizer.email}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Registration Progress</span>
                          <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                        </div>
                        <div className="w-full bg-black/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Edit Event
                        </Button>
                        {event.status === "upcoming" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-400/30 text-red-300 hover:bg-red-500/10 bg-transparent"
                            onClick={() => handleCancelEvent(event.id)}
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Approvals Tab */}
          <TabsContent value="approvals" className="mt-8">
            <div className="space-y-8">
              {/* Approval Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Pending Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-400">{platformStats.pendingGroups}</div>
                    <p className="text-xs text-slate-300 mt-1">Awaiting review</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Pending Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-400">{platformStats.pendingEvents}</div>
                    <p className="text-xs text-slate-300 mt-1">Awaiting review</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-cyan-200">Pending Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-400">{platformStats.pendingUsers}</div>
                    <p className="text-xs text-slate-300 mt-1">Awaiting approval</p>
                  </CardContent>
                </Card>
              </div>

              {/* Pending Events Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Pending Event Approvals</h3>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                    {pendingEvents.length} Pending
                  </Badge>
                </div>

                <div className="grid gap-6">
                  {pendingEvents.map((event) => (
                    <Card key={event.id} className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={getEventTypeBadgeColor(event.type)}>{event.type}</Badge>
                              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">Pending Review</Badge>
                            </div>
                            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                            <CardDescription className="text-cyan-200 mb-4">{event.description}</CardDescription>

                            <div className="flex items-center space-x-4 text-sm text-slate-300">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>Max {event.maxAttendees} attendees</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Organizer Info */}
                        <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} alt={event.organizer.name} />
                            <AvatarFallback className="bg-cyan-500 text-white">
                              {event.organizer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">{event.organizer.name}</div>
                          <div className="text-xs text-slate-300">{event.organizer.email}</div>
                          <div className="text-xs text-slate-400">
                            Submitted {new Date(event.submittedDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-200 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                        <Button
                          onClick={() => handleApproveEvent(event.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve Event
                        </Button>
                        <Button
                          onClick={() => handleRejectEvent(event.id)}
                          variant="outline"
                          className="flex-1 border-red-400/30 text-red-300 hover:bg-red-500/10"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pending Users Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">Pending User Registrations</h3>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                  {pendingUsers.length} Pending
                </Badge>
              </div>

              <div className="grid gap-6">
                {pendingUsers.map((user) => (
                  <Card key={user.id} className="backdrop-blur-md bg-white/10 border-white/20 text-white">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="bg-cyan-500 text-white text-lg">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-bold text-white">{user.name}</h3>
                              <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">Pending Approval</Badge>
                            </div>
                            <p className="text-cyan-200 mb-2">{user.email}</p>
                            <p className="text-sm text-slate-300">
                              Applied {new Date(user.submittedDate).toLocaleDateString()} • {user.experience} Level
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Bio */}
                      <div className="p-3 bg-black/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">Bio</h4>
                        <p className="text-sm text-slate-300">{user.bio}</p>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {user.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-cyan-500/20 text-cyan-200 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info for Mentors */}
                      {user.role === "mentor" && user.company && (
                        <div className="p-3 bg-black/20 rounded-lg">
                          <h4 className="text-sm font-semibold text-white mb-2">Professional Information</h4>
                          <p className="text-sm text-slate-300">
                            <strong>Current Role:</strong> {user.currentRole}
                          </p>
                          <p className="text-sm text-slate-300">
                            <strong>Company:</strong> {user.company}
                          </p>
                        </div>
                      )}

                      {/* Social Links */}
                      <div className="flex space-x-4 text-sm">
                        {user.linkedin && (
                          <a
                            href={user.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            LinkedIn Profile
                          </a>
                        )}
                        {user.github && (
                          <a
                            href={user.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            GitHub Profile
                          </a>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-4">
                        <Button
                          onClick={() => handleApproveUser(user.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve User
                        </Button>
                        <Button
                          onClick={() => handleRejectUser(user.id)}
                          variant="outline"
                          className="flex-1 border-red-400/30 text-red-300 hover:bg-red-500/10"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function AdminPage() {\
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminPageContent />
    </ProtectedRoute>
  )\
}
