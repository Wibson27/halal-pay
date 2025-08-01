"use client"

import Link from "next/link"
import { ArrowLeft, CreditCard, Calendar, Download, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BillingPage() {
  const currentPlan = {
    name: "Premium",
    price: "RM 29.90",
    period: "month",
    features: [
      "Unlimited transactions",
      "Advanced analytics",
      "Priority support",
      "Syariah advisory access",
      "Investment recommendations",
    ],
    nextBilling: "2024-02-15",
  }

  const billingHistory = [
    {
      date: "2024-01-15",
      description: "Premium Plan - Monthly",
      amount: "RM 29.90",
      status: "paid",
      invoice: "INV-2024-001",
    },
    {
      date: "2023-12-15",
      description: "Premium Plan - Monthly",
      amount: "RM 29.90",
      status: "paid",
      invoice: "INV-2023-012",
    },
    {
      date: "2023-11-15",
      description: "Premium Plan - Monthly",
      amount: "RM 29.90",
      status: "paid",
      invoice: "INV-2023-011",
    },
    {
      date: "2023-10-15",
      description: "Premium Plan - Monthly",
      amount: "RM 29.90",
      status: "failed",
      invoice: "INV-2023-010",
    },
  ]

  const paymentMethods = [
    {
      type: "card",
      last4: "4242",
      brand: "Visa",
      expiry: "12/26",
      isDefault: true,
    },
    {
      type: "bank",
      name: "Maybank Islamic",
      account: "****1234",
      isDefault: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Billing & Subscription</h1>
          <p className="text-slate-400">Manage your subscription and payment methods</p>
        </div>

        <div className="space-y-6">
          {/* Current Plan */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Current Plan
              </CardTitle>
              <CardDescription>Your active subscription details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{currentPlan.name}</h3>
                    <Badge className="bg-yellow-900/50 text-yellow-400 border-yellow-700">Active</Badge>
                  </div>
                  <p className="text-3xl font-bold text-yellow-400 mb-4">
                    {currentPlan.price}
                    <span className="text-lg text-slate-400">/{currentPlan.period}</span>
                  </p>
                  <div className="space-y-2">
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-slate-400 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    Next billing: {currentPlan.nextBilling}
                  </div>
                  <div className="space-y-2">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">Manage Plan</Button>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        {method.type === "card" ? (
                          <>
                            <p className="text-white font-medium">
                              {method.brand} •••• {method.last4}
                            </p>
                            <p className="text-slate-400 text-sm">Expires {method.expiry}</p>
                          </>
                        ) : (
                          <>
                            <p className="text-white font-medium">{method.name}</p>
                            <p className="text-slate-400 text-sm">Account {method.account}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {method.isDefault && (
                        <Badge className="bg-green-900/50 text-green-400 border-green-700">Default</Badge>
                      )}
                      <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-slate-700" />

              <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Billing History</CardTitle>
              <CardDescription>Your payment and invoice history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((bill, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          bill.status === "paid"
                            ? "bg-green-900/50"
                            : bill.status === "failed"
                              ? "bg-red-900/50"
                              : "bg-yellow-900/50"
                        }`}
                      >
                        {bill.status === "paid" ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : bill.status === "failed" ? (
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{bill.description}</p>
                        <p className="text-slate-400 text-sm">
                          {bill.date} • {bill.invoice}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-white font-bold">{bill.amount}</p>
                        <Badge
                          className={
                            bill.status === "paid"
                              ? "bg-green-900/50 text-green-400 border-green-700"
                              : bill.status === "failed"
                                ? "bg-red-900/50 text-red-400 border-red-700"
                                : "bg-yellow-900/50 text-yellow-400 border-yellow-700"
                          }
                        >
                          {bill.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 bg-transparent">
                View All Invoices
              </Button>
            </CardContent>
          </Card>

          {/* Usage & Limits */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Usage & Limits</CardTitle>
              <CardDescription>Your current usage for this billing period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-white">247</p>
                  <p className="text-slate-400 text-sm">Transactions</p>
                  <p className="text-green-400 text-xs">Unlimited</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-slate-400 text-sm">Advisory Sessions</p>
                  <p className="text-green-400 text-xs">Unlimited</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-slate-400 text-sm">Investment Reports</p>
                  <p className="text-green-400 text-xs">Unlimited</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
