"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Star, Phone, Globe, CheckCircle, Clock, Award, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const merchantsData = {
  "halal-mart": {
    id: "halal-mart",
    name: "Halal Mart Sdn Bhd",
    category: "Grocery & Food",
    rating: 4.8,
    reviews: 1247,
    location: "Kuala Lumpur",
    address: "123 Jalan Bukit Bintang, 50200 Kuala Lumpur",
    phone: "+60 3-2142 8888",
    website: "www.halalmart.com.my",
    email: "info@halalmart.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description:
      "Premium halal groceries and fresh produce sourced from certified suppliers across Malaysia. We ensure the highest quality standards while maintaining competitive prices for our valued customers.",
    offers: ["10% off first purchase", "Free delivery above RM 100", "Member exclusive deals"],
    hours: {
      monday: "8:00 AM - 10:00 PM",
      tuesday: "8:00 AM - 10:00 PM",
      wednesday: "8:00 AM - 10:00 PM",
      thursday: "8:00 AM - 10:00 PM",
      friday: "8:00 AM - 11:00 PM",
      saturday: "8:00 AM - 11:00 PM",
      sunday: "9:00 AM - 9:00 PM",
    },
    certifications: ["JAKIM Halal", "ISO 22000", "HACCP"],
    products: [
      { name: "Fresh Vegetables", price: "RM 2.50 - RM 8.90", category: "Produce" },
      { name: "Halal Meat", price: "RM 15.90 - RM 45.00", category: "Meat" },
      { name: "Dairy Products", price: "RM 3.20 - RM 12.50", category: "Dairy" },
      { name: "Pantry Essentials", price: "RM 1.80 - RM 25.00", category: "Pantry" },
    ],
    customerReviews: [
      {
        name: "Ahmad Rahman",
        rating: 5,
        date: "2024-01-10",
        comment: "Excellent quality products and very friendly staff. The halal certification gives me peace of mind.",
      },
      {
        name: "Siti Nurhaliza",
        rating: 4,
        date: "2024-01-08",
        comment: "Great selection of fresh produce. Delivery was prompt and items were well-packaged.",
      },
    ],
  },
  "islamic-bookstore": {
    id: "islamic-bookstore",
    name: "Islamic Bookstore",
    category: "Books & Education",
    rating: 4.9,
    reviews: 856,
    location: "Shah Alam",
    address: "45 Jalan Klang Lama, 40000 Shah Alam, Selangor",
    phone: "+60 3-5544 7788",
    website: "www.islamicbooks.com.my",
    email: "contact@islamicbooks.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description:
      "Your trusted source for Islamic books, educational materials, and spiritual gifts. We carry a comprehensive collection of Quran, Hadith, Islamic history, and contemporary Islamic literature.",
    offers: ["Buy 2 Get 1 Free", "Student discount 15%", "Free gift wrapping"],
    hours: {
      monday: "9:00 AM - 9:00 PM",
      tuesday: "9:00 AM - 9:00 PM",
      wednesday: "9:00 AM - 9:00 PM",
      thursday: "9:00 AM - 9:00 PM",
      friday: "2:00 PM - 10:00 PM",
      saturday: "9:00 AM - 10:00 PM",
      sunday: "9:00 AM - 9:00 PM",
    },
    certifications: ["Islamic Content Verified", "Educational Excellence Award"],
    products: [
      { name: "Quran & Tafsir", price: "RM 25.00 - RM 150.00", category: "Religious" },
      { name: "Islamic History", price: "RM 18.90 - RM 89.00", category: "History" },
      { name: "Children's Books", price: "RM 12.50 - RM 35.00", category: "Children" },
      { name: "Prayer Items", price: "RM 8.00 - RM 45.00", category: "Accessories" },
    ],
    customerReviews: [
      {
        name: "Dr. Fatimah Ali",
        rating: 5,
        date: "2024-01-12",
        comment: "Excellent collection of authentic Islamic literature. Staff is very knowledgeable and helpful.",
      },
      {
        name: "Muhammad Iqbal",
        rating: 5,
        date: "2024-01-09",
        comment: "Best Islamic bookstore in the area. Great prices and wonderful customer service.",
      },
    ],
  },
  "modest-fashion": {
    id: "modest-fashion",
    name: "Modest Fashion House",
    category: "Fashion & Apparel",
    rating: 4.7,
    reviews: 2134,
    location: "Petaling Jaya",
    address: "78 Jalan SS2/24, 47300 Petaling Jaya, Selangor",
    phone: "+60 3-7875 9999",
    website: "www.modestfashion.com.my",
    email: "hello@modestfashion.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description:
      "Contemporary modest fashion for the modern Muslim woman. We blend traditional values with contemporary style, offering elegant and comfortable clothing for every occasion.",
    offers: ["New collection 20% off", "Free alterations", "VIP styling service"],
    hours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    certifications: ["Modest Fashion Certified", "Sustainable Fashion Award"],
    products: [
      { name: "Hijabs & Scarves", price: "RM 25.00 - RM 89.00", category: "Accessories" },
      { name: "Modest Dresses", price: "RM 89.00 - RM 299.00", category: "Dresses" },
      { name: "Abayas", price: "RM 120.00 - RM 450.00", category: "Outerwear" },
      { name: "Modest Workwear", price: "RM 65.00 - RM 189.00", category: "Professional" },
    ],
    customerReviews: [
      {
        name: "Aishah Mahmud",
        rating: 5,
        date: "2024-01-11",
        comment: "Beautiful designs and excellent quality. The staff helped me find the perfect outfit for my wedding.",
      },
      {
        name: "Zainab Hassan",
        rating: 4,
        date: "2024-01-07",
        comment: "Love the variety and the modest yet stylish designs. Prices are reasonable too.",
      },
    ],
  },
  "halal-restaurant": {
    id: "halal-restaurant",
    name: "Halal Restaurant Chain",
    category: "Food & Dining",
    rating: 4.6,
    reviews: 3456,
    location: "Multiple Locations",
    address: "Various locations across Klang Valley",
    phone: "+60 3-9876 5432",
    website: "www.halalrestaurant.com.my",
    email: "info@halalrestaurant.com.my",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    description:
      "Authentic halal cuisine and family dining experience. We serve traditional Malaysian dishes alongside international favorites, all prepared according to strict halal standards.",
    offers: ["Family meal deals", "Loyalty rewards program", "Birthday specials"],
    hours: {
      monday: "11:00 AM - 11:00 PM",
      tuesday: "11:00 AM - 11:00 PM",
      wednesday: "11:00 AM - 11:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 12:00 AM",
      saturday: "11:00 AM - 12:00 AM",
      sunday: "11:00 AM - 11:00 PM",
    },
    certifications: ["JAKIM Halal", "Food Safety Certified", "Family Friendly Award"],
    products: [
      { name: "Malaysian Cuisine", price: "RM 12.90 - RM 35.00", category: "Local" },
      { name: "International Dishes", price: "RM 15.90 - RM 42.00", category: "International" },
      { name: "Family Sets", price: "RM 45.00 - RM 89.00", category: "Sets" },
      { name: "Desserts", price: "RM 6.90 - RM 18.00", category: "Desserts" },
    ],
    customerReviews: [
      {
        name: "Family Rahman",
        rating: 5,
        date: "2024-01-13",
        comment: "Great family atmosphere and delicious food. Kids love the play area too!",
      },
      {
        name: "Omar Abdullah",
        rating: 4,
        date: "2024-01-06",
        comment: "Consistent quality across all locations. The loyalty program offers great value.",
      },
    ],
  },
}

