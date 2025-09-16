import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Check } from "lucide-react";

const pricingFeatures = [
  "Make, Model, Year Search",
  "Bulk Product Upload",
  "Customizable Attributes",
  "Multi-Product Assignment",
  "Shopify Admin Integration",
  "3-Day Free Trial",
  "No Hidden Fees"
];

const carouselFeatures = [
  {
    id: 1,
    title: "Make/Model/Year Search Widget",
    description: "Auto parts store with Make/Model/Year search widget",
    image: "/lovable-uploads/f3ba3a0b-ba45-45f0-a589-c46adf2da787.png",
    alt: "Auto parts store with Make/Model/Year search widget"
  },
  {
    id: 2,
    title: "Admin Settings Panel",
    description: "Shopify admin showing AutoPartsFinderPro settings",
    image: "/lovable-uploads/5ad09b38-17b8-4334-a3c3-5fefc286bd6b.png",
    alt: "Shopify admin showing AutoPartsFinderPro settings"
  },
  {
    id: 3,
    title: "Fully Responsive Design",
    description: "Bulk CSV import screen for vehicle fitment data",
    image: "/lovable-uploads/6e11bcea-ad0f-499e-8c2a-cc0af0cd506d.png",
    alt: "Bulk CSV import screen for vehicle fitment data"
  },
  {
    id: 4,
    title: "Customizable Settings",
    description: "Product page showing vehicle compatibility info",
    image: "/lovable-uploads/310b6067-d8ca-4251-92f5-dd4b7cd00e89.png",
    alt: "Product page showing vehicle compatibility info"
  },
  {
    id: 5,
    title: "Tag Management",
    description: "Demo store homepage with fitment search in header",
    image: "/lovable-uploads/49678cc6-4bfb-47da-8296-1cc865249e0e.png",
    alt: "Demo store homepage with fitment search in header"
  },
  {
    id: 6,
    title: "Advanced Search",
    description: "Analytics dashboard showing fitment search usage",
    image: "/lovable-uploads/915c9ee7-8408-4742-9648-43459e1b276c.png",
    alt: "Analytics dashboard showing fitment search usage"
  }
];

const PricingAndFeatures = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="pricing" className="mt-5 p-5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[420px]">
            {/* Pricing Section - 40% */}
           
            <div className="lg:col-span-5 w-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Pricing
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  One price, all features included. No surprises.
                </p>
              </div>
              <Card className="relative overflow-hidden border-2 border-primary/20 shadow-lg">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-b-lg text-sm font-medium">
                    Most Popular
                  </div>
                </div>
                <CardHeader className="text-center pt-12">
                  <CardTitle className="text-3xl font-bold">
                    <span className="text-5xl">$9.99</span>
                    <span className="text-xl text-muted-foreground">/month</span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Everything you need to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {pricingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a 
                      href="https://apps.shopify.com/make-model-year" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="w-full bg-primary hover:bg-primary-dark">
                        Get a 3-Day Free Trial
                      </Button>
                    </a>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    No credit card required for trial
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features Carousel Section - 60% */}
            <div className="lg:col-span-7 w-full h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Product Features
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Discover all the capabilities of our Auto Parts Search solution
                </p>
              </div>
              <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                  {carouselFeatures.map((feature) => (
                    <CarouselItem key={feature.id}>
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <div className="aspect-video relative overflow-hidden rounded-lg">
                            <img
                              src={feature.image}
                              alt={feature.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAndFeatures;