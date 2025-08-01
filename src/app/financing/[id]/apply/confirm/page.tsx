"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Download,
  Home,
  Car,
  GraduationCap,
  Building,
  Users,
  TrendingUp,
  Phone,
  Mail,
  FileText,
  Shield,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const financingProducts = {
  "home-murabaha": {
    id: "home-murabaha",
    name: "Home Financing (Murabaha)",
    icon: Home,
    principle: "Murabaha",
    rate: "3.5% - 4.2%",
    processingTime: "3-5 days",
  },
  "vehicle-ijarah": {
    id: "vehicle-ijarah",
    name: "Vehicle Financing (Ijarah)",
    icon: Car,
    principle: "Ijarah",
    rate: "2.8% - 3.5%",
    processingTime: "1-3 days",
  },
  "education-murabaha": {
    id: "education-murabaha",
    name: "Education Financing",
    icon: GraduationCap,
    principle: "Murabaha",
    rate: "2.5% - 3.2%",
    processingTime: "2-4 days",
  },
  "business-musharakah": {
    id: "business-musharakah",
    name: "Business Financing (Musharakah)",
    icon: Building,
    principle: "Musharakah",
    rate: "4.0% - 5.5%",
    processingTime: "5-10 days",
  },
  "personal-tawarruq": {
    id: "personal-tawarruq",
    name: "Personal Financing (Tawarruq)",
    icon: Users,
    principle: "Tawarruq",
    rate: "3.8% - 6.2%",
    processingTime: "1-2 days",
  },
  "working-capital-murabaha": {
    id: "working-capital-murabaha",
    name: "Working Capital (Murabaha)",
    icon: TrendingUp,
    principle: "Murabaha",
    rate: "3.2% - 4.8%",
    processingTime: "2-3 days",
  },
}

export default function FinancingConfirmationPage({ params }: { params: { id: string } }) {
  const [processingStep, setProcessingStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(true)

  const product = financingProducts[params.id as keyof typeof financingProducts]

  if (!product) {
    notFound()
  }

  const IconComponent = product.icon
  const applicationRef = `FA${Date.now().toString().slice(-8)}`

  useEffect(() => {
    const timer = setInterval(() => {
      setProcessingStep((prev) => {
        if (prev >= 4) {
          setIsProcessing(false)
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const processingSteps = [
    { step: 1, title: "Application Received", description: "Your application has been successfully submitted" },
    { step: 2, title: "Document Verification", description: "Verifying submitted documents and information" },
    { step: 3, title: "Credit Assessment", description: "Conducting credit checks and financial evaluation" },
    { step: 4, title: "Syariah Compliance Review", description: "Ensuring compliance with Islamic banking principles" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/financing"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Financing
        </Link>

        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Application Submitted Successfully!</h1>
          <p className="text-slate-400 text-lg">Your financing application is now being processed</p>
          <div className="mt-4">
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-lg px-4 py-2">
              Reference: {applicationRef}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Application Summary */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <IconComponent className="w-6 h-6 mr-3" />
                  Application Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">Product</p>
                    <p className="text-white font-semibold">{product.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Islamic Principle</p>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">{product.principle}</Badge>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Application Date</p>
                    <p className="text-white font-semibold">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Expected Processing</p>
                    <p className="text-white font-semibold">{product.processingTime}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Profit Rate</p>
                    <p className="text-white font-semibold">{product.rate}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Status</p>
                    <Badge className="bg-blue-900/50 text-blue-400 border-blue-700">
                      {isProcessing ? "Processing" : "Under Review"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Status */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Processing Status
                </CardTitle>
                <CardDescription>
                  {isProcessing
                    ? "Your application is being processed..."
                    : "Processing completed, awaiting final review"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processingSteps.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                          step.step <= processingStep
                            ? "bg-green-400 text-slate-900"
                            : step.step === processingStep + 1 && isProcessing
                              ? "bg-yellow-400 text-slate-900 animate-pulse"
                              : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {step.step <= processingStep ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <span className="text-sm font-medium">{step.step}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-medium ${step.step <= processingStep ? "text-green-400" : "text-slate-400"}`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">{step.description}</p>
                        {step.step === processingStep && isProcessing && (
                          <div className="mt-2">
                            <Progress value={75} className="h-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">Document Verification</h4>
                      <p className="text-slate-300 text-sm">
                        Our team will verify all submitted documents. If additional documents are required, we will
                        contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-medium mb-2">Syariah Compliance</h4>
                      <p className="text-slate-300 text-sm">
                        Your application will be reviewed by our Syariah Advisory Council to ensure full compliance with
                        Islamic banking principles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-yellow-400 font-medium mb-2">Next Steps</h4>
                      <p className="text-slate-300 text-sm">
                        You will receive an SMS and email notification once your application status changes. Please keep
                        your phone accessible for verification calls.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Track Application
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Application Details */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Reference Number</span>
                  <span className="text-white font-mono text-sm">{applicationRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Submission Time</span>
                  <span className="text-white">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Expected Response</span>
                  <span className="text-white">{product.processingTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Priority Level</span>
                  <Badge className="bg-green-900/50 text-green-400 border-green-700">Standard</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Need Assistance?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">1-300-88-9999</p>
                    <p className="text-slate-400 text-sm">Financing Hotline</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">financing@syariahbank.com</p>
                    <p className="text-slate-400 text-sm">Email Support</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-slate-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">Mon-Fri: 9AM-6PM</p>
                    <p className="text-slate-400 text-sm">Business Hours</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 mt-4 bg-transparent"
                >
                  Live Chat Support
                </Button>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-slate-300">You'll receive an SMS confirmation within 30 minutes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-slate-300">Our team will call you within 24 hours for verification</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-slate-300">Final approval notification within {product.processingTime}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-slate-300">Financing disbursement upon approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
          >
            <Link href="/financing">Browse More Products</Link>
          </Button>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
