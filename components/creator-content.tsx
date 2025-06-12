"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Upload,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
  CheckCircle,
  Clock,
  XCircle,
  Edit,
  Filter,
  Copy,
  Download,
  Trash,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ContentUpload } from "@/components/content-upload"

export function CreatorContent() {
  const [showContentUpload, setShowContentUpload] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Sample content data
  const myContent = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      type: "Instagram Post",
      status: "Approved",
      submitted: "2024-01-10",
      approved: "2024-01-11",
      caption: "Loving this new summer collection! Perfect for beach days ☀️ #SummerVibes",
      hashtags: ["#SummerCollection", "#BeachStyle", "#OOTD"],
      engagement: { likes: 1250, comments: 45, shares: 23, saves: 67 },
      earnings: 250,
      mediaUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 2,
      campaign: "Tech Innovation Week",
      type: "Video Review",
      status: "Under Review",
      submitted: "2024-01-12",
      caption: "Honest review of the latest tech gadgets! 📱 #TechReview",
      hashtags: ["#TechReview", "#GadgetReview", "#TechTips"],
      engagement: { likes: 890, comments: 34, shares: 12, saves: 45 },
      earnings: 0,
      mediaUrl: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      campaign: "Healthy Living Challenge",
      type: "Instagram Reel",
      status: "Rejected",
      submitted: "2024-01-09",
      rejected: "2024-01-10",
      rejectionReason: "Content doesn't align with brand guidelines",
      caption: "5-minute morning workout routine! 💪 #FitnessGoals",
      hashtags: ["#FitnessChallenge", "#WorkoutRoutine", "#HealthyLifestyle"],
      engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
      earnings: 0,
      mediaUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      campaign: "Home Decor Ideas",
      type: "Pinterest Pin",
      status: "Draft",
      created: "2024-01-13",
      caption: "Transform your space with these simple decor ideas! 🏠 #HomeInspo",
      hashtags: ["#HomeDecor", "#InteriorDesign", "#DIYHome"],
      engagement: { likes: 0, comments: 0, shares: 0, saves: 0 },
      earnings: 0,
      mediaUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-lime-300" />
      case "Under Review":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-pnik-300" />
      case "Draft":
        return <Edit className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-lime-100 text-lime-800 hover:bg-lime-200 "
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Rejected":
        return "bg-pink-100 text-pink-600 hover:bg-pink-200"
      case "Draft":
        return "bg-blue-100 text-blue-800   hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const filteredContent = myContent.filter(
    (content) =>
      content.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.caption.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleBackToList = () => {
    setShowContentUpload(false)
  }

  if (showContentUpload) {
    return (
      <div className="min-h-screen w-full">
        <ContentUpload
          onBack={handleBackToList}
          onSave={(content) => {
            console.log("Content saved:", content)
            handleBackToList()
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">Upload and manage your content</p>
        </div>
        <Button onClick={() => setShowContentUpload(true)}>
          <Upload className="mr-2 h-4 w-4" />
          Upload Content
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{myContent.length}</div>
            <p className="text-xs text-muted-foreground">
              {myContent.filter((c) => c.status === "Approved").length} approved
            </p>
          </CardContent>
          <div className="absolute top-0 left-0 w-12  h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {myContent.reduce((sum, c) => sum + c.engagement.likes, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Total likes</p>
          </CardContent>
          <div className="absolute top-0 left-0 w-12   h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${myContent.reduce((sum, c) => sum + c.earnings, 0)}</div>
            <p className="text-xs text-muted-foreground">From approved content</p>
          </CardContent>
          <div className="absolute top-0 left-0 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((myContent.filter((c) => c.status === "Approved").length / myContent.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Content approval rate</p>
          </CardContent>
          <div className="absolute top-0 left-0 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Content ({myContent.length})</TabsTrigger>
            <TabsTrigger value="approved">
              Approved ({myContent.filter((c) => c.status === "Approved").length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({myContent.filter((c) => c.status === "Under Review").length})
            </TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({myContent.filter((c) => c.status === "Draft").length})</TabsTrigger>
          </TabsList>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <Card key={content.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={content.mediaUrl || "/placeholder.svg"}
                    alt="Content preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                    </div>
                    
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{content.campaign}</CardTitle>
                  
                  </div>
                  <CardDescription>{content.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm line-clamp-2">{content.caption}</p>

                  <div className="flex flex-wrap gap-1">
                    {content.hashtags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="relative flex flex-row w-full h-[80px] gap-2 justify-between items-center border border-gray-200 rounded-lg border-dashed py-2 px-5">

<div className="flex-grow">
                  {content.status === "Approved" && (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-pink-500" />
                        {content.engagement.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3 text-blue-400" />
                        {content.engagement.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-3 w-3 text-lime-300" />
                        {content.engagement.shares}
                      </div>
                      <div className="text-lime-300 font-medium">${content.earnings}</div>
                    </div>
                  )}

                  {content.status === "Rejected" && (
                    <div className="p-2 bg-pink-50 rounded-lg">
                      <p className="text-xs text-pink-600">{content.rejectionReason}</p>
                    </div>
                  )}

{content.status === "Under Review" && (
                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <p className="text-xs text-yellow-600">Content is being reviewed by the brand</p>
                    </div>
                  )}

{content.status === "Draft" && (
                    <div className="p-2 bg-sky-50 rounded-lg">
                      <p className="text-xs text-sky-600">You can do it ! just finish it and submit it </p>
                    </div>
                  )}
                  </div>

<div className="flex-none flex justify-end">
{getStatusIcon(content.status)}
                  </div>

                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download</DropdownMenuItem>
                        <DropdownMenuItem className="text-pink-500">
                          <Trash className="h-4 w-4 mr-2" />
                            Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent
              .filter((content) => content.status === "Approved")
              .map((content) => (
                <Card key={content.id} className="overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={content.mediaUrl || "/placeholder.svg"}
                      alt="Content preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{content.campaign}</CardTitle>
                    <CardDescription>{content.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm line-clamp-2">{content.caption}</p>

                    <div className="relative flex flex-row w-full h-[80px] gap-2 justify-between items-center border border-gray-200 rounded-lg border-dashed py-2 px-5">


                    <div className="grid grid-cols-2 gap-4 text-sm w-full ">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-pink-300" />
                        {content.engagement.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3 text-blue-400" />
                        {content.engagement.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-3 w-3 text-lime-300" />
                        {content.engagement.shares}
                      </div>
                      <div className="text-lime-300 font-medium">${content.earnings}</div>
                    </div>
</div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent
              .filter((content) => content.status === "Under Review")
              .map((content) => (
                <Card key={content.id} className="overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={content.mediaUrl || "/placeholder.svg"}
                      alt="Content preview"
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                    </div> */}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{content.campaign}</CardTitle>
                    <CardDescription>{content.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm line-clamp-2">{content.caption}</p>

                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <p className="text-xs text-yellow-600">Content is being reviewed by the brand</p>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Submission
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent
              .filter((content) => content.status === "Draft")
              .map((content) => (
                <Card key={content.id} className="overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={content.mediaUrl || "/placeholder.svg"}
                      alt="Content preview"
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-100 text-blue-800">Draft</Badge>
                    </div> */}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{content.campaign}</CardTitle>
                    <CardDescription>{content.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm line-clamp-2">{content.caption}</p>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Submit
                      </Button>
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
