"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Eye, EyeOff, ArrowLeft, Lock, Smartphone, Mail, User, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    dateOfBirth: "",
  })

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    syariah: false,
    marketing: false,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAgreementChange = (field: string, checked: boolean) => {
    setAgreements((prev) => ({ ...prev, [field]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/landing"
            className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">H</span>
            </div>
            <span className="text-white font-bold text-2xl">HalalPay</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Ahlan wa Sahlan</h1>
          <p className="text-slate-400">Join 250,000+ Muslims on their halal financial journey</p>
        </div>

        {/* Signup Form */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
          <CardHeader className="text-center">
            <CardTitle className="text-white flex items-center justify-center">
              <User className="w-5 h-5 mr-2 text-yellow-400" />
              Create Your Halal Account
            </CardTitle>
            <Badge className="bg-green-900/50 text-green-400 border-green-700 mx-auto">
              <Shield className="w-3 h-3 mr-1" />
              100% Syariah Compliant
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-slate-300">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-300">
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="phone"
                      placeholder="+60 12-345 6789"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-slate-300">
                    Country *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("country", value)} required>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="malaysia">Malaysia</SelectItem>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="brunei">Brunei</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dateOfBirth" className="text-slate-300">
                    Date of Birth *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-slate-300">
                    Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white h-8 w-8"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-slate-300">
                  Confirm Password *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white h-8 w-8"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <p className="text-slate-300 text-sm font-medium mb-2">Password Requirements:</p>
                <ul className="text-slate-400 text-xs space-y-1">
                  <li>• At least 8 characters long</li>
                  <li>• Contains uppercase and lowercase letters</li>
                  <li>• Contains at least one number</li>
                  <li>• Contains at least one special character</li>
                </ul>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreements.terms}
                    onCheckedChange={(checked) => handleAgreementChange("terms", checked as boolean)}
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="terms" className="text-slate-300 text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Privacy Policy
                    </Link>
                    *
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="syariah"
                    checked={agreements.syariah}
                    onCheckedChange={(checked) => handleAgreementChange("syariah", checked as boolean)}
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="syariah" className="text-slate-300 text-sm leading-relaxed">
                    I confirm that I understand and agree to conduct all financial activities in accordance with{" "}
                    <Link
                      href="/syariah-principles"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Syariah principles
                    </Link>
                    *
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={agreements.marketing}
                    onCheckedChange={(checked) => handleAgreementChange("marketing", checked as boolean)}
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="marketing" className="text-slate-300 text-sm leading-relaxed">
                    I would like to receive updates about new halal investment opportunities and Islamic finance
                    education
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold py-3"
                disabled={!agreements.terms || !agreements.syariah || isLoading}
              >
                {isLoading ? "Creating Account..." : "Create My Halal Account"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>

            {/* Security & Compliance Indicators */}
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-green-400" />
                  Bank-Level Security
                </div>
                <div className="flex items-center">
                  <Lock className="w-3 h-3 mr-1 text-green-400" />
                  End-to-End Encryption
                </div>
                <div className="flex items-center">
                  <Badge className="bg-green-900/50 text-green-400 border-green-700 text-xs">DSN-MUI Certified</Badge>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-700 text-xs">GDPR Compliant</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>By creating an account, you&#39;re joining a community committed to halal finance</p>
          <p className="mt-2">© 2024 HalalPay. Built with Islamic principles and modern technology.</p>
        </div>
      </div>

      <style jsx>{`
        .neon-border {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.1);
        }
      `}</style>
    </div>
  )
}
