"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, MoreHorizontal, Users, FileText, BarChart3, Calendar, Bookmark, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreateCampaign } from "@/components/create-campaign"
import { InviteCreators } from "@/components/invite-creators"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts"
import { motion, AnimatePresence } from "framer-motion"

import * as RechartsPrimitive from "recharts"
import { cva, type VariantProps } from "class-variance-authority"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"
import { MiniLineChart } from "./MiniLineChart"

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface MiniLineChartProps {
  data: Array<{ value: number }>
  color?: string
  strokeWidth?: number
  className?: string
}

// Creator avatars for campaigns
const creatorAvatars = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&h=40&fit=crop&crop=face",
]

// Component for displaying creator avatars
function CreatorAvatars({ count, maxDisplay = 4 }: { count: number; maxDisplay?: number }) {
  const displayAvatars = creatorAvatars.slice(0, Math.min(maxDisplay, count))
  const remainingCount = Math.max(0, count - maxDisplay)

  if (count === 0) {
    return  <div className="flex items-center space-x-1 h-8"><span className="text-sm text-muted-foreground">No creators yet</span></div>
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex -space-x-2">
        {displayAvatars.map((avatar, index) => (
          <div
            key={index}
            className="relative w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-muted flex-shrink-0"
          >
            <img
              src={avatar || "/placeholder.svg"}
              alt={`Creator ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="relative w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-medium text-muted-foreground">+{remainingCount}</span>
          </div>
        )}
      </div>
      <span className="text-sm font-medium ml-2">{count} creators</span>
    </div>
  )
}

export function LightAnimatedInviteButton({ onClick }: { onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex items-center border border-neutral-700 rounded-full px-4 py-1.5 bg-transparent overflow-hidden transition-colors"
      style={{ minWidth: 80, minHeight: 40 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className="flex items-center justify-center z-10"
        initial={false}
        animate={{
          width: hovered ? "100%" : 34,
          height: 34,
          borderRadius: hovered ? 20 : 17,
          left: hovered ? 0 : 4,
          background: "linear-gradient(90deg, #d946ef 0%, #6366f1 100%)",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: 4,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <User className="w-5 h-5 text-black" />
      </motion.span>
      <AnimatePresence>
        {!hovered && (
          <motion.span
            className="ml-8 text-white font-medium z-20"
            initial={{ opacity: 1, width: "auto" }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Invite
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function CampaignManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showCreateCampaign, setShowCreateCampaign] = useState(false)
  const [showInviteCreators, setShowInviteCreators] = useState(false)
  const [selectedCampaignName, setSelectedCampaignName] = useState("")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const unmountingRef = useRef(false)

  const stats = [
    {
      
      data: [
        { value: 400 },
        { value: 300 },
        { value: 500 },
        { value: 280 },
        { value: 590 },
        { value: 320 },
        { value: 450 },
        { value: 380 },
        { value: 520 },
        { value: 600 },
      ],
      color: "#ffffff", 
    },
    {
    
      data: [
        { value: 200 },
        { value: 180 },
        { value: 500 },
        { value: 240 },
        { value: 260 },
        { value: 600 },
        { value: 280 },
        { value: 500 },
        { value: 950 },
        { value: 1547 },
      ],
      color: "#8b5cf6",
    },
    {
      
      data: [
        { value: 200 },
        { value: 180 },
        { value: 220 },
        { value: 240 },
        { value: 260 },
        { value: 230 },
        { value: 280 },
        { value: 300 },
        { value: 320 },
        { value: 8924 },
      ],
      color:  "#10b981",
    },
    {
      
      data: [
        { value: 200 },
        { value: 180 },
        { value: 220 },
        { value: 240 },
        { value: 260 },
        { value: 230 },
        { value: 280 },
        { value: 300 },
        { value: 320 },
        { value: 8924 },
      ],
      color: "#FF2056",
    },
  ]
  // Sample data with real free images
  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "Active",
      creators: 45,
      submissions: 128,
      budget: 15000,
      spent: 8500,
      roi: 245,
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Back to School Campaign",
      status: "Active",
      creators: 32,
      submissions: 89,
      budget: 12000,
      spent: 6200,
      roi: 189,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Holiday Gift Guide",
      status: "Draft",
      creators: 0,
      submissions: 0,
      budget: 20000,
      spent: 0,
      roi: 0,
      startDate: "2024-02-01",
      endDate: "2024-02-28",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Fitness Challenge",
      status: "Completed",
      creators: 67,
      submissions: 234,
      budget: 18000,
      spent: 17800,
      roi: 312,
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 5,
      name: "Sustainable Living",
      status: "Active",
      creators: 28,
      submissions: 76,
      budget: 10000,
      spent: 4500,
      roi: 156,
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop&crop=center",
    },
  ]

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      unmountingRef.current = true
    }
  }, [])

  const handleInviteCreators = (campaignName: string) => {
    console.log("Invite Creators clicked for:", campaignName)
      setSelectedCampaignName(campaignName)
      setShowInviteCreators(true)
  }

  const handleBackToList = () => {
    console.log("Back to list clicked")
      setShowCreateCampaign(false)
      setShowInviteCreators(false)
      setSelectedCampaignName("")
  }

  const handleCreateCampaign = () => {
    console.log("Create Campaign clicked")
      setShowCreateCampaign(true)
  }

  if (showCreateCampaign) {
    return (
      <div className="min-h-screen w-full">
        <CreateCampaign
          onBack={handleBackToList}
          onSave={(campaign) => {
            console.log("Campaign saved:", campaign)
            handleBackToList()
          }}
        />
      </div>
    )
  }

  if (showInviteCreators) {
    return (
      <div className="min-h-screen w-full">
        <InviteCreators 
          onBack={handleBackToList} 
          campaignName={selectedCampaignName} 
        />
      </div>
    )
  }


  return (
    <div
      ref={containerRef}
      className={`flex-1 space-y-6 p-6 min-h-screen transition-all duration-300 ${
        isTransitioning ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
      style={{ contain: "content" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Campaign Management</h2>
          <p className="text-muted-foreground">Create, monitor, and manage your UGC campaigns</p>
        </div>
        <Button 
          onClick={handleCreateCampaign}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Create Campaign
        </Button>
      </div>

      {/* Stats Cards */}
     

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative h-[150px]  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">{campaigns.length}</div>
            <p className="text-xs text-muted-foreground">
              {campaigns.filter((c) => c.status === "Active").length} active
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                data={stats[0].data}
                color={stats[0].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>
            <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="h-[150px] relative drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="flex flex-row gap-2 items-center">
              <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">
              ${campaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              ${campaigns.reduce((sum, c) => sum + c.spent, 0).toLocaleString()} spent
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                data={stats[1].data}
                color={stats[1].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="h-[150px] relative drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Creators</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="flex flex-row gap-2 items-center">
              <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">{campaigns.reduce((sum, c) => sum + c.creators, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                data={stats[2].data}
                color={stats[2].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>  
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="h-[150px] relative drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg ROI</CardTitle>
          </CardHeader>
          <CardContent> 
          <div className="flex flex-row gap-2 items-center">
              <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">
              {Math.round(
                campaigns.filter((c) => c.roi > 0).reduce((sum, c) => sum + c.roi, 0) /
                  campaigns.filter((c) => c.roi > 0).length,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Return on investment</p>
            </div>
              
            <div className="flex-grow ">
            <MiniLineChart
                data={stats[3].data}
                color={stats[3].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
             </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => !unmountingRef.current && setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredCampaigns.slice(0, 3).map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src={campaign.image || "/placeholder.svg"}
                alt={campaign.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{campaign.name}</CardTitle>
                <Badge
                  variant={
                    campaign.status === "Active"
                      ? "default"
                      : campaign.status === "Draft"
                        ? "secondary"
                        : campaign.status === "Completed"
                          ? "outline"
                          : "secondary"
                  }
                >
                  {campaign.status}
                </Badge>
              </div>
              <CardDescription>
                {campaign.startDate} - {campaign.endDate}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Budget:</span>
                <span>${campaign.budget.toLocaleString()}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Spent:</span>
                  <span>
                    ${campaign.spent.toLocaleString()} ({Math.round((campaign.spent / campaign.budget) * 100)}%)
                  </span>
                </div>
                <Progress value={(campaign.spent / campaign.budget) * 100} className="h-1" />
              </div>
              <div className="space-y-2 flex flex-col">
                <span className="text-sm text-muted-foreground">Creators:</span>
                <CreatorAvatars count={campaign.creators} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Submissions:</span>
                <span>{campaign.submissions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ROI:</span>
                <span className={campaign.roi > 0 ? "text-lime-300" : "text-muted-foreground"}>
                  {campaign.roi > 0 ? `${campaign.roi}%` : "-"}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <LightAnimatedInviteButton onClick={() => handleInviteCreators(campaign.name)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
          <CardDescription>A list of all your campaigns and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Creators</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>ROI</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={campaign.image || "/placeholder.svg"}
                          alt={campaign.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {campaign.startDate} - {campaign.endDate}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        campaign.status === "Active"
                          ? "default"
                          : campaign.status === "Draft"
                            ? "secondary"
                            : campaign.status === "Completed"
                              ? "outline"
                              : "secondary"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <CreatorAvatars count={campaign.creators} maxDisplay={3} />
                  </TableCell>
                  <TableCell>{campaign.submissions}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">
                        ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                      </div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="h-1" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={campaign.roi > 0 ? "text-lime-300" : "text-muted-foreground"}>
                      {campaign.roi > 0 ? `${campaign.roi}%` : "-"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleInviteCreators(campaign.name)}>
                          Invite Creators
                        </DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete Campaign</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
