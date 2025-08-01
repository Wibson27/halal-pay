"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, MapPin, Star, Phone, Globe, CheckCircle, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const merchantsData = [
  {
    id: "halal-mart",
    name: "Halal Mart Sdn Bhd",
    category: "Grocery & Food",
    rating: 4.8,
    reviews: 1247,
    location: "Kuala Lumpur",
    phone: "+60 3-2142 8888",
    website: "www.halalmart.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Premium halal groceries and fresh produce sourced from certified suppliers across Malaysia.",
    offers: ["10% off first purchase", "Free delivery above RM 100"],
  },
  {
    id: "islamic-bookstore",
    name: "Islamic Bookstore",
    category: "Books & Education",
    rating: 4.9,
    reviews: 856,
    location: "Shah Alam",
    phone: "+60 3-5544 7788",
    website: "www.islamicbooks.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Your trusted source for Islamic books, educational materials, and spiritual gifts.",
    offers: ["Buy 2 Get 1 Free", "Student discount 15%"],
  },
  {
    id: "modest-fashion",
    name: "Modest Fashion House",
    category: "Fashion & Apparel",
    rating: 4.7,
    reviews: 2134,
    location: "Petaling Jaya",
    phone: "+60 3-7875 9999",
    website: "www.modestfashion.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Contemporary modest fashion for the modern Muslim woman.",
    offers: ["New collection 20% off", "Free alterations"],
  },
  {
    id: "halal-restaurant",
    name: "Halal Restaurant Chain",
    category: "Food & Dining",
    rating: 4.6,
    reviews: 3456,
    location: "Multiple Locations",
    phone: "+60 3-9876 5432",
    website: "www.halalrestaurant.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Authentic halal cuisine and family dining experience.",
    offers: ["Family meal deals", "Loyalty rewards program"],
  },
  {
    id: "tech-solutions",
    name: "Islamic Tech Solutions",
    category: "Technology",
    rating: 4.5,
    reviews: 892,
    location: "Cyberjaya",
    phone: "+60 3-8888 9999",
    website: "www.islamictech.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Sharia-compliant technology solutions for modern businesses.",
    offers: ["Free consultation", "30% off first project"],
  },
  {
    id: "wellness-center",
    name: "Halal Wellness Center",
    category: "Health & Wellness",
    rating: 4.4,
    reviews: 567,
    location: "Mont Kiara",
    phone: "+60 3-6201 5555",
    website: "www.halalwellness.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description: "Holistic wellness services following Islamic principles.",
    offers: ["First session 50% off", "Family packages available"],
  },
]

const categories = [
  { name: "All Categories", count: merchantsData.length, icon: "🏪" },
  { name: "Grocery & Food", count: merchantsData.filter((m) => m.category === "Grocery & Food").length, icon: "🛒" },
  {
    name: "Books & Education",
    count: merchantsData.filter((m) => m.category === "Books & Education").length,
    icon: "📚",
  },
  {
    name: "Fashion & Apparel",
    count: merchantsData.filter((m) => m.category === "Fashion & Apparel").length,
    icon: "👗",
  },
  { name: "Food & Dining", count: merchantsData.filter((m) => m.category === "Food & Dining").length, icon: "🍽️" },
  { name: "Technology", count: merchantsData.filter((m) => m.category === "Technology").length, icon: "💻" },
  {
    name: "Health & Wellness",
    count: merchantsData.filter((m) => m.category === "Health & Wellness").length,
    icon: "🏥",
  },
]

const myMerchants = [
  {
    id: "halal-mart",
    name: "Halal Mart Sdn Bhd",
    category: "Grocery & Food",
    partnership: "Gold Partner",
    totalSpent: "RM 2,450.00",
    lastTransaction: "2024-01-15",
    benefits: ["10% discount", "Priority delivery", "Exclusive offers"],
  },
  {
    id: "islamic-bookstore",
    name: "Islamic Bookstore",
    category: "Books & Education",
    partnership: "Silver Partner",
    totalSpent: "RM 890.00",
    lastTransaction: "2024-01-12",
    benefits: ["5% discount", "Free gift wrapping", "Early access"],
  },
  {
    id: "modest-fashion",
    name: "Modest Fashion House",
    category: "Fashion & Apparel",
    partnership: "Platinum Partner",
    totalSpent: "RM 3,200.00",
    lastTransaction: "2024-01-18",
    benefits: ["15% discount", "Free alterations", "VIP styling"],
  },
]

const recentTransactions = [
  { merchant: "Halal Mart", amount: "RM 125.50", date: "2024-01-15", type: "Groceries" },
  { merchant: "Islamic Bookstore", amount: "RM 89.90", date: "2024-01-12", type: "Books" },
  { merchant: "Modest Fashion", amount: "RM 299.00", date: "2024-01-18", type: "Clothing" },
  { merchant: "Halal Restaurant", amount: "RM 67.80", date: "2024-01-10", type: "Dining" },
]

