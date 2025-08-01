"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, QrCode, Smartphone, Building2, ArrowLeft, Shield, Clock, CheckCircle, User, Wallet } from "lucide-react"
import Link from "next/link"

export default function Payments() {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-slate-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-xl font-bold text-white">Syariah Payments</h1>
              <div className="flex items-center space-x-4">
                <Link href="/compliance" className="text-slate-400 hover:text-white">
                  <Shield className="w-5 h-5" />
                </Link>
                <Link href="/landing">
                  <Button variant="ghost" className="text-white hover:text-yellow-400">
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
            <Badge className="bg-green-900/50 text-green-400 border-green-700">
              <Shield className="w-3 h-3 mr-1" />
              Halal Certified
            </Badge>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="transfer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="transfer"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              <Send className="w-4 h-4 mr-2" />
              Transfer
            </TabsTrigger>
            <TabsTrigger value="qr" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
              <QrCode className="w-4 h-4 mr-2" />
              QR Pay
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Top-up
            </TabsTrigger>
            <TabsTrigger value="bills" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
              <Building2 className="w-4 h-4 mr-2" />
              Bills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transfer" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Wallet className="w-5 h-5 mr-2 text-yellow-400" />
                    Send Money (Wakalah bi al-Ujrah)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="recipient" className="text-slate-300">
                      Recipient Account
                    </Label>
                    <Input
                      id="recipient"
                      placeholder="Enter account number or phone"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="amount" className="text-slate-300">
                      Amount (RM)
                    </Label>
                    <Input
                      id="amount"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white text-2xl font-bold"
                    />
                  </div>

                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Transfer Fee (Ujrah)</span>
                      <span className="text-yellow-400 font-bold">RM 1.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Total Amount</span>
                      <span className="text-yellow-400 font-bold text-lg">
                        RM {amount ? (Number.parseFloat(amount) + 1).toFixed(2) : "1.00"}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold">
                    <Send className="w-4 h-4 mr-2" />
                    Send Money
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                <CardHeader>
                  <CardTitle className="text-white">Recent Recipients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Siti Aminah</p>
                          <p className="text-slate-400 text-sm">Bank Islam Malaysia</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-yellow-400">
                        Send
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-900/50 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Muhammad Ali</p>
                          <p className="text-slate-400 text-sm">Maybank Islamic</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-yellow-400">
                        Send
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Fatimah Zahra</p>
                          <p className="text-slate-400 text-sm">CIMB Islamic</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-yellow-400">
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qr" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <QrCode className="w-5 h-5 mr-2 text-yellow-400" />
                    Scan QR Code
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="w-64 h-64 mx-auto bg-slate-700/30 rounded-lg flex items-center justify-center mb-4">
                    <QrCode className="w-32 h-32 text-slate-500" />
                  </div>
                  <p className="text-slate-400 mb-4">Point your camera at the QR code to pay</p>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold">
                    Open Camera
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                <CardHeader>
                  <CardTitle className="text-white">Your QR Code</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center mb-4">
                    <div className="w-40 h-40 bg-slate-900 rounded grid grid-cols-8 gap-1 p-2">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? "bg-slate-900" : "bg-white"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4">Share this QR code to receive payments</p>
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
                  >
                    Share QR Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-yellow-400" />
                  Mobile Top-up
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-slate-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+60 12-345 6789"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-slate-300">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {["RM 10", "RM 20", "RM 30", "RM 50", "RM 100", "Custom"].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold">
                  Top Up Now
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bills" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "TNB (Electricity)", icon: "⚡", color: "yellow" },
                { name: "Indah Water", icon: "💧", color: "blue" },
                { name: "Unifi (Internet)", icon: "🌐", color: "purple" },
                { name: "Astro", icon: "📺", color: "red" },
                { name: "Touch 'n Go", icon: "🚗", color: "green" },
                { name: "Insurance", icon: "🛡️", color: "indigo" },
              ].map((bill) => (
                <Card
                  key={bill.name}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="text-4xl mb-3">{bill.icon}</div>
                    <span className="text-white font-medium text-center">{bill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Transaction History */}
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-yellow-400" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  type: "Transfer",
                  recipient: "Siti Aminah",
                  amount: "-RM 150.00",
                  status: "completed",
                  time: "2 hours ago",
                },
                {
                  type: "QR Payment",
                  recipient: "Halal Mart",
                  amount: "-RM 45.50",
                  status: "completed",
                  time: "1 day ago",
                },
                {
                  type: "Top-up",
                  recipient: "Mobile Prepaid",
                  amount: "-RM 30.00",
                  status: "completed",
                  time: "2 days ago",
                },
                { type: "Bill Payment", recipient: "TNB", amount: "-RM 125.80", status: "pending", time: "3 days ago" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.status === "completed" ? "bg-green-900/50" : "bg-yellow-900/50"
                      }`}
                    >
                      {transaction.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.type}</p>
                      <p className="text-slate-400 text-sm">
                        {transaction.recipient} • {transaction.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{transaction.amount}</p>
                    <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
      .neon-border {
        box-shadow: 0 0 20px rgba(251, 191, 36, 0.1);
      }
    `}</style>
    </div>
  )
}
