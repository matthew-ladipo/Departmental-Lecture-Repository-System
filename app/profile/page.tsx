"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { User, Mail, MapPin, Calendar, BookOpen, ArrowLeft, Camera, Download, Upload, Star } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [userRole] = useState<"student" | "lecturer">("student")
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    studentId: "STU2024001",
    employeeId: "",
    specialization: "",
    bio: "Computer Science student passionate about machine learning and artificial intelligence.",
    location: "New York, USA",
    joinDate: "2024-01-15",
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    materialAlerts: true,
    weeklyDigest: false,
    courseReminders: true,
  })

  const stats = {
    student: {
      materialsDownloaded: 45,
      coursesEnrolled: 8,
      studyHours: 120,
      favoriteSubjects: ["Machine Learning", "Data Structures", "Algorithms"],
    },
    lecturer: {
      materialsUploaded: 23,
      totalDownloads: 1234,
      activeStudents: 156,
      averageRating: 4.8,
    },
  }

  const recentActivity = [
    {
      type: "download",
      title: "Introduction to Machine Learning",
      date: "2024-01-20",
      department: "Computer Science",
    },
    {
      type: "download",
      title: "Calculus Video Lectures",
      date: "2024-01-19",
      department: "Mathematics",
    },
    {
      type: "favorite",
      title: "Database Design Presentation",
      date: "2024-01-18",
      department: "Computer Science",
    },
  ]

  const handleSave = () => {
    // Handle profile update logic here
    console.log("Profile updated:", profileData)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-2">
              <User className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Profile Settings</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 rounded-full bg-transparent"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle>
                  {profileData.firstName} {profileData.lastName}
                </CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <Badge variant="secondary">{userRole === "student" ? "Student" : "Lecturer"}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  {profileData.email}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  {profileData.department}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  Joined {new Date(profileData.joinDate).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userRole === "student" ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Materials Downloaded</span>
                      <span className="font-medium">{stats.student.materialsDownloaded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Courses Enrolled</span>
                      <span className="font-medium">{stats.student.coursesEnrolled}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Study Hours</span>
                      <span className="font-medium">{stats.student.studyHours}h</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Materials Uploaded</span>
                      <span className="font-medium">{stats.lecturer.materialsUploaded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Downloads</span>
                      <span className="font-medium">{stats.lecturer.totalDownloads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Active Students</span>
                      <span className="font-medium">{stats.lecturer.activeStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{stats.lecturer.averageRating}</span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details and bio</CardDescription>
                    </div>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                    >
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select
                        value={profileData.department}
                        onValueChange={(value) => setProfileData({ ...profileData, department: value })}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Mathematics">Mathematics</SelectItem>
                          <SelectItem value="Physics">Physics</SelectItem>
                          <SelectItem value="Chemistry">Chemistry</SelectItem>
                          <SelectItem value="Biology">Biology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {userRole === "student" && (
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input id="studentId" value={profileData.studentId} disabled />
                      </div>
                    )}

                    {userRole === "lecturer" && (
                      <div className="space-y-2">
                        <Label htmlFor="specialization">Specialization</Label>
                        <Input
                          id="specialization"
                          value={profileData.specialization}
                          onChange={(e) => setProfileData({ ...profileData, specialization: e.target.value })}
                          disabled={!isEditing}
                          placeholder="e.g., Machine Learning, Organic Chemistry"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={4}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent interactions with the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            {activity.type === "download" ? (
                              <Download className="h-4 w-4 text-blue-600" />
                            ) : activity.type === "upload" ? (
                              <Upload className="h-4 w-4 text-green-600" />
                            ) : (
                              <Star className="h-4 w-4 text-yellow-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-600">
                              {activity.department} • {new Date(activity.date).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {activity.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Updates</Label>
                        <p className="text-sm text-gray-600">Receive email notifications about new materials</p>
                      </div>
                      <Switch
                        checked={notifications.emailUpdates}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailUpdates: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Material Alerts</Label>
                        <p className="text-sm text-gray-600">
                          Get notified when new materials are uploaded to your courses
                        </p>
                      </div>
                      <Switch
                        checked={notifications.materialAlerts}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, materialAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Digest</Label>
                        <p className="text-sm text-gray-600">Receive a weekly summary of platform activity</p>
                      </div>
                      <Switch
                        checked={notifications.weeklyDigest}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyDigest: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Course Reminders</Label>
                        <p className="text-sm text-gray-600">Get reminders about upcoming assignments and deadlines</p>
                      </div>
                      <Switch
                        checked={notifications.courseReminders}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, courseReminders: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security and privacy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Change Password</h4>
                          <p className="text-sm text-gray-600">Update your account password</p>
                        </div>
                        <Button variant="outline">Change Password</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline">Enable 2FA</Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Download Data</h4>
                          <p className="text-sm text-gray-600">Download a copy of your account data</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg border-red-200">
                        <div>
                          <h4 className="font-medium text-red-600">Delete Account</h4>
                          <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
