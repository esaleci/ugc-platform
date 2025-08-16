"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, DollarSign, Users } from "lucide-react"

export function CreatorCampaigns() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Sample campaigns data
  const availableCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      brand: "FashionForward",
      category: "Fashion",
      type: "Instagram Post",
      reward: 250,
      deadline: "2024-02-15",
      requirements: ["1 Instagram post", "Use #SummerVibes", "Tag @fashionforward"],
      description: "Showcase our new summer collection with your unique style",
      difficulty: "Easy",
      participants: 45,
      maxParticipants: 100,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop&crop=center",
      status: "Available",
    },
    {
      id: 2,
      title: "Tech Innovation Week",
      brand: "TechGear",
      category: "Technology",
      type: "Video Review",
      reward: 400,
      deadline: "2024-02-20",
      requirements: ["1-2 minute video", "Honest review", "Show product features"],
      description: "Review our latest tech gadgets and share your honest opinion",
      difficulty: "Medium",
      participants: 32,
      maxParticipants: 50,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=200&fit=crop&crop=center",
      status: "Available",
    },
    {
      id: 3,
      title: "Healthy Living Challenge",
      brand: "FitLife",
      category: "Health & Fitness",
      type: "Stories & Reels",
      reward: 600,
      deadline: "2024-02-25",
      requirements: ["3 Instagram stories", "1 Reel", "Show workout routine"],
      description: "Promote healthy living with our fitness products",
      difficulty: "Hard",
      participants: 67,
      maxParticipants: 80,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
      status: "Available",
    },
    {
      id: 4,
      title: "Home Decor Inspiration",
      brand: "HomeStyle",
      category: "Home & Living",
      type: "Pinterest Pin",
      reward: 300,
      deadline: "2024-02-18",
      requirements: ["Create Pinterest board", "5 pins minimum", "Use our products"],
      description: "Create inspiring home decor content featuring our products",
      difficulty: "Easy",
      participants: 28,
      maxParticipants: 60,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center",
      status: "Available",
    },
  ]

  const joinedCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      brand: "FashionForward",
      type: "Instagram Post",
      reward: 250,
      deadline: "2024-02-15",
      status: "In Progress",
      progress: 75,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Tech Innovation Week",
      brand: "TechGear",
      type: "Video Review",
      reward: 400,
      deadline: "2024-02-20",
      status: "Submitted",
      progress: 100,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=200&fit=crop&crop=center",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
          return "bg-lime-100 text-lime-800 hover:bg-lime-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Hard":
        return "bg-pink-100 text-pink-600 hover:bg-pink-200 "
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Submitted":
        return "bg-lime-100 text-lime-800 hover:bg-lime-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-0 lg:p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
        <p className="text-muted-foreground">Discover and join campaigns that match your interests</p>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList>
          <TabsTrigger value="available">Available Campaigns</TabsTrigger>
          <TabsTrigger value="joined">My Campaigns ({joinedCampaigns.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Health & Fitness">Health & Fitness</SelectItem>
                <SelectItem value="Home & Living">Home & Living</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Campaign Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {availableCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.brand}</CardDescription>
                    </div>
                    <Badge className={getDifficultyColor(campaign.difficulty)}>{campaign.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{campaign.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-lime-300" />
                      <span className="font-medium">${campaign.reward}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{new Date(campaign.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span>
                        {campaign.participants}/{campaign.maxParticipants}
                      </span>
                    </div>
                    <Badge variant="outline">{campaign.type}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Requirements:</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {campaign.requirements.map((req, index) => (
                        <li key={index}>• {req}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">Join Campaign</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="joined" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedCampaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.brand}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-lime-300" />
                      <span className="font-medium">${campaign.reward}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{new Date(campaign.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-lime-600 h-2 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {campaign.status === "In Progress" && <Button className="flex-1">Submit Content</Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
