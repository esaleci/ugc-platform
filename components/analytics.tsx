"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, DollarSign, Eye, Heart, MessageSquare, Share2 } from "lucide-react"
import { MiniLineChart } from "@/components/MiniLineChart"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import PieCharts from "./PieCharts"

export function Analytics() {
  // Sample data
  const campaignPerformance = [
    { name: "Summer Collection", roi: 245, budget: 15000, spent: 8500, engagement: 8.5 },
    { name: "Back to School", roi: 189, budget: 12000, spent: 6200, engagement: 7.2 },
    { name: "Fitness Challenge", roi: 312, budget: 18000, spent: 17800, engagement: 9.1 },
    { name: "Sustainable Living", roi: 156, budget: 10000, spent: 4500, engagement: 6.8 },
  ]

  const engagementMetrics = [
    {name: "Instagram", platform: "Instagram", likes: 125000, comments: 8500, shares: 3200, saves: 15600 ,view:160000,color: "bg-gradient-to-r from-purple-500 to-pink-400"},
    {name: "TikTok", platform: "TikTok", likes: 89000, comments: 12000, shares: 5600, saves: 8900 ,view:120000,color: "bg-gradient-to-r from-sky-500 to-blue-400"},
    {name: "YouTube", platform: "YouTube", likes: 45000, comments: 3400, shares: 1200, saves: 4500 ,view:90000,color: "bg-gradient-to-r from-rose-500 to-red-400"},
  ]

  const creatorTiers = [
    { tier: "Diamond", count: 12, percentage: 5, avgEarnings: 4200 },
    { tier: "Platinum", count: 36, percentage: 15, avgEarnings: 2800 },
    { tier: "Gold", count: 72, percentage: 30, avgEarnings: 1900 },
    { tier: "Silver", count: 120, percentage: 50, avgEarnings: 850 },
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Comprehensive insights into your UGC campaigns and creator performance</p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl h-[150px]">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2 items-center">
            <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">$124,500</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+12%</span> from last month
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                  data={[{ value: 150 }, { value: 300 }, { value: 100 }, { value: 40 }, { value: 400 }, { value: 500 }, { value: 300 }, { value: 800 }, { value: 950 }, { value: 1000 }]}
                color="#ffffff"
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
            </div>  
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl h-[150px]">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2 items-center">
            <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+18%</span> from last month
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                  data={[{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }, { value: 10 }, { value: 60 }, { value: 70 }, { value: 300 }, { value: 90 }, { value: 100 }]}
                color="#8b5cf6"
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
            </div>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl h-[150px]">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2 items-center">
            <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">7.8%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+2.1%</span> from last month
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                  data={[{ value: 10 }, { value: 300 }, { value: 30 }, { value: 40 }, { value: 200 }, { value: 60 }, { value: 100 }, { value: 80 }, { value: 90 }, { value: 500 }]}
                color="#10b981"
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
        </Card>
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl h-[150px]">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Creators</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
          <div className="flex flex-row gap-2 items-center">
              <div className="flex-1 gap-2 flex-col">
            <div className="text-2xl font-bold">240</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">+8%</span> from last month
            </p>
            </div>
            <div className="flex-grow ">
            <MiniLineChart
                  data={[{ value: 10 }, { value: 5 }, { value: 50 }, { value: 40 }, { value: 50 }, { value: 70 }, { value: 150 }, { value: 100 }, { value: 100 }, { value: 180 }]}
                color="pink"
                strokeWidth={3}
                className="opacity-90 hover:opacity-100 transition-all duration-300"
              />
              </div>
              </div>
          </CardContent>
          <div className="absolute left-0 top-50 w-56 h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
          </Card>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Metrics</TabsTrigger>
          <TabsTrigger value="creators">Creator Analytics</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI Performance</CardTitle>
                <CardDescription>Return on investment for each campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaignPerformance.map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{campaign.name}</span>
                      <span className="text-lime-300">{campaign.roi}% ROI</span>
                    </div>
                    <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${campaign.spent.toLocaleString()} spent</span>
                      <span>${campaign.budget.toLocaleString()} budget</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Engagement Rates</CardTitle>
                <CardDescription>Average engagement across campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaignPerformance.map((campaign) => (
                  <div key={campaign.name} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <div className="font-medium">{campaign.name}</div>
                      <div className="text-sm text-muted-foreground">${campaign.spent.toLocaleString()} spent</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{campaign.engagement}%</div>
                      <div className="text-xs text-muted-foreground">engagement</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Engagement Breakdown</CardTitle>
              <CardDescription>Engagement metrics across different platforms</CardDescription>
            </CardHeader>
            <CardContent>
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
                      <Heart className="h-4 w-4 text-red-500" />
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
                      <Share2 className="h-4 w-4 text-green-500" />
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


            
            {/* chart social media */}
            <div className="grid grid-cols-3 items-center justify-center w-full  mt-10">
              <div className="flex flex-col gap-2 h-[300px] w-full items-center justify-center "> 
              <h4 className="text-lg font-bold text-gray-400">Social Media Likes Breakdown</h4>
            <PieCharts data={engagementMetrics} value="likes" colors={engagementMetrics.map((platform) => platform.color)} />
            </div>

            <div className="flex flex-col gap-2 h-[300px] w-full items-center justify-center "> 
              <h4 className="text-lg font-bold text-gray-400">Social Media Shares Breakdown</h4>
            <PieCharts data={engagementMetrics} value="shares" colors={engagementMetrics.map((platform) => platform.color)} />
            </div>


            <div className="flex flex-col gap-2 h-[300px] w-full items-center justify-center "> 
              <h4 className="text-lg font-bold text-gray-400">Social Media Views Breakdown</h4>
            <PieCharts data={engagementMetrics} value="view" colors={engagementMetrics.map((platform) => platform.color)} />
            </div>
            </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Creator Tier Distribution</CardTitle>
                <CardDescription>Breakdown of creators by tier level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {creatorTiers.map((tier) => (
                  <div key={tier.tier} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{tier.tier}</span>
                      <span className="text-muted-foreground">
                        {tier.count} creators ({tier.percentage}%)
                      </span>
                    </div>
                    <Progress value={tier.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Average Earnings by Tier</CardTitle>
                <CardDescription>Monthly earnings breakdown by creator tier</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {creatorTiers.map((tier) => (
                  <div key={tier.tier} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <div className="font-medium">{tier.tier}</div>
                      <div className="text-sm text-muted-foreground">{tier.count} creators</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${tier.avgEarnings.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">avg/month</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>ROI Analysis</CardTitle>
              <CardDescription>Detailed return on investment analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Advanced ROI analytics coming soon</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We're building comprehensive ROI tracking and analysis tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
