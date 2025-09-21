import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 border border-vibrant-blue/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-16 right-8 w-16 h-16 bg-gradient-to-r from-vibrant-pink/10 to-vibrant-purple/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-agriculture/40 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-vibrant-cyan/30 rounded-full animate-drift"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience the Future of Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered platform transforms traditional farming into precision agriculture
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-strong aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jk9xQw0PAJQ?si=_X9K8tGHqCJwYPRG"
              title="The Future of Agriculture - AI and Technology in Farming"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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