import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Upload, Brain, BarChart3, Bell, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Data Collection",
      description: "Upload multispectral images, connect IoT sensors, or integrate with drone/satellite feeds to gather comprehensive field data.",
      details: [
        "Multispectral & Hyperspectral Imaging",
        "Environmental Sensor Integration",
        "Drone & Satellite Data Feeds",
        "GPS Field Mapping"
      ]
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Processing",
      description: "Our advanced AI models analyze the data using LSTM and CNN algorithms to detect patterns and anomalies.",
      details: [
        "Spectral Analysis & Vegetation Indices",
        "Machine Learning Pattern Recognition",
        "Anomaly Detection Algorithms",
        "Predictive Model Training"
      ]
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Insights Generation",
      description: "Transform raw data into actionable insights with comprehensive analytics and visualizations.",
      details: [
        "Health Status Dashboards",
        "Trend Analysis & Predictions",
        "Zone-based Recommendations",
        "Performance Metrics"
      ]
    },
    {
      step: "04",
      icon: Bell,
      title: "Smart Alerts",
      description: "Receive real-time notifications about critical issues, optimal timing for interventions, and growth updates.",
      details: [
        "Pest & Disease Alerts",
        "Irrigation Recommendations",
        "Harvest Timing Notifications",
        "Weather Impact Warnings"
      ]
    },
    {
      step: "05",
      icon: Download,
      title: "Action & Results",
      description: "Implement recommended actions and track results to continuously improve your crop management strategy.",
      details: [
        "Targeted Treatment Plans",
        "Resource Optimization",
        "Yield Improvement Tracking",
        "ROI Analysis"
      ]
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
          <div className="absolute bottom-60 right-1/4 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-drift"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the science behind CropIQ's precision agriculture platform and how AI transforms your farming operations
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-glow">
                          {step.step}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 h-12 w-0.5 bg-gradient-to-b from-primary to-transparent mt-8`}></div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gradient-subtle p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                            <Badge variant="outline" className="text-primary border-primary">
                              Step {step.step}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-subtle rounded-3xl p-12 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Powered by Advanced Technology
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform leverages cutting-edge AI and scientific methods to deliver unprecedented accuracy in crop monitoring
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">AI Models</h3>
                  <p className="text-muted-foreground">LSTM networks for time series prediction and CNN models for image analysis</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Data Science</h3>
                  <p className="text-muted-foreground">Advanced spectral analysis and vegetation index calculations</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Integration</h3>
                  <p className="text-muted-foreground">Seamless connection with existing farm management systems</p>
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

export default HowItWorks;