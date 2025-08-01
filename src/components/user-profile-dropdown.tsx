"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Settings, CreditCard, Shield, Bell, HelpCircle, LogOut, Camera, CheckCircle } from "lucide-react"
import Link from "next/link"

export function UserProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border-2 border-yellow-400/50">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ahmad Hassan" />
            <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold">
              AH
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
            <CheckCircle className="w-2 h-2 text-white" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-slate-800 border-slate-700" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-3 p-2">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-12 w-12 border-2 border-yellow-400/50">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Ahmad Hassan" />
                  <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold text-lg">
                    AH
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-slate-700 hover:bg-slate-600 border border-slate-600"
                >
                  <Camera className="h-3 w-3 text-slate-300" />
                </Button>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-white">Ahmad Hassan</p>
                  <Badge className="bg-green-900/50 text-green-400 border-green-700 text-xs">
                    <CheckCircle className="w-2 h-2 mr-1" />
                    Verified
                  </Badge>
                </div>
                <p className="text-xs text-slate-400">ahmad.hassan@email.com</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-yellow-900/50 text-yellow-400 border-yellow-700 text-xs">Premium</Badge>
                  <Badge className="bg-green-900/50 text-green-400 border-green-700 text-xs">100% Halal</Badge>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-700" />

        <Link href="/profile">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/settings">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/billing">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/security">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <Shield className="mr-2 h-4 w-4" />
            <span>Security</span>
          </DropdownMenuItem>
        </Link>

        <Link href="/notifications">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator className="bg-slate-700" />

        <Link href="/help">
          <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator className="bg-slate-700" />

        <Link href="/landing">
          <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-900/20 cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
