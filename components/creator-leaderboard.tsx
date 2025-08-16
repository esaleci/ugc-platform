"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp, Crown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CreatorLeaderboard() {
  // Current user position
  const myPosition = {
    rank: 12,
    name: "Adarsh",
    earnings: 2450,
    engagement: 8.5,
    followers: 45000,
    tier: "Gold",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  }

  // Top earners leaderboard
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

  // Top engagement leaderboard
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

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
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
    <div className="flex-1 space-y-6 p-0 lg:p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
        <p className="text-muted-foreground">See how you rank among other creators</p>
      </div>

      {/* My Position */}
      <Card className="border-2 border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Your Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center space-x-4 ">
            <div className="flex gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <span className="text-xl font-bold text-primary">#{myPosition.rank}</span>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage src={myPosition.avatar || "/placeholder.svg"} />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            </div>
            <div className="flex-1">
              <div className="font-semibold">{myPosition.name}</div>
              <div className="text-sm text-muted-foreground">{myPosition.followers.toLocaleString()} followers</div>
            </div>
            <div className="text-center">
              <Badge className={getTierColor(myPosition.tier)}>{myPosition.tier}</Badge>
              <div className="text-sm text-muted-foreground mt-1">Tier</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">${myPosition.earnings.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Earnings</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{myPosition.engagement}%</div>
              <div className="text-sm text-muted-foreground">Engagement</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="earnings" className="space-y-6">
      <TabsList className="flex gap-2 flex-wrap h-auto py-3 lg:py-1 lg:h-content">
          <TabsTrigger value="earnings">Top Earners</TabsTrigger>
          <TabsTrigger value="engagement">Top Engagement</TabsTrigger>
          <TabsTrigger value="growth">Fastest Growing</TabsTrigger>
        </TabsList>

        <TabsContent value="earnings" className="space-y-6">
          {/* Top 3 Podium */}
          <Card>
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
          <Card>
            <CardHeader>
              <CardTitle>Complete Rankings</CardTitle>
              <CardDescription>All creators ranked by earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEarners.map((creator) => (
                  <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg border flex-wrap gap-3">
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
                    <div className="text-center">
                      <div className="font-semibold">${creator.earnings.toLocaleString()}</div>
                      <div className="text-sm text-lime-300">{creator.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-lime-300" />
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-lime-300" />
                Fastest Growing Creators
              </CardTitle>
              <CardDescription>Creators with the highest growth rates this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Growth tracking coming soon</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We're building comprehensive growth analytics and rankings.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
