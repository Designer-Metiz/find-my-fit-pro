import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between">
        <div className="flex items-center">
          <a className="flex items-center space-x-3" href="/">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0B37C7] overflow-hidden">
              <img
                src="/lovable-uploads/image2.png"
                alt="Car with magnifying glass logo"
                className="w-full h-full object-contain p-1.5"
                draggable={false}
              />
            </div>
            <span className="font-bold text-xl text-primary">
              MSPL AutoPartsFinderPro
            </span>
          </a>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a className="transition-colors hover:text-primary text-foreground/80" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#how-it-works">
            How It Works
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#pricing">
            Pricing
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#testimonials">
            Testimonials
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#faq">
            FAQ
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#blog">
            Blog
          </a>
          <a className="transition-colors hover:text-primary text-foreground/80" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground/80 hover:text-primary">
            Sign up
          </Button>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6">
            Buy now!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;