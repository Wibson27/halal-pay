"use client"

import Link from "next/link"
import { ArrowLeft, Bell, CheckCircle, AlertTriangle, Info, Trash2, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Payment Successful",
      message: "Your payment of RM 150.00 to Halal Mart has been processed successfully.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "info",
      title: "New Syariah Advisory Available",
      message: "Dr. Ahmad Hidayat has published new guidance on cryptocurrency investments.",
      time: "4 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Compliance Review Required",
      message: "Please review your investment portfolio for Syariah compliance by Jan 31, 2024.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Investment Return",
      message: "Your Sukuk investment has generated a return of RM 45.20 this month.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      type: "info",
      title: "Monthly Statement Ready",
      message: "Your January 2024 account statement is now available for download.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 6,
      type: "warning",
      title: "Security Alert",
      message: "New login detected from Chrome on MacBook. If this wasn't you, please secure your account.",
      time: "1 week ago",
      read: true,
    },
  ]

  const notificationSettings = [
    {
      category: "Transactions",
      settings: [
        { name: "Payment confirmations", enabled: true },
        { name: "Large transaction alerts", enabled: true },
        { name: "Failed payments", enabled: true },
      ],
    },
    {
      category: "Investments",
      settings: [
        { name: "Portfolio updates", enabled: true },
        { name: "Market alerts", enabled: false },
        { name: "Dividend notifications", enabled: true },
      ],
    },
    {
      category: "Security",
      settings: [
        { name: "Login alerts", enabled: true },
        { name: "Password changes", enabled: true },
        { name: "Suspicious activity", enabled: true },
      ],
    },
    {
      category: "Syariah Compliance",
      settings: [
        { name: "Compliance alerts", enabled: true },
        { name: "New fatwas", enabled: true },
        { name: "Advisory updates", enabled: false },
      ],
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case "info":
        return <Info className="w-5 h-5 text-blue-400" />
      default:
        return <Bell className="w-5 h-5 text-slate-400" />
    }
  }

  const getNotificationBg = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-900/50"
      case "warning":
        return "bg-yellow-900/50"
      case "info":
        return "bg-blue-900/50"
      default:
        return "bg-slate-600/50"
    }
  }

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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-slate-400">Manage your notifications and preferences</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications List */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Recent Notifications
                </CardTitle>
                <CardDescription>Your latest notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        notification.read ? "bg-slate-700/20" : "bg-slate-700/40"
                      } ${
                        notification.type === "success"
                          ? "border-green-400"
                          : notification.type === "warning"
                            ? "border-yellow-400"
                            : notification.type === "info"
                              ? "border-blue-400"
                              : "border-slate-400"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${getNotificationBg(notification.type)}`}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className={`font-medium ${notification.read ? "text-slate-300" : "text-white"}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>}
                            </div>
                            <p className={`text-sm ${notification.read ? "text-slate-400" : "text-slate-300"}`}>
                              {notification.message}
                            </p>
                            <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-6 border-slate-600 text-slate-300 bg-transparent">
                  Load More Notifications
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Notification Settings */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark All Read
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Notification Settings</CardTitle>
                <CardDescription>Configure your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {notificationSettings.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-white font-medium mb-3">{category.category}</h4>
                    <div className="space-y-3">
                      {category.settings.map((setting, settingIndex) => (
                        <div key={settingIndex} className="flex items-center justify-between">
                          <Label htmlFor={`${category.category}-${settingIndex}`} className="text-slate-300 text-sm">
                            {setting.name}
                          </Label>
                          <Switch id={`${category.category}-${settingIndex}`} defaultChecked={setting.enabled} />
                        </div>
                      ))}
                    </div>
                    {index < notificationSettings.length - 1 && <Separator className="mt-4 bg-slate-700" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Delivery Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300 font-medium">Email</Label>
                    <p className="text-slate-400 text-sm">ahmad.hassan@email.com</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300 font-medium">SMS</Label>
                    <p className="text-slate-400 text-sm">+60 12-345 6789</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300 font-medium">Push Notifications</Label>
                    <p className="text-slate-400 text-sm">Mobile app notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
