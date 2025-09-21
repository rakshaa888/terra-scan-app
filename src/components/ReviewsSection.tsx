import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Senior Agronomist",
    company: "GreenField Research",
    rating: 5,
    comment: "This platform gave me real-time alerts on crop stress before visible symptoms appeared. The spectral analysis is incredibly accurate and has become essential for our field research.",
    initials: "SM"
  },
  {
    name: "Marcus Rodriguez",
    role: "Progressive Farmer",
    company: "Rodriguez Farms",
    rating: 5,
    comment: "CropIQ has revolutionized how I manage my 500-acre operation. The yield predictions helped me optimize harvest timing and increase profits by 23% this season.",
    initials: "MR"
  },
  {
    name: "Dr. Emily Chen",
    role: "Agricultural Researcher", 
    company: "University of Agriculture",
    rating: 5,
    comment: "The temporal trend analysis and continuous learning capabilities make this platform invaluable for our crop experiments. Data accuracy is consistently above 99%.",
    initials: "EC"
  },
  {
    name: "James Thompson",
    role: "Field Technician",
    company: "AgroTech Solutions",
    rating: 5,
    comment: "Mobile alerts save me hours of field inspection time. I can prioritize which areas need immediate attention and provide better service to our farming clients.",
    initials: "JT"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 right-12 w-14 h-14 bg-gradient-to-r from-vibrant-yellow/15 to-vibrant-orange/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-24 left-16 w-6 h-6 border-2 border-vibrant-cyan/25 animate-rotate-slow"></div>
        <div className="absolute top-1/3 left-8 w-1 h-8 bg-gradient-to-b from-vibrant-purple/30 to-transparent animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-6 w-4 h-4 bg-agriculture/25 transform rotate-45 animate-drift"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by agronomists, researchers, and farmers worldwide who are transforming agriculture with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{review.comment}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="bg-gradient-hero text-white">
                    <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.role} • {review.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Fields Monitored</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;