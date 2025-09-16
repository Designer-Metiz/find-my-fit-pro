import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Car, TrendingUp, Sparkles, Wrench, Store, Star, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-[#2a2273]/10 text-[#2a2273] border-[#2a2273]/20 hover:bg-[#2a2273]/10 inline-flex items-center gap-2 p-2">
              <Sparkles className="w-4 h-4 text-[#2a2273]" />
              MSPL AUTOPARTSFINDERPRO
            </Badge>

            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#2a2273", lineHeight: "calc(1.6em - 8px)" }}
            >
                 Simplify Your Search Get the <span className="text-[#f97316]">Right Parts in Seconds</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Accurate Make, Model & Year search that reduces returns, boosts sales, and integrates seamlessly inside Shopify.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <Button 
                className="h-12 px-6 text-base font-semibold bg-[#2a2273] hover:opacity-90 text-white inline-flex items-center gap-2"
                onClick={() => window.open('https://apps.shopify.com/make-model-year', '_blank')}
              >
                Start free trial
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-6 text-base inline-flex items-center gap-2 border-[#2a2273] text-[#2a2273] bg-transparent"
                onClick={() => window.open('https://mmy-app.myshopify.com/', '_blank')}
              > 
                <PlayCircle className="w-5 h-5" />
                View demo store
              </Button>
            </div>

            {/* Small stats row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-slate-600">
              <div className="inline-flex items-center gap-2">
                <Store className="w-4 h-4 text-[#2a2273]" />
                <span className="text-sm">1000+ Active Stores</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Free Setup</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image with floating badges */}
          <div className="relative">
            <div className="relative">
              <img
                src="/lovable-uploads/bacb4977-dbf5-4a7f-be2b-1a7bd54938ec.png"
                alt="App dashboard and mobile preview"
                className="w-full object-contain rounded-2xl shadow-2xl bg-transparent"
              />

              {/* Live Updates badge */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  Live Updates
                </div>
              </div>

              {/* Floating pill bottom-left */}
              <div className="absolute -bottom-6 left-0">
                <Card className="px-4 py-3 bg-white/90 backdrop-blur border shadow-lg">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Real-time Location Data
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;