"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="min-h-screen  dark:from-gray-900 dark:to-blue-900 flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl  mb-6 tracking-tight font-calsans">
            <span className="block text-gray-900 dark:text-white">Software Development</span>
            <span className="block text-gray-900 dark:text-blue-400">Made easier</span>
            <span className="block text-gray-900 dark:text-green-400">than ever</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          One place to manage your money. Save when you send, receive and spend worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-orange-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg">
            See Conponents
          </button>
          <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Global Transfers",
      description: "Send money anywhere in the world with low fees and real-time exchange rates.",
      icon: "🌍"
    },
    {
      title: "Smart Savings",
      description: "Automatically save money with our smart algorithms and round-up features.",
      icon: "💰"
    },
    {
      title: "Multi-Currency",
      description: "Hold and manage multiple currencies in one account with instant conversions.",
      icon: "💱"
    },
    {
      title: "Secure & Safe",
      description: "Bank-level security with encryption and fraud protection for all transactions.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our round-the-clock customer support team.",
      icon: "📞"
    },
    {
      title: "Mobile First",
      description: "Manage your money on the go with our award-winning mobile app.",
      icon: "📱"
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-800 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the future of banking with features designed for your global lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200">
            Learn More About Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <NavbarDemo />;
}