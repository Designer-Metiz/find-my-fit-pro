import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import PricingAndFeatures from "@/components/PricingAndFeatures";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhoIsThisFor />
        <PricingAndFeatures />
        <Testimonials />
        <Experience />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
