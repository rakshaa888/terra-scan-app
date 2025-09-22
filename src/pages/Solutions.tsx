import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Wrench, Tractor, Building, Globe, CheckCircle } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Tractor,
      title: "For Farmers",
      subtitle: "Optimize Your Harvest",
      description: "Comprehensive crop monitoring solutions designed for modern farming operations of any size.",
      features: [
        "Real-time crop health monitoring",
        "Pest and disease early detection",
        "Irrigation optimization recommendations",
        "Yield prediction and planning",
        "Weather-based risk alerts",
        "Mobile field reporting"
      ],
      badge: "Most Popular",
      color: "from-primary to-primary-glow"
    },
    {
      icon: GraduationCap,
      title: "For Researchers",
      subtitle: "Advanced Analytics Platform",
      description: "Cutting-edge tools for agricultural research with comprehensive data analysis capabilities.",
      features: [
        "Hyperspectral data analysis",
        "Research-grade vegetation indices",
        "Statistical modeling tools",
        "Data export and API access",
        "Collaborative research features",
        "Publication-ready visualizations"
      ],
      badge: "Scientific",
      color: "from-secondary to-accent"
    },
    {
      icon: Wrench,
      title: "For Technicians",
      subtitle: "Field Service Excellence", 
      description: "Professional tools for agricultural consultants and field service technicians.",
      features: [
        "Client field management",
        "Professional reporting tools",
        "Multi-site monitoring",
        "Consultant dashboard",
        "Client communication tools",
        "Service history tracking"
      ],
      badge: "Professional",
      color: "from-accent to-primary"
    },
    {
      icon: Users,
      title: "For Agronomists",
      subtitle: "Expert Decision Support",
      description: "Advanced analytics and recommendations for agricultural experts and consultants.",
      features: [
        "Expert-level diagnostics",
        "Treatment recommendations",
        "Historical trend analysis",
        "Multi-field comparisons",
        "Agronomic modeling",
        "Professional certifications"
      ],
      badge: "Expert",
      color: "from-primary-glow to-secondary"
    },
    {
      icon: Building,
      title: "For Enterprises",
      subtitle: "Scale Across Operations",
      description: "Enterprise-grade solutions for large agricultural operations and cooperatives.",
      features: [
        "Multi-location management",
        "Enterprise dashboards",
        "Team collaboration tools",
        "Custom integrations",
        "Advanced security",
        "Dedicated support"
      ],
      badge: "Enterprise",
      color: "from-secondary to-primary"
    },
    {
      icon: Globe,
      title: "For Organizations",
      subtitle: "Global Impact Solutions",
      description: "Comprehensive platforms for NGOs, government agencies, and agricultural organizations.",
      features: [
        "Regional monitoring",
        "Policy support tools",
        "Sustainability metrics",
        "Community engagement",
        "Impact assessment",
        "Global data insights"
      ],
      badge: "Impact",
      color: "from-accent to-primary-glow"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-drift"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Tailored Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how CropIQ adapts to your specific needs with specialized solutions for every role in agriculture
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-br ${solution.color} p-4 rounded-xl group-hover:shadow-glow transition-all duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <Badge variant="secondary">{solution.badge}</Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {solution.title}
                      </CardTitle>
                      <p className="text-primary font-semibold text-lg">{solution.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <button className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold`}>
                          Learn More
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Impact Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Proven Impact Across Industries
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See how CropIQ is transforming agriculture across different sectors and scales
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15%</div>
                  <div className="text-sm text-muted-foreground">Average Yield Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Reduction in Crop Loss</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Water Usage Optimization</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Issue Detection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Find Your Perfect Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our experts to discover which CropIQ solution is right for your operation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-hero text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                Schedule Consultation
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                Compare Solutions
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;