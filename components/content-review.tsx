"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  CheckCircle,
  XCircle,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  Filter,
  Search,
  Download,
  MoreHorizontal,
  CalendarIcon,
  Tag,
  Bookmark,
  Star,
  AlertCircle,
  Trash2,
  RefreshCw,
} from "lucide-react"
import { format } from "date-fns"

// Sample data for submitted content with real images
const submittedContent = [
  // Pending items (3)
  {
    id: 1,
    creator: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 45000,
    },
    campaign: "Summer Collection Launch",
    type: "Instagram Post",
    submitted: "2024-01-10T10:30:00",
    status: "Pending",
    category: "Fashion",
    tags: ["summer", "beachwear", "lifestyle"],
    content: {
      caption: "Loving this new summer collection! Perfect for beach days ☀️ #SummerVibes",
      hashtags: ["#SummerCollection", "#BeachStyle", "#OOTD"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&crop=center",
    reward: 250,
  },
  {
    id: 5,
    creator: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      followers: 120000,
    },
    campaign: "Sustainable Living",
    type: "Instagram Reel",
    submitted: "2024-01-13T11:30:00",
    status: "Pending",
    category: "Lifestyle",
    tags: ["sustainable", "ecofriendly", "green"],
    content: {
      caption: "Small changes for a more sustainable lifestyle! 🌱 #EcoFriendly",
      hashtags: ["#SustainableLiving", "#EcoFriendly", "#GreenLifestyle"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop&crop=center",
    reward: 500,
  },
  {
    id: 9,
    creator: {
      name: "Sophia Lee",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 56000,
    },
    campaign: "Home Decor Ideas",
    type: "Pinterest Pin",
    submitted: "2024-01-12T09:45:00",
    status: "Pending",
    category: "Home & Living",
    tags: ["homedecor", "interior", "design"],
    content: {
      caption: "Transform your space with these simple decor ideas! 🏠 #HomeInspo",
      hashtags: ["#HomeDecor", "#InteriorDesign", "#DIYHome"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    reward: 350,
  },
  // Under Review items (2)
  {
    id: 3,
    creator: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      followers: 23000,
    },
    campaign: "Summer Collection Launch",
    type: "Instagram Story",
    submitted: "2024-01-11T16:45:00",
    status: "Under Review",
    category: "Fashion",
    tags: ["summer", "haul", "fashion"],
    content: {
      caption: "Summer essentials haul! Swipe for details 👆",
      hashtags: ["#SummerHaul", "#NewIn"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center",
    reward: 150,
  },
  {
    id: 7,
    creator: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      followers: 31000,
    },
    campaign: "Beauty Tutorial",
    type: "TikTok Video",
    submitted: "2024-01-11T13:20:00",
    status: "Under Review",
    category: "Beauty",
    tags: ["beauty", "makeup", "tutorial"],
    content: {
      caption: "5-minute makeup routine for busy mornings! 💄 #BeautyHacks",
      hashtags: ["#BeautyTutorial", "#MakeupRoutine", "#QuickMakeup"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
    reward: 250,
  },
  // Approved items (3)
  {
    id: 2,
    creator: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      followers: 78000,
    },
    campaign: "Back to School Campaign",
    type: "TikTok Video",
    submitted: "2024-01-12T14:20:00",
    status: "Approved",
    category: "Education",
    tags: ["backtoschool", "student", "supplies"],
    content: {
      caption: "Back to school essentials that won't break the bank! 📚✨",
      hashtags: ["#BackToSchool", "#StudentLife", "#BudgetFriendly"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 15600, comments: 234, shares: 89, saves: 445 },
    metrics: { reach: 45000, impressions: 67800, engagementRate: 12.3 },
    mediaUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
    reward: 400,
  },
  {
    id: 6,
    creator: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 67000,
    },
    campaign: "Tech Gadgets Review",
    type: "YouTube Video",
    submitted: "2024-01-08T15:45:00",
    status: "Approved",
    category: "Technology",
    tags: ["tech", "gadgets", "review"],
    content: {
      caption: "Honest review of the latest tech gadgets! 📱 #TechReview",
      hashtags: ["#TechReview", "#GadgetReview", "#TechTips"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 5600, comments: 278, shares: 134, saves: 320 },
    metrics: { reach: 34000, impressions: 45600, engagementRate: 8.9 },
    mediaUrl: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=400&fit=crop&crop=center",
    reward: 450,
  },
  {
    id: 8,
    creator: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      followers: 89000,
    },
    campaign: "Travel Destinations",
    type: "Instagram Post",
    submitted: "2024-01-07T10:15:00",
    status: "Approved",
    category: "Travel",
    tags: ["travel", "vacation", "destinations"],
    content: {
      caption: "Exploring hidden gems in this beautiful destination! ✈️ #TravelDiary",
      hashtags: ["#TravelDestinations", "#Wanderlust", "#TravelTips"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 12300, comments: 456, shares: 234, saves: 567 },
    metrics: { reach: 67000, impressions: 89400, engagementRate: 11.2 },
    mediaUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&crop=center",
    reward: 500,
  },
  // Rejected items (2)
  {
    id: 4,
    creator: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 52000,
    },
    campaign: "Fitness Challenge",
    type: "YouTube Short",
    submitted: "2024-01-09T09:15:00",
    status: "Rejected",
    category: "Fitness",
    tags: ["workout", "fitness", "challenge"],
    content: {
      caption: "Try this 5-minute workout challenge! 💪 #FitnessGoals",
      hashtags: ["#FitnessChallenge", "#WorkoutRoutine", "#HealthyLifestyle"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    reward: 300,
    rejectionReason: "Content doesn't align with brand guidelines",
  },
  {
    id: 10,
    creator: {
      name: "Ryan Thompson",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      followers: 28000,
    },
    campaign: "Cooking Recipe",
    type: "YouTube Short",
    submitted: "2024-01-10T16:30:00",
    status: "Rejected",
    category: "Food",
    tags: ["recipe", "cooking", "food"],
    content: {
      caption: "Quick and easy recipe for busy weeknights! 🍽️ #RecipeIdeas",
      hashtags: ["#QuickRecipes", "#EasyMeals", "#FoodInspo"],
      mentions: ["@brandname"],
    },
    engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
    metrics: { reach: 0, impressions: 0, engagementRate: 0 },
    mediaUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center",
    reward: 200,
    rejectionReason: "Video quality doesn't meet standards",
  },
]

// Helper function to check if content should show engagement metrics
const shouldShowEngagement = (status: string) => {
  return status === "Approved"
}

// Available campaigns for filtering
const campaigns = [
  "All Campaigns",
  "Summer Collection Launch",
  "Back to School Campaign",
  "Fitness Challenge",
  "Sustainable Living",
  "Tech Gadgets Review",
  "Beauty Tutorial",
  "Travel Destinations",
  "Home Decor Ideas",
  "Cooking Recipe",
]

// Content types for filtering
const contentTypes = [
  "All Types",
  "Instagram Post",
  "Instagram Story",
  "Instagram Reel",
  "TikTok Video",
  "YouTube Video",
  "YouTube Short",
  "Pinterest Pin",
]

// Content categories for filtering
const categories = [
  "All Categories",
  "Fashion",
  "Education",
  "Fitness",
  "Lifestyle",
  "Technology",
  "Beauty",
  "Travel",
  "Home & Living",
  "Food",
]

// Content statuses for filtering
const statuses = ["All Statuses", "Pending", "Under Review", "Approved", "Rejected"]

export function ContentReview() {
  const [selectedContent, setSelectedContent] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [showFilters, setShowFilters] = useState(false)
  const [currentContent, setCurrentContent] = useState<any>(null)

  // Filter states
  const [filters, setFilters] = useState({
    campaign: "All Campaigns",
    contentType: "All Types",
    category: "All Categories",
    status: "All Statuses",
    dateRange: {
      from: undefined as Date | undefined,
      to: undefined as Date | undefined,
    },
    engagementMin: "",
    creatorTier: "All Tiers",
  })

  // Apply filters to content
  const filteredContent = submittedContent.filter((content) => {
    // Search term filter
    if (
      searchTerm &&
      !content.creator.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !content.campaign.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !content.content.caption.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !content.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Campaign filter
    if (filters.campaign !== "All Campaigns" && content.campaign !== filters.campaign) {
      return false
    }

    // Content type filter
    if (filters.contentType !== "All Types" && content.type !== filters.contentType) {
      return false
    }

    // Category filter
    if (filters.category !== "All Categories" && content.category !== filters.category) {
      return false
    }

    // Status filter
    if (filters.status !== "All Statuses" && content.status !== filters.status) {
      return false
    }

    // Date range filter
    if (filters.dateRange.from) {
      const contentDate = new Date(content.submitted)
      if (contentDate < filters.dateRange.from) {
        return false
      }
    }

    if (filters.dateRange.to) {
      const contentDate = new Date(content.submitted)
      if (contentDate > filters.dateRange.to) {
        return false
      }
    }

    // Engagement filter
    if (filters.engagementMin && content.metrics.engagementRate < Number.parseFloat(filters.engagementMin)) {
      return false
    }

    // Creator tier filter
    if (filters.creatorTier !== "All Tiers" && content.creator.tier !== filters.creatorTier) {
      return false
    }

    return true
  })

  const handleContentApproval = (contentId: number, action: "approve" | "reject") => {
    console.log(`${action} content ${contentId}`)
  }

  const handleBulkAction = (action: string) => {
    console.log(`Bulk ${action} for content:`, selectedContent)
    setSelectedContent([])
  }

  const resetFilters = () => {
    setFilters({
      campaign: "All Campaigns",
      contentType: "All Types",
      category: "All Categories",
      status: "All Statuses",
      dateRange: {
        from: undefined,
        to: undefined,
      },
      engagementMin: "",
      creatorTier: "All Tiers",
    })
    setSearchTerm("")
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContent(filteredContent.map((content) => content.id.toString()))
    } else {
      setSelectedContent([])
    }
  }

  return (

    <div className="space-y-6">

      <Card className="bg-background border-none shadow-none">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">Content Review & Management</CardTitle>
              <CardDescription className="text-muted-foreground">
                Review, approve, and manage submitted content from creators
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="border-border"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkAction("approve")}
                disabled={selectedContent.length === 0}
                className="border-border"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Bulk Approve
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBulkAction("reject")}
                disabled={selectedContent.length === 0}
                className="border-border"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Bulk Reject
              </Button>
              <Button variant="outline" size="sm" className="border-border">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Search and basic filters */}
          {/* <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by creator, campaign, caption, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div> */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by creator, campaign, caption, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
            <div className="flex gap-2">
              <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
                <SelectTrigger className="w-[180px] bg-input border-border text-foreground">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`border-border ${selectedDate ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Filter by date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background border-border">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="bg-background text-foreground"
                  />
                </PopoverContent>
              </Popover>
              <Button variant="outline" size="sm" onClick={resetFilters} className="border-border">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Advanced filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <Label htmlFor="campaign" className="text-muted-foreground">
                  Campaign
                </Label>
                <Select value={filters.campaign} onValueChange={(value) => setFilters({ ...filters, campaign: value })}>
                  <SelectTrigger className="mt-1 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select campaign" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {campaigns.map((campaign) => (
                      <SelectItem key={campaign} value={campaign}>
                        {campaign}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="contentType" className="text-muted-foreground">
                  Content Type
                </Label>
                <Select
                  value={filters.contentType}
                  onValueChange={(value) => setFilters({ ...filters, contentType: value })}
                >
                  <SelectTrigger className="mt-1 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category" className="text-muted-foreground">
                  Category
                </Label>
                <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                  <SelectTrigger className="mt-1 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="creatorTier" className="text-muted-foreground">
                  Creator Tier
                </Label>
                <Select
                  value={filters.creatorTier}
                  onValueChange={(value) => setFilters({ ...filters, creatorTier: value })}
                >
                  <SelectTrigger className="mt-1 bg-input border-border text-foreground">
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="All Tiers">All Tiers</SelectItem>
                    <SelectItem value="Diamond">Diamond</SelectItem>
                    <SelectItem value="Platinum">Platinum</SelectItem>
                    <SelectItem value="Gold">Gold</SelectItem>
                    <SelectItem value="Silver">Silver</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="engagementMin" className="text-muted-foreground">
                  Min Engagement Rate (%)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g. 5.0"
                  className="mt-1 bg-input border-border text-foreground"
                  value={filters.engagementMin}
                  onChange={(e) => setFilters({ ...filters, engagementMin: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-muted-foreground">View Mode</Label>
                <div className="flex gap-2 mt-1">
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode !== "list" ? "border-border" : ""}
                  >
                    List View
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode !== "grid" ? "border-border" : ""}
                  >
                    Grid View
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
          {/* <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse" disabled={isExiting}>
            Browse Creators
          </TabsTrigger>
          <TabsTrigger value="message" disabled={isExiting}>
            Invitation Message
          </TabsTrigger>
        </TabsList> */}
        
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger
                value="all"
             >
                All Content ({submittedContent.length})
              </TabsTrigger>
              <TabsTrigger
                value="pending"
              >
                Pending ({submittedContent.filter((c) => c.status === "Pending").length})
              </TabsTrigger>
              <TabsTrigger
                value="review"
             >
                Under Review ({submittedContent.filter((c) => c.status === "Under Review").length})
              </TabsTrigger>
              <TabsTrigger
                value="approved"
              >
                Approved ({submittedContent.filter((c) => c.status === "Approved").length})
              </TabsTrigger>
              <TabsTrigger
                value="rejected"
              >
                Rejected ({submittedContent.filter((c) => c.status === "Rejected").length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {viewMode === "list" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Checkbox
                      id="select-all"
                      onCheckedChange={handleSelectAll}
                      checked={selectedContent.length === filteredContent.length && filteredContent.length > 0}
                    />
                    <Label htmlFor="select-all" className="text-muted-foreground">
                      Select All ({filteredContent.length})
                    </Label>
                  </div>

                  {filteredContent.length === 0 ? (
                    <div className="text-center py-12 bg-muted/50 rounded-lg">
                      <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium text-foreground">No content found</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Try adjusting your search or filter criteria to find what you're looking for.
                      </p>
                      <Button variant="outline" className="mt-4 border-border" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    filteredContent.map((content) => (
                      <div key={content.id} className="bg-card text-card-foreground shadow-sm rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <Checkbox
                            checked={selectedContent.includes(content.id.toString())}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedContent([...selectedContent, content.id.toString()])
                              } else {
                                setSelectedContent(selectedContent.filter((id) => id !== content.id.toString()))
                              }
                            }}
                          />

                          <div className="flex flex-col md:flex-row w-full gap-4">
                            {/* Content Preview */}
                            <div className="w-full md:w-32 h-32 bg-background rounded-lg overflow-hidden">
                              <img
                                src={content.mediaUrl || "/placeholder.svg"}
                                alt="Content preview"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Content Details */}
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Avatar className="w-6 h-6">
                                    <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>
                                      {content.creator.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-foreground font-medium">{content.creator.name}</span>
                                  <Badge variant="outline" className="ml-2">
                                    {content.creator.tier}
                                  </Badge>
                                </div>
                                <div className="flex gap-2 mt-2 md:mt-0">
                                  <Badge variant="outline">{content.type}</Badge>
                                  <Badge
                                    variant={
                                      content.status === "Approved"
                                        ? "default"
                                        : content.status === "Pending"
                                          ? "secondary"
                                          : content.status === "Rejected"
                                            ? "destructive"
                                            : "outline"
                                    }
                                  >
                                    {content.status}
                                  </Badge>
                                </div>
                              </div>

                              <div className="mb-2">
                                <div className="text-sm text-muted-foreground">
                                  <span className="font-medium text-foreground">{content.campaign}</span> •{" "}
                                  {new Date(content.submitted).toLocaleDateString()}
                                </div>
                                <p className="text-foreground mt-1">{content.content.caption}</p>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-3">
                                {content.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Engagement Metrics */}
                              {shouldShowEngagement(content.status) ? (
                                <div className="flex flex-wrap gap-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 text-red-400" />
                                    {content.engagement.likes.toLocaleString()}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4 text-blue-400" />
                                    {content.engagement.comments}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Share2 className="w-4 h-4 text-lime-400" />
                                    {content.engagement.shares}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Bookmark className="w-4 h-4 text-purple-400" />
                                    {content.engagement.saves}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    {content.metrics.engagementRate}% engagement
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <AlertCircle className="w-4 h-4" />
                                  {content.status === "Pending" && "Awaiting approval to track performance"}
                                  {content.status === "Under Review" && "Content under review - no metrics yet"}
                                  {content.status === "Rejected" &&
                                    `Rejected: ${content.rejectionReason || "Content not approved"}`}
                                </div>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex md:flex-col gap-2 mt-4 md:mt-0">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="border-border">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-background border-border text-foreground max-w-4xl">
                                  <DialogHeader>
                                    <DialogTitle>Content Details</DialogTitle>
                                    <DialogDescription className="text-muted-foreground">
                                      Detailed view of the submitted content
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                      <div className="bg-muted/50 rounded-lg overflow-hidden">
                                        <img
                                          src={content.mediaUrl || "/placeholder.svg"}
                                          alt="Content preview"
                                          className="w-full h-auto object-cover"
                                        />
                                      </div>
                                      {shouldShowEngagement(content.status) ? (
                                        <>
                                          <div className="mt-4 space-y-2">
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center gap-2">
                                                <Heart className="w-4 h-4 text-red-400" />
                                                <span className="text-foreground">
                                                  {content.engagement.likes.toLocaleString()} likes
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4 text-blue-400" />
                                                <span className="text-foreground">
                                                  {content.engagement.comments} comments
                                                </span>
                                              </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                              <div className="flex items-center gap-2">
                                                <Share2 className="w-4 h-4 text-lime-400" />
                                                <span className="text-foreground">
                                                  {content.engagement.shares} shares
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <Bookmark className="w-4 h-4 text-purple-400" />
                                                <span className="text-foreground">
                                                  {content.engagement.saves} saves
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className="text-sm font-medium text-muted-foreground">
                                              Performance Metrics
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2 mt-1">
                                              <div className="bg-muted/50 p-2 rounded-lg">
                                                <div className="text-sm text-muted-foreground">Reach</div>
                                                <div className="text-foreground font-medium">
                                                  {content.metrics.reach.toLocaleString()}
                                                </div>
                                              </div>
                                              <div className="bg-muted/50 p-2 rounded-lg">
                                                <div className="text-sm text-muted-foreground">Impressions</div>
                                                <div className="text-foreground font-medium">
                                                  {content.metrics.impressions.toLocaleString()}
                                                </div>
                                              </div>
                                              <div className="bg-muted/50 p-2 rounded-lg">
                                                <div className="text-sm text-muted-foreground">Engagement Rate</div>
                                                <div className="text-foreground font-medium">
                                                  {content.metrics.engagementRate}%
                                                </div>
                                              </div>
                                              <div className="bg-muted/50 p-2 rounded-lg">
                                                <div className="text-sm text-muted-foreground">Reward</div>
                                                <div className="text-lime-400 font-medium">${content.reward}</div>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <div className="bg-muted/50 p-4 rounded-lg">
                                          <div className="flex items-center gap-2 text-muted-foreground">
                                            <AlertCircle className="w-5 h-5" />
                                            <div>
                                              <h4 className="font-medium">No Performance Data Available</h4>
                                              <p className="text-sm">
                                                {content.status === "Pending" &&
                                                  "Content is awaiting approval. Performance metrics will be available once published."}
                                                {content.status === "Under Review" &&
                                                  "Content is currently under review. Metrics will be tracked after approval."}
                                                {content.status === "Rejected" &&
                                                  `Content was rejected: ${content.rejectionReason || "Content did not meet approval criteria"}`}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="space-y-4">
                                      <div className="flex items-center gap-3">
                                        <Avatar>
                                          <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                          <AvatarFallback>
                                            {content.creator.name
                                              .split(" ")
                                              .map((n) => n[0])
                                              .join("")}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <div className="text-foreground font-medium">{content.creator.name}</div>
                                          <div className="text-sm text-muted-foreground">
                                            {content.creator.tier} • {content.creator.followers.toLocaleString()}{" "}
                                            followers
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium text-muted-foreground">Campaign</h4>
                                        <p className="text-foreground">{content.campaign}</p>
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium text-muted-foreground">Caption</h4>
                                        <p className="text-foreground">{content.content.caption}</p>
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium text-muted-foreground">Hashtags</h4>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                          {content.content.hashtags.map((tag) => (
                                            <Badge key={tag} variant="outline">
                                              {tag}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium text-muted-foreground">
                                          Performance Metrics
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2 mt-1">
                                          <div className="bg-muted/50 p-2 rounded-lg">
                                            <div className="text-sm text-muted-foreground">Reach</div>
                                            <div className="text-foreground font-medium">
                                              {content.metrics.reach.toLocaleString()}
                                            </div>
                                          </div>
                                          <div className="bg-muted/50 p-2 rounded-lg">
                                            <div className="text-sm text-muted-foreground">Impressions</div>
                                            <div className="text-foreground font-medium">
                                              {content.metrics.impressions.toLocaleString()}
                                            </div>
                                          </div>
                                          <div className="bg-muted/50 p-2 rounded-lg">
                                            <div className="text-sm text-muted-foreground">Engagement Rate</div>
                                            <div className="text-foreground font-medium">
                                              {content.metrics.engagementRate}%
                                            </div>
                                          </div>
                                          <div className="bg-muted/50 p-2 rounded-lg">
                                            <div className="text-sm text-muted-foreground">Reward</div>
                                            <div className="text-lime-400 font-medium">${content.reward}</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 pt-4">
                                        <Button
                                          className="flex-1 bg-lime-100 hover:bg-lime-300 text-stone-800"
                                          onClick={() => handleContentApproval(content.id, "approve")}
                                        >
                                          <CheckCircle className="w-4 h-4 mr-2" />
                                          Approve
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="flex-1 border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white "
                                          onClick={() => handleContentApproval(content.id, "reject")}
                                        >
                                          <XCircle className="w-4 h-4 mr-2" />
                                          Reject
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button
                                size="sm"
                                className="bg-lime-100 hover:bg-lime-300 text-stone-800"
                                onClick={() => handleContentApproval(content.id, "approve")}
                              >
                                <CheckCircle className="w-4 h-4 mr-2 " />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white"
                                onClick={() => handleContentApproval(content.id, "reject")}
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Reject
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-background border-border">
                                  <DropdownMenuItem className="text-foreground">
                                    <Tag className="w-4 h-4 mr-2" />
                                    Add Tags
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-foreground">
                                    <Bookmark className="w-4 h-4 mr-2" />
                                    Save for Later
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-foreground">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Media
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-400">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                // Grid View
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredContent.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-muted/50 rounded-lg">
                      <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium text-foreground">No content found</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Try adjusting your search or filter criteria to find what you're looking for.
                      </p>
                      <Button variant="outline" className="mt-4 border-border" onClick={resetFilters}>
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    filteredContent.map((content) => (
                      <div key={content.id} className="bg-muted/50 rounded-lg overflow-hidden">
                        <div className="relative">
                          <img
                            src={content.mediaUrl || "/placeholder.svg"}
                            alt="Content preview"
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 right-2 flex gap-1">
                            <Checkbox
                              checked={selectedContent.includes(content.id.toString())}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedContent([...selectedContent, content.id.toString()])
                                } else {
                                  setSelectedContent(selectedContent.filter((id) => id !== content.id.toString()))
                                }
                              }}
                              className="bg-background/80"
                            />
                          </div>
                          <Badge
                            className="absolute top-2 left-2"
                            variant={
                              content.status === "Approved"
                                ? "default"
                                : content.status === "Pending"
                                  ? "secondary"
                                  : content.status === "Rejected"
                                    ? "destructive"
                                    : "outline"
                            }
                          >
                            {content.status}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {content.creator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-foreground font-medium truncate">{content.creator.name}</span>
                            </div>
                            <Badge variant="outline">{content.type}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2 truncate">{content.campaign}</div>
                          <p className="text-foreground text-sm line-clamp-2 mb-3">{content.content.caption}</p>
                          {shouldShowEngagement(content.status) ? (
                            <div className="flex gap-3 text-sm mb-3">
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3 text-red-400" />
                                {content.engagement.likes.toLocaleString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3 text-blue-400" />
                                {content.engagement.comments}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400" />
                                {content.metrics.engagementRate}%
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                              <AlertCircle className="w-3 h-3" />
                              {content.status === "Pending" && "Pending approval"}
                              {content.status === "Under Review" && "Under review"}
                              {content.status === "Rejected" && "Rejected"}
                            </div>
                          )}
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" className="flex-1 border-border">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-background border-border text-foreground max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>Content Details</DialogTitle>
                                  <DialogDescription className="text-muted-foreground">
                                    Detailed view of the submitted content
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="flex flex-col gap-2">
                                    <div className="bg-muted/50 rounded-lg overflow-hidden">
                                      <img
                                        src={content.mediaUrl || "/placeholder.svg"}
                                        alt="Content preview"
                                        className="w-full h-auto object-cover"
                                      />
                                    </div>
                                    {shouldShowEngagement(content.status) ? (
                                      <>
                                        <div className="mt-4 space-y-2">
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                              <Heart className="w-4 h-4 text-red-400" />
                                              <span className="text-foreground">
                                                {content.engagement.likes.toLocaleString()} likes
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <MessageSquare className="w-4 h-4 text-blue-400" />
                                              <span className="text-foreground">
                                                {content.engagement.comments} comments
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                              <Share2 className="w-4 h-4 text-lime-400" />
                                              <span className="text-foreground">
                                                {content.engagement.shares} shares
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <Bookmark className="w-4 h-4 text-purple-400" />
                                              <span className="text-foreground">{content.engagement.saves} saves</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h4 className="text-sm font-medium text-muted-foreground">
                                            Performance Metrics
                                          </h4>
                                          <div className="grid grid-cols-2 gap-2 mt-1">
                                            <div className="bg-muted/50 p-2 rounded-lg">
                                              <div className="text-sm text-muted-foreground">Reach</div>
                                              <div className="text-foreground font-medium">
                                                {content.metrics.reach.toLocaleString()}
                                              </div>
                                            </div>
                                            <div className="bg-muted/50 p-2 rounded-lg">
                                              <div className="text-sm text-muted-foreground">Impressions</div>
                                              <div className="text-foreground font-medium">
                                                {content.metrics.impressions.toLocaleString()}
                                              </div>
                                            </div>
                                            <div className="bg-muted/50 p-2 rounded-lg">
                                              <div className="text-sm text-muted-foreground">Engagement Rate</div>
                                              <div className="text-foreground font-medium">
                                                {content.metrics.engagementRate}%
                                              </div>
                                            </div>
                                            <div className="bg-muted/50 p-2 rounded-lg">
                                              <div className="text-sm text-muted-foreground">Reward</div>
                                              <div className="text-lime-400 font-medium">${content.reward}</div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="bg-muted/50 p-4 rounded-lg mt-2">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                          <AlertCircle className="w-5 h-5" />
                                          <div>
                                            <h4 className="font-medium">No Performance Data Available</h4>
                                            <p className="text-sm">
                                              {content.status === "Pending" &&
                                                "Content is awaiting approval. Performance metrics will be available once published."}
                                              {content.status === "Under Review" &&
                                                "Content is currently under review. Metrics will be tracked after approval."}
                                              {content.status === "Rejected" &&
                                                `Content was rejected: ${content.rejectionReason || "Content did not meet approval criteria"}`}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                      <Avatar>
                                        <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                        <AvatarFallback>
                                          {content.creator.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <div className="text-foreground font-medium">{content.creator.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                          {content.creator.tier} • {content.creator.followers.toLocaleString()}{" "}
                                          followers
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-muted-foreground">Campaign</h4>
                                      <p className="text-foreground">{content.campaign}</p>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-muted-foreground">Caption</h4>
                                      <p className="text-foreground">{content.content.caption}</p>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-muted-foreground">Hashtags</h4>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {content.content.hashtags.map((tag) => (
                                          <Badge key={tag} variant="outline">
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-muted-foreground">Performance Metrics</h4>
                                      <div className="grid grid-cols-2 gap-2 mt-1">
                                        <div className="bg-muted/50 p-2 rounded-lg">
                                          <div className="text-sm text-muted-foreground">Reach</div>
                                          <div className="text-foreground font-medium">
                                            {content.metrics.reach.toLocaleString()}
                                          </div>
                                        </div>
                                        <div className="bg-muted/50 p-2 rounded-lg">
                                          <div className="text-sm text-muted-foreground">Impressions</div>
                                          <div className="text-foreground font-medium">
                                            {content.metrics.impressions.toLocaleString()}
                                          </div>
                                        </div>
                                        <div className="bg-muted/50 p-2 rounded-lg">
                                          <div className="text-sm text-muted-foreground">Engagement Rate</div>
                                          <div className="text-foreground font-medium">
                                            {content.metrics.engagementRate}%
                                          </div>
                                        </div>
                                        <div className="bg-muted/50 p-2 rounded-lg">
                                          <div className="text-sm text-muted-foreground">Reward</div>
                                          <div className="text-lime-400 font-medium">${content.reward}</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 pt-4">
                                      <Button
                                        className="flex-1 bg-lime-100 hover:bg-lime-300 text-stone-800"
                                        onClick={() => handleContentApproval(content.id, "approve")}
                                      >
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Approve
                                      </Button>
                                      <Button
                                        variant="outline"
                                        className="flex-1 border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white"
                                        onClick={() => handleContentApproval(content.id, "reject")}
                                      >
                                        <XCircle className="w-4 h-4 mr-2" />
                                        Reject
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-background border-border">
                                <DropdownMenuItem
                                  className="text-lime-400"
                                  onClick={() => handleContentApproval(content.id, "approve")}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-400"
                                  onClick={() => handleContentApproval(content.id, "reject")}
                                >
                                  <XCircle className="w-4 h-4 mr-2" />
                                  Reject
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground">
                                  <Tag className="w-4 h-4 mr-2" />
                                  Add Tags
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Media
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <div className="space-y-4">
                {filteredContent
                  .filter((content) => content.status === "Pending")
                  .map((content) => (
                    <div key={content.id} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-32 bg-background rounded-lg overflow-hidden">
                          <img
                            src={content.mediaUrl || "/placeholder.svg"}
                            alt="Content preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {content.creator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-foreground font-medium">{content.creator.name}</span>
                              <Badge variant="outline">{content.creator.tier}</Badge>
                            </div>
                            <Badge variant="secondary">{content.status}</Badge>
                          </div>
                          <div className="mb-2">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{content.campaign}</span> •{" "}
                              {new Date(content.submitted).toLocaleDateString()}
                            </div>
                            <p className="text-foreground mt-1">{content.content.caption}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-lime-100 hover:bg-lime-300 text-stone-800">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white">
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="review" className="space-y-4">
              <div className="space-y-4">
                {filteredContent
                  .filter((content) => content.status === "Under Review")
                  .map((content) => (
                    <div key={content.id} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-32 bg-background rounded-lg overflow-hidden">
                          <img
                            src={content.mediaUrl || "/placeholder.svg"}
                            alt="Content preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {content.creator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-foreground font-medium">{content.creator.name}</span>
                              <Badge variant="outline">{content.creator.tier}</Badge>
                            </div>
                            <Badge variant="outline">{content.status}</Badge>
                          </div>
                          <div className="mb-2">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{content.campaign}</span> •{" "}
                              {new Date(content.submitted).toLocaleDateString()}
                            </div>
                            <p className="text-foreground mt-1">{content.content.caption}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-lime-100 hover:bg-lime-300 text-stone-800">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white">
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              <div className="space-y-4">
                {filteredContent
                  .filter((content) => content.status === "Approved")
                  .map((content) => (
                    <div key={content.id} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-32 bg-background rounded-lg overflow-hidden">
                          <img
                            src={content.mediaUrl || "/placeholder.svg"}
                            alt="Content preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {content.creator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-foreground font-medium">{content.creator.name}</span>
                              <Badge variant="outline">{content.creator.tier}</Badge>
                            </div>
                            <Badge variant="default">{content.status}</Badge>
                          </div>
                          <div className="mb-2">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{content.campaign}</span> •{" "}
                              {new Date(content.submitted).toLocaleDateString()}
                            </div>
                            <p className="text-foreground mt-1">{content.content.caption}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-lime-100 hover:bg-lime-300 text-stone-800">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white">
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              <div className="space-y-4">
                {filteredContent
                  .filter((content) => content.status === "Rejected")
                  .map((content) => (
                    <div key={content.id} className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-32 bg-background rounded-lg overflow-hidden">
                          <img
                            src={content.mediaUrl || "/placeholder.svg"}
                            alt="Content preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {content.creator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-foreground font-medium">{content.creator.name}</span>
                              <Badge variant="outline">{content.creator.tier}</Badge>
                            </div>
                            <Badge variant="destructive">{content.status}</Badge>
                          </div>
                          <div className="mb-2">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{content.campaign}</span> •{" "}
                              {new Date(content.submitted).toLocaleDateString()}
                            </div>
                            <p className="text-foreground mt-1">{content.content.caption}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-lime-100 hover:bg-lime-300 text-stone-800">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-rose-500 text-pink-600 hover:bg-rose-800 hover:text-white">
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredContent.length > 0 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredContent.length}</span> of{" "}
                <span className="font-medium text-foreground">{submittedContent.length}</span> content items
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-border">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="border-border">
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
