import { CardDescription } from "@/components/ui/card";
import { Search, Upload, Settings, Check } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Easy Installation",
    description: "MSPL AutoPartsFinderPro works with all the latest Shopify themes and is managed directly from your Shopify admin."
  },
  {
    step: "Step 2", 
    title: "Bulk Upload Your Products",
    description: "Easily upload all your product data in a single CSV file."
  },
  {
    step: "Step 3",
    title: "Customize Your Search", 
    description: "Customize the search attributes to fit your store's needs."
  },
  {
    step: "Step 4",
    title: "Customers Find Parts Faster",
    description: "Your customers can now easily find the exact parts they need, improving their shopping experience."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-5 p-5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <div className="p-2.5">
            <p className="mt-4 text-lg text-muted-foreground">
              Get up and running in minutes with our simple 4-step process
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          {/* Icons row with centered dashed connector */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="h-px border-t border-dashed border-[#2a2273]/30" />
            </div>
            <div className="grid grid-cols-4 items-center gap-6">
              {steps.map((_, index) => (
                <div key={`icon-${index}`} className="flex items-center justify-center">
                  <div
                    className="h-16 w-16 rounded-2xl shadow-lg flex items-center justify-center text-white z-[1]"
                    style={{ background: "linear-gradient(135deg, #2a2273 0%, #675cff 100%)" }}
                  >
                    {index === 0 && <Search className="h-6 w-6" />}
                    {index === 1 && <Upload className="h-6 w-6" />}
                    {index === 2 && <Settings className="h-6 w-6" />}
                    {index === 3 && <Check className="h-6 w-6" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Titles row */}
          <div className="mt-6 grid grid-cols-4 gap-6 text-center items-start">
            {steps.map((step, index) => (
              <div key={`title-${index}`}>
                <div className="text-lg font-semibold text-foreground">{step.title}</div>
              </div>
            ))}
          </div>

          {/* Descriptions row */}
          <div className="mt-3 grid grid-cols-4 gap-6 text-center">
            {steps.map((step, index) => (
              <div key={`desc-${index}`}>
                <CardDescription className="mx-auto max-w-xs leading-relaxed">
                  {step.description}
                </CardDescription>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;