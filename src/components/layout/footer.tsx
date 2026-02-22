import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Heart,
  Receipt,
  TrendingUp,
  Calculator,
  Mail,
  Plane,
  CreditCard,
  Fingerprint,
  Car,
  Info,
} from "lucide-react";

const footerLinks = {
  governmentServices: {
    title: "Government Services",
    icon: Plane,
    color: "#1e40af",
    links: [
      { href: "/passport", label: "Passport Guide" },
      { href: "/pan-card", label: "PAN Card Guide" },
      { href: "/aadhar", label: "Aadhar Guide" },
      { href: "/driving-license", label: "Driving License" },
    ],
  },
  insurance: {
    title: "Insurance",
    icon: Shield,
    color: "#dc2626",
    links: [
      { href: "/term-insurance", label: "Term Insurance" },
      { href: "/term-insurance/how-much-cover", label: "Coverage Calculator" },
      { href: "/term-insurance/best-plans", label: "Compare Plans" },
      { href: "/health-insurance", label: "Health Insurance" },
    ],
  },
  tax: {
    title: "Tax Planning",
    icon: Receipt,
    color: "#059669",
    links: [
      { href: "/tax", label: "Tax Guide" },
      { href: "/tax/income-tax-slabs", label: "Tax Slabs" },
      { href: "/tax/section-80c", label: "Section 80C" },
      { href: "/tax/income-tax-calculator", label: "Tax Calculator" },
    ],
  },
  investing: {
    title: "Investing",
    icon: TrendingUp,
    color: "#7c3aed",
    links: [
      { href: "/investing", label: "Personal Finance" },
      { href: "/investing/what-is-sip", label: "What is SIP" },
      { href: "/investing/emergency-fund", label: "Emergency Fund" },
      { href: "/investing/retirement-planning", label: "Retirement" },
    ],
  },
  tools: {
    title: "Tools",
    icon: Calculator,
    color: "#ea580c",
    links: [
      { href: "/tools/sip-return-calculator", label: "SIP Calculator" },
      { href: "/tools/emi-calculator", label: "EMI Calculator" },
      { href: "/tools/tax-saving-planner", label: "Tax Planner" },
      { href: "/tools/financial-health-check", label: "Health Check" },
    ],
  },
};

const legalLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#1e40af] to-[#059669]">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">
                <span className="text-blue-400">Sab</span>
                <span className="text-emerald-400">Pata</span>
                <span className="text-orange-400">Karo</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Taxes, Insurance, Money Management, Investment, Passport, PAN, Aadhar – Sab Pata Karo Yahan! 
              Your complete guide to financial and government services in India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-[#1e40af]" />
                <a href="mailto:mailtosabpatakaro@gmail.com" className="hover:text-white transition-colors">
                  mailtosabpatakaro@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 mt-4">
              <p className="text-xs text-slate-400 mb-2">
                <Info className="h-3 w-3 inline mr-1" />
                AI Content Disclosure
              </p>
              <p className="text-xs text-slate-500">
                This website uses AI to help create educational content. All information should be verified 
                from official government sources before use.
              </p>
            </div>
          </div>

          {/* Link Sections */}
          {Object.values(footerLinks).map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Icon className="h-4 w-4" style={{ color: section.color }} />
                  {section.title}
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SabPataKaro. All rights reserved. Educational content only.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            {legalLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
