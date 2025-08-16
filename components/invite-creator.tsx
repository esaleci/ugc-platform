"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Send, UserPlus, Instagram, Youtube, Twitter, Facebook, Linkedin } from "lucide-react"

interface InviteCreatorProps {
  onBack: () => void
  onSave: (creator: any) => void
}

export function InviteCreator({ onBack, onSave }: InviteCreatorProps) {
  const [currentStep, setCurrentStep] = useState("basic")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const [creatorData, setCreatorData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    website: "",
    instagram: "",
    youtube: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    followers: "",
    engagement: "",
    contentTypes: "",
    languages: "",
    paymentInfo: "",
  })

  const platforms = ["Instagram", "YouTube", "Twitter", "Facebook", "LinkedIn"]
  const categories = ["Fashion", "Beauty", "Tech", "Fitness", "Food", "Travel", "Lifestyle", "Gaming"]
  const contentTypes = ["Photos", "Videos", "Stories", "Reels", "Blog Posts", "Reviews"]
  const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Japanese", "Korean"]

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleSave = () => {
    const creator = {
      ...creatorData,
      platforms: selectedPlatforms,
      categories: selectedCategories,
      status: "pending",
      createdAt: new Date(),
    }
    onSave(creator)
  }

  return (
    <div className="flex-1 space-y-6 p-0 lg:p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-4 ">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Invite Creator</h2>
            <p className="text-muted-foreground">Add a new creator to your platform</p>
          </div>
        </div>
        <Button onClick={handleSave}>
          <Send className="w-4 h-4 mr-2" />
          Send Invitation
        </Button>
      </div>

      <Tabs value={currentStep} onValueChange={setCurrentStep} className="space-y-6">
      <TabsList className="flex gap-2 flex-wrap h-auto py-3 md:py-1 lg:h-content">
          <TabsTrigger value="basic" className="flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Basic Info</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center space-x-2">
            <Instagram className="w-4 h-4" />
            <span>Social Media</span>
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center space-x-2">
            <Badge className="w-4 h-4" />
            <span>Additional Details</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Creator Details</CardTitle>
                <CardDescription>Basic information about the creator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter creator's full name"
                    value={creatorData.name}
                    onChange={(e) => setCreatorData({ ...creatorData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter creator's email"
                    value={creatorData.email}
                    onChange={(e) => setCreatorData({ ...creatorData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter creator's phone number"
                    value={creatorData.phone}
                    onChange={(e) => setCreatorData({ ...creatorData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Enter creator's bio"
                    rows={4}
                    value={creatorData.bio}
                    onChange={(e) => setCreatorData({ ...creatorData, bio: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location & Website</CardTitle>
                <CardDescription>Creator's location and online presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter creator's location"
                    value={creatorData.location}
                    onChange={(e) => setCreatorData({ ...creatorData, location: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="Enter creator's website"
                    value={creatorData.website}
                    onChange={(e) => setCreatorData({ ...creatorData, website: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Profiles</CardTitle>
                <CardDescription>Creator's social media handles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="@username"
                    value={creatorData.instagram}
                    onChange={(e) => setCreatorData({ ...creatorData, instagram: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    placeholder="Channel URL"
                    value={creatorData.youtube}
                    onChange={(e) => setCreatorData({ ...creatorData, youtube: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    placeholder="@username"
                    value={creatorData.twitter}
                    onChange={(e) => setCreatorData({ ...creatorData, twitter: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    placeholder="Profile URL"
                    value={creatorData.facebook}
                    onChange={(e) => setCreatorData({ ...creatorData, facebook: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="Profile URL"
                    value={creatorData.linkedin}
                    onChange={(e) => setCreatorData({ ...creatorData, linkedin: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platforms & Categories</CardTitle>
                <CardDescription>Select creator's platforms and categories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Active Platforms</Label>
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
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content & Engagement</CardTitle>
                <CardDescription>Creator's content types and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="followers">Total Followers</Label>
                  <Input
                    id="followers"
                    type="number"
                    placeholder="Enter total follower count"
                    value={creatorData.followers}
                    onChange={(e) => setCreatorData({ ...creatorData, followers: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="engagement">Average Engagement Rate (%)</Label>
                  <Input
                    id="engagement"
                    type="number"
                    placeholder="Enter engagement rate"
                    value={creatorData.engagement}
                    onChange={(e) => setCreatorData({ ...creatorData, engagement: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contentTypes">Content Types</Label>
                  <Select
                    value={creatorData.contentTypes}
                    onValueChange={(value) => setCreatorData({ ...creatorData, contentTypes: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content types" />
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
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Other relevant details about the creator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages</Label>
                  <Select
                    value={creatorData.languages}
                    onValueChange={(value) => setCreatorData({ ...creatorData, languages: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select languages" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((language) => (
                        <SelectItem key={language} value={language.toLowerCase()}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentInfo">Payment Information</Label>
                  <Textarea
                    id="paymentInfo"
                    placeholder="Enter payment details"
                    rows={3}
                    value={creatorData.paymentInfo}
                    onChange={(e) => setCreatorData({ ...creatorData, paymentInfo: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 