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
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
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
          <div className="bg-gradient-to-br from-agriculture-light to-white border-2 border-agriculture/20 rounded-xl p-6 min-h-[500px]">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-semibold text-foreground">CropIQ Dashboard</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Spectral Health Map */}
              <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow-soft">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Spectral Health Map
                </h5>
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg h-48 relative overflow-hidden">
                  <div className="absolute inset-4 grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded ${
                          i % 3 === 0 ? 'bg-green-400' : i % 5 === 0 ? 'bg-yellow-400' : 'bg-green-500'
                        } opacity-80`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/90 rounded px-2 py-1 text-xs">
                    Field A-12 | 45.2 acres
                  </div>
                </div>
              </div>

              {/* Anomaly Alerts */}
              <div className="bg-white rounded-lg p-4 shadow-soft">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                  Anomaly Alerts
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Water stress detected - Field B-7</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Nutrient deficiency - Zone 3</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Pest activity - North sector</span>
                  </div>
                </div>
              </div>

              {/* Temporal Trend Plot */}
              <div className="bg-white rounded-lg p-4 shadow-soft">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                  Yield Forecast
                </h5>
                <div className="h-32 bg-gradient-to-t from-blue-50 to-transparent rounded relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      points="0,80 20,65 40,70 60,45 80,35 100,25"
                    />
                  </svg>
                  <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                    +15% projected
                  </div>
                </div>
              </div>

              {/* Soil Conditions */}
              <div className="bg-white rounded-lg p-4 shadow-soft">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <TestTube className="h-4 w-4 mr-2 text-green-600" />
                  Soil Conditions
                </h5>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>pH Level</span>
                    <span className="text-green-600 font-medium">6.8 Optimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moisture</span>
                    <span className="text-blue-600 font-medium">72% Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nitrogen</span>
                    <span className="text-orange-600 font-medium">Low</span>
                  </div>
                </div>
              </div>

              {/* Risk Zones */}
              <div className="bg-white rounded-lg p-4 shadow-soft">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-red-500" />
                  Risk Zones
                </h5>
                <div className="h-32 bg-gradient-to-br from-red-50 to-yellow-50 rounded relative">
                  <div className="absolute top-2 left-2 w-6 h-6 bg-red-400 rounded-full opacity-70"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center">
                    <div className="text-red-600 font-medium">High Risk: 2 zones</div>
                    <div className="text-yellow-600">Medium Risk: 1 zone</div>
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