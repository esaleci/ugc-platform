"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreHorizontal, UserPlus, Eye, MessageCircle, BarChart3, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { InviteCreator } from "@/components/invite-creator"

export function CreatorManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showInviteCreator, setShowInviteCreator] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  // Sample data with real images
  const creators = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 156000,
      earnings: 2450,
      engagement: 8.5,
      posts: 12,
      joinDate: "2023-06-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Mike Chen",
      username: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      followers: 89000,
      earnings: 3200,
      engagement: 9.2,
      posts: 15,
      joinDate: "2023-04-22",
      status: "Active",
    },
    {
      id: 3,
      name: "Emma Davis",
      username: "@emma_lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      followers: 45000,
      earnings: 1800,
      engagement: 7.8,
      posts: 9,
      joinDate: "2023-08-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      username: "@alex_fitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      followers: 78000,
      earnings: 2100,
      engagement: 8.1,
      posts: 11,
      joinDate: "2023-05-30",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Lisa Wang",
      username: "@lisa_beauty",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      followers: 234000,
      earnings: 4500,
      engagement: 9.8,
      posts: 18,
      joinDate: "2023-03-12",
      status: "Active",
    },
  ]

  const filteredCreators = creators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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

  const handleBackToList = () => {
    setShowInviteCreator(false)
  }

  if (showInviteCreator) {
    return (
      <div className="min-h-screen w-full">
        <InviteCreator
          onBack={handleBackToList}
          onSave={(creator) => {
            console.log("Creator invited:", creator)
            handleBackToList()
          }}
        />
      </div>
    )
  }

  // <TableHead>Creator</TableHead>
  // <TableHead>Tier</TableHead>
  // <TableHead>Followers</TableHead>
  // <TableHead>Earnings</TableHead>
  // <TableHead>Engagement</TableHead>
  // <TableHead>Posts</TableHead>
  // <TableHead>Status</TableHead>
 

  return (
    <div className={`flex-1 space-y-6 p-6  min-h-screen transition-all duration-300 ${
        isTransitioning ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
      style={{ contain: "content" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Creator Management</h2>
          <p className="text-muted-foreground">Manage and invite creators to your platform</p>
        </div>
        <Button onClick={() => setShowInviteCreator(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          New Creator
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Creators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{creators.length}</div>
            <p className="text-xs text-muted-foreground">
              {creators.filter((c) => c.status === "Active").length} active
            </p>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(creators.reduce((sum, c) => sum + c.followers, 0) / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">Combined reach</p>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${creators.reduce((sum, c) => sum + c.earnings, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(creators.reduce((sum, c) => sum + c.engagement, 0) / creators.length).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Engagement rate</p>
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
            placeholder="Search creators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Creators Table */}
      <Card className="border-none bg-transparent xl:border xl:bg-card text-card-foreground">
        <CardHeader className="px-0 xl:p-6">
          <CardTitle>All Creators</CardTitle>
          <CardDescription>Manage your creator network and track their performance</CardDescription>
        </CardHeader>
        <CardContent className="p-0 xl:p-6">
          
             {/* Mobile Card View */}
      <div className="block xl:hidden space-y-4">
        {filteredCreators.map((creator) => (
          <div 
            key={creator.id} 
            className="bg-white/10 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-700 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-200"
          >
            {/* Header with Avatar and Action */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-gray-200 dark:text-white">{creator.name}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400">{creator.username}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400 dark:text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-pink-500 dark:text-pink-400">
                    <Trash className="h-4 w-4 mr-2 text-pink-500 dark:text-pink-400" />
                    Remove Creator
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Tier and Status */}
            <div className="flex items-center justify-between mb-4">
              <Badge className={getTierColor(creator.tier)}>{creator.tier}</Badge>
              <Badge variant={creator.status === "Active" ? "default" : "secondary"}>{creator.status}</Badge>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Followers</p>
                <p className="text-lg font-semibold text-gray-200 dark:text-white">{creator.followers.toLocaleString()}</p>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Earnings</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">${creator.earnings.toLocaleString()}</p>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Engagement</p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{creator.engagement}%</p>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Posts</p>
                <p className="text-lg font-semibold text-gray-200 dark:text-white">{creator.posts}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

            <div className="hidden xl:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Creator</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Followers</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Posts</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCreators.map((creator) => (
                <TableRow key={creator.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{creator.name}</div>
                        <div className="text-sm text-muted-foreground">{creator.username}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getTierColor(creator.tier)}>{creator.tier}</Badge>
                  </TableCell>
                  <TableCell>{creator.followers.toLocaleString()}</TableCell>
                  <TableCell>${creator.earnings.toLocaleString()}</TableCell>
                  <TableCell>{creator.engagement}%</TableCell>
                  <TableCell>{creator.posts}</TableCell>
                  <TableCell>
                    <Badge variant={creator.status === "Active" ? "default" : "secondary"}>{creator.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                          </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Send Message
                          </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3 className="h-4 w-4 mr-2" />
                          View Analytics
                          </DropdownMenuItem>
                        <DropdownMenuItem className="text-pink-500">
                          <Trash className="h-4 w-4 mr-2 text-pink-500" />
                          Remove Creator
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
