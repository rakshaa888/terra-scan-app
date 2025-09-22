import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Download, ExternalLink, Users, Calendar, TrendingUp } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      resources: [
        { name: "Getting Started Guide", type: "PDF", badge: "Essential" },
        { name: "API Documentation", type: "Web", badge: "Developer" },
        { name: "User Manual", type: "PDF", badge: "Complete" },
        { name: "Troubleshooting Guide", type: "Web", badge: "Support" }
      ]
    },
    {
      icon: Video,
      title: "Training Videos",
      description: "Step-by-step video tutorials and webinars",
      resources: [
        { name: "Platform Overview", type: "Video", badge: "Beginner" },
        { name: "Advanced Analytics", type: "Webinar", badge: "Expert" },
        { name: "Mobile App Tutorial", type: "Video", badge: "Mobile" },
        { name: "Best Practices", type: "Series", badge: "Pro Tips" }
      ]
    },
    {
      icon: FileText,
      title: "Research Papers",
      description: "Scientific publications and case studies",
      resources: [
        { name: "Spectral Analysis in Agriculture", type: "Paper", badge: "Research" },
        { name: "AI in Crop Monitoring", type: "Study", badge: "Innovation" },
        { name: "Precision Agriculture ROI", type: "Case Study", badge: "Business" },
        { name: "Sustainability Impact Report", type: "Report", badge: "Impact" }
      ]
    },
    {
      icon: Download,
      title: "Tools & Software",
      description: "Downloadable tools and integrations",
      resources: [
        { name: "Spectral Analysis Toolbox", type: "Software", badge: "MATLAB" },
        { name: "Data Export Templates", type: "Excel", badge: "Templates" },
        { name: "Mobile Field App", type: "App", badge: "iOS/Android" },
        { name: "Third-party Integrations", type: "Plugins", badge: "Connect" }
      ]
    }
  ];

  const webinars = [
    {
      title: "Introduction to Precision Agriculture",
      date: "March 15, 2024",
      duration: "45 min",
      level: "Beginner",
      registrations: 1250
    },
    {
      title: "Advanced Spectral Analysis Techniques",
      date: "March 22, 2024", 
      duration: "60 min",
      level: "Advanced",
      registrations: 890
    },
    {
      title: "ROI Optimization in Smart Farming",
      date: "March 29, 2024",
      duration: "40 min", 
      level: "Business",
      registrations: 2100
    }
  ];

  const downloads = [
    {
      name: "CropIQ Quick Start Checklist",
      description: "Essential steps to get started with your first field monitoring project",
      size: "2.3 MB",
      downloads: "15.2K",
      type: "PDF"
    },
    {
      name: "Vegetation Index Calculator",
      description: "Excel template for calculating NDVI, EVI, and other vegetation indices",
      size: "1.8 MB", 
      downloads: "8.7K",
      type: "Excel"
    },
    {
      name: "Field Data Collection Template",
      description: "Standardized forms for collecting field observations and measurements",
      size: "950 KB",
      downloads: "12.1K", 
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-60 left-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-drift"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Resources & Learning
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to master precision agriculture with CropIQ's comprehensive resource library
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {resourceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-hero p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {category.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.resources.map((resource, resourceIndex) => (
                          <div key={resourceIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group/item cursor-pointer">
                            <div className="flex items-center gap-3">
                              <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              <span className="font-medium">{resource.name}</span>
                              <span className="text-sm text-muted-foreground">({resource.type})</span>
                            </div>
                            <Badge variant="outline">{resource.badge}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-muted-foreground">
                Join our experts for live training sessions and Q&A
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {webinars.map((webinar, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{webinar.date}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {webinar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="text-sm font-medium">{webinar.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Level:</span>
                        <Badge variant="outline">{webinar.level}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Registered:</span>
                        <span className="text-sm font-medium flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {webinar.registrations}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-hero text-white py-2 px-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold mt-4">
                        Register Now
                      </button>
                    </div>
                  </CardContent>
                </Card> 
              ))}
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Popular Downloads
              </h2>
              <p className="text-xl text-muted-foreground">
                Essential tools and templates to accelerate your precision agriculture journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloads.map((download, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Download className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <Badge variant="secondary">{download.type}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {download.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {download.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>Size: {download.size}</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {download.downloads} downloads
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary to-primary-glow text-white py-2 px-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                      Download Free
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Need Additional Support?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our expert team is ready to help you succeed with personalized training and support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-hero text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                  Contact Support
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                  Schedule Training
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;