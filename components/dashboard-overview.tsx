"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, FileText, BarChart3, Calendar, Eye, CheckCircle, XCircle, ArrowUpRight, Trophy } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts"
import { useState } from "react"


interface MiniLineChartProps {
  data: Array<{ value: number }>
  color?: string
  strokeWidth?: number
  className?: string
}

import * as RechartsPrimitive from "recharts"
import { cva, type VariantProps } from "class-variance-authority"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
// Creator Avatars Component
function CreatorAvatars({ creators, totalCount }: { creators: string[]; totalCount: number }) {
  const maxDisplay = 4
  const displayCreators = creators.slice(0, maxDisplay)
  const remainingCount = Math.max(0, totalCount - maxDisplay)

  if (totalCount === 0) {
    return <span className="text-xs text-muted-foreground">No creators yet</span>
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {displayCreators.map((avatar, index) => (
          <img
            key={index}
            src={avatar || "/placeholder.svg"}
            alt={`Creator ${index + 1}`}
            className="h-8 w-8 rounded-full border-2 border-background object-cover"
          />
        ))}
        {remainingCount > 0 && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
            +{remainingCount}
          </div>
        )}
      </div>
      <span className="text-xs text-muted-foreground">{totalCount} creators</span>
    </div>
  )
}

const dataYear = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 18000 },
  { name: "Apr", revenue: 14000 },
  { name: "May", revenue: 20000 },
  { name: "Jun", revenue: 22000 },
  { name: "Jul", revenue: 21000 },
  { name: "Aug", revenue: 25000 },
  { name: "Sep", revenue: 23000 },
  { name: "Oct", revenue: 24000 },
  { name: "Nov", revenue: 26000 },
  { name: "Dec", revenue: 28000 },
];

const dataMonth = [
  { name: "Week 1", revenue: 5000 },
  { name: "Week 2", revenue: 7000 },
  { name: "Week 3", revenue: 8000 },
  { name: "Week 4", revenue: 6000 },
];

const dataWeek = [
  { name: "Mon", revenue: 1200 },
  { name: "Tue", revenue: 1500 },
  { name: "Wed", revenue: 1800 },
  { name: "Thu", revenue: 1400 },
  { name: "Fri", revenue: 2000 },
  { name: "Sat", revenue: 2200 },
  { name: "Sun", revenue: 2100 },
];

const chartColors = {
  line: "#C084FC", // purple
  glow: "#A5B4FC", // blue
};

