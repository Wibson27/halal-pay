"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Key, Smartphone, Eye, Clock, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Security Settings</h1>
          <p className="text-slate-400">Protect your account with advanced security features</p>
        </div>

        <div className="space-y-6">
          {/* Security Overview */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Security Score
              </CardTitle>
              <CardDescription>Your account security status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <p className="text-slate-400">Excellent Security</p>
                </div>
                <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-green-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-white font-medium">2FA Enabled</p>
                  <p className="text-slate-400 text-sm">Two-factor authentication</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Strong Password</p>
                  <p className="text-slate-400 text-sm">Secure password set</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Login Alerts</p>
                  <p className="text-slate-400 text-sm">Enable for 100%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Password Security */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Password Security
              </CardTitle>
              <CardDescription>Manage your password and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="current-password" className="text-slate-300">
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter current password"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="new-password" className="text-slate-300">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="confirm-password" className="text-slate-300">
                  Confirm New Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div className="bg-slate-700/30 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Password Requirements:</h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    At least 8 characters long
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Contains uppercase and lowercase letters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Contains at least one number
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                    Contains at least one special character
                  </li>
                </ul>
              </div>

              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">Update Password</Button>
            </CardContent>
          </Card>

          {/* Two-Factor Authentication */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Two-Factor Authentication
              </CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">SMS Authentication</p>
                  <p className="text-slate-400 text-sm">Receive codes via SMS</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-900/50 text-green-400 border-green-700">Active</Badge>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Authenticator App</p>
                  <p className="text-slate-400 text-sm">Use Google Authenticator or similar</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-slate-600 text-slate-400 border-slate-600">Not Set</Badge>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    Setup
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Biometric Authentication</p>
                  <p className="text-slate-400 text-sm">Fingerprint or Face ID</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-900/50 text-green-400 border-green-700">Active</Badge>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-blue-400 font-medium">Backup Codes</p>
                    <p className="text-slate-300 text-sm">
                      Generate backup codes to access your account if you lose your 2FA device
                    </p>
                    <Button variant="outline" className="mt-2 border-blue-600 text-blue-400 bg-transparent">
                      Generate Backup Codes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Login Activity */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Recent Login Activity
              </CardTitle>
              <CardDescription>Monitor your account access history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">iPhone 15 Pro</p>
                      <p className="text-slate-400 text-sm">Kuala Lumpur, Malaysia • Now</p>
                    </div>
                  </div>
                  <Badge className="bg-green-900/50 text-green-400 border-green-700">Current</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Chrome Browser</p>
                      <p className="text-slate-400 text-sm">Kuala Lumpur, Malaysia • 2 hours ago</p>
                    </div>
                  </div>
                  <Badge className="bg-slate-600 text-slate-400 border-slate-600">Ended</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">iPhone 15 Pro</p>
                      <p className="text-slate-400 text-sm">Kuala Lumpur, Malaysia • Yesterday</p>
                    </div>
                  </div>
                  <Badge className="bg-slate-600 text-slate-400 border-slate-600">Ended</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 bg-transparent">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Security Alerts */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Security Alerts
              </CardTitle>
              <CardDescription>Configure security notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Login from new device</p>
                  <p className="text-slate-400 text-sm">Get notified when logging in from a new device</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Suspicious activity</p>
                  <p className="text-slate-400 text-sm">Alert me of unusual account activity</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Password changes</p>
                  <p className="text-slate-400 text-sm">Notify when password is changed</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Large transactions</p>
                  <p className="text-slate-400 text-sm">Alert for transactions above RM 1,000</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
