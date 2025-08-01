"use client"

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  CreditCard,
  TrendingUp,
  Banknote,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
  Send,
  Wallet,
  PieChart,
  MessageSquare,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <MainNav />

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-white">Assalamu Alaikum, Ahmad</h1>
            <p className="text-slate-400 mt-1">Welcome back to your Syariah-compliant financial dashboard</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
              <Plus className="w-4 h-4 mr-2" />
              New Transaction
            </Button>
            <Link href="/syariah-board">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Consult Board
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Balance</p>
                  <p className="text-2xl font-bold text-white">RM 24,580</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm ml-1">+12.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Monthly Spending</p>
                  <p className="text-2xl font-bold text-white">RM 3,240</p>
                  <div className="flex items-center mt-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm ml-1">-5.2%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Investments</p>
                  <p className="text-2xl font-bold text-white">RM 18,750</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm ml-1">+8.3%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Compliance Score</p>
                  <p className="text-2xl font-bold text-white">98%</p>
                  <div className="flex items-center mt-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Excellent</Badge>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/payments">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                    <Send className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Send Payment</h3>
                    <p className="text-slate-400 text-sm">Transfer money instantly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/investments">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                    <PieChart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Invest Now</h3>
                    <p className="text-slate-400 text-sm">Syariah-compliant investments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/financing">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                    <Banknote className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Get Financing</h3>
                    <p className="text-slate-400 text-sm">Islamic financing solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Merchant ABC", amount: "-RM 125.00", time: "2 hours ago", type: "payment" },
                { name: "Salary Deposit", amount: "+RM 4,500.00", time: "1 day ago", type: "income" },
                { name: "Sukuk Investment", amount: "-RM 1,000.00", time: "2 days ago", type: "investment" },
                { name: "Utility Bill", amount: "-RM 89.50", time: "3 days ago", type: "payment" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === "income"
                          ? "bg-green-400/20"
                          : transaction.type === "investment"
                            ? "bg-blue-400/20"
                            : "bg-red-400/20"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowDownRight className="w-5 h-5 text-green-400" />
                      ) : transaction.type === "investment" ? (
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.name}</p>
                      <p className="text-slate-400 text-sm">{transaction.time}</p>
                    </div>
                  </div>
                  <p
                    className={`font-semibold ${transaction.amount.startsWith("+") ? "text-green-400" : "text-white"}`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Syariah Compliance Status */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Syariah Compliance
              </CardTitle>
              <CardDescription>Your Islamic finance compliance overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <p className="text-slate-400">Overall Compliance Score</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Halal Transactions</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-slate-700" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Riba-free Investments</span>
                    <span className="text-green-400">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-slate-700" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Zakat Compliance</span>
                    <span className="text-yellow-400">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-slate-700" />
                </div>
              </div>

              <Link href="/compliance">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  View Detailed Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
