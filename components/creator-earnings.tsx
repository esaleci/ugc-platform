"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  TrendingUp,
  Calendar,
  CreditCard,
  Download,
  Eye,
  CheckCircle,
  Clock,
  ArrowUpRight,
  FileText,
} from "lucide-react"
import { MiniLineChart } from "./MiniLineChart"

export function CreatorEarnings() {
  // Sample earnings data
  const earningsStats = {
    totalEarnings: 2450,
    thisMonth: 850,
    lastMonth: 650,
    pendingPayments: 400,
    availableBalance: 2050,
    nextPayoutDate: "2024-02-01",
  }

  const earningsHistory = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      brand: "FashionForward",
      amount: 250,
      status: "Paid",
      date: "2024-01-15",
      paymentMethod: "PayPal",
      type: "Instagram Post",
    },
    {
      id: 2,
      campaign: "Tech Innovation Week",
      brand: "TechGear",
      amount: 400,
      status: "Pending",
      date: "2024-01-12",
      paymentMethod: "Bank Transfer",
      type: "Video Review",
    },
    {
      id: 3,
      campaign: "Holiday Gift Guide",
      brand: "GiftCo",
      amount: 300,
      status: "Paid",
      date: "2024-01-08",
      paymentMethod: "PayPal",
      type: "Instagram Story",
    },
    {
      id: 4,
      campaign: "Fitness Challenge",
      brand: "FitLife",
      amount: 600,
      status: "Processing",
      date: "2024-01-05",
      paymentMethod: "Bank Transfer",
      type: "Instagram Reel",
    },
    {
      id: 5,
      campaign: "Beauty Tutorial",
      brand: "BeautyBrand",
      amount: 350,
      status: "Paid",
      date: "2024-01-02",
      paymentMethod: "PayPal",
      type: "TikTok Video",
    },
  ]

  const monthlyBreakdown = [
    { month: "January 2024", earnings: 850, campaigns: 5, avgPerCampaign: 170 },
    { month: "December 2023", earnings: 650, campaigns: 4, avgPerCampaign: 162.5 },
    { month: "November 2023", earnings: 750, campaigns: 6, avgPerCampaign: 125 },
    { month: "October 2023", earnings: 500, campaigns: 3, avgPerCampaign: 166.67 },
  ]

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
  
  ]

  const tierBenefits = {
    current: "Gold",
    nextTier: "Platinum",
    currentBenefits: ["15% bonus on campaigns", "Priority support", "Monthly rewards"],
    nextBenefits: ["20% bonus on campaigns", "Exclusive campaigns", "Personal account manager"],
    progress: 75,
    requiredEarnings: 3000,
    currentEarnings: 2450,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-lime-100 text-lime-800 hover:bg-lime-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4 text-lime-600" />
      case "Pending":
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Earnings</h2>
          <p className="text-muted-foreground">Track your earnings and payment history</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Earnings Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative  drop-shadow-xl  overflow-hidden rounded-xl ">
        <div
    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 "
  ></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>

            <div className="text-2xl font-bold">${earningsStats.totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time earnings</p>
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
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${earningsStats.thisMonth}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-lime-300">
                +{Math.round(((earningsStats.thisMonth - earningsStats.lastMonth) / earningsStats.lastMonth) * 100)}%
              </span>{" "}
              from last month
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
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${earningsStats.availableBalance}</div>
            <p className="text-xs text-muted-foreground">Ready for withdrawal</p>
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
            <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${earningsStats.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              {new Date(earningsStats.nextPayoutDate).toLocaleDateString()}
            </p>
          
          </CardContent>
          <div className="absolute top-0 left-0 w-12  h-12 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute top-0 right-[-5rem] w-56 h-12 bg-white blur-[50px] bg-gradient-to-r from-purple-500 to-blue-400"></div>
            <div className="absolute  bottom-0 w-full h-[10px] bg-gradient-to-r from-purple-500 to-blue-400"></div> 
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Tier Progress */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Tier Progress</CardTitle>
            <CardDescription>Your journey to the next tier</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-medium">{tierBenefits.current}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ${tierBenefits.currentEarnings} / ${tierBenefits.requiredEarnings}
              </span>
            </div>
            <Progress value={tierBenefits.progress} className="h-3" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                ${tierBenefits.requiredEarnings - tierBenefits.currentEarnings} to reach {tierBenefits.nextTier}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium mb-2">Current Benefits:</div>
                <ul className="text-muted-foreground space-y-1">
                  {tierBenefits.currentBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium mb-2">Next Tier Benefits:</div>
                <ul className="text-muted-foreground space-y-1">
                  {tierBenefits.nextBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Breakdown */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Monthly Breakdown</CardTitle>
            <CardDescription>Your earnings over the past months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyBreakdown.map((month) => (
                <div key={month.month} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <div className="font-medium">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.campaigns} campaigns</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${month.earnings}</div>
                    <div className="text-sm text-muted-foreground">${month.avgPerCampaign.toFixed(0)} avg</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-6">
        <TabsList>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>All your completed and pending payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earningsHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(payment.status)}
                      <div>
                        <div className="font-medium">{payment.campaign}</div>
                        <div className="text-sm text-muted-foreground">
                          {payment.brand} • {payment.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-semibold">${payment.amount}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(payment.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Payments that are being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earningsHistory
                  .filter((payment) => payment.status === "Pending" || payment.status === "Processing")
                  .map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(payment.status)}
                        <div>
                          <div className="font-medium">{payment.campaign}</div>
                          <div className="text-sm text-muted-foreground">
                            {payment.brand} • {payment.paymentMethod}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold">${payment.amount}</div>
                          <div className="text-sm text-muted-foreground">Expected: {earningsStats.nextPayoutDate}</div>
                        </div>
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">PayPal</div>
                    <Badge variant="outline">Primary</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">user@example.com</div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Edit
                  </Button>
                </div>
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Bank Transfer</div>
                    <Badge variant="outline">Secondary</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">****1234</div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Edit
                  </Button>
                </div>
              </div>
              <Button>
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
