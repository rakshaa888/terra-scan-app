import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Users, Zap } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@cropiq.com",
      response: "Within 24 hours",
      badge: "Primary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      response: "Business hours",
      badge: "Direct"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Real-time assistance",
      contact: "Available on platform",
      response: "Instant",
      badge: "Fast"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "For technical issues and integrations",
      contact: "tech@cropiq.com",
      response: "Within 12 hours",
      badge: "Expert"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      isHQ: true
    },
    {
      city: "London",
      country: "UK",
      address: "45 Tech Street, London EC2A 4DP",
      phone: "+44 20 7123 4567",
      isHQ: false
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      address: "Innovatie Straat 78, 1012 AB Amsterdam",
      phone: "+31 20 123 4567",
      isHQ: false
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Innovation Plaza, Singapore 018956",
      phone: "+65 6123 4567",
      isHQ: false
    }
  ];

  const supportHours = [
    { region: "Americas", hours: "Mon-Fri: 6:00 AM - 8:00 PM PST" },
    { region: "Europe", hours: "Mon-Fri: 8:00 AM - 6:00 PM CET" },
    { region: "Asia Pacific", hours: "Mon-Fri: 9:00 AM - 7:00 PM SGT" }
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
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your agriculture operations? Our team of experts is here to help you succeed with CropIQ
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 text-center">
                    <CardHeader>
                      <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {method.title}
                        </CardTitle>
                        <Badge variant="secondary">{method.badge}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-primary mb-1">{method.contact}</p>
                      <p className="text-sm text-muted-foreground">Response: {method.response}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="farmer">Farmer</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                          <SelectItem value="agronomist">Agronomist</SelectItem>
                          <SelectItem value="technician">Field Technician</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your needs and how we can help..." 
                        rows={5}
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-hero text-white py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </CardContent>
              </Card>

              {/* Support Info */}
              <div className="space-y-6">
                {/* Support Hours */}
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        Support Hours
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {supportHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{schedule.region}</span>
                          <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-hero text-white py-3 px-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                        <Zap className="h-4 w-4" />
                        Schedule Demo
                      </button>
                      <button className="w-full border border-primary text-primary py-3 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                        <Users className="h-4 w-4" />
                        Join Community
                      </button>
                      <button className="w-full bg-muted text-foreground py-3 px-4 rounded-lg hover:bg-muted/80 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Live Chat
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Global Offices
              </h2>
              <p className="text-xl text-muted-foreground">
                Find us around the world with local support in your region
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-gradient-hero p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      {office.isHQ && <Badge variant="outline">Headquarters</Badge>}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {office.city}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {office.address}
                    </p>
                    <p className="text-sm font-medium text-primary">{office.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Need Immediate Answers?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Check out our comprehensive FAQ section or browse our knowledge base for instant solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-hero text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                  Browse FAQ
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                  Knowledge Base
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

export default Contact;