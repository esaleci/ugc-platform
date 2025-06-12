"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Users, FileText, CreditCard, CheckCircle, AlertCircle, Trash2 } from "lucide-react"

export function BrandNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "campaign",
      title: "Summer Collection Campaign Completed",
      message: "Your Summer Collection campaign has been completed with 45 creators participating.",
      time: "2 hours ago",
      read: false,
      icon: Calendar,
      priority: "high",
    },
    {
      id: 2,
      type: "creator",
      title: "New Creator Application",
      message: "Sarah Johnson (@sarahjohnson) has applied to join your Tech Gadgets campaign.",
      time: "4 hours ago",
      read: false,
      icon: Users,
      priority: "medium",
    },
    {
      id: 3,
      type: "content",
      title: "Content Submitted for Review",
      message: "5 new content pieces are waiting for your review in the Tech Gadgets campaign.",
      time: "6 hours ago",
      read: true,
      icon: FileText,
      priority: "medium",
    },
    {
      id: 4,
      type: "billing",
      title: "Payment Processed",
      message: "Your monthly subscription payment of $99.00 has been processed successfully.",
      time: "1 day ago",
      read: true,
      icon: CreditCard,
      priority: "low",
    },
    {
      id: 5,
      type: "campaign",
      title: "Campaign Budget Alert",
      message: "Your Winter Fashion campaign has reached 80% of its budget limit.",
      time: "2 days ago",
      read: false,
      icon: AlertCircle,
      priority: "high",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "default"
    }
  }

  const getPriorityBorderColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-t-red-500"
      case "medium":
        return "border-t-orange-500"
      case "low":
        return "border-t-green-500"
      default:
        return "border-t-gray-500"
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "URGENT"
      case "medium":
        return "MODERATE PRIORITY"
      case "low":
        return "LOW PRIORITY"
      default:
        return priority.toUpperCase()
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "campaign":
        return Calendar
      case "creator":
        return Users
      case "content":
        return FileText
      case "billing":
        return CreditCard
      default:
        return Bell
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Stay updated with your campaigns and platform activity
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount} unread
              </Badge>
            )}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline">
            Mark All as Read
          </Button>
        )}
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="creators">Creators</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="space-y-2">
            {notifications.map((notification) => {
              const IconComponent = getTypeIcon(notification.type)
              return (
                <Card
                  key={notification.id}
                  className={`transition-all hover:shadow-md ${!notification.read ? `border-t-4 ${getPriorityBorderColor(notification.priority)} bg-white/5` : ""}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${!notification.read ? "bg-white/10" : "bg-white/5"}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                              {notification.title}
                              <Badge variant={getPriorityColor(notification.priority)} className="text-xs ml-2">
                                {notification.priority}
                              </Badge>
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!notification.read && (
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <div className="space-y-2">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => {
                const IconComponent = getTypeIcon(notification.type)
                return (
                  <Card
                    key={notification.id}
                    className={`border-t-4 ${getPriorityBorderColor(notification.priority)} bg-white/5`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 rounded-full bg-white/10">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">
                                {notification.title}
                                <Badge variant={getPriorityColor(notification.priority)} className="text-xs ml-2">
                                  {notification.priority}
                                </Badge>
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="space-y-2">
            {notifications
              .filter((n) => n.type === "campaign")
              .map((notification) => {
                const IconComponent = getTypeIcon(notification.type)
                return (
                  <Card
                    key={notification.id}
                    className={
                      !notification.read ? `border-t-4 ${getPriorityBorderColor(notification.priority)} bg-white/5` : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${!notification.read ? "bg-white/10" : "bg-white/5"}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                {notification.title}
                                <Badge variant={getPriorityColor(notification.priority)} className="text-xs ml-2">
                                  {notification.priority}
                                </Badge>
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="creators" className="space-y-4">
          <div className="space-y-2">
            {notifications
              .filter((n) => n.type === "creator")
              .map((notification) => {
                const IconComponent = getTypeIcon(notification.type)
                return (
                  <Card
                    key={notification.id}
                    className={
                      !notification.read ? `border-t-4 ${getPriorityBorderColor(notification.priority)} bg-white/5` : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${!notification.read ? "bg-white/10" : "bg-white/5"}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                {notification.title}
                                <Badge variant={getPriorityColor(notification.priority)} className="text-xs ml-2">
                                  {notification.priority}
                                </Badge>
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <div className="space-y-2">
            {notifications
              .filter((n) => n.type === "billing")
              .map((notification) => {
                const IconComponent = getTypeIcon(notification.type)
                return (
                  <Card
                    key={notification.id}
                    className={
                      !notification.read ? `border-t-4 ${getPriorityBorderColor(notification.priority)} bg-white/5` : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${!notification.read ? "bg-white/10" : "bg-white/5"}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                {notification.title}
                                <Badge variant={getPriorityColor(notification.priority)} className="text-xs ml-2">
                                  {notification.priority}
                                </Badge>
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
