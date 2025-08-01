"use client"

import { useState } from "react"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  TrendingUp,
  Building2,
  Users,
  Shield,
  MessageSquare,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  PiggyBank,
  Store,
  Bell,
  Settings,
  Home,
  BarChart3,
  Banknote,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  redirect("/landing")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">H</span>
                </div>
                <span className="text-white font-bold text-xl">HalalPay</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link
                  href="/"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/payments"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Payments</span>
                </Link>
                <Link
                  href="/investments"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Investments</span>
                </Link>
                <Link
                  href="/financing"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <Banknote className="w-4 h-4" />
                  <span>Financing</span>
                </Link>
                <Link
                  href="/merchants"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <Store className="w-4 h-4" />
                  <span>Merchants</span>
                </Link>
                <Link
                  href="/compliance"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Compliance</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400">
                <Settings className="w-5 h-5" />
              </Button>
              <Link href="/landing">
                <Button variant="ghost" className="text-white hover:text-yellow-400">
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Assalamu&#39;alaikum, <span className="text-yellow-400 glow-text">Ahmad Rahman</span>
          </h1>
          <p className="text-slate-400">Welcome to your Syariah-compliant financial dashboard</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Balance</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="text-slate-400 hover:text-white h-8 w-8"
              >
                {balanceVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-400 glow-text mb-2">
                {balanceVisible ? "RM 125,430.50" : "RM ••••••"}
              </div>
              <div className="flex items-center text-sm text-green-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Investment Returns</CardTitle>
              <TrendingUp className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-400 glow-text mb-2">
                {balanceVisible ? "RM 8,750.25" : "RM ••••••"}
              </div>
              <div className="flex items-center text-sm text-green-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +8.2% this quarter
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Halal Points</CardTitle>
              <Shield className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-400 glow-text mb-2">2,450</div>
              <div className="flex items-center text-sm text-slate-400">
                <Badge variant="secondary" className="bg-green-900/50 text-green-400 border-green-700">
                  100% Halal
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link href="/payments">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer group">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Wallet className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Pay & Transfer</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/investments">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer group">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <PiggyBank className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Invest Halal</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/financing">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer group">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Building2 className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Get Financing</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/merchants">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer group">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <ShoppingBag className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Halal Stores</span>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Activity & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-yellow-400" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center">
                      <ArrowDownRight className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Sukuk Investment</p>
                      <p className="text-slate-400 text-sm">Today, 2:30 PM</p>
                    </div>
                  </div>
                  <span className="text-yellow-400 font-bold">+RM 5,000</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Halal Grocery Store</p>
                      <p className="text-slate-400 text-sm">Yesterday, 6:45 PM</p>
                    </div>
                  </div>
                  <span className="text-white">-RM 125.50</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Musyarakah Funding</p>
                      <p className="text-slate-400 text-sm">2 days ago</p>
                    </div>
                  </div>
                  <span className="text-yellow-400 font-bold">+RM 2,500</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Syariah Compliance Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">100% Halal</h3>
                  <p className="text-slate-400">All transactions are Syariah-compliant</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">DSN-MUI Certified</span>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">✓ Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Riba-Free Guarantee</span>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">✓ Verified</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Gharar Screening</span>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">✓ Passed</Badge>
                  </div>
                </div>

                <Link href="/syariah-board">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Consult Syariah Board
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
        .neon-border {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.1);
        }
      `}</style>
    </div>
  )
}
