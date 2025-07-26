"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  Users,
  Clock,
  Star,
  Code,
  Heart,
  Share2,
  Search,
  Filter,
  Plus,
  Home,
  Info,
  CalendarIcon,
  Network,
  Shield,
  AlertTriangle,
} from "lucide-react"

export default function GroupsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [groupForm, setGroupForm] = useState({
    name: "",
    description: "",
    category: "",
    maxMembers: "",
    meetingSchedule: "",
  })

  const studyGroups = [
    {
      id: 1,
      name: "React Advanced Patterns",
      description: "Deep dive into advanced React patterns, hooks, and performance optimization techniques.",
      category: "Frontend",
      members: 24,
      maxMembers: 30,
      meetingSchedule: "Tuesdays 7:00 PM PST",
      difficulty: "Advanced",
      tags: ["React", "JavaScript", "Hooks", "Performance"],
      organizer: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "Senior Frontend Developer",
      },
      nextMeeting: "2024-02-20",
      isActive: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Machine Learning Fundamentals",
      description: "Learn the basics of machine learning algorithms, data preprocessing, and model evaluation.",
      category: "AI/ML",
      members: 18,
      maxMembers: 25,
      meetingSchedule: "Thursdays 6:30 PM PST",
      difficulty: "Beginner",
      tags: ["Python", "ML", "Data Science", "Algorithms"],
      organizer: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "ML Engineer",
      },
      nextMeeting: "2024-02-22",
      isActive: true,
      rating: 4.9,
    },
    {
      id: 3,
      name: "DevOps & Cloud Architecture",
      description: "Explore containerization, CI/CD pipelines, and cloud infrastructure best practices.",
      category: "DevOps",
      members: 15,
      maxMembers: 20,
      meetingSchedule: "Wednesdays 8:00 PM PST",
      difficulty: "Intermediate",
      tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      organizer: {
        name: "Marcus Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "DevOps Engineer",
      },
      nextMeeting: "2024-02-21",
      isActive: true,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Mobile App Development",
      description: "Build cross-platform mobile apps using React Native and Flutter frameworks.",
      category: "Mobile",
      members: 22,
      maxMembers: 28,
      meetingSchedule: "Saturdays 2:00 PM PST",
      difficulty: "Intermediate",
      tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
      organizer: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "Mobile Developer",
      },
      nextMeeting: "2024-02-24",
      isActive: true,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Cybersecurity Essentials",
      description: "Learn about network security, ethical hacking, and security best practices.",
      category: "Security",
      members: 12,
      maxMembers: 15,
      meetingSchedule: "Fridays 7:30 PM PST",
      difficulty: "Intermediate",
      tags: ["Security", "Ethical Hacking", "Network", "Penetration Testing"],
      organizer: {
        name: "Lisa Wang",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "Security Specialist",
      },
      nextMeeting: "2024-02-23",
      isActive: true,
      rating: 4.8,
    },
    {
      id: 6,
      name: "UX/UI Design Workshop",
      description: "Master design thinking, prototyping, and user research methodologies.",
      category: "Design",
      members: 19,
      maxMembers: 25,
      meetingSchedule: "Sundays 3:00 PM PST",
      difficulty: "Beginner",
      tags: ["UX", "UI", "Design", "Figma", "Prototyping"],
      organizer: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "UX Designer",
      },
      nextMeeting: "2024-02-25",
      isActive: true,
      rating: 4.9,
    },
  ]

  const categories = ["all", "Frontend", "Backend", "AI/ML", "DevOps", "Mobile", "Security", "Design"]

  const filteredGroups = studyGroups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || group.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      default:
        return "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
    }
  }

  const handleCreateGroup = () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions to create a group.")
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Creating group:", groupForm)
    setShowCreateDialog(false)
    setGroupForm({
      name: "",
      description: "",
      category: "",
      maxMembers: "",
      meetingSchedule: "",
    })
    setAgreedToTerms(false)

    // Show success message
    alert("Group creation request submitted! Our admin team will review and approve your group within 24-48 hours.")
  }

  const termsOfService = [
    "I understand that all group activities must comply with TechVerse community guidelines and code of conduct.",
    "I agree to maintain a respectful, inclusive, and professional environment for all group members.",
    "I acknowledge that group content and discussions should be relevant to the stated learning objectives.",
    "I understand that spam, self-promotion, or off-topic content is not permitted in group discussions.",
    "I agree that TechVerse reserves the right to moderate, suspend, or remove groups that violate community standards.",
    "I acknowledge that I am responsible for managing group activities and ensuring productive learning sessions.",
    "I understand that group creation is subject to admin approval and may take 24-48 hours for review.",
    "I agree to hold TechVerse harmless from any disputes, issues, or conflicts that may arise within the group.",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">TechVerse</h1>
                  <p className="text-xs text-cyan-200">Where Tech Meets Collaboration</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-cyan-200 hover:text-white transition-colors flex items-center space-x-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="text-cyan-200 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Info className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                href="/events"
                className="text-cyan-200 hover:text-white transition-colors flex items-center space-x-1"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Events</span>
              </Link>
              <Link
                href="/groups"
                className="text-white hover:text-cyan-200 transition-colors flex items-center space-x-1"
              >
                <Users className="w-4 h-4" />
                <span>Groups</span>
              </Link>
              <Link
                href="/community"
                className="text-cyan-200 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Network className="w-4 h-4" />
                <span>Networking</span>
              </Link>
              <Link
                href="/admin"
                className="text-cyan-200 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Link href="/auth/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Study Groups</h1>
            <p className="text-xl text-cyan-200 max-w-3xl">
              Join collaborative learning groups or create your own to master new technologies with like-minded peers
            </p>
          </div>

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mt-4 md:mt-0">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900/95 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Create a New Study Group</DialogTitle>
                <DialogDescription className="text-cyan-200">
                  Fill out the form below to create a new study group. Your group will be reviewed by our admin team
                  before going live.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="groupName">Group Name</Label>
                  <Input
                    id="groupName"
                    placeholder="e.g., Advanced React Patterns"
                    value={groupForm.name}
                    onChange={(e) => setGroupForm({ ...groupForm, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-cyan-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your group will focus on and what members can expect to learn..."
                    value={groupForm.description}
                    onChange={(e) => setGroupForm({ ...groupForm, description: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-cyan-300 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={groupForm.category}
                      onChange={(e) => setGroupForm({ ...groupForm, category: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2"
                    >
                      <option value="" className="bg-slate-900">
                        Select Category
                      </option>
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category} className="bg-slate-900">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxMembers">Max Members</Label>
                    <Input
                      id="maxMembers"
                      type="number"
                      placeholder="e.g., 25"
                      value={groupForm.maxMembers}
                      onChange={(e) => setGroupForm({ ...groupForm, maxMembers: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-cyan-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule">Meeting Schedule</Label>
                  <Input
                    id="schedule"
                    placeholder="e.g., Tuesdays 7:00 PM PST"
                    value={groupForm.meetingSchedule}
                    onChange={(e) => setGroupForm({ ...groupForm, meetingSchedule: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-cyan-300"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4 p-4 bg-black/20 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center space-x-2 text-yellow-300">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-semibold">Group Creation Terms & Conditions</h3>
                  </div>

                  <div className="text-sm text-cyan-200 space-y-2 max-h-48 overflow-y-auto">
                    <p className="font-medium text-white mb-3">
                      By creating a group, you agree to the following terms:
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      {termsOfService.map((term, index) => (
                        <li key={index} className="text-xs leading-relaxed">
                          {term}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
                      <div className="flex items-start space-x-2">
                        <Info className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-blue-200">
                          <p className="font-medium text-blue-100 mb-1">Important Notice:</p>
                          <p>
                            All users can create groups, but they require admin approval before going live. This ensures
                            quality and alignment with our community standards. You'll be notified once your group is
                            approved (typically within 24-48 hours).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={setAgreedToTerms}
                      className="border-white/30 data-[state=checked]:bg-cyan-500"
                    />
                    <Label htmlFor="terms" className="text-sm text-white cursor-pointer">
                      I have read and agree to the terms and conditions above
                    </Label>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowCreateDialog(false)}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateGroup}
                  disabled={!agreedToTerms || !groupForm.name || !groupForm.description}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit for Review
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-300 w-4 h-4" />
              <Input
                placeholder="Search groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-cyan-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-900 text-white">
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <Card
              key={group.id}
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">{group.category}</Badge>
                      <Badge className={`${getDifficultyColor(group.difficulty)} border`}>{group.difficulty}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-300">{group.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{group.name}</CardTitle>
                    <CardDescription className="text-cyan-200">{group.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Group Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-cyan-200">
                    <Users className="w-4 h-4" />
                    <span>
                      {group.members}/{group.maxMembers} members
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-cyan-200">
                    <Clock className="w-4 h-4" />
                    <span>{group.meetingSchedule}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-cyan-200">
                    <Calendar className="w-4 h-4" />
                    <span>Next meeting: {new Date(group.nextMeeting).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Organizer */}
                <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={group.organizer.avatar || "/placeholder.svg"} alt={group.organizer.name} />
                    <AvatarFallback className="bg-cyan-500 text-white text-xs">
                      {group.organizer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-white">{group.organizer.name}</div>
                    <div className="text-xs text-slate-300">{group.organizer.role}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {group.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-cyan-500/20 text-cyan-200 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Group Capacity</span>
                    <span>{Math.round((group.members / group.maxMembers) * 100)}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Join Group
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
