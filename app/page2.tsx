"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Building2, 
  Users, 
  ArrowRight, 
  BarChart3, 
  Target, 
  Sparkles,
  Globe,
  Shield,
  Zap,
  MessageSquare,
  TrendingUp
} from "lucide-react"
import { BrandDashboard } from "@/components/brand-dashboard"
import { CreatorDashboard } from "@/components/creator-dashboard"

export default function HomePage() {
  const [userType, setUserType] = useState<"brand" | "creator" | null>(null)

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campaign Management",
      description: "Create and manage UGC campaigns with ease"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Network",
      description: "Connect with talented content creators"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Track performance and measure ROI"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Content Creation",
      description: "High-quality UGC content for your brand"
    }
  ]

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with creators worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Brand Safety",
      description: "Verified creators and content"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast content delivery"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Seamless creator collaboration"
    }
  ]

  if (userType === "brand") {
    return <BrandDashboard onBack={() => setUserType(null)} />
  }

  if (userType === "creator") {
    return <CreatorDashboard onBack={() => setUserType(null)} />
  }

  return (
    <div className=" xl:min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl font-bold tracking-tight">
            UGC Creator Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect brands with creators. Create authentic content. Drive engagement.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => setUserType("brand")}
              className="flex items-center gap-2"
            >
              <Building2 className="w-5 h-5" />
              For Brands
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setUserType("creator")}
              className="flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              For Creators
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground">
              Join the leading UGC platform that connects brands with authentic creators.
              Create engaging content that resonates with your audience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Platform Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
