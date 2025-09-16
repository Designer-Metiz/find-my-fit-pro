import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Upload, Settings, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Fitment Search",
    description: "Give customers a simple Make–Model–Year dropdown to instantly find compatible products.",
    bullets: [
      "Increases confidence at checkout",
      "Reduces wrong orders and returns", 
      "Works on desktop & mobile"
    ],
    iconColor: "#ef4444", // Red
    bgColor: "#fef2f2" // Light red background
  },
  {
    icon: Upload,
    title: "Bulk Data Import", 
    description: "Upload your full catalog via CSV for quick setup.",
    bullets: [
      "Map product SKUs with vehicle fitment data",
      "Supports large catalogs",
      "Save hours of manual entry"
    ],
    iconColor: "#3b82f6", // Blue
    bgColor: "#eff6ff" // Light blue background
  },
  {
    icon: Settings,
    title: "Seamless Shopify Integration",
    description: "Built for Shopify, works natively with your theme.",
    bullets: [
      "Installs directly in Shopify Admin",
      "Compatible with the latest Shopify 2.0 themes",
      "No coding required"
    ],
    iconColor: "#10b981", // Green
    bgColor: "#ecfdf5" // Light green background
  },
  {
    icon: Zap,
    title: "Faster Shopping Experience",
    description: "Customers reach the right product in seconds.",
    bullets: [
      "Improved navigation for large catalogs",
      "Better user experience → higher conversions",
      "Supports multiple categories and tags"
    ],
    iconColor: "#f59e0b", // Yellow/Orange
    bgColor: "#fffbeb" // Light yellow background
  }
];

const Features = () => {
  return (
    <section id="features" className="mt-5 py-16 px-5 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border bg-white/90 backdrop-blur px-6 py-12 sm:px-10 shadow-sm">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs" style={{borderColor:'#2a2273', color:'#2a2273'}}>
            Our Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Key Features
          </h2>
          <div className="p-2.5">
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to transform your customers' search experience
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-4 gap-6 overflow-visible">
            {features.map((feature, index) => (
              <Card key={index} className="relative rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">

                <CardHeader className="pb-2">
                  <div className="mb-4">
                    <div className="relative inline-flex items-center justify-center">
                      <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-white/70" />
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full shadow-md"
                        style={{ backgroundColor: feature.bgColor, boxShadow: "0 6px 14px rgba(0,0,0,0.06)", border: `2px solid ${feature.iconColor}` }}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                          <feature.icon className="w-5 h-5" style={{ color: feature.iconColor }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold text-[#2a2273]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed mb-3">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-1.5">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2a2273] mt-1.5 mr-2 flex-shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;