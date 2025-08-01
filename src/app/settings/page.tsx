"use client"

import Link from "next/link"
import { ArrowLeft, Bell, Shield, Eye, Globe, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account preferences and security settings</p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications" className="text-slate-300 font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-slate-400 text-sm">Receive notifications via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications" className="text-slate-300 font-medium">
                    Push Notifications
                  </Label>
                  <p className="text-slate-400 text-sm">Receive push notifications on your device</p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-notifications" className="text-slate-300 font-medium">
                    SMS Notifications
                  </Label>
                  <p className="text-slate-400 text-sm">Receive important alerts via SMS</p>
                </div>
                <Switch id="sms-notifications" />
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h4 className="text-white font-medium">Notification Types</h4>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="transaction-alerts" className="text-slate-300">
                      Transaction Alerts
                    </Label>
                    <p className="text-slate-400 text-sm">Get notified of all transactions</p>
                  </div>
                  <Switch id="transaction-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="investment-updates" className="text-slate-300">
                      Investment Updates
                    </Label>
                    <p className="text-slate-400 text-sm">Portfolio performance and market updates</p>
                  </div>
                  <Switch id="investment-updates" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="syariah-alerts" className="text-slate-300">
                      Syariah Compliance Alerts
                    </Label>
                    <p className="text-slate-400 text-sm">Important compliance notifications</p>
                  </div>
                  <Switch id="syariah-alerts" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Control your privacy and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor" className="text-slate-300 font-medium">
                    Two-Factor Authentication
                  </Label>
                  <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="biometric" className="text-slate-300 font-medium">
                    Biometric Login
                  </Label>
                  <p className="text-slate-400 text-sm">Use fingerprint or face recognition</p>
                </div>
                <Switch id="biometric" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="session-timeout" className="text-slate-300 font-medium">
                    Auto Logout
                  </Label>
                  <p className="text-slate-400 text-sm">Automatically log out after inactivity</p>
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="data-sharing" className="text-slate-300 font-medium">
                    Data Sharing
                  </Label>
                  <p className="text-slate-400 text-sm">Share anonymized data for service improvement</p>
                </div>
                <Switch id="data-sharing" />
              </div>
            </CardContent>
          </Card>

          {/* Display & Language */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Display & Language
              </CardTitle>
              <CardDescription>Customize your app appearance and language</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode" className="text-slate-300 font-medium">
                    Dark Mode
                  </Label>
                  <p className="text-slate-400 text-sm">Use dark theme for better night viewing</p>
                </div>
                <Switch id="dark-mode" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-slate-300 font-medium">Language</Label>
                  <p className="text-slate-400 text-sm">Choose your preferred language</p>
                </div>
                <Select defaultValue="en">
                  <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ms">Bahasa Malaysia</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-slate-300 font-medium">Currency</Label>
                  <p className="text-slate-400 text-sm">Display currency preference</p>
                </div>
                <Select defaultValue="myr">
                  <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="myr">MYR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="sgd">SGD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-slate-300 font-medium">Time Zone</Label>
                  <p className="text-slate-400 text-sm">Your local time zone</p>
                </div>
                <Select defaultValue="kuala-lumpur">
                  <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="kuala-lumpur">Kuala Lumpur (GMT+8)</SelectItem>
                    <SelectItem value="singapore">Singapore (GMT+8)</SelectItem>
                    <SelectItem value="jakarta">Jakarta (GMT+7)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Connected Devices */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Connected Devices
              </CardTitle>
              <CardDescription>Manage devices connected to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="text-white font-medium">iPhone 15 Pro</p>
                      <p className="text-slate-400 text-sm">Current device • Last active now</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    Current
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Chrome on MacBook</p>
                      <p className="text-slate-400 text-sm">Last active 2 hours ago</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-red-600 text-red-400 bg-transparent hover:bg-red-900/20">
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Account Actions</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-medium">Export Account Data</p>
                  <p className="text-slate-400 text-sm">Download a copy of your account data</p>
                </div>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Export
                </Button>
              </div>

              <Separator className="bg-slate-700" />

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-red-400 font-medium">Delete Account</p>
                  <p className="text-slate-400 text-sm">Permanently delete your account and all data</p>
                </div>
                <Button variant="outline" className="border-red-600 text-red-400 bg-transparent hover:bg-red-900/20">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
