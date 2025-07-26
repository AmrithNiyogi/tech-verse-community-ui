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

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    experience: "",
    bio: "",
    expertise: [],
    linkedin: "",
    github: "",
    portfolio: "",
    discord: "",
    seekMentorship: false,
    offerMentorship: false,
    agreeToTerms: false,
  })

  const [currentSkill, setCurrentSkill] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }))
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Registration submitted! Your application is pending approval.")
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
        <Card className="bg-gradient-to-br from-white/80 to-blue-100/60 border-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.1)]">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Join TechVerse</CardTitle>
            <p className="text-gray-600">Create your account and become part of our tech community</p>
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
              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 font-medium">
                  Current Role
                </Label>
                <Input
                  id="role"
                  placeholder="e.g., Full Stack Developer, Data Scientist"
                  value={formData.role}
                  onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-gray-700 font-medium">
                  Experience Level
                </Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>
                  <SelectTrigger className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-4 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (5-7 years)</SelectItem>
                    <SelectItem value="expert">Expert (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Areas of Expertise *</Label>
                <div className="grid grid-cols-2 gap-3 p-4 bg-white/50 rounded-2xl">
                  {[
                    "Web Development",
                    "Data Science",
                    "AI/ML",
                    "Cybersecurity",
                    "Blockchain",
                    "Mobile Development",
                    "DevOps",
                    "UI/UX Design",
                    "Product Management",
                    "Other",
                  ].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={area}
                        checked={formData.expertise?.includes(area) || false}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData((prev) => ({
                              ...prev,
                              expertise: [...(prev.expertise || []), area],
                            }))
                          } else {
                            setFormData((prev) => ({
                              ...prev,
                              expertise: (prev.expertise || []).filter((exp) => exp !== area),
                            }))
                          }
                        }}
                        className="rounded-lg"
                      />
                      <Label htmlFor={area} className="text-sm text-gray-700">
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-gray-700 font-medium">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself, your interests, and what you hope to achieve in TechVerse..."
                  value={formData.bio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 min-h-[100px]"
                  required
                />
              </div>

              {/* Social Links */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-gray-700 font-medium">
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
                    className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
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
                  Portfolio Website (Optional)
                </Label>
                <Input
                  id="portfolio"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="discord" className="text-gray-700 font-medium">
                  Discord Username (Optional)
                </Label>
                <Input
                  id="discord"
                  placeholder="username#1234"
                  value={formData.discord}
                  onChange={(e) => setFormData((prev) => ({ ...prev, discord: e.target.value }))}
                  className="bg-white/80 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200"
                />
                <p className="text-xs text-gray-500">We'll use this to add you to group Discord channels.</p>
              </div>

              {/* Mentorship */}
              <div className="space-y-4">
                <Label className="text-gray-700 font-medium">Mentorship</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="seekMentorship"
                      checked={formData.seekMentorship}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, seekMentorship: checked }))}
                      className="rounded-lg"
                    />
                    <Label htmlFor="seekMentorship" className="text-sm text-gray-600">
                      I'm seeking mentorship to grow my skills
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="offerMentorship"
                      checked={formData.offerMentorship}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, offerMentorship: checked }))}
                      className="rounded-lg"
                    />
                    <Label htmlFor="offerMentorship" className="text-sm text-gray-600">
                      I'd like to offer mentorship to others (requires approval)
                    </Label>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
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

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!formData.agreeToTerms || isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-700 border-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_6px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-200 py-3 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-cyan-600 hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-br from-blue-100/60 to-cyan-100/60 border-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_16px_rgba(0,0,0,0.1)]">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-800 mb-3">Application Process</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Your application will be reviewed by our team within 2-3 business days</p>
              <p>• You'll receive an email notification once your application is approved</p>
              <p>• Approved members gain access to our Discord community and networking features</p>
              <p>• Complete profiles have higher approval rates</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
