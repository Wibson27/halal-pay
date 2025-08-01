"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Home,
  Car,
  GraduationCap,
  Building,
  Calculator,
  CheckCircle,
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FinancingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("rate")

  const financingProducts = [
    {
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
      features: ["No interest (Riba)", "Flexible repayment", "Quick approval", "Up to 90% financing"],
      rating: 4.8,
      applicants: 2847,
      approvalRate: 92,
      processingTime: "3-5 days",
    },
    {
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
      features: ["Halal financing", "Competitive rates", "Fast processing", "New & used vehicles"],
      rating: 4.7,
      applicants: 1923,
      approvalRate: 89,
      processingTime: "1-3 days",
    },
    {
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
      features: ["Deferred payment", "Flexible terms", "No guarantor needed", "Study abroad support"],
      rating: 4.6,
      applicants: 856,
      approvalRate: 94,
      processingTime: "2-4 days",
    },
    {
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
      features: ["Profit sharing", "Business support", "Flexible structure", "Working capital"],
      rating: 4.5,
      applicants: 634,
      approvalRate: 78,
      processingTime: "5-10 days",
    },
    {
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
      features: ["Quick approval", "Minimal documentation", "Flexible usage", "Competitive rates"],
      rating: 4.4,
      applicants: 1456,
      approvalRate: 85,
      processingTime: "1-2 days",
    },
    {
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
      features: ["Fast disbursement", "Revolving facility", "Trade financing", "Cash flow support"],
      rating: 4.3,
      applicants: 789,
      approvalRate: 82,
      processingTime: "2-3 days",
    },
  ]

  const activeFinancing = [
    {
      id: "home-001",
      type: "Home Financing (Murabaha)",
      amount: "RM 450,000",
      outstanding: "RM 320,000",
      monthlyPayment: "RM 2,150",
      nextPayment: "2024-02-01",
      progress: 29,
      status: "Active",
    },
    {
      id: "vehicle-002",
      type: "Vehicle Financing (Ijarah)",
      amount: "RM 85,000",
      outstanding: "RM 45,000",
      monthlyPayment: "RM 1,200",
      nextPayment: "2024-02-05",
      progress: 47,
      status: "Active",
    },
  ]

  const filteredProducts = financingProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.principle.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rate":
          return Number.parseFloat(a.rate.split(" - ")[0]) - Number.parseFloat(b.rate.split(" - ")[0])
        case "rating":
          return b.rating - a.rating
        case "applicants":
          return b.applicants - a.applicants
        case "approval":
          return b.approvalRate - a.approvalRate
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto p-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Islamic Financing</h1>
          <p className="text-slate-400">Explore Syariah-compliant financing solutions for your needs</p>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="marketplace"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Financing Marketplace
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              My Financing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search and Filters */}
              <div className="lg:col-span-1">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-6">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Search & Filter
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="search" className="text-slate-300">
                        Search Products
                      </Label>
                      <Input
                        id="search"
                        placeholder="Search financing products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300">Category</Label>
                      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="property">Property</SelectItem>
                          <SelectItem value="vehicle">Vehicle</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-slate-300">Sort By</Label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rate">Profit Rate</SelectItem>
                          <SelectItem value="rating">Rating</SelectItem>
                          <SelectItem value="applicants">Popularity</SelectItem>
                          <SelectItem value="approval">Approval Rate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Financing Calculator */}
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
                      <Label htmlFor="rate" className="text-slate-300">
                        Rate (%)
                      </Label>
                      <Input
                        id="rate"
                        type="number"
                        placeholder="3.5"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tenure" className="text-slate-300">
                        Years
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
                      <p className="text-slate-400 text-sm">Monthly Payment</p>
                      <p className="text-xl font-bold text-white">RM 1,850</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Financing Products */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">Available Products ({filteredProducts.length})</h2>
                  {filteredProducts.length === 0 && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("")
                        setCategoryFilter("all")
                      }}
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>

                {filteredProducts.length === 0 ? (
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardContent className="text-center py-12">
                      <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-white text-lg font-medium mb-2">No products found</h3>
                      <p className="text-slate-400">Try adjusting your search or filter criteria</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => {
                      const IconComponent = product.icon
                      return (
                        <Card
                          key={product.id}
                          className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center">
                                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mr-4">
                                  <IconComponent className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                  <h3 className="text-white font-semibold">{product.name}</h3>
                                  <div className="flex items-center mt-1">
                                    <Badge className="bg-green-900/50 text-green-400 border-green-700 mr-2">
                                      {product.principle}
                                    </Badge>
                                    <div className="flex items-center">
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                      <span className="text-slate-300 text-sm ml-1">{product.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-900/50 text-blue-400 border-blue-700">
                                <Shield className="w-3 h-3 mr-1" />
                                Syariah
                              </Badge>
                            </div>

                            <p className="text-slate-300 text-sm mb-4 line-clamp-2">{product.description}</p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-slate-400 text-xs">Profit Rate</p>
                                <p className="text-white font-semibold">{product.rate}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 text-xs">Max Amount</p>
                                <p className="text-white font-semibold">{product.maxAmount}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 text-xs">Tenure</p>
                                <p className="text-white font-semibold">{product.tenure}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 text-xs">Processing</p>
                                <p className="text-white font-semibold">{product.processingTime}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center text-sm text-slate-400">
                                <Users className="w-4 h-4 mr-1" />
                                {product.applicants} applicants
                              </div>
                              <div className="text-sm text-slate-400">{product.approvalRate}% approval rate</div>
                            </div>

                            <div className="space-y-2 mb-4">
                              {product.features.slice(0, 2).map((feature, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  <span className="text-slate-300">{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-2">
                              <Button
                                asChild
                                variant="outline"
                                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                              >
                                <Link href={`/financing/${product.id}`}>View Details</Link>
                              </Button>
                              <Button asChild className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                                <Link href={`/financing/${product.id}/apply`}>Apply Now</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Portfolio Summary */}
              <div className="lg:col-span-1">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Portfolio Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <p className="text-slate-400 text-sm">Total Financing</p>
                      <p className="text-2xl font-bold text-white">RM 535,000</p>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <p className="text-slate-400 text-sm">Outstanding Balance</p>
                      <p className="text-2xl font-bold text-white">RM 365,000</p>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <p className="text-slate-400 text-sm">Monthly Payments</p>
                      <p className="text-2xl font-bold text-white">RM 3,350</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Active Financing */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Active Financing</CardTitle>
                    <CardDescription>Your current financing agreements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeFinancing.map((financing) => (
                      <div key={financing.id} className="p-6 bg-slate-700/30 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-white font-semibold">{financing.type}</h3>
                            <p className="text-slate-400 text-sm">Outstanding: {financing.outstanding}</p>
                          </div>
                          <Badge className="bg-green-900/50 text-green-400 border-green-700">{financing.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-slate-400 text-sm">Total Amount</p>
                            <p className="text-white font-semibold">{financing.amount}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm">Monthly Payment</p>
                            <p className="text-white font-semibold">{financing.monthlyPayment}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-400">Repayment Progress</span>
                            <span className="text-slate-400">{financing.progress}% completed</span>
                          </div>
                          <Progress value={financing.progress} className="h-2" />
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-slate-400 text-sm">Next Payment: {financing.nextPayment}</p>
                          <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                            Make Payment
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
