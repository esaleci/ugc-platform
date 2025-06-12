"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Eye, Heart, MessageSquare, Share2, Users, Award, BarChart3, FileText, Calendar } from "lucide-react"
import { MiniLineChart } from "./MiniLineChart"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

export function CreatorPerformance() {
  // Sample performance data
  const overallStats = {
    totalReach: 125000,
    totalEngagement: 8.5,
    totalFollowers: 45000,
    contentPieces: 12,
    avgLikes: 1250,
    avgComments: 45,
    avgShares: 23,
    avgSaves: 67,
  }

  const monthlyPerformance = [
    {
      month: "January 2024",
      reach: 45000,
      engagement: 8.5,
      followers: 45000,
      content: 5,
      growth: 12.5,
    },
    {
      month: "December 2023",
      reach: 38000,
      engagement: 7.8,
      followers: 40000,
      content: 4,
      growth: 8.2,
    },
    {
      month: "November 2023",
      reach: 35000,
      engagement: 7.2,
      followers: 37000,
      content: 3,
      growth: 5.1,
    },
  ]

  const contentPerformance = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      type: "Instagram Post",
      date: "2024-01-15",
      reach: 15000,
      likes: 1250,
      comments: 45,
      shares: 23,
      saves: 67,
      engagement: 9.2,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 2,
      campaign: "Tech Innovation Week",
      type: "Video Review",
      date: "2024-01-12",
      reach: 12000,
      likes: 890,
      comments: 34,
      shares: 12,
      saves: 45,
      engagement: 8.1,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=60&h=60&fit=crop&crop=center",
    },
    {
      id: 3,
      campaign: "Healthy Living Challenge",
      type: "Instagram Reel",
      date: "2024-01-10",
      reach: 18000,
      likes: 1450,
      comments: 67,
      shares: 34,
      saves: 89,
      engagement: 9.8,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center",
    },
  ]

  const audienceInsights = {
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 35 },
        { range: "25-34", percentage: 45 },
        { range: "35-44", percentage: 15 },
        { range: "45+", percentage: 5 },
      ],
      topLocations: [
        { country: "United States", percentage: 45 },
        { country: "Canada", percentage: 20 },
        { country: "United Kingdom", percentage: 15 },
        { country: "Australia", percentage: 10 },
        { country: "Others", percentage: 10 },
      ],
    },
    engagement: {
      bestPostingTimes: ["9:00 AM", "1:00 PM", "7:00 PM"],
      bestDays: ["Tuesday", "Wednesday", "Saturday"],
      avgSessionDuration: "2m 45s",
      returnVisitorRate: 68,
    },
  }

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

  const engagementMetrics = [
    {name: "Instagram", platform: "Instagram", likes: 125000, comments: 8500, shares: 3200, saves: 15600 ,view:160000,color: "bg-gradient-to-r from-purple-500 to-pink-400"},
    {name: "TikTok", platform: "TikTok", likes: 89000, comments: 12000, shares: 5600, saves: 8900 ,view:120000,color: "bg-gradient-to-r from-sky-500 to-blue-400"},
    {name: "YouTube", platform: "YouTube", likes: 45000, comments: 3400, shares: 1200, saves: 4500 ,view:90000,color: "bg-gradient-to-r from-rose-500 to-red-400"},
  ]

  const goals = [
    {
      title: "Reach 50K Followers",
      current: 45000,
      target: 50000,
      progress: 90,
      deadline: "2024-03-01",
    },
    {
      title: "10% Engagement Rate",
      current: 8.5,
      target: 10,
      progress: 85,
      deadline: "2024-02-28",
    },
    {
      title: "15 Content Pieces",
      current: 12,
      target: 15,
      progress: 80,
      deadline: "2024-01-31",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Performance</h2>
        <p className="text-muted-foreground">Track your content performance and audience insights</p>
      </div>

      {/* Overall Performance Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalReach.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+12%</span> from last month
            </p>
            <MiniLineChart
                data={stats[0].data}
                color={stats[0].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
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
            <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalEngagement}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+0.7%</span> from last month
            </p>  
            <MiniLineChart
                data={stats[1].data}
                color={stats[1].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
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
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalFollowers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+8%</span> from last month
            </p>
            <MiniLineChart
                data={stats[2].data}
                color={stats[2].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
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
            <CardTitle className="text-sm font-medium">Content Pieces</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.contentPieces}</div>
            <p className="text-xs text-muted-foreground">This month</p>
            <MiniLineChart
                data={stats[3].data}
                color={stats[3].color}
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
          </CardContent>
          <div className="absolute top-0 left-0 w-12  h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
          <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="goals">Goals & Targets</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Monthly Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Your performance over the past months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyPerformance.map((month) => (
                    <div key={month.month} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{month.month}</span>
                        <span className="text-lime-300">+{month.growth}%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Reach</div>
                          <div className="font-medium">{month.reach.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Engagement</div>
                          <div className="font-medium">{month.engagement}%</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Content</div>
                          <div className="font-medium">{month.content} pieces</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Engagement Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Engagement Breakdown</CardTitle>
                <CardDescription>Average engagement per content type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
              <div className="flex flex-row gap-12 items-center justify-center max-w-full w-content">
                {engagementMetrics.map((platform) => (
                  <div key={platform.platform} className="relative flex flex-row flex-wrap gap-8 items-center w-96  bg-slate-950 rounded-lg px-2 py-2">
                    
                       <div className={`${platform.color} w-full h-full rounded-lg text-center shadow-lg`}>
                       {/* <div className="absolute top-0 left-0 w-full h-full bg-slate-950 rounded-lg"></div> */}

                      <div className="flex flex-row gap-2 items-center justify-center">
                     
                      {platform.platform === "Instagram" && <FaInstagram  className="h-4 w-4 text-white" />}
                        {platform.platform === "TikTok" && <FaTiktok className="h-4 w-4 text-white" />}
                      {platform.platform === "YouTube" && <FaYoutube className="h-4 w-4 text-white" />}
                      <h4 className="font-large font-bold ">{platform.platform}</h4>
                      </div>
                      
                      <div className="bg-card w-full h-full rounded-lg p-1">
                    
                     <div className="bg-card w-full h-full rounded-lg p-5 border border-stone-100 border-dashed flex flex-row flex-wrap gap-5 items-center justify-center text-left">

                      <div className="flex flex-row gap-2 items-center">
                      <Heart className="h-4 w-4 text-pink-500" />
                        <div>
                          <div className="text-sm font-medium">{platform.likes.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Likes</div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">{platform.comments.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Comments</div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                      <Share2 className="h-4 w-4 text-lime-300" />
                        <div>
                          <div className="text-sm font-medium">{platform.shares.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Shares</div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                      <BarChart3 className="h-4 w-4 text-purple-500" />
                        <div>
                          <div className="text-sm font-medium">{platform.saves.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Saves</div>
                        </div>
                      </div>

                      <div className="flex flex-row gap-2 items-center">
                      <Eye className="h-4 w-4 text-gray-200" />
                        <div>
                          <div className="text-sm font-medium">{platform.view.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Views</div>
                        </div>
                      </div>

                      </div>

                      </div>
                      
                      </div>
                    
                  </div>
                ))}
              </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
              <CardDescription>Performance metrics for your recent content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentPerformance.map((content) => (
                  <div key={content.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                    <div className="h-12 w-12 rounded-lg bg-muted overflow-hidden">
                      <img
                        src={content.image || "/placeholder.svg"}
                        alt={content.campaign}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{content.campaign}</div>
                      <div className="text-sm text-muted-foreground">
                        {content.type} • {new Date(content.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{content.reach.toLocaleString()}</div>
                        <div className="text-muted-foreground">Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{content.likes.toLocaleString()}</div>
                        <div className="text-muted-foreground">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{content.comments}</div>
                        <div className="text-muted-foreground">Comments</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{content.engagement}%</div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>Age Demographics</CardTitle>
                <CardDescription>Age distribution of your audience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.demographics.ageGroups.map((group) => (
                  <div key={group.range} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{group.range}</span>
                      <span>{group.percentage}%</span>
                    </div>
                    <Progress value={group.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Locations */}
            <Card>
              <CardHeader>
                <CardTitle>Top Locations</CardTitle>
                <CardDescription>Geographic distribution of your audience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceInsights.demographics.topLocations.map((location) => (
                  <div key={location.country} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{location.country}</span>
                      <span>{location.percentage}%</span>
                    </div>
                    <Progress value={location.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Engagement Insights */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Engagement Insights</CardTitle>
                <CardDescription>When your audience is most active</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-medium mb-2">Best Posting Times</div>
                    <div className="space-y-1">
                      {audienceInsights.engagement.bestPostingTimes.map((time) => (
                        <Badge key={time} variant="outline">
                          {time}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Best Days</div>
                    <div className="space-y-1">
                      {audienceInsights.engagement.bestDays.map((day) => (
                        <Badge key={day} variant="outline">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Audience Metrics</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Avg Session Duration</span>
                        <span>{audienceInsights.engagement.avgSessionDuration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return Visitor Rate</span>
                        <span>{audienceInsights.engagement.returnVisitorRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Goals & Targets</CardTitle>
              <CardDescription>Track your progress towards your goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map((goal) => (
                <div key={goal.title} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{goal.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Deadline: {new Date(goal.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {typeof goal.current === "number" && goal.current > 1000
                          ? goal.current.toLocaleString()
                          : goal.current}{" "}
                        /{" "}
                        {typeof goal.target === "number" && goal.target > 1000
                          ? goal.target.toLocaleString()
                          : goal.target}
                      </div>
                      <div className="text-sm text-muted-foreground">{goal.progress}% complete</div>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
