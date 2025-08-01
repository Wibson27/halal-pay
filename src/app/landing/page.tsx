"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  Users,
  Building2,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Award,
  Lock,
  Smartphone,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function Landing() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: Shield,
      title: "100% Syariah Compliant",
      description:
        "Every transaction screened by DSN-MUI certified system with zero tolerance for riba, gharar, and maysir.",
    },
    {
      icon: TrendingUp,
      title: "Halal Investment Marketplace",
      description: "Access sukuk, syariah stocks, gold, and halal business investments with automated screening.",
    },
    {
      icon: Building2,
      title: "Multi-Banking Integration",
      description: "Connect all your Islamic banking accounts in one secure, elegant platform.",
    },
    {
      icon: Users,
      title: "Digital Syariah Advisory",
      description: "Get real-time fatwa and guidance from certified Islamic finance scholars.",
    },
    {
      icon: Smartphone,
      title: "Seamless Payments",
      description: "Wakalah bi al-ujrah compliant payments with 2,450+ verified halal merchants.",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights to optimize your halal wealth while maintaining full compliance.",
    },
  ]

  const testimonials = [
    {
      name: "Ahmad Rahman",
      role: "Business Owner",
      content:
        "Finally, a financial platform that aligns with my Islamic values. The compliance monitoring gives me complete peace of mind.",
      rating: 5,
    },
    {
      name: "Siti Khadijah",
      role: "Investment Manager",
      content:
        "The halal investment screening is incredibly thorough. I've grown my portfolio by 25% while staying 100% compliant.",
      rating: 5,
    },
    {
      name: "Dr. Muhammad Ali",
      role: "Islamic Finance Consultant",
      content: "HalalPay sets the gold standard for Syariah fintech. The advisory board feature is revolutionary.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "250K+", label: "Active Users" },
    { value: "RM 2.5B", label: "Transactions Processed" },
    { value: "2,450+", label: "Verified Merchants" },
    { value: "100%", label: "Halal Compliance" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl">HalalPay</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-yellow-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-slate-300 hover:text-yellow-400 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-slate-300 hover:text-yellow-400 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-300 hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:text-yellow-400">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-900/50 text-green-400 border-green-700 mb-6">
                <Shield className="w-3 h-3 mr-1" />
                DSN-MUI Certified Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                The Future of <span className="text-yellow-400 glow-text">Halal Finance</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Experience premium Islamic banking with cutting-edge technology. Every transaction is Syariah-compliant,
                every investment is halal, and every decision is guided by Islamic principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold text-lg px-8 py-3">
                    Start Your Halal Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent text-lg px-8 py-3"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  100% Riba-Free
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Bank-Level Security
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-yellow-400 glow-text mb-2">RM 125,430.50</div>
                      <p className="text-slate-400">Total Halal Portfolio</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Sukuk Investments</span>
                        <span className="text-green-400 font-bold">+8.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Gold Holdings</span>
                        <span className="text-green-400 font-bold">+12.3%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Halal Equity</span>
                        <span className="text-green-400 font-bold">+15.7%</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="flex items-center justify-center space-x-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">100% Syariah Compliant</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400 glow-text mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Built for the <span className="text-yellow-400 glow-text">Modern Muslim</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Combining Islamic principles with cutting-edge technology to deliver the most advanced Syariah-compliant
              financial platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border hover:border-yellow-400/50 transition-all group"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-yellow-400 glow-text">250,000+</span> Muslims
            </h2>
            <p className="text-xl text-slate-400">See what our community says about their halal finance journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-slate-900 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 neon-border">
            <CardContent className="p-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-yellow-400 glow-text">Financial Future?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of Muslims who have already made the switch to truly halal finance. Start your journey
                today with zero setup fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 font-bold text-lg px-8 py-3">
                    Create Free Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent text-lg px-8 py-3"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Bank-Level Security
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  100% Halal Guaranteed
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  DSN-MUI Certified
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">H</span>
                </div>
                <span className="text-white font-bold text-xl">HalalPay</span>
              </div>
              <p className="text-slate-400 mb-4">
                The future of Syariah-compliant finance, built with modern technology and Islamic principles.
              </p>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-900/50 text-green-400 border-green-700">
                  <Shield className="w-3 h-3 mr-1" />
                  DSN-MUI Certified
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Investments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Merchants
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Syariah Board
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 HalalPay. All rights reserved. Built with Islamic principles and modern technology.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }
        .neon-border {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.1);
        }
      `}</style>
    </div>
  )
}
