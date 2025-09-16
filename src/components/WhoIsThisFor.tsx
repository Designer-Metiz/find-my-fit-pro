import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Wrench, Cpu, Filter } from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Auto Parts",
    description: "Perfect for automotive retailers selling car parts and accessories"
  },
  {
    icon: Wrench,
    title: "Hardware",
    description: "Ideal for hardware stores with complex product catalogs"
  },
  {
    icon: Cpu,
    title: "Electronics",
    description: "Great for electronics retailers with technical specifications"
  },
  {
    icon: Filter,
    title: "Any Filtered Search Industry",
    description: "Suitable for any industry where filtered search is beneficial"
  }
];

const WhoIsThisFor = () => {
  return (
    <section className="mt-5 p-5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Is This App For?
          </h2>
          <div className="p-2.5">
            <p className="mt-4 text-lg text-muted-foreground">
              This app is perfect for Shopify stores in the following industries
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;