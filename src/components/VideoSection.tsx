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