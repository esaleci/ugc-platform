"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Upload, Image, Video, FileText, Link, Hash, AtSign, Globe, Save } from "lucide-react"
import { useDropzone } from "react-dropzone"

interface ContentUploadProps {
  onBack: () => void
  onSave: (content: any) => void
}

export function ContentUpload({ onBack, onSave }: ContentUploadProps) {
  const [currentStep, setCurrentStep] = useState("upload")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const [contentData, setContentData] = useState({
    title: "",
    description: "",
    contentType: "",
    campaign: "",
    platform: "",
    visibility: "public",
    tags: "",
    mentions: "",
    links: "",
    location: "",
    scheduledDate: "",
    scheduledTime: "",
  })

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter", "Facebook", "LinkedIn"]
  const categories = ["Fashion", "Beauty", "Tech", "Fitness", "Food", "Travel", "Lifestyle", "Gaming"]
  const contentTypes = ["Photo", "Video", "Story", "Reel", "Post", "Review"]

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles(acceptedFiles)
    
    // Create preview URLs for images and videos
    const urls = acceptedFiles.map(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        return URL.createObjectURL(file)
      }
      return ''
    })
    setPreviewUrls(urls)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi'],
    },
    multiple: true
  })

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleSave = () => {
    const content = {
      ...contentData,
      files: selectedFiles,
      platforms: selectedPlatforms,
      categories: selectedCategories,
      status: "draft",
      createdAt: new Date(),
    }
    onSave(content)
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
            <h2 className="text-3xl font-bold tracking-tight">Upload Content</h2>
            <p className="text-muted-foreground">Share your content with your audience</p>
          </div>
        </div>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Content
        </Button>
      </div>

      <Tabs value={currentStep} onValueChange={setCurrentStep} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload" className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Details</span>
          </TabsTrigger>
          <TabsTrigger value="publish" className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Publish</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Content</CardTitle>
                <CardDescription>Upload your photos, videos, or other content</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/25 hover:border-primary'}`}
                >
                  <input {...getInputProps()} />
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {isDragActive
                      ? "Drop the files here..."
                      : "Drag & drop files here, or click to select files"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supports: Images (PNG, JPG, GIF) and Videos (MP4, MOV, AVI)
                  </p>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-4">
                    <h4 className="text-sm font-medium">Selected Files:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                          {file.type.startsWith('image/') && (
                            <img
                              src={previewUrls[index]}
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {file.type.startsWith('video/') && (
                            <video
                              src={previewUrls[index]}
                              className="w-full h-full object-cover"
                              controls
                            />
                          )}
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                            <p className="text-xs text-white truncate">{file.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Type</CardTitle>
                <CardDescription>Select the type of content you're uploading</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <Select
                    value={contentData.contentType}
                    onValueChange={(value) => setContentData({ ...contentData, contentType: value })}
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

                <div className="space-y-2">
                  <Label>Campaign</Label>
                  <Select
                    value={contentData.campaign}
                    onValueChange={(value) => setContentData({ ...contentData, campaign: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summer-collection">Summer Collection</SelectItem>
                      <SelectItem value="back-to-school">Back to School</SelectItem>
                      <SelectItem value="holiday-gift">Holiday Gift Guide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Platforms</Label>
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Details</CardTitle>
                <CardDescription>Add information about your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter content title"
                    value={contentData.title}
                    onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your content"
                    rows={4}
                    value={contentData.description}
                    onChange={(e) => setContentData({ ...contentData, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categories</Label>
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

            <Card>
              <CardHeader>
                <CardTitle>Engagement</CardTitle>
                <CardDescription>Add hashtags, mentions, and links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tags">
                    <Hash className="w-4 h-4 inline mr-1" />
                    Hashtags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="#fashion #style #trending"
                    value={contentData.tags}
                    onChange={(e) => setContentData({ ...contentData, tags: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentions">
                    <AtSign className="w-4 h-4 inline mr-1" />
                    Mentions
                  </Label>
                  <Input
                    id="mentions"
                    placeholder="@brand @collaborator"
                    value={contentData.mentions}
                    onChange={(e) => setContentData({ ...contentData, mentions: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="links">
                    <Link className="w-4 h-4 inline mr-1" />
                    Links
                  </Label>
                  <Input
                    id="links"
                    placeholder="https://..."
                    value={contentData.links}
                    onChange={(e) => setContentData({ ...contentData, links: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Add location"
                    value={contentData.location}
                    onChange={(e) => setContentData({ ...contentData, location: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="publish" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Publishing Options</CardTitle>
                <CardDescription>Configure how and when to publish your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Visibility</Label>
                  <Select
                    value={contentData.visibility}
                    onValueChange={(value) => setContentData({ ...contentData, visibility: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {contentData.visibility === "scheduled" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="scheduledDate">Date</Label>
                      <Input
                        id="scheduledDate"
                        type="date"
                        value={contentData.scheduledDate}
                        onChange={(e) => setContentData({ ...contentData, scheduledDate: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scheduledTime">Time</Label>
                      <Input
                        id="scheduledTime"
                        type="time"
                        value={contentData.scheduledTime}
                        onChange={(e) => setContentData({ ...contentData, scheduledTime: e.target.value })}
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="crosspost" />
                    <Label htmlFor="crosspost">Cross-post to all selected platforms</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>Preview your content before publishing</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedFiles.length > 0 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                          {file.type.startsWith('image/') && (
                            <img
                              src={previewUrls[index]}
                              alt={file.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {file.type.startsWith('video/') && (
                            <video
                              src={previewUrls[index]}
                              className="w-full h-full object-cover"
                              controls
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{contentData.title}</h4>
                      <p className="text-sm text-muted-foreground">{contentData.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {contentData.tags.split(' ').map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    Upload content to see preview
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 