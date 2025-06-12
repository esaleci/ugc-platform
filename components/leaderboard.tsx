"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function Leaderboard() {
  // Sample data with real images
  const topEarners = [
    {
      id: 1,
      rank: 1,
      name: "Lisa Wang",
      username: "@lisa_beauty",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      earnings: 4500,
      change: "+12%",
      posts: 18,
    },
    {
      id: 2,
      rank: 2,
      name: "Mike Chen",
      username: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      earnings: 3200,
      change: "+8%",
      posts: 15,
    },
    {
      id: 3,
      rank: 3,
      name: "Sarah Johnson",
      username: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      earnings: 2450,
      change: "+15%",
      posts: 12,
    },
    {
      id: 4,
      rank: 4,
      name: "Alex Rodriguez",
      username: "@alex_fitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      earnings: 2100,
      change: "+5%",
      posts: 11,
    },
    {
      id: 5,
      rank: 5,
      name: "Emma Davis",
      username: "@emma_lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      earnings: 1800,
      change: "+22%",
      posts: 9,
    },
  ]

  const topEngagement = [
    {
      id: 1,
      rank: 1,
      name: "Lisa Wang",
      username: "@lisa_beauty",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      engagement: 9.8,
      change: "+0.3%",
      followers: 234000,
    },
    {
      id: 2,
      rank: 2,
      name: "Mike Chen",
      username: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      engagement: 9.2,
      change: "+0.5%",
      followers: 89000,
    },
    {
      id: 3,
      rank: 3,
      name: "Sarah Johnson",
      username: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      engagement: 8.5,
      change: "+0.2%",
      followers: 156000,
    },
    {
      id: 4,
      rank: 4,
      name: "Alex Rodriguez",
      username: "@alex_fitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      engagement: 8.1,
      change: "-0.1%",
      followers: 78000,
    },
    {
      id: 5,
      rank: 5,
      name: "Emma Davis",
      username: "@emma_lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      engagement: 7.8,
      change: "+0.4%",
      followers: 45000,
    },
  ]

  const fastestGrowing = [
    {
      id: 1,
      rank: 1,
      name: "Emma Davis",
      username: "@emma_lifestyle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      currentFollowers: 45000,
      followerGrowth: 78.5,
      engagementGrowth: 45.2,
      contentGrowth: 92.1,
      growthScore: 8.9,
      previousFollowers: 25200,
    },
    {
      id: 2,
      rank: 2,
      name: "Alex Rodriguez",
      username: "@alex_fitness",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      currentFollowers: 78000,
      followerGrowth: 65.3,
      engagementGrowth: 38.7,
      contentGrowth: 55.4,
      growthScore: 8.2,
      previousFollowers: 47200,
    },
    {
      id: 3,
      rank: 3,
      name: "Olivia Martinez",
      username: "@olivia_beauty",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      tier: "Silver",
      currentFollowers: 31000,
      followerGrowth: 52.1,
      engagementGrowth: 41.8,
      contentGrowth: 67.3,
      growthScore: 7.8,
      previousFollowers: 20400,
    },
    {
      id: 4,
      rank: 4,
      name: "David Kim",
      username: "@tech_david",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      currentFollowers: 67000,
      followerGrowth: 34.2,
      engagementGrowth: 28.5,
      contentGrowth: 41.7,
      growthScore: 7.1,
      previousFollowers: 49900,
    },
    {
      id: 5,
      rank: 5,
      name: "Sarah Johnson",
      username: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      tier: "Gold",
      currentFollowers: 156000,
      followerGrowth: 28.7,
      engagementGrowth: 22.3,
      contentGrowth: 35.8,
      growthScore: 6.9,
      previousFollowers: 121200,
    },
    {
      id: 6,
      rank: 6,
      name: "Mike Chen",
      username: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      currentFollowers: 89000,
      followerGrowth: 22.4,
      engagementGrowth: 18.9,
      contentGrowth: 28.6,
      growthScore: 6.5,
      previousFollowers: 72700,
    },
    {
      id: 7,
      rank: 7,
      name: "James Wilson",
      username: "@james_travel",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
      tier: "Platinum",
      currentFollowers: 89000,
      followerGrowth: 18.3,
      engagementGrowth: 15.7,
      contentGrowth: 22.1,
      growthScore: 6.2,
      previousFollowers: 75200,
    },
    {
      id: 8,
      rank: 8,
      name: "Lisa Wang",
      username: "@lisa_beauty",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      tier: "Diamond",
      currentFollowers: 234000,
      followerGrowth: 12.8,
      engagementGrowth: 9.4,
      contentGrowth: 15.2,
      growthScore: 5.8,
      previousFollowers: 207400,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
    }
  }

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

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
        <p className="text-muted-foreground">Top performing creators across different metrics</p>
      </div>

      <Tabs defaultValue="earnings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="earnings">Top Earners</TabsTrigger>
          <TabsTrigger value="engagement">Top Engagement</TabsTrigger>
          <TabsTrigger value="growth">Fastest Growing</TabsTrigger>
        </TabsList>

        <TabsContent value="earnings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Top 3 Podium */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Top Earners This Month
                </CardTitle>
                <CardDescription>Creators with the highest earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {topEarners.slice(0, 3).map((creator, index) => (
                    <Card key={creator.id} className={`${index === 0 ? "ring-2 ring-yellow-500" : ""}`}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="flex items-center justify-center w-12 h-12">{getRankIcon(creator.rank)}</div>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {creator.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <div className="font-semibold">{creator.name}</div>
                            <div className="text-sm text-muted-foreground">{creator.username}</div>
                            <Badge className={`mt-2 ${getTierColor(creator.tier)}`}>{creator.tier}</Badge>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold">${creator.earnings.toLocaleString()}</div>
                            <div className="flex items-center justify-center text-sm text-lime-300">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {creator.change}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Rankings */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Complete Rankings</CardTitle>
                <CardDescription>All creators ranked by earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topEarners.map((creator) => (
                    <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                      <div className="flex items-center justify-center w-8 h-8">{getRankIcon(creator.rank)}</div>
                      <Avatar>
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{creator.name}</div>
                        <div className="text-sm text-muted-foreground">{creator.username}</div>
                      </div>
                      <Badge className={getTierColor(creator.tier)}>{creator.tier}</Badge>
                      <div className="text-right">
                        <div className="font-semibold">${creator.earnings.toLocaleString()}</div>
                        <div className="text-sm text-lime-300">{creator.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-pink-300" />
                Top Engagement Rates
              </CardTitle>
              <CardDescription>Creators with the highest engagement rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEngagement.map((creator) => (
                  <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                    <div className="flex items-center justify-center w-8 h-8">{getRankIcon(creator.rank)}</div>
                    <Avatar>
                      <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{creator.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {creator.followers.toLocaleString()} followers
                      </div>
                    </div>
                    <Badge className={getTierColor(creator.tier)}>{creator.tier}</Badge>
                    <div className="text-right">
                      <div className="font-semibold">{creator.engagement}%</div>
                      <div className={`text-sm ${creator.change.startsWith("+") ? "text-lime-300" : "text-pink-300"}`}>
                        {creator.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Top 3 Fastest Growing */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-lime-300" />
                  Fastest Growing Creators This Month
                </CardTitle>
                <CardDescription>Creators with the highest follower and engagement growth rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {fastestGrowing.slice(0, 3).map((creator, index) => (
                    <Card key={creator.id} className={`${index === 0 ? "ring-2 ring-lime-300" : ""}`}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="flex items-center justify-center w-12 h-12">
                            {index === 0 ? (
                              <Trophy className="h-8 w-8 text-lime-300" />
                            ) : index === 1 ? (
                              <Medal className="h-7 w-7 text-gray-400" />
                            ) : (
                              <Award className="h-6 w-6 text-amber-600" />
                            )}
                          </div>
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {creator.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <div className="font-semibold">{creator.name}</div>
                            <div className="text-sm text-muted-foreground">{creator.username}</div>
                            <Badge className={getTierColor(creator.tier)} variant="outline">
                              {creator.tier}
                            </Badge>
                          </div>
                          <div className="text-center space-y-2">
                            <div className="text-2xl font-bold text-lime-300">+{creator.followerGrowth}%</div>
                            <div className="text-sm text-muted-foreground">Follower Growth</div>
                            <div className="text-lg font-semibold text-pink-300">+{creator.engagementGrowth}%</div>
                            <div className="text-xs text-muted-foreground">Engagement Growth</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Growth Metrics Overview */}
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Growth Metrics Overview</CardTitle>
                <CardDescription>Average growth rates across different metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Follower Growth</span>
                      <span className="text-lime-300">
                        +
                        {Math.round(
                          fastestGrowing.reduce((sum, c) => sum + c.followerGrowth, 0) / fastestGrowing.length,
                        )}
                        %
                      </span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Engagement Growth</span>
                      <span className="text-pink-300">
                        +
                        {Math.round(
                          fastestGrowing.reduce((sum, c) => sum + c.engagementGrowth, 0) / fastestGrowing.length,
                        )}
                        %
                      </span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Content Growth</span>
                      <span className="text-purple-500">
                        +
                        {Math.round(
                          fastestGrowing.reduce((sum, c) => sum + c.contentGrowth, 0) / fastestGrowing.length,
                        )}
                        %
                      </span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Categories */}
            <Card className="md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle>Growth Categories</CardTitle>
                <CardDescription>Creators by growth tier</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                      <span className="text-sm">Explosive Growth</span>
                    </div>
                    <span className="text-sm font-medium">
                      {fastestGrowing.filter((c) => c.followerGrowth >= 50).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">High Growth</span>
                    </div>
                    <span className="text-sm font-medium">
                      {fastestGrowing.filter((c) => c.followerGrowth >= 25 && c.followerGrowth < 50).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Steady Growth</span>
                    </div>
                    <span className="text-sm font-medium">
                      {fastestGrowing.filter((c) => c.followerGrowth >= 10 && c.followerGrowth < 25).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">Moderate Growth</span>
                    </div>
                    <span className="text-sm font-medium">
                      {fastestGrowing.filter((c) => c.followerGrowth < 10).length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Growth Rankings */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Complete Growth Rankings</CardTitle>
                <CardDescription>All creators ranked by growth performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fastestGrowing.map((creator, index) => (
                    <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                      <div className="flex items-center justify-center w-8 h-8">
                        {index < 3 ? (
                          index === 0 ? (
                            <Trophy className="h-5 w-5 text-lime-300" />
                          ) : index === 1 ? (
                            <Medal className="h-5 w-5 text-lime-500" />
                          ) : (
                            <Award className="h-5 w-5 text-amber-600" />
                          )
                        ) : (
                          <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                        )}
                      </div>
                      <Avatar>
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{creator.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {creator.currentFollowers.toLocaleString()} followers • {creator.username}
                        </div>
                      </div>
                      <div className="text-center">
                        <Badge className={getTierColor(creator.tier)} variant="outline">
                          {creator.tier}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Followers</div>
                        <div className="font-semibold text-lime-300">+{creator.followerGrowth}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Engagement</div>
                        <div className="font-semibold text-pink-300">+{creator.engagementGrowth}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Content</div>
                        <div className="font-semibold text-purple-500">+{creator.contentGrowth}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Growth Score</div>
                        <div className="font-semibold">{creator.growthScore}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
