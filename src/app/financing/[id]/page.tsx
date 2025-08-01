"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Home,
  Car,
  GraduationCap,
  Building,
  Users,
  TrendingUp,
  Star,
  Shield,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Calculator,
  FileText,
  Award,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const financingProducts = {
  "home-murabaha": {
    id: "home-murabaha",
    name: "Home Financing (Murabaha)",
    icon: Home,
    principle: "Murabaha",
    rate: "3.5% - 4.2%",
    minAmount: "RM 50,000",
    maxAmount: "RM 2,000,000",
    tenure: "Up to 35 years",
    category: "property",
    description: "Syariah-compliant home financing based on Murabaha principle with cost-plus-profit structure",
    longDescription:
      "Our Home Financing (Murabaha) product is designed to help you achieve your dream of homeownership through a Syariah-compliant structure. Based on the Murabaha principle, this financing involves a cost-plus-profit sale where the bank purchases the property and sells it to you at an agreed price with a transparent profit margin.",
    features: [
      "No interest (Riba)",
      "Flexible repayment",
      "Quick approval",
      "Up to 90% financing",
      "Fixed or variable profit rates",
      "Early settlement rebate",
    ],
    rating: 4.8,
    applicants: 2847,
    approvalRate: 92,
    processingTime: "3-5 days",
    requirements: [
      "Malaysian citizen or permanent resident",
      "Age 21-65 years",
      "Minimum monthly income RM 3,000",
      "Good credit history",
      "Property valuation report",
      "Legal documentation",
    ],
    documents: [
      "IC copy (front & back)",
      "Latest 3 months salary slips",
      "Latest 6 months bank statements",
      "EPF statement",
      "Property purchase agreement",
      "Valuation report",
    ],
  },
  "vehicle-ijarah": {
    id: "vehicle-ijarah",
    name: "Vehicle Financing (Ijarah)",
    icon: Car,
    principle: "Ijarah",
    rate: "2.8% - 3.5%",
    minAmount: "RM 20,000",
    maxAmount: "RM 500,000",
    tenure: "Up to 9 years",
    category: "vehicle",
    description: "Islamic vehicle financing through Ijarah (leasing) structure with ownership transfer",
    longDescription:
      "Our Vehicle Financing (Ijarah) is based on the Islamic leasing principle where the bank purchases the vehicle and leases it to you. At the end of the lease period, ownership is transferred to you through a nominal sale or gift (Hibah).",
    features: [
      "Halal financing",
      "Competitive rates",
      "Fast processing",
      "New & used vehicles",
      "Flexible tenure",
      "Comprehensive insurance",
    ],
    rating: 4.7,
    applicants: 1923,
    approvalRate: 89,
    processingTime: "1-3 days",
    requirements: [
      "Malaysian citizen or permanent resident",
      "Age 21-65 years",
      "Minimum monthly income RM 2,000",
      "Valid driving license",
      "Good credit standing",
      "Vehicle inspection (for used cars)",
    ],
    documents: [
      "IC copy (front & back)",
      "Latest 3 months salary slips",
      "Latest 3 months bank statements",
      "Driving license copy",
      "Vehicle quotation/invoice",
      "Insurance quotation",
    ],
  },
  "education-murabaha": {
    id: "education-murabaha",
    name: "Education Financing",
    icon: GraduationCap,
    principle: "Murabaha",
    rate: "2.5% - 3.2%",
    minAmount: "RM 5,000",
    maxAmount: "RM 200,000",
    tenure: "Up to 15 years",
    category: "education",
    description: "Support your education goals with Syariah-compliant financing for local and overseas studies",
    longDescription:
      "Our Education Financing helps you pursue higher education through a Syariah-compliant Murabaha structure. Whether for local or overseas studies, this financing covers tuition fees, living expenses, and other educational costs.",
    features: [
      "Deferred payment",
      "Flexible terms",
      "No guarantor needed",
      "Study abroad support",
      "Grace period available",
      "Competitive rates",
    ],
    rating: 4.6,
    applicants: 856,
    approvalRate: 94,
    processingTime: "2-4 days",
    requirements: [
      "Malaysian citizen",
      "Age 18-55 years",
      "Accepted into recognized institution",
      "Good academic record",
      "Proof of admission",
      "Course fee structure",
    ],
    documents: [
      "IC copy (front & back)",
      "Academic transcripts",
      "Offer letter from institution",
      "Course fee structure",
      "Parents/guarantor income proof",
      "Bank statements",
    ],
  },
  "business-musharakah": {
    id: "business-musharakah",
    name: "Business Financing (Musharakah)",
    icon: Building,
    principle: "Musharakah",
    rate: "4.0% - 5.5%",
    minAmount: "RM 100,000",
    maxAmount: "RM 5,000,000",
    tenure: "Up to 20 years",
    category: "business",
    description: "Partnership-based business financing for entrepreneurs with profit-sharing structure",
    longDescription:
      "Our Business Financing (Musharakah) is based on a partnership principle where both the bank and customer contribute capital to the business venture. Profits and losses are shared according to the agreed ratio, making it a truly Islamic financing solution.",
    features: [
      "Profit sharing",
      "Business support",
      "Flexible structure",
      "Working capital",
      "Equipment financing",
      "Business advisory",
    ],
    rating: 4.5,
    applicants: 634,
    approvalRate: 78,
    processingTime: "5-10 days",
    requirements: [
      "Malaysian registered business",
      "Minimum 2 years operation",
      "Good business track record",
      "Viable business plan",
      "Financial statements",
      "Business licenses",
    ],
    documents: [
      "Business registration (SSM)",
      "Latest 2 years audited accounts",
      "Business plan",
      "Cash flow projections",
      "Directors' IC copies",
      "Business licenses",
    ],
  },
  "personal-tawarruq": {
    id: "personal-tawarruq",
    name: "Personal Financing (Tawarruq)",
    icon: Users,
    principle: "Tawarruq",
    rate: "3.8% - 6.2%",
    minAmount: "RM 5,000",
    maxAmount: "RM 150,000",
    tenure: "Up to 10 years",
    category: "personal",
    description: "Syariah-compliant personal financing for various needs through Tawarruq structure",
    longDescription:
      "Our Personal Financing (Tawarruq) provides you with funds for various personal needs through a Syariah-compliant commodity trading structure. This financing can be used for home renovation, medical expenses, travel, or other personal requirements.",
    features: [
      "Quick approval",
      "Minimal documentation",
      "Flexible usage",
      "Competitive rates",
      "No collateral required",
      "Fast disbursement",
    ],
    rating: 4.4,
    applicants: 1456,
    approvalRate: 85,
    processingTime: "1-2 days",
    requirements: [
      "Malaysian citizen or permanent resident",
      "Age 21-60 years",
      "Minimum monthly income RM 2,500",
      "Good credit history",
      "Stable employment",
      "Debt service ratio below 70%",
    ],
    documents: [
      "IC copy (front & back)",
      "Latest 3 months salary slips",
      "Latest 6 months bank statements",
      "EPF statement",
      "Employment letter",
      "Latest tax return (if applicable)",
    ],
  },
  "working-capital-murabaha": {
    id: "working-capital-murabaha",
    name: "Working Capital (Murabaha)",
    icon: TrendingUp,
    principle: "Murabaha",
    rate: "3.2% - 4.8%",
    minAmount: "RM 50,000",
    maxAmount: "RM 1,000,000",
    tenure: "Up to 5 years",
    category: "business",
    description: "Short-term business financing for working capital needs based on Murabaha principle",
    longDescription:
      "Our Working Capital (Murabaha) financing provides businesses with the necessary funds to manage day-to-day operations, purchase inventory, and maintain cash flow through a Syariah-compliant Murabaha structure.",
    features: [
      "Fast disbursement",
      "Revolving facility",
      "Trade financing",
      "Cash flow support",
      "Flexible repayment",
      "Competitive rates",
    ],
    rating: 4.3,
    applicants: 789,
    approvalRate: 82,
    processingTime: "2-3 days",
    requirements: [
      "Malaysian registered business",
      "Minimum 1 year operation",
      "Good business performance",
      "Regular cash flow",
      "Business bank account",
      "Trade documents",
    ],
    documents: [
      "Business registration (SSM)",
      "Latest 12 months bank statements",
      "Management accounts",
      "Trade documents",
      "Directors' IC copies",
      "Business profile",
    ],
  },
}

