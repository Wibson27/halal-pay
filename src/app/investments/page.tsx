"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  TrendingUp,
  PieChart,
  DollarSign,
  Shield,
  Calendar,
  Star,
  Search,
  SlidersHorizontal,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRisk, setSelectedRisk] = useState("all")
  const [sortBy, setSortBy] = useState("performance")

  const portfolioData = {
    totalValue: "RM 125,450",
    totalReturn: "+18.5%",
    monthlyReturn: "+2.3%",
    riskLevel: "Moderate",
  }

  // Current user investments
  const myInvestments = [
    {
      name: "Syariah Equity Fund",
      type: "Mutual Fund",
      amount: "RM 45,000",
      return: "+22.5%",
      risk: "High",
      allocation: 36,
    },
    {
      name: "Islamic Sukuk Bond",
      type: "Sukuk",
      amount: "RM 35,000",
      return: "+8.2%",
      risk: "Low",
      allocation: 28,
    },
    {
      name: "Halal REIT Fund",
      type: "REIT",
      amount: "RM 25,450",
      return: "+15.8%",
      risk: "Medium",
      allocation: 20,
    },
    {
      name: "Gold Investment Account",
      type: "Commodity",
      amount: "RM 20,000",
      return: "+12.1%",
      risk: "Medium",
      allocation: 16,
    },
  ]

  // All available investments
  const allInvestments = [
    {
      id: "syariah-equity-fund",
      name: "Syariah Equity Fund",
      type: "Mutual Fund",
      category: "Equity",
      expectedReturn: "15-20%",
      minInvestment: 1000,
      risk: "High",
      rating: 4.5,
      totalInvestors: 2847,
      fundSize: "RM 125.5M",
      performance1Y: "+18.7%",
      description: "Diversified Syariah-compliant equity fund investing in carefully screened halal stocks.",
    },
    {
      id: "islamic-sukuk-bond",
      name: "Islamic Sukuk Bond",
      type: "Sukuk",
      category: "Fixed Income",
      expectedReturn: "6-8%",
      minInvestment: 5000,
      risk: "Low",
      rating: 4.8,
      totalInvestors: 1523,
      fundSize: "RM 89.2M",
      performance1Y: "+7.2%",
      description: "Government and corporate sukuk bonds providing stable returns with low risk.",
    },
    {
      id: "halal-reit-fund",
      name: "Halal REIT Fund",
      type: "REIT",
      category: "Real Estate",
      expectedReturn: "12-16%",
      minInvestment: 2500,
      risk: "Medium",
      rating: 4.3,
      totalInvestors: 934,
      fundSize: "RM 67.8M",
      performance1Y: "+14.5%",
      description: "Real Estate Investment Trust focusing on Syariah-compliant properties.",
    },
    {
      id: "gold-investment-account",
      name: "Gold Investment Account",
      type: "Commodity",
      category: "Precious Metals",
      expectedReturn: "8-12%",
      minInvestment: 500,
      risk: "Medium",
      rating: 4.6,
      totalInvestors: 3421,
      fundSize: "RM 156.3M",
      performance1Y: "+11.8%",
      description: "Physical gold investment account with flexible buying and selling options.",
    },
    {
      id: "esg-syariah-fund",
      name: "ESG Syariah Fund",
      type: "Mutual Fund",
      category: "ESG",
      expectedReturn: "14-18%",
      minInvestment: 1000,
      risk: "Medium",
      rating: 4.4,
      totalInvestors: 1876,
      fundSize: "RM 92.1M",
      performance1Y: "+16.3%",
      description: "Environmental, Social, and Governance focused Syariah-compliant investments.",
    },
    {
      id: "islamic-technology-fund",
      name: "Islamic Technology Fund",
      type: "Mutual Fund",
      category: "Technology",
      expectedReturn: "18-25%",
      minInvestment: 5000,
      risk: "High",
      rating: 4.2,
      totalInvestors: 756,
      fundSize: "RM 43.7M",
      performance1Y: "+23.1%",
      description: "High-growth technology companies that comply with Islamic investment principles.",
    },
    {
      id: "syariah-fixed-deposit",
      name: "Syariah Fixed Deposit",
      type: "Fixed Deposit",
      category: "Fixed Income",
      expectedReturn: "4-6%",
      minInvestment: 1000,
      risk: "Low",
      rating: 4.9,
      totalInvestors: 5432,
      fundSize: "RM 234.5M",
      performance1Y: "+5.2%",
      description: "Guaranteed returns through Islamic banking fixed deposit with flexible terms.",
    },
    {
      id: "halal-healthcare-fund",
      name: "Halal Healthcare Fund",
      type: "Mutual Fund",
      category: "Healthcare",
      expectedReturn: "13-17%",
      minInvestment: 2000,
      risk: "Medium",
      rating: 4.5,
      totalInvestors: 1234,
      fundSize: "RM 78.9M",
      performance1Y: "+15.4%",
      description: "Healthcare and pharmaceutical companies following Syariah compliance guidelines.",
    },
  ]

  // Filter investments based on search and filters
  const filteredInvestments = allInvestments.filter((investment) => {
    const matchesSearch =
      investment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investment.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || investment.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesRisk = selectedRisk === "all" || investment.risk.toLowerCase() === selectedRisk.toLowerCase()

    return matchesSearch && matchesCategory && matchesRisk
  })

  // Sort investments
  const sortedInvestments = [...filteredInvestments].sort((a, b) => {
    switch (sortBy) {
      case "performance":
        return (
          Number.parseFloat(b.performance1Y.replace(/[+%]/g, "")) -
          Number.parseFloat(a.performance1Y.replace(/[+%]/g, ""))
        )
      case "rating":
        return b.rating - a.rating
      case "minInvestment":
        return a.minInvestment - b.minInvestment
      case "fundSize":
        return (
          Number.parseFloat(b.fundSize.replace(/[RM M]/g, "")) - Number.parseFloat(a.fundSize.replace(/[RM M]/g, ""))
        )
      default:
        return 0
    }
  })

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
          <h1 className="text-3xl font-bold text-white mb-2">Investment Center</h1>
          <p className="text-slate-400">Discover and invest in Syariah-compliant investment opportunities</p>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="marketplace"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Investment Marketplace
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              My Portfolio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            {/* Search and Filters */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search investments, funds, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="equity">Equity</SelectItem>
                        <SelectItem value="fixed income">Fixed Income</SelectItem>
                        <SelectItem value="real estate">Real Estate</SelectItem>
                        <SelectItem value="precious metals">Precious Metals</SelectItem>
                        <SelectItem value="esg">ESG</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                      <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Risk" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="all">All Risk</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="performance">Performance</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="minInvestment">Min Investment</SelectItem>
                        <SelectItem value="fundSize">Fund Size</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Results */}
            <div className="flex justify-between items-center">
              <p className="text-slate-400">
                Showing {sortedInvestments.length} of {allInvestments.length} investments
              </p>
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm">
                  Filters applied:{" "}
                  {[selectedCategory !== "all" ? "Category" : "", selectedRisk !== "all" ? "Risk" : ""]
                    .filter(Boolean)
                    .join(", ") || "None"}
                </span>
              </div>
            </div>

            {/* Investment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedInvestments.map((investment) => (
                <Card
                  key={investment.id}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-yellow-400/50 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{investment.name}</h3>
                        <p className="text-slate-400 text-sm">{investment.type}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{investment.rating}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{investment.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">Expected Return:</span>
                        <span className="text-green-400 font-bold">{investment.expectedReturn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">1Y Performance:</span>
                        <span className="text-green-400 font-medium">{investment.performance1Y}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">Min Investment:</span>
                        <span className="text-white">RM {investment.minInvestment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">Fund Size:</span>
                        <span className="text-white">{investment.fundSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">
                          <Shield className="w-3 h-3 mr-1" />
                          Syariah
                        </Badge>
                        <Badge
                          className={
                            investment.risk === "High"
                              ? "bg-red-900/50 text-red-400 border-red-700"
                              : investment.risk === "Medium"
                                ? "bg-yellow-900/50 text-yellow-400 border-yellow-700"
                                : "bg-blue-900/50 text-blue-400 border-blue-700"
                          }
                        >
                          {investment.risk}
                        </Badge>
                      </div>
                      <span className="text-slate-400 text-sm">
                        {investment.totalInvestors.toLocaleString()} investors
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={`/investments/${investment.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-slate-600 text-slate-300 bg-transparent hover:border-yellow-400 hover:text-yellow-400"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/investments/${investment.id}/invest`} className="flex-1">
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium">
                          Invest Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedInvestments.length === 0 && (
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="text-slate-400 mb-4">
                    <Search className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">No investments found</h3>
                    <p>Try adjusting your search criteria or filters to find more investment options.</p>
                  </div>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                      setSelectedRisk("all")
                    }}
                    variant="outline"
                    className="border-slate-600 text-slate-300 bg-transparent"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Value</p>
                      <p className="text-2xl font-bold text-white">{portfolioData.totalValue}</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Return</p>
                      <p className="text-2xl font-bold text-green-400">{portfolioData.totalReturn}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Monthly Return</p>
                      <p className="text-2xl font-bold text-yellow-400">{portfolioData.monthlyReturn}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Risk Level</p>
                      <p className="text-2xl font-bold text-blue-400">{portfolioData.riskLevel}</p>
                    </div>
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Investments */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  My Current Investments
                </CardTitle>
                <CardDescription>Your active Syariah-compliant investment portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {myInvestments.map((investment, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-white font-semibold">{investment.name}</h3>
                          <p className="text-slate-400 text-sm">{investment.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">{investment.amount}</p>
                          <p className="text-green-400 text-sm">{investment.return}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-900/50 text-green-400 border-green-700">
                            <Shield className="w-3 h-3 mr-1" />
                            Syariah
                          </Badge>
                          <Badge
                            className={
                              investment.risk === "High"
                                ? "bg-red-900/50 text-red-400 border-red-700"
                                : investment.risk === "Medium"
                                  ? "bg-yellow-900/50 text-yellow-400 border-yellow-700"
                                  : "bg-blue-900/50 text-blue-400 border-blue-700"
                            }
                          >
                            {investment.risk} Risk
                          </Badge>
                        </div>
                        <span className="text-slate-400 text-sm">{investment.allocation}% of portfolio</span>
                      </div>

                      <Progress value={investment.allocation} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
