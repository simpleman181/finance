"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Shield,
  Heart,
  Receipt,
  TrendingUp,
  Calculator,
  Menu,
  Plane,
  CreditCard,
  Fingerprint,
  Car,
} from "lucide-react";

const governmentServicesLinks = [
  { href: "/passport", title: "Passport Guide", description: "Apply for fresh/renewal passport, documents & process" },
  { href: "/pan-card", title: "PAN Card Guide", description: "New PAN, correction, duplicate - complete process" },
  { href: "/aadhar", title: "Aadhar Guide", description: "Apply, update, download e-Aadhar" },
  { href: "/driving-license", title: "Driving License Guide", description: "LL, DL, renewal - step by step" },
];

const termInsuranceLinks = [
  { href: "/term-insurance", title: "Complete Guide", description: "Everything you need to know about term insurance" },
  { href: "/term-insurance/how-much-cover", title: "How Much Cover", description: "Calculate your ideal coverage amount" },
  { href: "/term-insurance/best-plans", title: "Best Plans", description: "Compare top term insurance plans" },
  { href: "/term-insurance/for-salaried", title: "For Salaried", description: "Best options for salaried employees" },
  { href: "/term-insurance/riders", title: "Riders Explained", description: "Understanding term insurance riders" },
  { href: "/term-insurance/claim-settlement-ratio", title: "Claim Settlement Ratio", description: "Compare insurer claim ratios" },
  { href: "/term-insurance/premium-calculator", title: "Premium Calculator", description: "Calculate your premium instantly" },
];

const healthInsuranceLinks = [
  { href: "/health-insurance", title: "Complete Guide", description: "Everything about health insurance in India" },
  { href: "/health-insurance/how-much-cover", title: "How Much Cover", description: "Find your ideal health cover" },
  { href: "/health-insurance/best-plans", title: "Best Plans", description: "Top health insurance policies compared" },
  { href: "/health-insurance/individual-vs-family-floater", title: "Individual vs Family", description: "Choose the right plan type" },
  { href: "/health-insurance/for-parents-seniors", title: "For Parents & Seniors", description: "Health insurance for elderly parents" },
  { href: "/health-insurance/claim-process", title: "Claim Process", description: "Step-by-step claim guide" },
];

const taxLinks = [
  { href: "/tax", title: "Complete Tax Guide", description: "Comprehensive income tax guide" },
  { href: "/tax/old-vs-new-regime", title: "Old vs New Regime", description: "Compare tax regimes" },
  { href: "/tax/income-tax-slabs", title: "Tax Slabs", description: "Current income tax slabs" },
  { href: "/tax/section-80c", title: "Section 80C", description: "Tax saving investments under 80C" },
  { href: "/tax/section-80d", title: "Section 80D", description: "Health insurance tax benefits" },
  { href: "/tax/income-tax-calculator", title: "Tax Calculator", description: "Calculate your income tax" },
];

const investingLinks = [
  { href: "/investing", title: "Personal Finance Basics", description: "Start your financial journey" },
  { href: "/investing/what-is-sip", title: "What is SIP", description: "Understanding SIP investments" },
  { href: "/investing/emergency-fund", title: "Emergency Fund", description: "Build your safety net" },
  { href: "/investing/retirement-planning", title: "Retirement Planning", description: "Plan for your retirement" },
  { href: "/investing/common-mistakes", title: "Common Mistakes", description: "Avoid investing pitfalls" },
];

const toolsLinks = [
  { href: "/tools/sip-return-calculator", title: "SIP Calculator", description: "Calculate SIP returns" },
  { href: "/tools/emi-calculator", title: "EMI Calculator", description: "Calculate loan EMIs" },
  { href: "/tax/income-tax-calculator", title: "Tax Calculator", description: "Calculate your income tax" },
  { href: "/tools/term-coverage-calculator", title: "Coverage Calculator", description: "Find your coverage needs" },
];

interface NavItemProps {
  title: string;
  icon: React.ElementType;
  links: { href: string; title: string; description: string }[];
  colorClass: string;
}

function NavItem({ title, icon: Icon, links, colorClass }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent ${colorClass} font-medium`}>
        <Icon className="h-4 w-4 mr-2" />
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{link.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

interface MobileNavSectionProps {
  title: string;
  links: { href: string; title: string; description: string }[];
  icon: React.ElementType;
  color: string;
}

function MobileNavSection({ title, links, icon: Icon, color }: MobileNavSectionProps) {
  return (
    <div className="space-y-2">
      <div className={`flex items-center gap-2 font-semibold ${color}`}>
        <Icon className="h-5 w-5" />
        {title}
      </div>
      <div className="pl-7 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#1e40af] to-[#059669]">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="hidden font-bold text-xl md:inline-block">
            <span className="text-[#1e40af]">Sab</span>
            <span className="text-[#059669]">Pata</span>
            <span className="text-[#ea580c]">Karo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavItem 
                title="Government Services" 
                icon={Plane} 
                links={governmentServicesLinks}
                colorClass="text-[#1e40af]"
              />
              <NavItem 
                title="Insurance" 
                icon={Shield} 
                links={termInsuranceLinks}
                colorClass="text-[#dc2626]"
              />
              <NavItem 
                title="Health" 
                icon={Heart} 
                links={healthInsuranceLinks}
                colorClass="text-[#059669]"
              />
              <NavItem 
                title="Tax" 
                icon={Receipt} 
                links={taxLinks}
                colorClass="text-[#7c3aed]"
              />
              <NavItem 
                title="Investing" 
                icon={TrendingUp} 
                links={investingLinks}
                colorClass="text-[#ea580c]"
              />
              <NavItem 
                title="Tools" 
                icon={Calculator} 
                links={toolsLinks}
                colorClass="text-[#0891b2]"
              />
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col gap-4 mt-8">
                <MobileNavSection title="Government Services" links={governmentServicesLinks} icon={Plane} color="text-[#1e40af]" />
                <MobileNavSection title="Insurance" links={termInsuranceLinks} icon={Shield} color="text-[#dc2626]" />
                <MobileNavSection title="Health" links={healthInsuranceLinks} icon={Heart} color="text-[#059669]" />
                <MobileNavSection title="Tax" links={taxLinks} icon={Receipt} color="text-[#7c3aed]" />
                <MobileNavSection title="Investing" links={investingLinks} icon={TrendingUp} color="text-[#ea580c]" />
                <MobileNavSection title="Tools" links={toolsLinks} icon={Calculator} color="text-[#0891b2]" />
              </nav>
              <div className="mt-6 space-y-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
