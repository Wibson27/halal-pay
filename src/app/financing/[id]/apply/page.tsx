"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Car,
  GraduationCap,
  Building,
  Users,
  TrendingUp,
  Upload,
  CheckCircle,
  Calculator,
  FileText,
  Shield,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const financingProducts = {
  "home-murabaha": {
    id: "home-murabaha",
    name: "Home Financing (Murabaha)",
    icon: Home,
    principle: "Murabaha",
    rate: "3.5% - 4.2%",
    minAmount: 50000,
    maxAmount: 2000000,
    tenure: "Up to 35 years",
    category: "property",
    description: "Syariah-compliant home financing based on Murabaha principle",
    processingFee: 0.5,
    stampDuty: 0.1,
    legalFee: 0.2,
  },
  "vehicle-ijarah": {
    id: "vehicle-ijarah",
    name: "Vehicle Financing (Ijarah)",
    icon: Car,
    principle: "Ijarah",
    rate: "2.8% - 3.5%",
    minAmount: 20000,
    maxAmount: 500000,
    tenure: "Up to 9 years",
    category: "vehicle",
    description: "Islamic vehicle financing through Ijarah (leasing) structure",
    processingFee: 0.3,
    stampDuty: 0.05,
    legalFee: 0.1,
  },
  "education-murabaha": {
    id: "education-murabaha",
    name: "Education Financing",
    icon: GraduationCap,
    principle: "Murabaha",
    rate: "2.5% - 3.2%",
    minAmount: 5000,
    maxAmount: 200000,
    tenure: "Up to 15 years",
    category: "education",
    description: "Support your education goals with Syariah-compliant financing",
    processingFee: 0.2,
    stampDuty: 0.05,
    legalFee: 0.1,
  },
  "business-musharakah": {
    id: "business-musharakah",
    name: "Business Financing (Musharakah)",
    icon: Building,
    principle: "Musharakah",
    rate: "4.0% - 5.5%",
    minAmount: 100000,
    maxAmount: 5000000,
    tenure: "Up to 20 years",
    category: "business",
    description: "Partnership-based business financing for entrepreneurs",
    processingFee: 0.8,
    stampDuty: 0.2,
    legalFee: 0.3,
  },
  "personal-tawarruq": {
    id: "personal-tawarruq",
    name: "Personal Financing (Tawarruq)",
    icon: Users,
    principle: "Tawarruq",
    rate: "3.8% - 6.2%",
    minAmount: 5000,
    maxAmount: 150000,
    tenure: "Up to 10 years",
    category: "personal",
    description: "Syariah-compliant personal financing for various needs",
    processingFee: 0.3,
    stampDuty: 0.1,
    legalFee: 0.1,
  },
  "working-capital-murabaha": {
    id: "working-capital-murabaha",
    name: "Working Capital (Murabaha)",
    icon: TrendingUp,
    principle: "Murabaha",
    rate: "3.2% - 4.8%",
    minAmount: 50000,
    maxAmount: 1000000,
    tenure: "Up to 5 years",
    category: "business",
    description: "Short-term business financing for working capital needs",
    processingFee: 0.4,
    stampDuty: 0.1,
    legalFee: 0.2,
  },
}

