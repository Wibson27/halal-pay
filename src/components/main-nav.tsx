"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UserProfileDropdown } from "./user-profile-dropdown"
import { Home, CreditCard, TrendingUp, Banknote, Store, Shield, Bell, MessageSquare, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/payments", label: "Payments", icon: CreditCard },
    { href: "/investments", label: "Investments", icon: TrendingUp },
    { href: "/financing", label: "Financing", icon: Banknote },
    { href: "/merchants", label: "Merchants", icon: Store },
    { href: "/compliance", label: "Compliance", icon: Shield },
  ]

  return (
    <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl">HalalPay</span>
            </Link>
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors flex items-center space-x-2 px-3 py-2 rounded-md ${
                      isActive
                        ? "text-yellow-400 bg-yellow-400/10 hover:text-yellow-300"
                        : "text-white hover:text-yellow-400 hover:bg-slate-800/50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/syariah-board" className="hidden md:block">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Syariah Board
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>

            <div className="hidden md:block">
              <UserProfileDropdown />
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-slate-900 border-slate-700">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-slate-700">
                    <UserProfileDropdown />
                    <div>
                      <p className="text-white font-medium">Ahmad Hassan</p>
                      <p className="text-slate-400 text-sm">ahmad.hassan@email.com</p>
                    </div>
                  </div>

                  {navItems.map((item) => {
                    const IconComponent = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`transition-colors flex items-center space-x-3 px-3 py-3 rounded-md ${
                          isActive
                            ? "text-yellow-400 bg-yellow-400/10"
                            : "text-white hover:text-yellow-400 hover:bg-slate-800/50"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}

                  <Link href="/syariah-board" className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 bg-transparent"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Syariah Board
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
