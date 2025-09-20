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
          <div className="bg-gradient-to-br from-agriculture-light to-white border-2 border-agriculture/20 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Dashboard Preview</h4>
              <p className="text-muted-foreground">
                Interactive maps, real-time data visualization, and comprehensive analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;