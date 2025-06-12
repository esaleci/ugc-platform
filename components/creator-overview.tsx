"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  Target,
  TrendingUp,
  Award,
  Calendar,
  Trophy,
  Upload,
  ArrowUpRight,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { MiniLineChart } from "./MiniLineChart"

export function CreatorOverview() {
  // Sample data
  const stats = [
    {
      title: "Total Earnings",
      value: "$2,450",
      change: "+15%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "from last month",
      data: [
        { value: 200 },
        { value: 180 },
        { value: 500 },
        { value: 240 },
        { value: 260 },
      ],
      color: "#ffffff",
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: Target,
      description: "campaigns joined",
      data: [
        { value: 10 },
        { value: 5 },
        { value: 7 },
        { value: 5 },
        { value: 8 },
      ],  
      color: "#8b5cf6",
    },
    {
      title: "Avg Engagement",
      value: "8.5%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "engagement rate",
      data: [
        { value: 50 },
        { value: 75 },
        { value: 90 },
        { value: 150 },
        { value: 260 },
      ],
      color: "#10b981",
    },
    {
      title: "Current Tier",
      value: "Gold",
      change: "250 XP to Platinum",
      changeType: "neutral" as const,
      icon: Award,
      description: "creator tier",
      data: [
        { value: 20 },
        { value: 10 },
        { value: 80 },
        { value: 90 },
        { value: 150 },
      ],
      color: "#FF2056",
    },
  ]

  const activeCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      brand: "FashionForward",
      type: "Instagram Post",
      status: "Active",
      deadline: "5 days",
      reward: 250,
      progress: 75,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Tech Innovation Week",
      brand: "TechGear",
      type: "Video Review",
      status: "Submitted",
      deadline: "12 days",
      reward: 400,
      progress: 100,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Healthy Living Challenge",
      brand: "FitLife",
      type: "Stories & Reels",
      status: "In Progress",
      deadline: "3 days",
      reward: 600,
      progress: 40,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center",
    },
  ]

  const recentSubmissions = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      status: "Approved",
      submitted: "2h ago",
      earnings: 250,
      engagement: { likes: 1200, comments: 45, shares: 23 },
    },
    {
      id: 2,
      campaign: "Tech Innovation Week",
      status: "Under Review",
      submitted: "1d ago",
      earnings: 0,
      engagement: { likes: 890, comments: 34, shares: 12 },
    },
    {
      id: 3,
      campaign: "Healthy Living Challenge",
      status: "Pending",
      submitted: "2d ago",
      earnings: 0,
      engagement: { likes: 567, comments: 23, shares: 8 },
    },
  ]

  const leaderboardPosition = {
    currentRank: 12,
    previousRank: 15,
    totalCreators: 240,
    topCreators: [
      {
        rank: 1,
        name: "Lisa Wang",
        earnings: 4500,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
      },
      {
        rank: 2,
        name: "Mike Chen",
        earnings: 3200,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      },
      {
        rank: 3,
        name: "Sarah Johnson",
        earnings: 2450,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      },
    ],
  }

  const tierProgress = {
    current: "Gold",
    next: "Platinum",
    currentXP: 750,
    requiredXP: 1000,
    progress: 75,
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative drop-shadow-xl  overflow-hidden rounded-xl ">
            <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>

              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={`${
                    stat.changeType === "positive"
                      ? "text-lime-300"
                        : stat.changeType === "negative" 
                        ? "text-pink-300"
                        : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>{" "}
                {stat.description}
              </p>
              <MiniLineChart
                data={stat.data}
                color={stat.color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </CardContent>
            <div className="absolute w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Active Campaigns */}
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Your current campaign participation</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center space-x-4 rounded-lg border p-4">
                <div className="h-12 w-12 rounded-lg bg-muted overflow-hidden">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">{campaign.title}</p>
                    <Badge
                      variant={
                        campaign.status === "Active"
                          ? "default"
                          : campaign.status === "Submitted"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {campaign.brand} • {campaign.type}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {campaign.status === "Active" ? `${campaign.deadline} left` : `Deadline: ${campaign.deadline}`}
                    </span>
                    <span className="text-sm font-medium text-lime-300">${campaign.reward}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} className="h-1" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Submissions */}
        <Card className="col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Submissions</CardTitle>
              <CardDescription>Your latest content submissions</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Submit Content
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSubmissions.map((submission) => (
              <div key={submission.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    {submission.status === "Approved" ? (
                      <CheckCircle className="h-4 w-4 text-lime-300" />
                    ) : submission.status === "Under Review" ? (
                      <Clock className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{submission.campaign}</p>
                    <p className="text-xs text-muted-foreground">{submission.submitted}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      submission.status === "Approved"
                        ? "default"
                        : submission.status === "Under Review"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {submission.status}
                  </Badge>
                  {submission.status === "Approved" && (
                    <div className="text-xs text-lime-300 mt-1">${submission.earnings}</div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tier Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Tier Progress</CardTitle>
            <CardDescription>Your journey to the next tier</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">{tierProgress.current}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {tierProgress.currentXP} / {tierProgress.requiredXP} XP
              </span>
            </div>
            <Progress value={tierProgress.progress} className="h-3" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {tierProgress.requiredXP - tierProgress.currentXP} XP to reach {tierProgress.next}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Next tier benefits:</div>
              <ul className="text-muted-foreground space-y-1">
                <li>• 20% bonus on all campaigns</li>
                <li>• Priority campaign access</li>
                <li>• Exclusive brand partnerships</li>
                <li>• Monthly bonus rewards</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Position */}
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard Position</CardTitle>
            <CardDescription>Your ranking among creators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold">#{leaderboardPosition.currentRank}</div>
              <div className="text-sm text-muted-foreground">out of {leaderboardPosition.totalCreators} creators</div>
              <div className="flex items-center justify-center gap-1 text-sm text-lime-300 mt-1">
                <TrendingUp className="h-3 w-3" />+{leaderboardPosition.previousRank - leaderboardPosition.currentRank}{" "}
                positions
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-medium">Top Performers</div>
              {leaderboardPosition.topCreators.map((creator) => (
                <div key={creator.rank} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
                    {creator.rank === 1 ? <Trophy className="h-3 w-3 text-yellow-600" /> : creator.rank}
                  </div>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{creator.name}</div>
                  </div>
                  <div className="text-sm font-medium">${creator.earnings.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Browse Campaigns</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Upload className="h-5 w-5" />
              <span className="text-sm">Submit Content</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm">View Earnings</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">Check Performance</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
