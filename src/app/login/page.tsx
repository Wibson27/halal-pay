"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Eye, EyeOff, ArrowLeft, Lock, Smartphone, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
          <h1 className="text-3xl font-bold text-white mb-2">Assalamu&apos;alaikum</h1>
          <p className="text-slate-400">Welcome back to your halal financial journey</p>
        </div>

        {/* Login Form */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
          <CardHeader className="text-center">
            <CardTitle className="text-white flex items-center justify-center">
              <Lock className="w-5 h-5 mr-2 text-yellow-400" />
              Sign In to Your Account
            </CardTitle>
            <Badge className="bg-green-900/50 text-green-400 border-green-700 mx-auto">
              <Shield className="w-3 h-3 mr-1" />
              Bank-Level Security
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-slate-300">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-slate-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
                  />
                  <Label htmlFor="remember" className="text-slate-300 text-sm">
                    Remember me
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold py-3"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In Securely"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                SMS OTP
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent"
              >
                <Shield className="w-4 h-4 mr-2" />
                Biometric
              </Button>
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  Create one now
                </Link>
              </p>
            </div>

            {/* Security Indicators */}
            <div className="bg-slate-700/30 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-6 text-xs text-slate-400">
                <div className="flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-green-400" />
                  256-bit SSL
                </div>
                <div className="flex items-center">
                  <Lock className="w-3 h-3 mr-1 text-green-400" />
                  2FA Protected
                </div>
                <div className="flex items-center">
                  <Badge className="bg-green-900/50 text-green-400 border-green-700 text-xs">DSN-MUI Certified</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
          <p className="mt-2">© 2024 HalalPay. Built with Islamic principles.</p>
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
