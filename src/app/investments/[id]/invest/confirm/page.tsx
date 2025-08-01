"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Shield, Clock, CreditCard, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function InvestConfirmPage({ params }: { params: { id: string } }) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Mock data - would come from previous form
  const investmentDetails = {
    fundName: "Syariah Equity Fund",
    investmentType: "One-time",
    amount: 10000,
    managementFee: 150,
    processingFee: 10,
    totalAmount: 10160,
    paymentMethod: "Online Banking",
    expectedReturn: "15-20%",
    riskLevel: "Medium",
  }

  const handleConfirmInvestment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-2xl mx-auto p-6 flex items-center justify-center min-h-screen">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm w-full">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>

              <h1 className="text-3xl font-bold text-white mb-4">Investment Successful!</h1>
              <p className="text-slate-400 mb-6">
                Your investment in {investmentDetails.fundName} has been processed successfully.
              </p>

              <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Investment Amount:</span>
                    <span className="text-white font-bold">RM {investmentDetails.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Transaction ID:</span>
                    <span className="text-white">INV-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">Confirmed</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/investments">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                    View My Investments
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                <p className="text-blue-400 text-sm">
                  📧 A confirmation email has been sent to your registered email address with investment details and
                  next steps.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href={`/investments/${params.id}/invest`}
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Investment Form
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Confirm Your Investment</h1>
          <p className="text-slate-400">Please review your investment details before confirming</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Investment Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Investment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm">Fund Name</p>
                    <p className="text-white font-medium">{investmentDetails.fundName}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Investment Type</p>
                    <p className="text-white font-medium">{investmentDetails.investmentType}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Expected Return</p>
                    <p className="text-green-400 font-medium">{investmentDetails.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Risk Level</p>
                    <Badge className="bg-yellow-900/50 text-yellow-400 border-yellow-700">
                      {investmentDetails.riskLevel}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Investment Amount:</span>
                    <span className="text-white">RM {investmentDetails.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Management Fee:</span>
                    <span className="text-white">RM {investmentDetails.managementFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Processing Fee:</span>
                    <span className="text-white">RM {investmentDetails.processingFee.toLocaleString()}</span>
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Total Amount:</span>
                    <span className="text-yellow-400 font-bold text-xl">
                      RM {investmentDetails.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment Method:</span>
                    <span className="text-white">{investmentDetails.paymentMethod}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                    <p className="text-yellow-400 font-medium mb-2">Investment Terms</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Minimum holding period: 6 months</li>
                      <li>• Early withdrawal penalty: 2% of investment value</li>
                      <li>• Management fee charged annually</li>
                      <li>• Returns distributed quarterly</li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                    <p className="text-blue-400 font-medium mb-2">Next Steps</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Investment will be processed within 1-2 business days</li>
                      <li>• You&apos;ll receive email confirmation with investment certificate</li>
                      <li>• Track your investment performance in your dashboard</li>
                      <li>• Quarterly statements will be sent automatically</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Confirmation Panel */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Syariah Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">100% Halal Certified</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    This investment has been verified as fully Syariah-compliant by our Islamic advisory board.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">1-2 Business Days</p>
                    <p className="text-slate-400 text-sm">Investment processing time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleConfirmInvestment}
              disabled={isProcessing}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900 mr-2"></div>
                  Processing...
                </>
              ) : (
                "Confirm Investment"
              )}
            </Button>

            <p className="text-slate-400 text-xs text-center">
              By confirming, you agree to the terms and conditions and acknowledge the risks associated with this
              investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
