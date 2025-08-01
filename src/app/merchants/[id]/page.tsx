"use client"

import { use } from "react"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Shield,
  Heart,
  Share2,
  Camera,
  CreditCard,
  Gift,
  Users,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const merchantsData = {
  "halal-mart": {
    id: "halal-mart",
    name: "Halal Mart Supermarket",
    category: "Groceries",
    rating: 4.8,
    reviews: 234,
    location: "Kuala Lumpur, Malaysia",
    address: "123 Jalan Bukit Bintang, 50200 Kuala Lumpur",
    phone: "+60 3-2142 8888",
    website: "www.halalmart.com.my",
    hours: "8:00 AM - 10:00 PM",
    image: "/api/placeholder/600/300",
    description: "Your trusted halal grocery destination with over 10,000 certified halal products. From fresh produce to household essentials, we ensure every item meets the highest halal standards.",
    certifications: ["JAKIM Halal", "MeSTI", "ISO 22000"],
    features: ["Free Delivery", "Loyalty Program", "Online Shopping", "Prayer Room"],
    specialties: ["Organic Products", "Middle Eastern Foods", "Halal Meat", "Fresh Produce"],
    paymentMethods: ["HalalPay", "Credit Card", "Debit Card", "Cash"],
    promotions: [
      {
        title: "New Customer Discount",
        description: "Get 15% off your first purchase above RM100",
        validUntil: "2024-03-31"
      },
      {
        title: "Weekend Special",
        description: "Buy 2 Get 1 Free on selected items every weekend",
        validUntil: "Ongoing"
      }
    ]
  },
  "islamic-bookstore": {
    id: "islamic-bookstore",
    name: "Nur Islamic Bookstore",
    category: "Books & Education",
    rating: 4.9,
    reviews: 156,
    location: "Shah Alam, Malaysia",
    address: "456 Persiaran Jubli Perak, 40000 Shah Alam",
    phone: "+60 3-5544 7799",
    website: "www.nurislamicbooks.com",
    hours: "9:00 AM - 9:00 PM",
    image: "/api/placeholder/600/300",
    description: "The largest collection of Islamic books, educational materials, and religious items in Malaysia. Supporting your spiritual journey with authentic Islamic literature.",
    certifications: ["Islamic Council Approved", "Educational Ministry Licensed"],
    features: ["Expert Consultation", "Book Reservation", "Study Groups", "Children's Corner"],
    specialties: ["Quran & Hadith", "Islamic Law", "Children's Books", "Arabic Learning"],
    paymentMethods: ["HalalPay", "Credit Card", "Online Banking"],
    promotions: [
      {
        title: "Student Discount",
        description: "20% off for students with valid ID",
        validUntil: "Ongoing"
      }
    ]
  },
  "modest-fashion": {
    id: "modest-fashion",
    name: "Amirah Modest Fashion",
    category: "Fashion & Clothing",
    rating: 4.7,
    reviews: 89,
    location: "Petaling Jaya, Malaysia",
    address: "789 Jalan SS2/24, 47300 Petaling Jaya",
    phone: "+60 3-7875 2233",
    website: "www.amiramodest.com",
    hours: "10:00 AM - 8:00 PM",
    image: "/api/placeholder/600/300",
    description: "Contemporary modest fashion for the modern Muslim woman. Elegant designs that combine style with Islamic values.",
    certifications: ["Modest Fashion Council", "Ethical Trade Certified"],
    features: ["Personal Styling", "Custom Tailoring", "Size Inclusive", "Virtual Try-On"],
    specialties: ["Hijabs & Scarves", "Modest Dresses", "Work Wear", "Special Occasion"],
    paymentMethods: ["HalalPay", "Credit Card", "Installment Plans"],
    promotions: [
      {
        title: "Ramadan Collection",
        description: "Up to 30% off on new Ramadan collection",
        validUntil: "2024-04-15"
      }
    ]
  }
}

const reviews = [
  {
    id: 1,
    name: "Siti Abdullah",
    rating: 5,
    comment: "Excellent service and authentic halal products. The staff is very knowledgeable about Islamic dietary requirements.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    rating: 4,
    comment: "Great variety of products and competitive prices. Delivery was prompt and packaging was excellent.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: 3,
    name: "Fatimah Zahra",
    rating: 5,
    comment: "This is my go-to place for all halal needs. The loyalty program offers great benefits too!",
    date: "2024-01-08",
    verified: true
  }
]

export default function MerchantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState("overview")
  const [isFavorite, setIsFavorite] = useState(false)

  const merchant = merchantsData[id as keyof typeof merchantsData]

  if (!merchant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Merchant Not Found</h1>
          <p className="text-slate-400 mb-6">The merchant you&#39;re looking for doesn&#39;t exist.</p>
          <Link href="/merchants">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
              Back to Merchants
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/merchants"
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Merchants
          </Link>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={`border-slate-600 ${isFavorite ? 'text-red-400 border-red-400' : 'text-slate-400'}`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-600 text-slate-400">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Merchant Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
                <Camera className="w-16 h-16 text-slate-400" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-white">{merchant.name}</h1>
                    <Badge className="bg-green-900/50 text-green-400 border-green-700">
                      <Shield className="w-3 h-3 mr-1" />
                      Halal Certified
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 text-slate-300 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{merchant.rating}</span>
                      <span className="text-slate-400 ml-1">({merchant.reviews} reviews)</span>
                    </div>
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                      {merchant.category}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {merchant.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-slate-400" />
                      {merchant.hours}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-slate-400" />
                      {merchant.phone}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-slate-400" />
                      {merchant.website}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay with HalalPay
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Store
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {merchant.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {cert}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="offers"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Offers
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{merchant.description}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {merchant.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-700 text-slate-300 justify-center py-2"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Features & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {merchant.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-slate-700 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge className="bg-green-900/50 text-green-400 border-green-700 text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-slate-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offers" className="space-y-6">
            <div className="grid gap-6">
              {merchant.promotions.map((promo, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Gift className="w-6 h-6 text-yellow-400" />
                          <h3 className="text-lg font-semibold text-white">{promo.title}</h3>
                        </div>
                        <p className="text-slate-300 mb-3">{promo.description}</p>
                        <div className="flex items-center text-sm text-slate-400">
                          <Clock className="w-4 h-4 mr-2" />
                          Valid until: {promo.validUntil}
                        </div>
                      </div>
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 ml-4">
                        Claim Offer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="info" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Address</h4>
                    <p className="text-slate-300 text-sm">{merchant.address}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Phone</h4>
                    <p className="text-slate-300 text-sm">{merchant.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Website</h4>
                    <p className="text-slate-300 text-sm">{merchant.website}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Business Hours</h4>
                    <p className="text-slate-300 text-sm">{merchant.hours}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {merchant.paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                        <CreditCard className="w-4 h-4 mr-2 text-slate-400" />
                        <span className="text-slate-300 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}