export default function FinancingApplicationPage({ params }: { params: { id: string } }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    icNumber: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    maritalStatus: "",

    // Employment Details
    employmentType: "",
    companyName: "",
    position: "",
    monthlyIncome: "",
    workExperience: "",

    // Financing Details
    financingAmount: "",
    tenure: "",
    purpose: "",

    // Terms
    agreeToTerms: false,
    agreeToCredit: false,
    agreeToMarketing: false,
  })

  const product = financingProducts[params.id as keyof typeof financingProducts]

  if (!product) {
    notFound()
  }

  const IconComponent = product.icon
  const totalSteps = 5
  const progressPercentage = (currentStep / totalSteps) * 100

  // Calculate fees
  const amount = Number.parseFloat(formData.financingAmount) || 0
  const processingFee = amount * (product.processingFee / 100)
  const stampDuty = amount * (product.stampDuty / 100)
  const legalFee = amount * (product.legalFee / 100)
  const totalFees = processingFee + stampDuty + legalFee
  const totalAmount = amount + totalFees

  // Calculate monthly payment (simplified calculation)
  const tenureYears = Number.parseInt(formData.tenure) || 1
  const rate = Number.parseFloat(product.rate.split(" - ")[0]) / 100
  const monthlyRate = rate / 12
  const totalMonths = tenureYears * 12
  const monthlyPayment =
    amount > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Navigate to confirmation page
    window.location.href = `/financing/${product.id}/apply/confirm`
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-slate-300">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="icNumber" className="text-slate-300">
                    IC Number *
                  </Label>
                  <Input
                    id="icNumber"
                    value={formData.icNumber}
                    onChange={(e) => handleInputChange("icNumber", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="123456-78-9012"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-300">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="01X-XXX XXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address" className="text-slate-300">
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter your full address"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-slate-300">
                    City *
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-slate-300">
                    State *
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="selangor">Selangor</SelectItem>
                      <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                      <SelectItem value="johor">Johor</SelectItem>
                      <SelectItem value="penang">Penang</SelectItem>
                      <SelectItem value="perak">Perak</SelectItem>
                      <SelectItem value="kedah">Kedah</SelectItem>
                      <SelectItem value="kelantan">Kelantan</SelectItem>
                      <SelectItem value="terengganu">Terengganu</SelectItem>
                      <SelectItem value="pahang">Pahang</SelectItem>
                      <SelectItem value="negeri-sembilan">Negeri Sembilan</SelectItem>
                      <SelectItem value="melaka">Melaka</SelectItem>
                      <SelectItem value="perlis">Perlis</SelectItem>
                      <SelectItem value="sabah">Sabah</SelectItem>
                      <SelectItem value="sarawak">Sarawak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="postcode" className="text-slate-300">
                    Postcode *
                  </Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => handleInputChange("postcode", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="12345"
                  />
                </div>
                <div>
                  <Label htmlFor="maritalStatus" className="text-slate-300">
                    Marital Status *
                  </Label>
                  <Select
                    value={formData.maritalStatus}
                    onValueChange={(value) => handleInputChange("maritalStatus", value)}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Employment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employmentType" className="text-slate-300">
                    Employment Type *
                  </Label>
                  <Select
                    value={formData.employmentType}
                    onValueChange={(value) => handleInputChange("employmentType", value)}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="permanent">Permanent Employee</SelectItem>
                      <SelectItem value="contract">Contract Employee</SelectItem>
                      <SelectItem value="self-employed">Self Employed</SelectItem>
                      <SelectItem value="business-owner">Business Owner</SelectItem>
                      <SelectItem value="government">Government Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="companyName" className="text-slate-300">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-slate-300">
                    Position *
                  </Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter your position"
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyIncome" className="text-slate-300">
                    Monthly Income (RM) *
                  </Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={formData.monthlyIncome}
                    onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="5000"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="workExperience" className="text-slate-300">
                    Work Experience *
                  </Label>
                  <Select
                    value={formData.workExperience}
                    onValueChange={(value) => handleInputChange("workExperience", value)}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select work experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="more-than-10">More than 10 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Financing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="financingAmount" className="text-slate-300">
                    Financing Amount (RM) *
                  </Label>
                  <Input
                    id="financingAmount"
                    type="number"
                    value={formData.financingAmount}
                    onChange={(e) => handleInputChange("financingAmount", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder={`Min: ${product.minAmount.toLocaleString()}`}
                    min={product.minAmount}
                    max={product.maxAmount}
                  />
                  <p className="text-slate-400 text-sm mt-1">
                    Range: RM {product.minAmount.toLocaleString()} - RM {product.maxAmount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <Label htmlFor="tenure" className="text-slate-300">
                    Tenure (Years) *
                  </Label>
                  <Select value={formData.tenure} onValueChange={(value) => handleInputChange("tenure", value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select tenure" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        {
                          length:
                            product.category === "business"
                              ? 20
                              : product.category === "education"
                                ? 15
                                : product.category === "property"
                                  ? 35
                                  : 10,
                        },
                        (_, i) => i + 1,
                      ).map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year} year{year > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="purpose" className="text-slate-300">
                    Purpose of Financing *
                  </Label>
                  <Textarea
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => handleInputChange("purpose", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Please describe the purpose of this financing"
                  />
                </div>
              </div>

              {/* Real-time Calculator */}
              {amount > 0 && (
                <Card className="bg-slate-700/30 border-slate-600 mt-6">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Financing Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-sm">Financing Amount</p>
                        <p className="text-white font-semibold">RM {amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Monthly Payment</p>
                        <p className="text-white font-semibold">
                          RM {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Processing Fee ({product.processingFee}%)</p>
                        <p className="text-white font-semibold">RM {processingFee.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Total Fees</p>
                        <p className="text-white font-semibold">RM {totalFees.toLocaleString()}</p>
                      </div>
                    </div>
                    <Separator className="bg-slate-600" />
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">Total Amount</span>
                      <span className="text-yellow-400 font-bold text-lg">RM {totalAmount.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Upload</h3>
              <p className="text-slate-400 mb-6">Please upload the required documents for your application.</p>

              <div className="space-y-4">
                {[
                  "IC Copy (Front & Back)",
                  "Latest 3 Months Salary Slips",
                  "Latest 6 Months Bank Statements",
                  "EPF Statement",
                  "Employment Letter",
                  "Additional Supporting Documents",
                ].map((document, index) => (
                  <div key={index} className="p-4 border-2 border-dashed border-slate-600 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-slate-400 mr-3" />
                        <span className="text-slate-300">{document}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Document Guidelines</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• All documents must be clear and legible</li>
                      <li>• Accepted formats: PDF, JPG, PNG (Max 5MB each)</li>
                      <li>• Ensure all pages are included for multi-page documents</li>
                      <li>• Documents should be recent (within 3 months)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Review & Submit</h3>

              {/* Application Summary */}
              <Card className="bg-slate-700/30 border-slate-600 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Application Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">Product</p>
                      <p className="text-white font-semibold">{product.name}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Principle</p>
                      <Badge className="bg-green-900/50 text-green-400 border-green-700">{product.principle}</Badge>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Applicant</p>
                      <p className="text-white font-semibold">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">IC Number</p>
                      <p className="text-white font-semibold">{formData.icNumber}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Financing Amount</p>
                      <p className="text-white font-semibold">
                        RM {Number.parseFloat(formData.financingAmount || "0").toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Tenure</p>
                      <p className="text-white font-semibold">{formData.tenure} years</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Monthly Payment</p>
                      <p className="text-yellow-400 font-bold">
                        RM {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Monthly Income</p>
                      <p className="text-white font-semibold">
                        RM {Number.parseFloat(formData.monthlyIncome || "0").toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="bg-slate-700/30 border-slate-600 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="terms" className="text-slate-300 cursor-pointer">
                        I agree to the Terms and Conditions and Product Disclosure Sheet *
                      </Label>
                      <p className="text-slate-400 text-sm mt-1">
                        By checking this box, you acknowledge that you have read and understood all terms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="credit"
                      checked={formData.agreeToCredit}
                      onCheckedChange={(checked) => handleInputChange("agreeToCredit", checked as boolean)}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="credit" className="text-slate-300 cursor-pointer">
                        I consent to credit bureau checks and verification *
                      </Label>
                      <p className="text-slate-400 text-sm mt-1">
                        This allows us to verify your credit history and financial standing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) => handleInputChange("agreeToMarketing", checked as boolean)}
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="marketing" className="text-slate-300 cursor-pointer">
                        I agree to receive marketing communications (Optional)
                      </Label>
                      <p className="text-slate-400 text-sm mt-1">
                        Receive updates about new products and special offers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Syariah Compliance Confirmation */}
              <Card className="bg-green-900/20 border-green-700/30">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <h4 className="text-green-400 font-medium">Syariah Compliance Confirmation</h4>
                      <p className="text-slate-300 text-sm">
                        This financing product has been approved by our Syariah Advisory Council and complies with
                        Islamic banking principles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href={`/financing/${product.id}`}
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Product Details
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
              <IconComponent className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{product.name}</h1>
              <p className="text-slate-400">Complete your application in {totalSteps} simple steps</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-8">
            {[
              { step: 1, title: "Personal Info", icon: Users },
              { step: 2, title: "Employment", icon: Building },
              { step: 3, title: "Financing", icon: Calculator },
              { step: 4, title: "Documents", icon: Upload },
              { step: 5, title: "Review", icon: CheckCircle },
            ].map(({ step, title, icon: StepIcon }) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step <= currentStep ? "bg-yellow-400 text-slate-900" : "bg-slate-700 text-slate-400"
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <span className={`text-xs ${step <= currentStep ? "text-yellow-400" : "text-slate-400"}`}>{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 disabled:opacity-50 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms || !formData.agreeToCredit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 disabled:opacity-50"
                >
                  Submit Application
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-slate-400 mr-3" />
                <div>
                  <p className="text-white font-medium">Need Help?</p>
                  <p className="text-slate-400 text-sm">Our team is here to assist you</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Call Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