export default function FinancingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = financingProducts[id as keyof typeof financingProducts]

  if (!product) {
    notFound()
  }

  const IconComponent = product.icon

  const reviews = [
    {
      name: "Ahmad Rahman",
      rating: 5,
      comment: "Excellent service and truly Syariah-compliant. The process was smooth and transparent.",
      date: "2024-01-15",
    },
    {
      name: "Siti Nurhaliza",
      rating: 4,
      comment: "Good financing option with competitive rates. Staff were very helpful throughout.",
      date: "2024-01-10",
    },
    {
      name: "Muhammad Ali",
      rating: 5,
      comment: "Fast approval and great customer service. Highly recommended for Islamic financing.",
      date: "2024-01-05",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/financing"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Financing
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Header */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-white mb-2">{product.name}</h1>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">{product.principle}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white ml-1 font-medium">{product.rating}</span>
                          <span className="text-slate-400 ml-1">({product.applicants} reviews)</span>
                        </div>
                        <Badge className="bg-blue-900/50 text-blue-400 border-blue-700">
                          <Shield className="w-3 h-3 mr-1" />
                          Syariah Compliant
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">{product.longDescription}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-slate-400 text-sm">Profit Rate</p>
                    <p className="text-white font-bold text-lg">{product.rate}</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-slate-400 text-sm">Max Amount</p>
                    <p className="text-white font-bold text-lg">{product.maxAmount}</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-slate-400 text-sm">Tenure</p>
                    <p className="text-white font-bold text-lg">{product.tenure}</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-slate-400 text-sm">Processing</p>
                    <p className="text-white font-bold text-lg">{product.processingTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features & Benefits */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Features & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Application Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-yellow-400 text-sm font-medium">{index + 1}</span>
                      </div>
                      <span className="text-slate-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Syariah Compliance */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Syariah Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  This product has been approved by our Syariah Advisory Council and complies with Islamic banking
                  principles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                    <Award className="w-5 h-5 text-green-400 mr-3" />
                    <div>
                      <p className="text-green-400 font-medium">Syariah Approved</p>
                      <p className="text-slate-400 text-sm">Certified by Islamic scholars</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                    <FileText className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-blue-400 font-medium">Documentation</p>
                      <p className="text-slate-400 text-sm">Full compliance certificates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Reviews */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-yellow-400 font-medium text-sm">{review.name.charAt(0)}</span>
                        </div>
                        <span className="text-white font-medium">{review.name}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">{review.comment}</p>
                    <p className="text-slate-400 text-xs mt-2">{review.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Calculator */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Quick Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="amount" className="text-slate-300">
                    Amount (RM)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="100,000"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="tenure" className="text-slate-300">
                    Tenure (Years)
                  </Label>
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="25"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">Calculate</Button>
                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <p className="text-slate-400 text-sm">Estimated Monthly Payment</p>
                  <p className="text-2xl font-bold text-white">RM 1,850</p>
                </div>
              </CardContent>
            </Card>

            {/* Application Stats */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Application Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Applicants</span>
                  <span className="text-white font-semibold">{product.applicants}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Approval Rate</span>
                  <span className="text-green-400 font-semibold">{product.approvalRate}%</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">Success Rate</span>
                    <span className="text-slate-400">{product.approvalRate}%</span>
                  </div>
                  <Progress value={product.approvalRate} className="h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Processing Time</span>
                  <span className="text-white font-semibold">{product.processingTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.documents.map((document, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <FileText className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                      <span className="text-slate-300">{document}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                <Link href={`/financing/${product.id}/apply`}>Apply Now</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 mr-3" />
                  <span className="text-slate-300">1-300-88-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 mr-3" />
                  <span className="text-slate-300">financing@syariahbank.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-slate-400 mr-3" />
                  <span className="text-slate-300">Mon-Fri: 9AM-6PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}