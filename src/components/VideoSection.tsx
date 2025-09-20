import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience the Future of Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered platform transforms traditional farming into precision agriculture
          </p>
        </div>

        {/* Video Player Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-strong aspect-video">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-agriculture/20 to-agriculture-dark/40"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="rounded-full w-20 h-20 p-0 hover:scale-110 transition-transform duration-300"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>

            {/* Video Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <span className="text-sm">0:00 / 3:45</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <span className="text-sm">Quality</span>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    HD
                  </Button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3 bg-white/20 rounded-full h-1 overflow-hidden">
                <div className="bg-gradient-hero h-full w-1/3 rounded-full"></div>
              </div>
            </div>

            {/* Video Title Overlay */}
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
              <h3 className="text-white font-semibold">AgriSense AI Platform Overview</h3>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch this 3-minute demonstration to see how our platform helps farmers make data-driven decisions, 
              increase crop yields, and implement sustainable farming practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;