export default function MerchantsPage() {
  const [activeTab, setActiveTab] = useState("directory")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const filteredMerchants = merchantsData.filter((merchant) => {
    const matchesSearch =
      merchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || merchant.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All Categories")
  }

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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Merchant Directory</h1>
          <p className="text-slate-400">Explore Syariah-compliant merchants and services for your needs</p>
        </div>

        {/* Full Width Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="directory"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              Merchant Directory
            </TabsTrigger>
            <TabsTrigger
              value="my-merchants"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              My Merchants
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === "directory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
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
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Search Merchants</label>
                    <Input
                      placeholder="Search by name, category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-slate-300">Categories</label>
                      {(searchTerm || selectedCategory !== "All Categories") && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearFilters}
                          className="text-yellow-400 hover:text-yellow-300 p-1 h-auto"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Clear
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedCategory === category.name
                              ? "bg-yellow-400/20 border border-yellow-400/30 text-yellow-400"
                              : "bg-slate-700/30 hover:bg-slate-700/50 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{category.icon}</span>
                              <span className="font-medium">{category.name}</span>
                            </div>
                            <Badge variant="outline" className="border-slate-600 text-slate-400">
                              {category.name === "All Categories" ? filteredMerchants.length : category.count}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction, index) => (
                      <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-white font-medium text-sm">{transaction.merchant}</span>
                          <span className="text-yellow-400 font-medium text-sm">{transaction.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-xs">{transaction.type}</span>
                          <span className="text-slate-400 text-xs">{transaction.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === "All Categories" ? "Available Merchants" : selectedCategory} (
                  {filteredMerchants.length})
                </h2>
                {filteredMerchants.length === 0 && (searchTerm || selectedCategory !== "All Categories") && (
                  <Button onClick={clearFilters} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                    Clear All Filters
                  </Button>
                )}
              </div>

              {filteredMerchants.length === 0 ? (
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="text-center py-12">
                    <h3 className="text-xl font-bold text-white mb-2">No merchants found</h3>
                    <p className="text-slate-400 mb-4">No merchants match your current search and filter criteria.</p>
                    <Button onClick={clearFilters} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMerchants.map((merchant) => (
                    <Card
                      key={merchant.id}
                      className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={merchant.image || "/placeholder.svg"} alt={merchant.name} />
                            <AvatarFallback className="bg-yellow-400 text-slate-900 font-bold">
                              {merchant.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-lg font-bold text-white">{merchant.name}</h3>
                              {merchant.verified && <CheckCircle className="w-5 h-5 text-green-400" />}
                            </div>
                            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-2">
                              {merchant.category}
                            </Badge>
                            <div className="flex items-center space-x-1 mb-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white font-medium">{merchant.rating}</span>
                              <span className="text-slate-400">({merchant.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-4 line-clamp-2">{merchant.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300 text-sm">{merchant.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300 text-sm">{merchant.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300 text-sm">{merchant.website}</span>
                          </div>
                        </div>

                        {merchant.offers.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Current Offers:</h4>
                            <div className="space-y-1">
                              {merchant.offers.slice(0, 2).map((offer, index) => (
                                <div key={index} className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                                  {offer}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex space-x-3">
                          <Link href={`/merchants/${merchant.id}`} className="flex-1">
                            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                              Visit Store
                            </Button>
                          </Link>
                          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "my-merchants" && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{myMerchants.length}</div>
                    <div className="text-slate-300">Total Partners</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      RM{" "}
                      {myMerchants
                        .reduce(
                          (sum, m) => sum + Number.parseFloat(m.totalSpent.replace("RM ", "").replace(",", "")),
                          0,
                        )
                        .toLocaleString()}
                    </div>
                    <div className="text-slate-300">Total Spending</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{recentTransactions.length}</div>
                    <div className="text-slate-300">Transactions</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">RM 450</div>
                    <div className="text-slate-300">Rewards Earned</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Merchant Partnerships */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">My Merchant Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myMerchants.map((merchant) => (
                    <div key={merchant.id} className="p-6 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">{merchant.name}</h3>
                        <Badge
                          className={`${
                            merchant.partnership === "Platinum Partner"
                              ? "bg-purple-400/20 text-purple-400 border-purple-400/30"
                              : merchant.partnership === "Gold Partner"
                                ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                                : "bg-slate-400/20 text-slate-400 border-slate-400/30"
                          }`}
                        >
                          {merchant.partnership}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Total Spent:</span>
                          <span className="text-white font-medium">{merchant.totalSpent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Last Transaction:</span>
                          <span className="text-white font-medium">{merchant.lastTransaction}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-white mb-2">Benefits:</h4>
                        <div className="space-y-1">
                          {merchant.benefits.map((benefit, index) => (
                            <div key={index} className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link href={`/merchants/${merchant.id}`} className="flex-1">
                          <Button size="sm" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                            View Details
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          History
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}