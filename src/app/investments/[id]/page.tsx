"use client"

import Link from "next/link"
import { ArrowLeft, TrendingUp, Shield, Star, Calendar, DollarSign, Users, FileText, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestmentDetailsPage({ params }: { params: { id: string } }) {
  // Mock data - in real app this would come from API based on params.id
  const investment = {
    id: "syariah-equity-fund",
    name: "Syariah Equity Fund",
    type: "Mutual Fund",
    category: "Equity",
    minInvestment: 1000,
    expectedReturn: "15-20%",
    riskLevel: "Medium",
    rating: 4.5,
    totalInvestors: 2847,
    fundSize: "RM 125.5M",
    inceptionDate: "2020-01-15",
    managementFee: "1.5%",
    description:
      "A diversified Syariah-compliant equity fund that invests in carefully screened halal stocks across various sectors. The fund follows strict Islamic investment principles and is overseen by our qualified Syariah advisory board.",
    keyFeatures: [
      "100% Syariah compliant investments",
      "Diversified portfolio across sectors",
      "Professional fund management",
      "Regular dividend distributions",
      "Low minimum investment",
      "Transparent fee structure",
    ],
    performance: {
      "1M": "+2.3%",
      "3M": "+7.8%",
      "6M": "+12.4%",
      "1Y": "+18.7%",
      "3Y": "+45.2%",
      "5Y": "+89.3%",
    },
    topHoldings: [
      { name: "Genting Malaysia Berhad", percentage: 8.5, sector: "Consumer" },
      { name: "IHH Healthcare Berhad", percentage: 7.2, sector: "Healthcare" },
      { name: "Axiata Group Berhad", percentage: 6.8, sector: "Telecommunications" },
      { name: "KLCC Property Holdings", percentage: 6.1, sector: "Real Estate" },
      { name: "Nestle Malaysia", percentage: 5.9, sector: "Consumer Goods" },
    ],
    sectorAllocation: [
      { sector: "Technology", percentage: 25 },
      { sector: "Healthcare", percentage: 20 },
      { sector: "Consumer Goods", percentage: 18 },
      { sector: "Real Estate", percentage: 15 },
      { sector: "Telecommunications", percentage: 12 },
      { sector: "Others", percentage: 10 },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/investments"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Investments
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{investment.name}</h1>
                <Badge className="bg-green-900/50 text-green-400 border-green-700">
                  <Shield className="w-3 h-3 mr-1" />
                  Syariah Compliant
                </Badge>
              </div>
              <p className="text-slate-400 mb-4">{investment.description}</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{investment.rating}</span>
                  <span className="text-slate-400">({investment.totalInvestors} investors)</span>
                </div>
                <Badge
                  className={
                    investment.riskLevel === "High"
                      ? "bg-red-900/50 text-red-400 border-red-700"
                      : investment.riskLevel === "Medium"
                        ? "bg-yellow-900/50 text-yellow-400 border-yellow-700"
                        : "bg-blue-900/50 text-blue-400 border-blue-700"
                  }
                >
                  {investment.riskLevel} Risk
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-400">
                  {investment.type}
                </Badge>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-3xl font-bold text-green-400 mb-2">{investment.expectedReturn}</div>
              <p className="text-slate-400 mb-4">Expected Annual Return</p>
              <Link href={`/investments/${investment.id}/invest`}>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Invest Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Min Investment</p>
              <p className="text-2xl font-bold text-white">RM {investment.minInvestment.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Total Investors</p>
              <p className="text-2xl font-bold text-white">{investment.totalInvestors.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Fund Size</p>
              <p className="text-2xl font-bold text-white">{investment.fundSize}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Management Fee</p>
              <p className="text-2xl font-bold text-white">{investment.managementFee}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger
              value="holdings"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Holdings
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {investment.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Sector Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investment.sectorAllocation.map((sector, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300">{sector.sector}</span>
                          <span className="text-white font-medium">{sector.percentage}%</span>
                        </div>
                        <Progress value={sector.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Syariah Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
                  <p className="text-green-400 font-medium mb-2">100% Syariah Compliant</p>
                  <p className="text-slate-300 text-sm mb-4">
                    This fund is fully compliant with Islamic investment principles and is regularly reviewed by our
                    Syariah Advisory Board. All investments are screened to ensure they meet halal criteria.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-lg">0%</div>
                      <div className="text-slate-400 text-sm">Riba-based income</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-lg">100%</div>
                      <div className="text-slate-400 text-sm">Halal businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-lg">Monthly</div>
                      <div className="text-slate-400 text-sm">Compliance review</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Historical Performance</CardTitle>
                <CardDescription>Fund performance over different time periods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {Object.entries(investment.performance).map(([period, return_value]) => (
                    <div key={period} className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-1">{return_value}</div>
                      <div className="text-slate-400 text-sm">{period}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-yellow-400 font-medium mb-2">Medium Risk Investment</p>
                      <p className="text-slate-300 text-sm mb-3">
                        This fund carries medium risk due to equity market volatility. Past performance does not
                        guarantee future results.
                      </p>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Market risk due to equity exposure</li>
                        <li>• Currency risk for international holdings</li>
                        <li>• Liquidity risk during market stress</li>
                        <li>• Syariah compliance risk if holdings change</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="holdings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Top Holdings</CardTitle>
                <CardDescription>Largest positions in the fund portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investment.topHoldings.map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{holding.name}</p>
                        <p className="text-slate-400 text-sm">{holding.sector}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{holding.percentage}%</p>
                        <div className="w-20 mt-1">
                          <Progress value={holding.percentage * 10} className="h-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Fund Documents
                </CardTitle>
                <CardDescription>Important documents and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Fund Prospectus", type: "PDF", size: "2.4 MB", date: "2024-01-01" },
                    { name: "Annual Report 2023", type: "PDF", size: "5.1 MB", date: "2024-01-15" },
                    { name: "Syariah Compliance Certificate", type: "PDF", size: "1.2 MB", date: "2024-01-01" },
                    { name: "Monthly Fact Sheet", type: "PDF", size: "800 KB", date: "2024-01-31" },
                    { name: "Fund Management Agreement", type: "PDF", size: "1.8 MB", date: "2024-01-01" },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">{doc.name}</p>
                          <p className="text-slate-400 text-sm">
                            {doc.type} • {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                        Download
                      </Button>
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
