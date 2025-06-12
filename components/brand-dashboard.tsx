"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { ContentReview } from "@/components/content-review"
import { CampaignManagement } from "@/components/campaign-management"
import { CreatorManagement } from "@/components/creator-management"
import { Leaderboard } from "@/components/leaderboard"
import { Analytics } from "@/components/analytics"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { BrandProfile } from "@/components/brand-profile"
import { BrandSettings } from "@/components/brand-settings"
import { BrandNotifications } from "@/components/brand-notifications"
import { motion } from "framer-motion"

interface BrandDashboardProps {
  onBack: () => void
}

export type DashboardSection =
  | "dashboard"
  | "campaigns"
  | "content-review"
  | "creators"
  | "leaderboard"
  | "analytics"
  | "profile"
  | "settings"
  | "notifications"

export function BrandDashboard({ onBack }: BrandDashboardProps) {
  const [activeSection, setActiveSection] = useState<DashboardSection>("dashboard")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const getSectionTitle = (section: DashboardSection) => {
    switch (section) {
      case "dashboard":
        return "Dashboard"
      case "campaigns":
        return "Campaigns"
      case "content-review":
        return "Content Review"
      case "creators":
        return "Creators"
      case "leaderboard":
        return "Leaderboard"
      case "analytics":
        return "Analytics"
      case "profile":
        return "Profile"
      case "settings":
        return "Settings"
      case "notifications":
        return "Notifications"
      default:
        return "Dashboard"
    }
  }

  const renderContent = () => {
    const content = (() => {
      switch (activeSection) {
        case "dashboard":
          return <DashboardOverview />
        case "campaigns":
          return <CampaignManagement />
        case "content-review":
          return <ContentReview />
        case "creators":
          return <CreatorManagement />
        case "leaderboard":
          return <Leaderboard />
        case "analytics":
          return <Analytics />
        case "profile":
          return <BrandProfile />
        case "settings":
          return <BrandSettings />
        case "notifications":
          return <BrandNotifications />
        default:
          return <DashboardOverview />
      }
    })()

    return (
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <SidebarProvider>
     
        
          <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <SidebarInset>
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ height: "100%" }}
      >
            
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#" onClick={() => setActiveSection("dashboard")}>
                        UGC Platform
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{getSectionTitle(activeSection)}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <div className="flex flex-col h-screen pb-10">
                <div className="p-4 flex-1 overflow-y-auto">
            
                  {renderContent()}
                  
                </div>
              </div>
           
            </motion.div>
          </SidebarInset>
        
     
    </SidebarProvider>
  )
}
