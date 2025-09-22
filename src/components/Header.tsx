import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CropIQ</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="/solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="/resources" className="text-foreground hover:text-primary transition-colors">Resources</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost">Login</Button>
            <Button variant="outline">Register</Button>
            <Button variant="agriculture" onClick={() => window.location.href = '/get-a-demo'}>Get a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;