import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PlayCircle, Calendar, Users, CheckCircle, Clock, Zap, Star, Award } from "lucide-react";

const GetDemo = () => {
  const demoFeatures = [
    {
      icon: PlayCircle,
      title: "Live Platform Demo",
      description: "See CropIQ in action with real field data and AI-powered analytics"
    },
    {
      icon: Users,
      title: "Personalized Consultation",
      description: "Get expert advice tailored to your specific crops and farming operations"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you, including evenings and weekends"
    },
    {
      icon: CheckCircle,
      title: "Custom Use Cases",
      description: "Explore scenarios specific to your agricultural challenges and goals"
    }
  ];

  const demoTypes = [
    {
      type: "Quick Overview",
      duration: "15 minutes",
      description: "Perfect for a first look at CropIQ's capabilities",
      features: ["Platform overview", "Key features demo", "Q&A session"],
      badge: "Popular"
    },
    {
      type: "Comprehensive Demo",
      duration: "45 minutes",
      description: "In-depth exploration of all features and use cases",
      features: ["Full platform tour", "Custom scenarios", "Integration options", "Pricing discussion"],
      badge: "Recommended"
    },
    {
      type: "Technical Deep Dive",
      duration: "60 minutes",
      description: "For technical teams and researchers",
      features: ["API documentation", "Data formats", "Integration workflows", "Technical Q&A"],
      badge: "Technical"
    }
  ];

  const benefits = [
    "See real crop monitoring data from actual farms",
    "Understand ROI and cost-benefit analysis",
    "Learn about integration with existing systems",  
    "Get personalized recommendations for your operation",
    "Access to exclusive demo datasets",
    "Follow-up support and resources"
  ];

  const testimonials = [
    {
      name: "John Martinez",
      role: "Farm Manager",
      company: "Green Valley Farms",
      quote: "The demo showed me exactly how CropIQ could save us thousands in crop losses. We implemented it within a week."
    },
    {
      name: "Dr. Sarah Kim",
      role: "Agricultural Researcher", 
      company: "University Agriculture Dept",
      quote: "The technical demo was comprehensive. The API integration was seamless and the data quality exceeded our expectations."
    }
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
                Get Your Demo
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the power of AI-driven precision agriculture firsthand. Book a personalized demo with our experts.
              </p>
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">15-60 min sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Instant booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">No commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {demoFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                    <CardHeader>
                      <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Types */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Choose Your Demo Type
              </h2>
              <p className="text-xl text-muted-foreground">
                Select the demo format that best fits your needs and schedule
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {demoTypes.map((demo, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 relative">
                  {demo.badge === "Recommended" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-hero text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{demo.badge}</Badge>
                      <span className="text-2xl font-bold text-primary">{demo.duration}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {demo.type}
                    </CardTitle>
                    <p className="text-muted-foreground">{demo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-hero text-white py-3 px-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                      Select This Demo
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      Schedule Your Demo
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll contact you to schedule your personalized demo
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Business Email *</Label>
                        <Input id="email" type="email" placeholder="Enter your business email" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company/Organization *</Label>
                        <Input id="company" placeholder="Enter your company name" required />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="role">Your Role *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="farmer">Farmer/Grower</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="agronomist">Agronomist</SelectItem>
                              <SelectItem value="consultant">Agricultural Consultant</SelectItem>
                              <SelectItem value="manager">Farm Manager</SelectItem>
                              <SelectItem value="executive">C-Level Executive</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="farmSize">Farm Size</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select farm size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">&lt; 100 acres</SelectItem>
                              <SelectItem value="medium">100 - 1,000 acres</SelectItem>
                              <SelectItem value="large">1,000 - 10,000 acres</SelectItem>
                              <SelectItem value="enterprise">&gt; 10,000 acres</SelectItem>
                              <SelectItem value="research">Research/Academic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="crops">Primary Crops</Label>
                        <Input id="crops" placeholder="e.g., Corn, Soybeans, Wheat, etc." />
                      </div>
                      
                      <div>
                        <Label htmlFor="timezone">Preferred Time Zone</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your time zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pst">Pacific (PST/PDT)</SelectItem>
                            <SelectItem value="mst">Mountain (MST/MDT)</SelectItem>
                            <SelectItem value="cst">Central (CST/CDT)</SelectItem>
                            <SelectItem value="est">Eastern (EST/EDT)</SelectItem>
                            <SelectItem value="cet">Central European (CET)</SelectItem>
                            <SelectItem value="sgt">Singapore (SGT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="interests">Areas of Interest</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          {[
                            "Crop Health Monitoring",
                            "Pest Detection",
                            "Yield Prediction", 
                            "Soil Analysis",
                            "Weather Integration",
                            "API Integration"
                          ].map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox id={interest} />
                              <Label htmlFor={interest} className="text-sm">{interest}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your specific needs or questions..." 
                          rows={4}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          I'd like to receive updates about CropIQ and precision agriculture insights
                        </Label>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-gradient-hero text-white py-4 px-6 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold text-lg"
                      >
                        Schedule My Demo
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* What You'll Get */}
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      What You'll Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonials */}
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      What Others Say
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <p className="text-sm text-muted-foreground italic mb-2">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <p className="font-semibold text-sm">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about the demo or need immediate assistance?
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Email:</strong> demo@cropiq.com</p>
                      <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p className="text-sm"><strong>Hours:</strong> Mon-Fri 8AM-6PM PST</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Join Successful Farmers
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Over 95% of demo attendees choose to implement CropIQ within 30 days
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                  <div className="text-sm text-muted-foreground">Demos Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Implementation Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Demo Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24hr</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetDemo;