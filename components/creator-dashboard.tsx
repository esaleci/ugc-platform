"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { CreatorAppSidebar } from "@/components/creator-app-sidebar"
import { CreatorOverview } from "@/components/creator-overview"
import { CreatorCampaigns } from "@/components/creator-campaigns"
import { CreatorContent } from "@/components/creator-content"
import { CreatorEarnings } from "@/components/creator-earnings"
import { CreatorPerformance } from "@/components/creator-performance"
import { CreatorLeaderboard } from "@/components/creator-leaderboard"
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
import { CreatorProfile } from "@/components/creator-profile"
import { CreatorSettings } from "@/components/creator-settings"
import { CreatorNotifications } from "@/components/creator-notifications"
import { motion } from "framer-motion"

interface CreatorDashboardProps {
  onBack: () => void
}

export type CreatorDashboardSection =
  | "overview"
  | "campaigns"
  | "content"
  | "earnings"
  | "performance"
  | "leaderboard"
  | "profile"
  | "settings"
  | "notifications"

export function CreatorDashboard({ onBack }: CreatorDashboardProps) {
  const [activeSection, setActiveSection] = useState<CreatorDashboardSection>("overview")

  const getSectionTitle = (section: CreatorDashboardSection) => {
    switch (section) {
      case "overview":
        return "Overview"
      case "campaigns":
        return "Campaigns"
      case "content":
        return "My Content"
      case "earnings":
        return "Earnings"
      case "performance":
        return "Performance"
      case "leaderboard":
        return "Leaderboard"
      case "profile":
        return "Profile"
      case "settings":
        return "Settings"
      case "notifications":
        return "Notifications"
      default:
        return "Overview"
    }
  }

  const renderContent = () => {
    const content = (() => {
      switch (activeSection) {
        case "overview":
          return <CreatorOverview />
        case "campaigns":
          return <CreatorCampaigns />
        case "content":
          return <CreatorContent />
        case "earnings":
          return <CreatorEarnings />
        case "performance":
          return <CreatorPerformance />
        case "leaderboard":
          return <CreatorLeaderboard />
        case "profile":
          return <CreatorProfile />
        case "settings":
          return <CreatorSettings />
        case "notifications":
          return <CreatorNotifications />
        default:
          return <CreatorOverview />
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
      <CreatorAppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <SidebarInset>
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
                <BreadcrumbLink href="#" onClick={() => setActiveSection("overview")}>
                  Creator Platform
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
      </SidebarInset>
    </SidebarProvider>
  )
}