export default function MerchantDetailPage({ params }: { params: { id: string } }) {
  const merchant = merchantsData[params.id as keyof typeof merchantsData]

  if (!merchant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm p-8">
          <CardContent className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Merchant Not Found</h1>
            <p className="text-slate-400 mb-6">The merchant you're looking for doesn't exist.</p>
            <Link href="/merchants">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">Back to Merchants</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/merchants"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Merchants
        </Link>

        {/* Merchant Header */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32">
                <AvatarImage src={merchant.image || "/placeholder.svg"} alt={merchant.name} />
                <AvatarFallback className="bg-yellow-400 text-slate-900 font-bold text-2xl">
                  {merchant.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{merchant.name}</h1>
                  {merchant.verified && <CheckCircle className="w-6 h-6 text-green-400" />}
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">{merchant.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{merchant.rating}</span>
                    <span className="text-slate-400">({merchant.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{merchant.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-300">{merchant.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-300">{merchant.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-300">{merchant.website}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-300">Open Now</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Offers */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white">Current Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {merchant.offers.map((offer, index) => (
                <div key={index} className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">{offer}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              value="hours"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              Hours
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900 text-slate-300"
            >
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Products & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {merchant.products.map((product, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{product.name}</h3>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-yellow-400 font-medium">{product.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hours">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(merchant.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-white font-medium capitalize">{day}</span>
                      <span className="text-slate-300">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {merchant.customerReviews.map((review, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-yellow-400 text-slate-900 font-bold">
                              {review.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-white font-medium">{review.name}</p>
                            <p className="text-slate-400 text-sm">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">About {merchant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {merchant.certifications.map((cert, index) => (
                        <Badge key={index} className="bg-green-400/20 text-green-400 border-green-400/30">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <p className="text-slate-300">
                        <strong>Address:</strong> {merchant.address}
                      </p>
                      <p className="text-slate-300">
                        <strong>Phone:</strong> {merchant.phone}
                      </p>
                      <p className="text-slate-300">
                        <strong>Website:</strong> {merchant.website}
                      </p>
                      <p className="text-slate-300">
                        <strong>Email:</strong> {merchant.email}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
