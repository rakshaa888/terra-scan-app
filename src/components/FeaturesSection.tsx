import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  TestTube, 
  Target, 
  Brain,
  Smartphone,
  FileBarChart
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Spectral Health Maps",
    description: "Interactive crop monitoring with real-time visualization of field health status and growth patterns."
  },
  {
    icon: TrendingUp,
    title: "Temporal Trend Plots",
    description: "Advanced growth and yield forecasting using historical data and predictive analytics."
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Alerts",
    description: "Instant notifications for pest, disease, and water stress detection before visible symptoms appear."
  },
  {
    icon: TestTube,
    title: "Soil Condition Analysis",
    description: "Comprehensive summaries of nutrients, pH levels, and moisture content across your fields."
  },
  {
    icon: Target,
    title: "Predicted Risk Zones",
    description: "AI-driven prevention strategies to identify and mitigate potential crop threats early."
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Machine learning algorithms that improve accuracy with every data point collected."
  },
  {
    icon: Smartphone,
    title: "Mobile Notifications",
    description: "Stay connected with your fields through real-time alerts and mobile-friendly reports."
  },
  {
    icon: FileBarChart,
    title: "Detailed Reports",
    description: "Comprehensive analytics and insights delivered in easy-to-understand format."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Smarter Farming with AI-Powered Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform serves agronomists, researchers, field technicians, and progressive farmers 
            with cutting-edge technology for precision agriculture monitoring and decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className={`border-0 transition-all duration-300 hover:-translate-y-2 ${
              index % 4 === 0 ? 'bg-gradient-success shadow-soft hover:shadow-blue' :
              index % 4 === 1 ? 'bg-gradient-info shadow-soft hover:shadow-purple' :
              index % 4 === 2 ? 'bg-gradient-warning shadow-soft hover:shadow-colorful' :
              'bg-gradient-card shadow-soft hover:shadow-medium'
            }`}>
              <CardHeader className="pb-3">
                <div className={`p-3 rounded-lg w-fit mb-3 ${
                  index % 4 === 0 ? 'bg-gradient-vibrant' :
                  index % 4 === 1 ? 'bg-gradient-hero' :
                  index % 4 === 2 ? 'bg-gradient-success' :
                  'bg-gradient-info'
                }`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-strong p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Intuitive Dashboard Experience
            </h3>
            <p className="text-muted-foreground">
              Access all your field data, analytics, and insights from one powerful platform
            </p>
          </div>
          
          {/* Dashboard Mockup */}
            <div className="bg-gradient-to-br from-vibrant-blue/10 to-vibrant-purple/10 border-2 border-vibrant-blue/20 rounded-xl p-6 min-h-[500px]">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-semibold text-foreground bg-gradient-vibrant bg-clip-text text-transparent">CropIQ Dashboard</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-vibrant-pink rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-vibrant-yellow rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-vibrant-cyan rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Spectral Health Map */}
              <div className="lg:col-span-2 bg-gradient-to-br from-white to-vibrant-blue/5 rounded-lg p-4 shadow-blue border border-vibrant-blue/20">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-vibrant-blue" />
                  Spectral Health Map
                </h5>
                <div className="bg-gradient-to-br from-vibrant-cyan/20 to-agriculture/20 rounded-lg h-48 relative overflow-hidden border border-vibrant-cyan/30">
                  <div className="absolute inset-4 grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded transition-all duration-500 ${
                          i % 3 === 0 ? 'bg-gradient-success' : 
                          i % 5 === 0 ? 'bg-gradient-warning' : 
                          i % 7 === 0 ? 'bg-gradient-info' :
                          'bg-gradient-vibrant'
                        } opacity-80 hover:opacity-100 hover:scale-110`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-medium shadow-soft">
                    Field A-12 | 45.2 acres
                  </div>
                </div>
              </div>

              {/* Anomaly Alerts */}
              <div className="bg-gradient-to-br from-white to-vibrant-orange/5 rounded-lg p-4 shadow-purple border border-vibrant-purple/20">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-vibrant-orange" />
                  Anomaly Alerts
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs p-2 bg-gradient-to-r from-vibrant-pink/10 to-transparent rounded-lg">
                    <div className="w-2 h-2 bg-vibrant-pink rounded-full animate-pulse"></div>
                    <span className="font-medium">Water stress detected - Field B-7</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs p-2 bg-gradient-to-r from-vibrant-yellow/10 to-transparent rounded-lg">
                    <div className="w-2 h-2 bg-vibrant-yellow rounded-full animate-pulse"></div>
                    <span className="font-medium">Nutrient deficiency - Zone 3</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs p-2 bg-gradient-to-r from-vibrant-orange/10 to-transparent rounded-lg">
                    <div className="w-2 h-2 bg-vibrant-orange rounded-full animate-pulse"></div>
                    <span className="font-medium">Pest activity - North sector</span>
                  </div>
                </div>
              </div>

              {/* Temporal Trend Plot */}
              <div className="bg-gradient-to-br from-white to-vibrant-purple/5 rounded-lg p-4 shadow-colorful border border-vibrant-purple/20">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-vibrant-purple" />
                  Yield Forecast
                </h5>
                <div className="h-32 bg-gradient-to-t from-vibrant-purple/10 to-vibrant-cyan/10 rounded-lg relative border border-vibrant-purple/20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--vibrant-purple))" />
                        <stop offset="50%" stopColor="hsl(var(--vibrant-cyan))" />
                        <stop offset="100%" stopColor="hsl(var(--vibrant-blue))" />
                      </linearGradient>
                    </defs>
                    <polyline
                      fill="none"
                      stroke="url(#trendGradient)"
                      strokeWidth="3"
                      points="0,80 20,65 40,70 60,45 80,35 100,25"
                    />
                  </svg>
                  <div className="absolute bottom-2 right-2 text-xs font-medium bg-gradient-success text-white px-2 py-1 rounded-full">
                    +15% projected
                  </div>
                </div>
              </div>

              {/* Soil Conditions */}
              <div className="bg-gradient-to-br from-white to-agriculture/5 rounded-lg p-4 shadow-soft border border-agriculture/30">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <TestTube className="h-4 w-4 mr-2 text-agriculture" />
                  Soil Conditions
                </h5>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-2 bg-gradient-success/10 rounded">
                    <span className="font-medium">pH Level</span>
                    <span className="text-agriculture font-bold">6.8 Optimal</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gradient-info/10 rounded">
                    <span className="font-medium">Moisture</span>
                    <span className="text-vibrant-blue font-bold">72% Good</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gradient-warning/10 rounded">
                    <span className="font-medium">Nitrogen</span>
                    <span className="text-vibrant-orange font-bold">Low</span>
                  </div>
                </div>
              </div>

              {/* Risk Zones */}
              <div className="bg-gradient-to-br from-white to-vibrant-pink/5 rounded-lg p-4 shadow-blue border border-vibrant-pink/20">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-vibrant-pink" />
                  Risk Zones
                </h5>
                <div className="h-32 bg-gradient-to-br from-vibrant-pink/10 via-vibrant-orange/10 to-vibrant-yellow/10 rounded-lg relative border border-vibrant-pink/20">
                  <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-gradient-warning rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-soft">
                    <div className="text-vibrant-pink font-bold">High Risk: 2 zones</div>
                    <div className="text-vibrant-orange font-bold">Medium Risk: 1 zone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;