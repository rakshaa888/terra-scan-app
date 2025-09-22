import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Camera, TrendingUp, Shield, Zap, Leaf, BarChart3, Eye, Cpu, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze crop health patterns and predict potential issues before they become visible.",
      badge: "Core Feature"
    },
    {
      icon: Camera,
      title: "Multispectral Imaging",
      description: "High-resolution multispectral and hyperspectral imaging captures invisible plant stress indicators.",
      badge: "Premium"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "LSTM and CNN models predict crop yields, disease outbreaks, and optimal harvest times.",
      badge: "Advanced"
    },
    {
      icon: Shield,
      title: "Pest Detection",
      description: "Early pest and disease detection using spectral analysis and environmental sensor data.",
      badge: "Essential"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of soil moisture, temperature, humidity, and plant health indicators.",
      badge: "Live"
    },
    {
      icon: Leaf,
      title: "Vegetation Indices",
      description: "Calculate NDVI, EVI, and other vegetation indices to assess crop health and growth stages.",
      badge: "Scientific"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive dashboards with trend analysis, zone mapping, and actionable insights.",
      badge: "Business"
    },
    {
      icon: Eye,
      title: "Anomaly Detection",
      description: "Automatically detect and alert on unusual patterns in crop health and environmental conditions.",
      badge: "Smart"
    },
    {
      icon: Cpu,
      title: "Sensor Fusion",
      description: "Integrate data from multiple sensors including IoT devices, drones, and satellite imagery.",
      badge: "Connected"
    },
    {
      icon: Globe,
      title: "Field Mapping",
      description: "GPS-enabled field mapping with precise location tracking for targeted interventions.",
      badge: "Precision"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-drift"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Powerful Features
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the comprehensive suite of AI-powered tools designed to revolutionize precision agriculture
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-gradient-hero p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary">{feature.badge}</Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
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

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of farmers and agronomists who are already using CropIQ to optimize their crop management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-hero text-white px-8 py-4 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                  Start Free Trial
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                  Schedule Demo
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

export default Features;