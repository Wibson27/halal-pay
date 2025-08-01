"use client"

import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, Calendar, FileText, Star, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SyariahBoardPage() {
  const boardMembers = [
    {
      name: "Dr. Ahmad Hidayat",
      title: "Chairman, Syariah Advisory Board",
      specialization: "Islamic Banking & Finance",
      experience: "25+ years",
      education: "PhD Islamic Studies, Al-Azhar University",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      consultations: 150,
    },
    {
      name: "Prof. Fatimah Zahra",
      title: "Senior Syariah Advisor",
      specialization: "Sukuk & Islamic Capital Markets",
      experience: "20+ years",
      education: "PhD Islamic Finance, IIUM",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      consultations: 120,
    },
    {
      name: "Dr. Muhammad Yusuf",
      title: "Syariah Advisor",
      specialization: "Takaful & Risk Management",
      experience: "15+ years",
      education: "PhD Syariah, University of Malaya",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.7,
      consultations: 95,
    },
  ]

  const recentFatwas = [
    {
      title: "Cryptocurrency Trading Guidelines",
      category: "Digital Assets",
      date: "2024-01-10",
      summary: "Guidelines on permissible cryptocurrency trading practices under Islamic law",
      status: "Published",
    },
    {
      title: "ESG Investment Compliance",
      category: "Investment",
      date: "2024-01-05",
      summary: "Syariah compliance assessment for Environmental, Social, and Governance investments",
      status: "Published",
    },
    {
      title: "Fintech Payment Solutions",
      category: "Technology",
      date: "2023-12-28",
      summary: "Islamic perspective on modern fintech payment and transfer solutions",
      status: "Published",
    },
  ]

  const consultationHistory = [
    {
      topic: "Sukuk Investment Structure",
      advisor: "Dr. Ahmad Hidayat",
      date: "2024-01-12",
      status: "Completed",
      rating: 5,
    },
    {
      topic: "Business Partnership Agreement",
      advisor: "Prof. Fatimah Zahra",
      date: "2024-01-08",
      status: "Completed",
      rating: 5,
    },
    {
      topic: "Insurance Product Review",
      advisor: "Dr. Muhammad Yusuf",
      date: "2024-01-03",
      status: "Completed",
      rating: 4,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Syariah Advisory Board</h1>
          <p className="text-slate-400">Get expert guidance on Islamic finance and Syariah compliance matters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Board Members */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Our Syariah Advisory Board
                </CardTitle>
                <CardDescription>Meet our qualified Islamic scholars and finance experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {boardMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-slate-700/30 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="bg-yellow-400 text-slate-900 font-bold">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-white font-bold text-lg">{member.name}</h3>
                              <p className="text-yellow-400 font-medium">{member.title}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-white font-medium">{member.rating}</span>
                              </div>
                              <p className="text-slate-400 text-sm">{member.consultations} consultations</p>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-blue-900/50 text-blue-400 border-blue-700">
                                {member.specialization}
                              </Badge>
                              <Badge variant="outline" className="border-slate-600 text-slate-400">
                                {member.experience}
                              </Badge>
                            </div>
                            <p className="text-slate-300 text-sm">{member.education}</p>
                          </div>

                          <div className="flex space-x-3">
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Start Consultation
                            </Button>
                            <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Appointment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Fatwas */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Recent Fatwas & Guidance
                </CardTitle>
                <CardDescription>Latest Islamic rulings and guidance documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFatwas.map((fatwa, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white font-medium">{fatwa.title}</h3>
                          <p className="text-slate-400 text-sm mt-1">{fatwa.summary}</p>
                        </div>
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">{fatwa.status}</Badge>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {fatwa.category}
                        </Badge>
                        <span className="text-slate-500 text-sm">{fatwa.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* New Consultation */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">New Consultation</CardTitle>
                <CardDescription>Submit your Syariah compliance question</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="topic" className="text-slate-300">
                    Topic
                  </Label>
                  <Input
                    id="topic"
                    placeholder="Brief topic description"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="category" className="text-slate-300">
                    Category
                  </Label>
                  <Input
                    id="category"
                    placeholder="e.g., Investment, Banking, Business"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="question" className="text-slate-300">
                    Question Details
                  </Label>
                  <Textarea
                    id="question"
                    placeholder="Describe your question in detail..."
                    className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">Submit Consultation</Button>
              </CardContent>
            </Card>

            {/* Consultation History */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Your Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultationHistory.map((consultation, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium text-sm">{consultation.topic}</h4>
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {consultation.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-xs mb-2">{consultation.advisor}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-xs">{consultation.date}</span>
                        <div className="flex items-center">
                          {[...Array(consultation.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Browse Fatwas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
