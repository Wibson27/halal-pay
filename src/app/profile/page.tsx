"use client"

import Link from "next/link"
import { ArrowLeft, User, Camera, Edit, Shield, CheckCircle, Calendar, MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-slate-400">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="h-24 w-24 border-4 border-yellow-400/50">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Ahmad Hassan" />
                      <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold text-2xl">
                        AH
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <h2 className="text-xl font-bold text-white">Ahmad Hassan</h2>
                      <Badge className="bg-green-900/50 text-green-400 border-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    <p className="text-slate-400">ahmad.hassan@email.com</p>
                    <div className="flex justify-center space-x-2">
                      <Badge className="bg-yellow-900/50 text-yellow-400 border-yellow-700">Premium</Badge>
                      <Badge className="bg-green-900/50 text-green-400 border-green-700">100% Halal</Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-slate-700" />

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-300 text-sm">Member since</p>
                      <p className="text-white font-medium">January 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-300 text-sm">Location</p>
                      <p className="text-white font-medium">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-300 text-sm">Compliance Score</p>
                      <p className="text-green-400 font-medium">98% Excellent</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Personal Information
                </CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-300">
                      First Name
                    </Label>
                    <Input id="firstName" defaultValue="Ahmad" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-300">
                      Last Name
                    </Label>
                    <Input id="lastName" defaultValue="Hassan" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      defaultValue="ahmad.hassan@email.com"
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-300">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="phone"
                      defaultValue="+60 12-345 6789"
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-slate-300">
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      defaultValue="1990-05-15"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-slate-300">
                      Nationality
                    </Label>
                    <Input
                      id="nationality"
                      defaultValue="Malaysian"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-slate-300">
                    Address
                  </Label>
                  <Input
                    id="address"
                    defaultValue="123 Jalan Bukit Bintang, Kuala Lumpur, 50200"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    Cancel
                  </Button>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                    <Edit className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Status */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Account Status</CardTitle>
                <CardDescription>Your account verification and compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Identity Verified</p>
                    <p className="text-slate-400 text-sm">KYC Completed</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Syariah Compliant</p>
                    <p className="text-slate-400 text-sm">100% Halal</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <Badge className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      P
                    </Badge>
                    <p className="text-white font-medium">Premium Member</p>
                    <p className="text-slate-400 text-sm">Active Plan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
