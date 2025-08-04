"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Download,
  Eye,
  Star,
  BookOpen,
  ArrowLeft,
  FileText,
  Video,
  ImageIcon,
  Calendar,
  User,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const materials = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description:
        "Comprehensive guide covering supervised and unsupervised learning algorithms with practical examples.",
      lecturer: "Dr. Sarah Smith",
      department: "Computer Science",
      course: "CS401",
      category: "Lecture Notes",
      type: "pdf",
      uploadDate: "2024-01-15",
      downloads: 245,
      rating: 4.8,
      size: "2.5 MB",
      tags: ["machine learning", "algorithms", "AI"],
    },
    {
      id: 2,
      title: "Calculus Video Lectures - Series 1",
      description: "Complete video series covering differential and integral calculus with step-by-step solutions.",
      lecturer: "Prof. Michael Johnson",
      department: "Mathematics",
      course: "MATH201",
      category: "Videos",
      type: "video",
      uploadDate: "2024-01-14",
      downloads: 189,
      rating: 4.6,
      size: "850 MB",
      tags: ["calculus", "mathematics", "derivatives"],
    },
    {
      id: 3,
      title: "Organic Chemistry Lab Manual",
      description: "Detailed laboratory procedures and safety guidelines for organic chemistry experiments.",
      lecturer: "Dr. Emily Brown",
      department: "Chemistry",
      course: "CHEM301",
      category: "Lab Manuals",
      type: "pdf",
      uploadDate: "2024-01-13",
      downloads: 156,
      rating: 4.7,
      size: "5.2 MB",
      tags: ["chemistry", "lab", "organic", "experiments"],
    },
    {
      id: 4,
      title: "Physics Problem Sets - Mechanics",
      description: "Collection of solved problems in classical mechanics with detailed explanations.",
      lecturer: "Dr. Robert Wilson",
      department: "Physics",
      course: "PHYS101",
      category: "Assignments",
      type: "pdf",
      uploadDate: "2024-01-12",
      downloads: 203,
      rating: 4.5,
      size: "1.8 MB",
      tags: ["physics", "mechanics", "problems", "solutions"],
    },
    {
      id: 5,
      title: "Database Design Presentation",
      description: "Comprehensive presentation on database normalization, ER diagrams, and SQL optimization.",
      lecturer: "Prof. Lisa Davis",
      department: "Computer Science",
      course: "CS301",
      category: "Presentations",
      type: "ppt",
      uploadDate: "2024-01-11",
      downloads: 178,
      rating: 4.9,
      size: "12.3 MB",
      tags: ["database", "SQL", "normalization", "design"],
    },
  ]

  const departments = ["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology"]
  const categories = ["Lecture Notes", "Videos", "Lab Manuals", "Assignments", "Presentations", "Reference Materials"]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "video":
        return <Video className="h-5 w-5 text-blue-500" />
      case "ppt":
        return <ImageIcon className="h-5 w-5 text-orange-500" />
      default:
        return <File className="h-5 w-5 text-gray-500" />
    }
  }

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesDepartment = selectedDepartment === "all" || material.department === selectedDepartment
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory

    return matchesSearch && matchesDepartment && matchesCategory
  })

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
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Material Library</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Learning Materials</CardTitle>
            <CardDescription>Search through thousands of educational resources from all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search materials, courses, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Downloaded</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="title">Title A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{filteredMaterials.length} Materials Found</h2>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Showing results for: {selectedDepartment !== "all" && selectedDepartment},{" "}
              {selectedCategory !== "all" && selectedCategory}
            </span>
          </div>
        </div>

        {/* Material Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">{getFileIcon(material.type)}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">{material.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{material.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Material Info */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{material.category}</Badge>
                    <Badge variant="outline">{material.course}</Badge>
                    <Badge variant="outline">{material.type.toUpperCase()}</Badge>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {material.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {material.lecturer}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {material.department}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(material.uploadDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{material.downloads} downloads</span>
                    <span>{material.size}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredMaterials.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Materials
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No materials found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedDepartment("all")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
