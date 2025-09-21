"use client"

import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Upload,
  Download,
  Search,
  Bell,
  Settings,
  LogOut,
  FileText,
  Video,
  ImageIcon,
  File,
  Users,
  TrendingUp,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { logoutUser } from "@/services/auth.api"
import { useAuth } from "@/context/AuthContext"



export default function DashboardPage() {
  const { logout, user, loading, token } = useAuth()

  const [userRole] = useState<"student" | "lecturer">("student") // This would come from auth context
  const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()


   useEffect(() => {
    if (!loading && !token) {
      router.push("/auth/login")
    }
  }, [loading, token, router])

  if (loading) return <p>Loading...</p>

  const recentMaterials = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      type: "pdf",
      lecturer: "Dr. Smith",
      department: "Computer Science",
      uploadDate: "2024-01-15",
      downloads: 245,
    },
    {
      id: 2,
      title: "Calculus Lecture Series",
      type: "video",
      lecturer: "Prof. Johnson",
      department: "Mathematics",
      uploadDate: "2024-01-14",
      downloads: 189,
    },
    {
      id: 3,
      title: "Organic Chemistry Lab Manual",
      type: "pdf",
      lecturer: "Dr. Brown",
      department: "Chemistry",
      uploadDate: "2024-01-13",
      downloads: 156,
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      default:
        return <File className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">EduRepo</span>
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {userRole === "lecturer" ? (
                  <>
                    <Link href="/upload" className="w-full">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Material
                      </Button>
                    </Link>
                    <Link href="/my-materials" className="w-full">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        My Materials
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/library" className="w-full">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Browse Library
                      </Button>
                    </Link>
                    <Link href="/downloads" className="w-full">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        My Downloads
                      </Button>
                    </Link>
                  </>
                )}
                <Link href="/profile" className="w-full">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Profile Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Department Filter */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Departments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology"].map((dept) => (
                  <Button key={dept} variant="ghost" className="w-full justify-start text-sm">
                    {dept}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === "lecturer" ? "Materials Uploaded" : "Materials Downloaded"}
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === "lecturer" ? "Total Downloads" : "Courses Enrolled"}
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userRole === "lecturer" ? "1,234" : "8"}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === "lecturer" ? "Active Students" : "Study Hours"}
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userRole === "lecturer" ? "156" : "42h"}</div>
                  <p className="text-xs text-muted-foreground">This semester</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Materials */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Materials</CardTitle>
                <CardDescription>
                  {userRole === "lecturer"
                    ? "Materials you've recently uploaded"
                    : "Latest materials from your departments"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMaterials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg">{getFileIcon(material.type)}</div>
                        <div>
                          <h3 className="font-medium">{material.title}</h3>
                          <p className="text-sm text-gray-600">
                            by {material.lecturer} • {material.department}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {material.type.toUpperCase()}
                            </Badge>
                            <span className="text-xs text-gray-500">{material.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {new Date(material.uploadDate).toLocaleDateString()}
                        </span>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Machine Learning Workshop</p>
                      <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Chemistry Lab Session</p>
                      <p className="text-sm text-gray-600">Friday, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
