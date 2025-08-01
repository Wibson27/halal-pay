"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ArrowLeft, DollarSign, Calculator, Shield, AlertTriangle, CheckCircle, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function InvestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [investmentType, setInvestmentType] = useState("one-time")
  const [monthlyAmount, setMonthlyAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [agreements, setAgreements] = useState({
    terms: false,
    riskDisclosure: false,
    syariahCompliance: false,
  })

  // Mock investment data
  const investment = {
    name: "Syariah Equity Fund",
    minInvestment: 1000,
    managementFee: 1.5,
    expectedReturn: "15-20%",
    riskLevel: "Medium",
  }

  const calculateFees = (amount: number) => {
    const managementFee = (amount * investment.managementFee) / 100
    const processingFee = Math.min(amount * 0.001, 50) // 0.1% capped at RM50
    return { managementFee, processingFee, total: managementFee + processingFee }
  }

  const fees = investmentAmount
    ? calculateFees(Number.parseFloat(investmentAmount))
    : { managementFee: 0, processingFee: 0, total: 0 }
  const totalAmount = investmentAmount ? Number.parseFloat(investmentAmount) + fees.total : 0

  const quickAmounts = [1000, 5000, 10000, 25000, 50000]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href={`/investments/${id}`}
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Fund Details
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Invest in {investment.name}</h1>
          <p className="text-slate-400">Complete your investment application</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Investment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investment Type */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Investment Type</CardTitle>
                <CardDescription>Choose how you want to invest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      investmentType === "one-time"
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-slate-600 bg-slate-700/30"
                    }`}
                    onClick={() => setInvestmentType("one-time")}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          investmentType === "one-time" ? "border-yellow-400 bg-yellow-400" : "border-slate-400"
                        }`}
                      ></div>
                      <div>
                        <p className="text-white font-medium">One-time Investment</p>
                        <p className="text-slate-400 text-sm">Make a single investment</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      investmentType === "monthly"
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-slate-600 bg-slate-700/30"
                    }`}
                    onClick={() => setInvestmentType("monthly")}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          investmentType === "monthly" ? "border-yellow-400 bg-yellow-400" : "border-slate-400"
                        }`}
                      ></div>
                      <div>
                        <p className="text-white font-medium">Monthly Investment</p>
                        <p className="text-slate-400 text-sm">Regular monthly contributions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Amount */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Investment Amount
                </CardTitle>
                <CardDescription>Minimum investment: RM {investment.minInvestment.toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="amount" className="text-slate-300">
                    {investmentType === "monthly" ? "Monthly" : "One-time"} Investment Amount (RM)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={investmentType === "monthly" ? monthlyAmount : investmentAmount}
                    onChange={(e) =>
                      investmentType === "monthly"
                        ? setMonthlyAmount(e.target.value)
                        : setInvestmentAmount(e.target.value)
                    }
                    className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  />
                </div>

                {investmentType === "one-time" && (
                  <div>
                    <p className="text-slate-300 text-sm mb-3">Quick amounts:</p>
                    <div className="grid grid-cols-5 gap-2">
                      {quickAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className="border-slate-600 text-slate-300 bg-transparent hover:border-yellow-400 hover:text-yellow-400"
                          onClick={() => setInvestmentAmount(amount.toString())}
                        >
                          {amount >= 1000 ? `${amount / 1000}K` : amount}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {investmentType === "monthly" && (
                  <div>
                    <Label htmlFor="initial-amount" className="text-slate-300">
                      Initial Investment Amount (RM) - Optional
                    </Label>
                    <Input
                      id="initial-amount"
                      type="number"
                      placeholder="Enter initial amount"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setPaymentMethod}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                    <SelectItem value="online-banking">Online Banking</SelectItem>
                    <SelectItem value="debit-card">Debit Card</SelectItem>
                    <SelectItem value="fpx">FPX</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Agreements */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Terms & Agreements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreements.terms}
                    onCheckedChange={(checked) => setAgreements((prev) => ({ ...prev, terms: checked as boolean }))}
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="terms" className="text-slate-300 text-sm leading-relaxed">
                    I have read and agree to the{" "}
                    <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/fund-prospectus" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Fund Prospectus
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="risk"
                    checked={agreements.riskDisclosure}
                    onCheckedChange={(checked) =>
                      setAgreements((prev) => ({ ...prev, riskDisclosure: checked as boolean }))
                    }
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="risk" className="text-slate-300 text-sm leading-relaxed">
                    I acknowledge the{" "}
                    <Link href="/risk-disclosure" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Risk Disclosure Statement
                    </Link>{" "}
                    and understand that investments may lose value
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="syariah"
                    checked={agreements.syariahCompliance}
                    onCheckedChange={(checked) =>
                      setAgreements((prev) => ({ ...prev, syariahCompliance: checked as boolean }))
                    }
                    className="border-slate-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 mt-1"
                  />
                  <Label htmlFor="syariah" className="text-slate-300 text-sm leading-relaxed">
                    I confirm this investment aligns with my Islamic investment principles and Syariah compliance
                    requirements
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Summary */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Investment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fund:</span>
                    <span className="text-white font-medium">{investment.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Investment Type:</span>
                    <span className="text-white">{investmentType === "monthly" ? "Monthly" : "One-time"}</span>
                  </div>
                  {investmentType === "monthly" && monthlyAmount && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monthly Amount:</span>
                      <span className="text-white font-bold">
                        RM {Number.parseFloat(monthlyAmount).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {investmentAmount && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          {investmentType === "monthly" ? "Initial" : ""} Investment:
                        </span>
                        <span className="text-white font-bold">
                          RM {Number.parseFloat(investmentAmount).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Management Fee ({investment.managementFee}%):</span>
                        <span className="text-white">RM {fees.managementFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Processing Fee:</span>
                        <span className="text-white">RM {fees.processingFee.toFixed(2)}</span>
                      </div>
                      <Separator className="bg-slate-700" />
                      <div className="flex justify-between">
                        <span className="text-white font-medium">Total Amount:</span>
                        <span className="text-yellow-400 font-bold text-lg">RM {totalAmount.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

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
                    <span className="text-green-400 font-medium">100% Halal Investment</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    This fund is fully Syariah-compliant and regularly reviewed by our Islamic advisory board.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p>• Investments are subject to market risks</p>
                  <p>• Past performance does not guarantee future results</p>
                  <p>• Minimum investment period: 6 months</p>
                  <p>• Early withdrawal may incur penalties</p>
                  <p>• Returns are not guaranteed</p>
                </div>
              </CardContent>
            </Card>

            <Link href={`/investments/${id}/invest/confirm`}>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3"
                disabled={
                  !investmentAmount ||
                  !paymentMethod ||
                  !agreements.terms ||
                  !agreements.riskDisclosure ||
                  !agreements.syariahCompliance
                }
              >
                Proceed to Payment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
