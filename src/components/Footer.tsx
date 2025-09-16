import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-3 text-white">About the App</h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl">
              MSPL AutoPartsFinderPro by Metizsoft helps Shopify merchants streamline the product search experience, 
              allowing customers to find the exact parts they need quickly and efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  View on Shopify App Store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 mb-4 uppercase">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Installation Guide
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter + Socials */}
          <div className="w-full">
            <h3 className="text-sm font-semibold tracking-wide text-slate-200 mb-3 uppercase">Get In Touch</h3>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 p-1 pl-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-10 border-0 bg-transparent text-slate-200 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="h-9 px-4 rounded-full text-white hover:opacity-90" style={{ backgroundColor: "#f97316" }}>
                Subscribe
              </Button>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © 2025 Metizsoft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;