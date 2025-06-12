"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Upload, X, Plus, DollarSign, Users, Target, Settings, ArrowLeft, Save, Send } from "lucide-react"
import { format } from "date-fns"

interface CreateCampaignProps {
  onBack: () => void
  onSave: (campaign: any) => void
}

export function CreateCampaign({ onBack, onSave }: CreateCampaignProps) {
  const [currentStep, setCurrentStep] = useState("basic")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [requirements, setRequirements] = useState<string[]>([])
  const [newRequirement, setNewRequirement] = useState("")

  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    budget: "",
    maxCreators: "",
    minFollowers: "",
    maxFollowers: "",
    contentType: "",
    campaignType: "",
    deliverables: "",
    hashtags: "",
    mentions: "",
    guidelines: "",
  })

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter", "Facebook", "LinkedIn"]
  const categories = ["Fashion", "Beauty", "Tech", "Fitness", "Food", "Travel", "Lifestyle", "Gaming"]
  const contentTypes = ["Photo", "Video", "Story", "Reel", "Post", "Review"]

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()])
      setNewRequirement("")
    }
  }

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index))
  }

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleSaveDraft = () => {
    const campaign = {
      ...campaignData,
      startDate,
      endDate,
      platforms: selectedPlatforms,
      categories: selectedCategories,
      requirements,
      status: "draft",
      createdAt: new Date(),
    }
    onSave(campaign)
  }

  const handlePublish = () => {
    const campaign = {
      ...campaignData,
      startDate,
      endDate,
      platforms: selectedPlatforms,
      categories: selectedCategories,
      requirements,
      status: "active",
      createdAt: new Date(),
    }
    onSave(campaign)
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Create Campaign</h2>
            <p className="text-muted-foreground">Set up your new UGC campaign</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={handlePublish}>
            <Send className="w-4 h-4 mr-2" />
            Publish Campaign
          </Button>
        </div>
      </div>

      <Tabs value={currentStep} onValueChange={setCurrentStep} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>Basic Info</span>
          </TabsTrigger>
          <TabsTrigger value="targeting" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Targeting</span>
          </TabsTrigger>
          <TabsTrigger value="budget" className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Budget</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
                <CardDescription>Basic information about your campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter campaign name"
                    value={campaignData.name}
                    onChange={(e) => setCampaignData({ ...campaignData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your campaign goals and objectives"
                    rows={4}
                    value={campaignData.description}
                    onChange={(e) => setCampaignData({ ...campaignData, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaignType">Campaign Type</Label>
                  <Select
                    value={campaignData.campaignType}
                    onValueChange={(value) => setCampaignData({ ...campaignData, campaignType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-launch">Product Launch</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="seasonal">Seasonal Campaign</SelectItem>
                      <SelectItem value="event">Event Promotion</SelectItem>
                      <SelectItem value="review">Product Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Timeline</CardTitle>
                <CardDescription>Set your campaign start and end dates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Campaign Image</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2">
                      <Button variant="outline" size="sm">
                        Upload Image
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Platforms & Categories</CardTitle>
              <CardDescription>Select target platforms and content categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Target Platforms</Label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <Badge
                      key={platform}
                      variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handlePlatformToggle(platform)}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Content Categories</Label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategories.includes(category) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleCategoryToggle(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="targeting" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Creator Requirements</CardTitle>
                <CardDescription>Define your ideal creator profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minFollowers">Min Followers</Label>
                    <Input
                      id="minFollowers"
                      type="number"
                      placeholder="1000"
                      value={campaignData.minFollowers}
                      onChange={(e) => setCampaignData({ ...campaignData, minFollowers: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxFollowers">Max Followers</Label>
                    <Input
                      id="maxFollowers"
                      type="number"
                      placeholder="100000"
                      value={campaignData.maxFollowers}
                      onChange={(e) => setCampaignData({ ...campaignData, maxFollowers: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxCreators">Maximum Creators</Label>
                  <Input
                    id="maxCreators"
                    type="number"
                    placeholder="50"
                    value={campaignData.maxCreators}
                    onChange={(e) => setCampaignData({ ...campaignData, maxCreators: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select
                    value={campaignData.contentType}
                    onValueChange={(value) => setCampaignData({ ...campaignData, contentType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Requirements</CardTitle>
                <CardDescription>Specify any additional creator requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Custom Requirements</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add requirement"
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addRequirement()}
                    />
                    <Button onClick={addRequirement} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                        <span className="text-sm">{req}</span>
                        <Button variant="ghost" size="sm" onClick={() => removeRequirement(index)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Budget</CardTitle>
                <CardDescription>Set your campaign budget and payment structure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Total Budget ($)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="5000"
                    value={campaignData.budget}
                    onChange={(e) => setCampaignData({ ...campaignData, budget: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Payment Structure</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment structure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">Fixed Rate per Creator</SelectItem>
                      <SelectItem value="performance">Performance Based</SelectItem>
                      <SelectItem value="tiered">Tiered Pricing</SelectItem>
                      <SelectItem value="product">Product Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Payment Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="monetary" />
                      <Label htmlFor="monetary">Monetary Payment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="product" />
                      <Label htmlFor="product">Product Gifting</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="affiliate" />
                      <Label htmlFor="affiliate">Affiliate Commission</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget Breakdown</CardTitle>
                <CardDescription>Estimated budget allocation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Creator Payments</span>
                    <span className="text-sm font-medium">
                      ${campaignData.budget ? (Number(campaignData.budget) * 0.8).toLocaleString() : "0"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Platform Fee (10%)</span>
                    <span className="text-sm font-medium">
                      ${campaignData.budget ? (Number(campaignData.budget) * 0.1).toLocaleString() : "0"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Processing Fee (2%)</span>
                    <span className="text-sm font-medium">
                      ${campaignData.budget ? (Number(campaignData.budget) * 0.02).toLocaleString() : "0"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total Budget</span>
                    <span>${campaignData.budget ? Number(campaignData.budget).toLocaleString() : "0"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Guidelines</CardTitle>
                <CardDescription>Provide guidelines for content creation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="deliverables">Deliverables</Label>
                  <Textarea
                    id="deliverables"
                    placeholder="Describe what creators need to deliver"
                    rows={3}
                    value={campaignData.deliverables}
                    onChange={(e) => setCampaignData({ ...campaignData, deliverables: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hashtags">Required Hashtags</Label>
                  <Input
                    id="hashtags"
                    placeholder="#brand #campaign #ugc"
                    value={campaignData.hashtags}
                    onChange={(e) => setCampaignData({ ...campaignData, hashtags: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentions">Required Mentions</Label>
                  <Input
                    id="mentions"
                    placeholder="@brandname @campaign"
                    value={campaignData.mentions}
                    onChange={(e) => setCampaignData({ ...campaignData, mentions: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Settings</CardTitle>
                <CardDescription>Additional campaign configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="guidelines">Brand Guidelines</Label>
                  <Textarea
                    id="guidelines"
                    placeholder="Provide brand guidelines and dos/don'ts"
                    rows={4}
                    value={campaignData.guidelines}
                    onChange={(e) => setCampaignData({ ...campaignData, guidelines: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <Label>Campaign Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="autoApprove" />
                      <Label htmlFor="autoApprove">Auto-approve qualified creators</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contentApproval" />
                      <Label htmlFor="contentApproval">Require content approval</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exclusivity" />
                      <Label htmlFor="exclusivity">Exclusive campaign</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
