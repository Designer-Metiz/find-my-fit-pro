import { Star, Quote, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "240+",
    label: "Professionals"
  },
  {
    icon: Quote,
    number: "15+",
    label: "Years of Experience"
  },
  {
    icon: Star,
    number: "2000+",
    label: "Projects"
  },
  {
    icon: Globe,
    number: "46+",
    label: "Countries Globally"
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;