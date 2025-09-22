import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Globe, Heart, TrendingUp, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of agricultural technology through cutting-edge AI and spectral analysis."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Delivering consistent, accurate insights that farmers and researchers can depend on."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to promoting sustainable farming practices that protect our environment."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships with farmers, researchers, and organizations worldwide."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize agriculture through AI" },
    { year: "2021", title: "First AI Model", description: "Launched our first spectral analysis algorithm for crop health detection" },
    { year: "2022", title: "Commercial Launch", description: "Released CropIQ platform to first customers across 5 countries" },
    { year: "2023", title: "Global Expansion", description: "Expanded to 25+ countries with multilingual support" },
    { year: "2024", title: "Advanced AI", description: "Introduced LSTM and CNN models for predictive analytics" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "Agricultural Engineering, AI/ML",
      background: "15+ years in precision agriculture research"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      expertise: "Computer Vision, Spectral Analysis",
      background: "Former NASA scientist, hyperspectral imaging expert"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Research",
      expertise: "Plant Physiology, Data Science",
      background: "PhD in Plant Biology, 10+ years in crop research"
    },
    {
      name: "James Thompson",
      role: "VP of Engineering",
      expertise: "Software Architecture, IoT",
      background: "Former Google engineer, IoT systems specialist"
    }
  ];

  const stats = [
    { number: "500K+", label: "Acres Monitored", icon: Globe },
    { number: "75+", label: "Countries Served", icon: Target },
    { number: "10K+", label: "Active Users", icon: Users },
    { number: "98%", label: "Customer Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-60 left-1/3 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-drift"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                About CropIQ
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pioneering the future of precision agriculture through artificial intelligence and advanced spectral analysis
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To empower farmers, researchers, and agricultural professionals with AI-powered insights that optimize crop health, 
                    increase yields, and promote sustainable farming practices worldwide. We believe that precision agriculture is key 
                    to feeding the growing global population while protecting our planet's resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become the global leader in AI-driven agricultural monitoring, creating a world where every farmer has access 
                    to cutting-edge technology that helps them make informed decisions, reduce waste, and maximize the potential of 
                    their land while preserving it for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                    <CardHeader>
                      <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-6xl mx-auto mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Impact in Numbers
                </h2>
                <p className="text-xl text-muted-foreground">
                  Measurable results across the agricultural community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group">
                      <div className="bg-gradient-hero p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our mission to revolutionize agriculture
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent mx-auto mt-4"></div>
                    )}
                  </div>
                  <Card className="flex-1 group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Meet the experts driving agricultural innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                    <Badge variant="outline" className="mx-auto">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-semibold mb-2">{member.expertise}</p>
                    <p className="text-sm text-muted-foreground">{member.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the agricultural revolution. Partner with us to create a more sustainable and productive future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-hero text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                Partner With Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;