export function DashboardOverview() {
  // Sample data
  const stats = [
    {
      title: "Active Campaigns",
      value: "24",
      change: "+12%",
      changeType: "positive" as const,
      icon: Calendar,
      description: "from last month",
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
      title: "Total Creators",
      value: "1,547",
      change: "+8%",
      changeType: "positive" as const,
      icon: Users,
      description: "from last month",  
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
      title: "Content Submissions",
      value: "8,924",
      change: "+23%",
      changeType: "positive" as const,
      icon: FileText,
      description: "from last month",
      data: [
        { value: 200 },
        { value: 180 },
        { value: 700 },
        { value: 240 },
        { value: 1500 },
        { value: 230 },
        { value: 280 },
        { value: 2000 },
        { value: 320 },
        { value: 2500 },
      ],
      color:  "#10b981",
    },
    {
      title: "Engagement Rate",
      value: "4.7%",
      change: "+5%",
      changeType: "positive" as const,
      icon: BarChart3,
      description: "from last month",
      data: [
        { value: 200 },
        { value: 180 },
        { value: 220 },
        { value: 800 },
        { value: 260 },
        { value: 900 },
        { value: 280 },
        { value: 1000 },
        { value: 5000 },
        { value: 8924 },
      ],
      color: "#FF2056",
    },
  ]

  const MiniLineChart: React.FC<MiniLineChartProps> = ({
    data,
    color = "#3b82f6",
    strokeWidth = 2,
    className
  }) => {
    return (
      <div className={cn("h-16 w-full relative", className)}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={strokeWidth}
              dot={false}
              activeDot={false}
              filter="url(#glow)"
            />
              <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="blue" />
          <stop offset={`5%`} stopColor="blue" />
          <stop offset={`55%`} stopColor="red" />
          <stop offset={`100%`} stopColor="red" />
        </linearGradient>
      </defs>
            {/* <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const activeCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      type: "Instagram Posts",
      status: "Active",
      submissions: 124,
      creators: 45,
      creatorAvatars: [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face",
      ],
      endsIn: "5 days",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Tech Innovation Week",
      type: "Video Reviews",
      status: "Review",
      submissions: 89,
      creators: 32,
      creatorAvatars: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=24&h=24&fit=crop&crop=face",
      ],
      endsIn: "12 days",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Healthy Living Challenge",
      type: "Stories & Reels",
      status: "Planning",
      submissions: 0,
      creators: 67,
      creatorAvatars: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=24&h=24&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=24&h=24&fit=crop&crop=face",
      ],
      endsIn: "3 days",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center",
    },
  ]

  const pendingReviews = [
    {
      id: 1,
      creator: {
        name: "@sarah_styles",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
        campaign: "Summer Fashion Collection",
      },
      timeAgo: "2h ago",
    },
    {
      id: 2,
      creator: {
        name: "@tech_mike",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
        campaign: "Tech Innovation Week",
      },
      timeAgo: "4h ago",
    },
    {
      id: 3,
      creator: {
        name: "@fit_jenny",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
        campaign: "Healthy Living Challenge",
      },
      timeAgo: "6h ago",
    },
  ]

  const topPerformers = [
    {
      id: 1,
      rank: 1,
      name: "@sarah_styles",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      followers: "156K followers",
      earnings: "$2,450",
      period: "This month",
    },
    {
      id: 2,
      rank: 2,
      name: "@tech_mike",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      followers: "89K followers",
      earnings: "$1,890",
      period: "This month",
    },
    {
      id: 3,
      rank: 3,
      name: "@fit_jenny",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      followers: "234K followers",
      earnings: "$1,650",
      period: "This month",
    },
  ]

  const performanceMetrics = [
    {
      label: "Engagement Rate",
      value: 4.7,
      max: 10,
      color: "bg-blue-500",
    },
    {
      label: "Conversion Rate",
      value: 2.3,
      max: 5,
      color: "bg-green-500",
    },
    {
      label: "Content Quality",
      value: 8.9,
      max: 10,
      color: "bg-purple-500",
    },
  ]

  const [range, setRange] = useState<"year" | "month" | "week">("year");

  let chartData = dataYear;
  if (range === "month") chartData = dataMonth;
  if (range === "week") chartData = dataWeek;


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
                <span className={`${stat.changeType === "positive" ? "text-lime-300" : "text-pink-500"}`}>
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
            <div className="absolute w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
        {/* Active Campaigns */}
        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-pink-300">Active Campaigns</CardTitle>
              <CardDescription>Monitor your running campaigns</CardDescription>
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
                          : campaign.status === "Review"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{campaign.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{campaign.submissions} submissions</span>
                    <CreatorAvatars creators={campaign.creatorAvatars} totalCount={campaign.creators} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Review */}
        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Review</CardTitle>
              <CardDescription>Content awaiting approval</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All Pending
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingReviews.map((review) => (
              <div key={review.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={review.creator.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{review.creator.name.slice(1, 3).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{review.creator.name}</p>
                    <p className="text-xs text-muted-foreground">{review.creator.campaign}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                      <CheckCircle className="h-3 w-3 text-lime-300" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                      <XCircle className="h-3 w-3 text-pink-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* chart of revenue in the last 30 days */}
        <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>Revenue from all campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <button
              className={`px-3 py-1 rounded-full text-xs font-semibold ${range === "year" ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white" : "bg-muted text-muted-foreground"}`}
              onClick={() => setRange("year")}
            >
              Year
            </button>
            <button
              className={`px-3 py-1 rounded-full text-xs font-semibold ${range === "month" ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white" : "bg-muted text-muted-foreground"}`}
              onClick={() => setRange("month")}
            >
              Month
            </button>
            <button
              className={`px-3 py-1 rounded-full text-xs font-semibold ${range === "week" ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white" : "bg-muted text-muted-foreground"}`}
              onClick={() => setRange("week")}
            >
              Week
            </button>
          </div>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#A5B4FC" stopOpacity={0.2} />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="url(#revenueGradient)"
                  strokeWidth={4}
                  dot={{ r: 6, fill: "#fff", stroke: "#C084FC", strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                  filter="url(#glow)"
                />
              </LineChart>
            </ResponsiveContainer>

       
          </div>
        </CardContent>
      </Card>



      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Campaign Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{metric.label}</span>
                  <span className="text-muted-foreground">
                    {metric.label === "Content Quality" ? `${metric.value}/10` : `${metric.value}%`}
                  </span>
                </div>
                <Progress value={(metric.value / metric.max) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Highest earning creators this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPerformers.map((performer) => (
              <div key={performer.id} className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
                  {performer.rank === 1 ? <Trophy className="h-3 w-3 text-yellow-600" /> : performer.rank}
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={performer.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{performer.name.slice(1, 3).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{performer.name}</p>
                  <p className="text-xs text-muted-foreground">{performer.followers}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{performer.earnings}</p>
                  <p className="text-xs text-muted-foreground">{performer.period}</p>
                </div>
              </div>
            ))}
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
              <span className="text-sm">Create Campaign</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Eye className="h-5 w-5" />
              <span className="text-sm">Review Content</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">Manage Creators</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

     
    </div>
  )
}
