"use client"

import Link from "next/link"
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, FileText, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CompliancePage() {
  const complianceScore = 98

  const complianceMetrics = [
    {
      title: "Syariah Compliance",
      score: 100,
      status: "Excellent",
      icon: Shield,
      color: "text-green-400",
    },
    {
      title: "Transaction Screening",
      score: 96,
      status: "Very Good",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      title: "Documentation",
      score: 98,
      status: "Excellent",
      icon: FileText,
      color: "text-green-400",
    },
    {
      title: "Regulatory Adherence",
      score: 97,
      status: "Excellent",
      icon: Award,
      color: "text-green-400",
    },
  ]

  const recentAudits = [
    {
      date: "2024-01-10",
      type: "Quarterly Syariah Audit",
      result: "Passed",
      score: "98%",
      auditor: "Islamic Finance Advisory Board",
    },
    {
      date: "2023-12-15",
      type: "Transaction Compliance Review",
      result: "Passed",
      score: "96%",
      auditor: "Internal Compliance Team",
    },
    {
      date: "2023-11-20",
      type: "Annual Regulatory Audit",
      result: "Passed",
      score: "99%",
      auditor: "Bank Negara Malaysia",
    },
  ]

  const complianceAlerts = [
    {
      type: "info",
      title: "New Syariah Guidelines",
      message: "Updated guidelines for Sukuk investments are now available",
      date: "2024-01-15",
    },
    {
      type: "warning",
      title: "Documentation Update Required",
      message: "Please update your risk profile assessment by Jan 31, 2024",
      date: "2024-01-12",
    },
  ]

  const certifications = [
    {
      name: "Syariah Compliance Certificate",
      issuer: "Islamic Finance Advisory Board",
      validUntil: "2024-12-31",
      status: "Active",
    },
    {
      name: "ISO 27001 Information Security",
      issuer: "International Organization for Standardization",
      validUntil: "2024-08-15",
      status: "Active",
    },
    {
      name: "PCI DSS Compliance",
      issuer: "Payment Card Industry Security Standards Council",
      validUntil: "2024-06-30",
      status: "Active",
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
          <h1 className="text-3xl font-bold text-white mb-2">Compliance Dashboard</h1>
          <p className="text-slate-400">Monitor your Syariah compliance status and regulatory adherence</p>
        </div>

        {/* Compliance Score Overview */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Overall Compliance Score</h2>
                <p className="text-slate-400">Your account maintains excellent Syariah compliance</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">{complianceScore}%</div>
                <Badge className="bg-green-900/50 text-green-400 border-green-700">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Excellent
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compliance Metrics */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Compliance Metrics</CardTitle>
                <CardDescription>Detailed breakdown of your compliance performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {complianceMetrics.map((metric, index) => {
                    const IconComponent = metric.icon
                    return (
                      <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                              <IconComponent className={`w-5 h-5 ${metric.color}`} />
                            </div>
                            <div>
                              <h3 className="text-white font-medium">{metric.title}</h3>
                              <p className="text-slate-400 text-sm">{metric.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.score}%</div>
                          </div>
                        </div>
                        <Progress value={metric.score} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Audits */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Recent Audits & Reviews
                </CardTitle>
                <CardDescription>History of compliance audits and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAudits.map((audit, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white font-medium">{audit.type}</h3>
                          <p className="text-slate-400 text-sm">{audit.auditor}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-900/50 text-green-400 border-green-700 mb-1">{audit.result}</Badge>
                          <p className="text-green-400 font-bold">{audit.score}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {audit.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Compliance Alerts */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Compliance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceAlerts.map((alert, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-start space-x-3">
                        {alert.type === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-white font-medium text-sm">{alert.title}</h4>
                          <p className="text-slate-400 text-xs mt-1">{alert.message}</p>
                          <p className="text-slate-500 text-xs mt-2">{alert.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium text-sm">{cert.name}</h4>
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">{cert.status}</Badge>
                      </div>
                      <p className="text-slate-400 text-xs mb-2">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs">Valid until: {cert.validUntil}</p>
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
                  Download Compliance Report
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                  Schedule Audit
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                  Update Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
