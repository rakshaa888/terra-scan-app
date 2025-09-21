import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-vibrant-cyan/20 to-vibrant-blue/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-vibrant-purple/20 to-vibrant-pink/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-agriculture/20 to-vibrant-cyan/20 rounded-full animate-drift"></div>
        
        {/* Rotating Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-16 h-16 border-2 border-vibrant-orange/30 animate-rotate-slow"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-r from-vibrant-yellow/20 to-vibrant-orange/20 transform rotate-45 animate-pulse-glow"></div>
        
        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vibrant-cyan/50 to-transparent animate-slide-horizontal"></div>
        <div className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vibrant-purple/50 to-transparent animate-slide-horizontal" style={{ animationDelay: '7s' }}></div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crop Intelligence
          <span className="block text-4xl md:text-6xl bg-gradient-to-r from-vibrant-cyan via-vibrant-purple to-vibrant-pink bg-clip-text text-transparent">
            at Scale
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Empowering agronomists, researchers, and progressive farmers with AI-driven insights 
          for sustainable, precision agriculture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="vibrant" size="lg" className="text-lg px-8 py-3">
            Start Monitoring
          </Button>
          <Button variant="colorful" size="lg" className="text-lg px-8 py-3">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-vibrant-cyan/30">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-vibrant-cyan to-vibrant-blue bg-clip-text text-transparent">99.2%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-vibrant-purple/30">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-vibrant-purple to-vibrant-pink bg-clip-text text-transparent">24/7</div>
            <div className="text-sm text-gray-300">Monitoring</div>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-agriculture/30">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-agriculture to-vibrant-cyan bg-clip-text text-transparent">50K+</div>
            <div className="text-sm text-gray-300">Fields Analyzed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;