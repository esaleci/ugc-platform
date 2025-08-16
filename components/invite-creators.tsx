"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Search, ArrowLeft, Send, Users, Star, Instagram, Youtube, MessageSquare, Heart, Eye } from "lucide-react"

interface InviteCreatorsProps {
  onBack: () => void
  campaignName?: string
}

export function InviteCreators({ onBack, campaignName = "Summer Collection Campaign" }: InviteCreatorsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCreators, setSelectedCreators] = useState<number[]>([])
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterTier, setFilterTier] = useState("all")
  const [filterPlatform, setFilterPlatform] = useState("all")
  const [inviteMessage, setInviteMessage] = useState(
    `Hi! We'd love to invite you to participate in our ${campaignName}. This campaign aligns perfectly with your content style and audience. We think you'd be a great fit!`,
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const exitingRef = useRef(false)

  // Sample creators data
  const creators = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 156000,
      engagement: 8.5,
      category: "Fashion",
      platforms: ["Instagram", "TikTok"],
      avgViews: 45000,
      rating: 4.8,
      completedCampaigns: 23,
      responseRate: 95,
      bio: "Fashion enthusiast sharing daily outfit inspiration and style tips",
    },
    {
      id: 2,
      name: "Mike Chen",
      username: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      followers: 89000,
      engagement: 9.2,
      category: "Tech",
      platforms: ["YouTube", "Instagram"],
      avgViews: 67000,
      rating: 4.9,
      completedCampaigns: 31,
      responseRate: 98,
      bio: "Tech reviewer and gadget enthusiast helping you make smart purchases",
    },
    {
      id: 3,
      name: "Emma Davis",
      username: "@emma_lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      followers: 45000,
      engagement: 7.8,
      category: "Lifestyle",
      platforms: ["Instagram", "TikTok"],
      avgViews: 28000,
      rating: 4.6,
      completedCampaigns: 15,
      responseRate: 87,
      bio: "Lifestyle blogger sharing wellness tips, home decor, and daily inspiration",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      username: "@alex_fitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 78000,
      engagement: 8.1,
      category: "Fitness",
      platforms: ["Instagram", "YouTube"],
      avgViews: 52000,
      rating: 4.7,
      completedCampaigns: 19,
      responseRate: 92,
      bio: "Certified personal trainer helping you achieve your fitness goals",
    },
    {
      id: 5,
      name: "Lisa Wang",
      username: "@lisa_beauty",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      followers: 234000,
      engagement: 9.8,
      category: "Beauty",
      platforms: ["Instagram", "TikTok", "YouTube"],
      avgViews: 125000,
      rating: 4.9,
      completedCampaigns: 42,
      responseRate: 99,
      bio: "Beauty expert sharing makeup tutorials, skincare tips, and product reviews",
    },
    {
      id: 6,
      name: "David Kim",
      username: "@david_food",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 92000,
      engagement: 8.3,
      category: "Food",
      platforms: ["Instagram", "TikTok"],
      avgViews: 38000,
      rating: 4.8,
      completedCampaigns: 27,
      responseRate: 94,
      bio: "Food enthusiast sharing recipes, restaurant reviews, and cooking tips",
    },
  ]

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = filterCategory === "all" || creator.category.toLowerCase() === filterCategory
    const matchesTier = filterTier === "all" || creator.tier.toLowerCase() === filterTier
    const matchesPlatform =
      filterPlatform === "all" || creator.platforms.some((p) => p.toLowerCase() === filterPlatform)

    return matchesSearch && matchesCategory && matchesTier && matchesPlatform
  })

  const handleCreatorSelect = useCallback((creatorId: number) => {
    if (exitingRef.current) return
    setSelectedCreators((prev) =>
      prev.includes(creatorId) ? prev.filter((id) => id !== creatorId) : [...prev, creatorId],
    )
  }, [])

  const handleSelectAll = useCallback(() => {
    if (exitingRef.current) return
    if (selectedCreators.length === filteredCreators.length) {
      setSelectedCreators([])
    } else {
      setSelectedCreators(filteredCreators.map((c) => c.id))
    }
  }, [selectedCreators.length, filteredCreators])

  const handleSendInvites = useCallback(async () => {
    if (exitingRef.current) return
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Sending invites to:", selectedCreators)
    console.log("Message:", inviteMessage)
    setIsLoading(false)
  }, [selectedCreators, inviteMessage])

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Diamond":
        return "bg-purple-100 text-purple-800"
      case "Platinum":
        return "bg-blue-100 text-blue-800"
      case "Gold":
        return "bg-yellow-100 text-yellow-800"
      case "Silver":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="w-3 h-3" />
      case "YouTube":
        return <Youtube className="w-3 h-3" />
      case "TikTok":
        return <MessageSquare className="w-3 h-3" />
      default:
        return <MessageSquare className="w-3 h-3" />
    }
  }

  const handleBack = useCallback(() => {
    if (exitingRef.current) return

    exitingRef.current = true
    setIsExiting(true)
    setIsLoading(true)

    // Extreme delay to prevent any layout calculations
    setTimeout(() => {
      onBack()
    }, 300)
  }, [onBack])

  return (
    <div
      className={`flex-1 space-y-6 p-0 md:p-6 min-h-screen overflow-hidden transition-all duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        contain: "strict",
        isolation: "isolate",
        willChange: "auto",
        height: isExiting ? "100vh" : "auto",
        overflow: isExiting ? "hidden" : "auto",
      }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={handleBack} disabled={isLoading || isExiting}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="">
            <h2 className="text-3xl font-bold tracking-tight">Invite Creators</h2>
            <p className="text-muted-foreground">
              Invite creators to join "{campaignName}" • {selectedCreators.length} selected
            </p>
          </div>
        </div>
        <Button onClick={handleSendInvites} disabled={selectedCreators.length === 0 || isLoading || isExiting}>
          <Send className="w-4 h-4 mr-2" />
          {isLoading ? "Sending..." : `Send Invites (${selectedCreators.length})`}
        </Button>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse" disabled={isExiting}>
            Browse Creators
          </TabsTrigger>
          <TabsTrigger value="message" disabled={isExiting}>
            Invitation Message
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6 ">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search creators by name, username, or category..."
                      value={searchTerm}
                      onChange={(e) => !exitingRef.current && setSearchTerm(e.target.value)}
                      className="pl-8"
                      disabled={isExiting}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Select
                    value={filterCategory}
                    onValueChange={(value) => !exitingRef.current && setFilterCategory(value)}
                    disabled={isExiting}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="fitness">Fitness</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={filterTier}
                    onValueChange={(value) => !exitingRef.current && setFilterTier(value)}
                    disabled={isExiting}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tiers</SelectItem>
                      <SelectItem value="diamond">Diamond</SelectItem>
                      <SelectItem value="platinum">Platinum</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={filterPlatform}
                    onValueChange={(value) => !exitingRef.current && setFilterPlatform(value)}
                    disabled={isExiting}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedCreators.length === filteredCreators.length && filteredCreators.length > 0}
                    onCheckedChange={handleSelectAll}
                    disabled={isExiting}
                  />
                  <Label>Select All ({filteredCreators.length})</Label>
                </div>
                <div className="text-sm text-muted-foreground">
                  Showing {filteredCreators.length} of {creators.length} creators
                </div>
              </div>
            </CardContent>
          </Card>
          {/* <div className="rounded-md border w-full overflow-auto border border-gray-200 rounded-lg shadow dark:border-gray-800 h-[40%]"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filteredCreators.map((creator) => (
              <Card
                key={creator.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCreators.includes(creator.id) ? "ring-2 ring-primary" : ""
                } ${isExiting ? "pointer-events-none opacity-50" : ""}`}
                onClick={() => !exitingRef.current && handleCreatorSelect(creator.id)}
                style={{ contain: "layout", isolation: "isolate" }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12 flex-shrink-0">
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold truncate">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{creator.username}</p>
                      </div>
                    </div>
                    <Checkbox
                      checked={selectedCreators.includes(creator.id)}
                      className="flex-shrink-0"
                      disabled={isExiting}
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className={getTierColor(creator.tier)}>{creator.tier}</Badge>
                    <Badge variant="outline">{creator.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{creator.bio}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">{creator.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span>{creator.engagement}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">{creator.avgViews.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span>{creator.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {creator.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="flex items-center justify-center w-6 h-6 bg-muted rounded flex-shrink-0"
                          title={platform}
                        >
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      <div>{creator.completedCampaigns} campaigns</div>
                      <div>{creator.responseRate}% response</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          {/* </div> */}
          </div>
        </TabsContent>

        <TabsContent value="message" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invitation Message</CardTitle>
              <CardDescription>Customize the message that will be sent to selected creators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={8}
                  value={inviteMessage}
                  onChange={(e) => !exitingRef.current && setInviteMessage(e.target.value)}
                  placeholder="Write your invitation message..."
                  disabled={isExiting}
                />
              </div>
              <div className="text-sm text-muted-foreground">
                This message will be sent to {selectedCreators.length} selected creator
                {selectedCreators.length !== 1 ? "s" : ""}.
              </div>
            </CardContent>
          </Card>

          {selectedCreators.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Selected Creators ({selectedCreators.length})</CardTitle>
                <CardDescription>Review the creators you're about to invite</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {creators
                    .filter((c) => selectedCreators.includes(c.id))
                    .map((creator) => (
                      <div key={creator.id} className="flex items-center justify-between p-2 bg-muted rounded">
                        <div className="flex items-center space-x-3 min-w-0 flex-1">
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {creator.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{creator.name}</div>
                            <div className="text-sm text-muted-foreground truncate">{creator.username}</div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => !exitingRef.current && handleCreatorSelect(creator.id)}
                          className="text-red-600 hover:text-red-700 flex-shrink-0"
                          disabled={isExiting}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
