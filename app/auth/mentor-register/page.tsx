"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Upload } from "lucide-react"

export default function MentorRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentRole: "",
    company: "",
    experience: "",
    expertise: [],
    mentorshipExperience: "",
    availability: "",
    bio: "",
    linkedin: "",
    github: "",
    portfolio: "",
    resume: null,
    agreeToTerms: false,
    agreeToMentorGuidelines: false,
  })

  const [currentExpertise, setCurrentExpertise] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const addExpertise = () => {
    if (currentExpertise.trim() && !formData.expertise.includes(currentExpertise.trim())) {
      setFormData((prev) => ({
        ...prev,
        expertise: [...prev.expertise, currentExpertise.trim()],
      }))
      setCurrentExpertise("")
    }
  }

  const removeExpertise = (expertiseToRemove) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((exp) => exp !== expertiseToRemove),
    }))
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(
      "Mentor application submitted! Your application is under review and you'll hear back within 5-7 business days.",
    )
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <span className="text-2xl font-bold text-cyan-600">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">TechVerse</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="bg-white/80 text-gray-700 border-2 border-gray-200 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6">
        <Card className="bg-gradient-to-br from-white/80 to-cyan-100/60 border-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.1)]">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Become a Mentor</CardTitle>
            <p className="text-gray-600">
              Share your expertise and help shape the next generation of tech professionals
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
              </div>

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

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentRole" className="text-gray-700 font-medium">
                    Current Role
                  </Label>
                  <Input
                    id="currentRole"
                    placeholder="e.g., Senior Software Engineer"
                    value={formData.currentRole}
                    onChange={(e) => setFormData((prev) => ({ ...prev, currentRole: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="e.g., Google, Microsoft, Startup"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-gray-700 font-medium">
                  Years of Experience
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>
                  <SelectTrigger className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8-12">8-12 years</SelectItem>
                    <SelectItem value="12+">12+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Areas of Expertise</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add expertise area (e.g., React, Machine Learning)"
                    value={currentExpertise}
                    onChange={(e) => setCurrentExpertise(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addExpertise())}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                  />
                  <Button
                    type="button"
                    onClick={addExpertise}
                    className="bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {formData.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.expertise.map((exp, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 rounded-full pr-1"
                      >
                        {exp}
                        <button
                          type="button"
                          onClick={() => removeExpertise(exp)}
                          className="ml-2 hover:bg-red-200 rounded-full p-1 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Mentorship Experience */}
              <div className="space-y-2">
                <Label htmlFor="mentorshipExperience" className="text-gray-700 font-medium">
                  Previous Mentorship Experience
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, mentorshipExperience: value }))}>
                  <SelectTrigger className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200">
                    <SelectValue placeholder="Select your mentorship experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No formal mentorship experience</SelectItem>
                    <SelectItem value="informal">Informal mentoring (colleagues, friends)</SelectItem>
                    <SelectItem value="formal">Formal mentoring programs</SelectItem>
                    <SelectItem value="extensive">Extensive mentoring experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Availability */}
              <div className="space-y-2">
                <Label htmlFor="availability" className="text-gray-700 font-medium">
                  Weekly Availability
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}>
                  <SelectTrigger className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200">
                    <SelectValue placeholder="How much time can you dedicate weekly?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 hours per week</SelectItem>
                    <SelectItem value="3-5">3-5 hours per week</SelectItem>
                    <SelectItem value="5-10">5-10 hours per week</SelectItem>
                    <SelectItem value="10+">10+ hours per week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-gray-700 font-medium">
                  Mentor Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your background, what you're passionate about, and what you hope to share with mentees..."
                  value={formData.bio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 min-h-[120px]"
                  required
                />
              </div>

              {/* Social Links */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-gray-700 font-medium">
                    LinkedIn Profile *
                  </Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-gray-700 font-medium">
                    GitHub Profile
                  </Label>
                  <Input
                    id="github"
                    placeholder="https://github.com/yourusername"
                    value={formData.github}
                    onChange={(e) => setFormData((prev) => ({ ...prev, github: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio" className="text-gray-700 font-medium">
                  Portfolio Website
                </Label>
                <Input
                  id="portfolio"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                />
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-gray-700 font-medium">
                  Resume/CV *
                </Label>
                <div className="relative">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => document.getElementById("resume").click()}
                    className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {formData.resume ? formData.resume.name : "Upload Resume/CV"}
                  </Button>
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked }))}
                    className="rounded-lg"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-cyan-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-cyan-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mentorGuidelines"
                    checked={formData.agreeToMentorGuidelines}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreeToMentorGuidelines: checked }))
                    }
                    className="rounded-lg"
                  />
                  <Label htmlFor="mentorGuidelines" className="text-sm text-gray-600">
                    I agree to follow the{" "}
                    <Link href="/mentor-guidelines" className="text-cyan-600 hover:underline">
                      Mentor Guidelines
                    </Link>{" "}
                    and commit to providing quality mentorship
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!formData.agreeToTerms || !formData.agreeToMentorGuidelines || isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_6px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-200 py-3 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Mentor Application"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Want to join as a regular member?{" "}
                  <Link href="/auth/register" className="text-cyan-600 hover:underline font-medium">
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 border-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_16px_rgba(0,0,0,0.1)]">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-800 mb-3">Mentor Application Process</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Applications are thoroughly reviewed by our team within 5-7 business days</p>
              <p>• We may schedule a brief video interview to discuss your mentorship goals</p>
              <p>• Approved mentors receive access to our mentor dashboard and training materials</p>
              <p>• You'll be matched with mentees based on your expertise and availability</p>
              <p>• Ongoing support and resources are provided to ensure successful mentorship</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
