import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  Receipt,
  TrendingUp,
  Calculator,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Guides - Complete Learning Center | FinanceTaxPro",
  description: "Comprehensive educational guides on term insurance, health insurance, income tax, and investments in India. Free resources to improve your financial knowledge.",
  keywords: ["financial guides", "insurance guide", "tax guide", "investment guide", "financial education india"],
  openGraph: {
    title: "Financial Guides - Complete Learning Center",
    description: "Comprehensive educational guides on insurance, tax, and investments for Indian users.",
    type: "website",
  },
};

const guideCategories = [
  {
    title: "Term Insurance Guide",
    description: "Learn everything about term insurance - from basic concepts to advanced strategies. Understand coverage, premiums, riders, and how to choose the right policy.",
    icon: Shield,
    color: "#1e40af",
    href: "/term-insurance",
    guides: [
      { title: "Term Insurance Basics", href: "/term-insurance", description: "Complete introduction to term insurance" },
      { title: "How Much Cover Do You Need?", href: "/term-insurance/how-much-cover", description: "Calculate your ideal coverage" },
      { title: "Best Plans Comparison", href: "/term-insurance/best-plans", description: "Compare top term insurance plans" },
      { title: "Premium Calculator", href: "/term-insurance/premium-calculator", description: "Calculate your premium instantly" },
      { title: "Claim Settlement Ratio", href: "/term-insurance/claim-settlement-ratio", description: "Understand CSR and its importance" },
      { title: "Riders Explained", href: "/term-insurance/riders", description: "Critical illness, accidental death & more" },
    ],
  },
  {
    title: "Health Insurance Guide",
    description: "Navigate the complex world of health insurance with our comprehensive guides. Learn about coverage types, claims, network hospitals, and more.",
    icon: Heart,
    color: "#dc2626",
    href: "/health-insurance",
    guides: [
      { title: "Health Insurance Basics", href: "/health-insurance", description: "Complete introduction to health insurance" },
      { title: "Individual vs Family Floater", href: "/health-insurance/individual-vs-family-floater", description: "Choose the right plan type" },
      { title: "For Parents & Seniors", href: "/health-insurance/for-parents-seniors", description: "Health insurance for elderly" },
      { title: "Claim Process Guide", href: "/health-insurance/claim-process", description: "Step-by-step claim filing" },
      { title: "Cashless Network Hospitals", href: "/health-insurance/cashless-network", description: "How cashless treatment works" },
      { title: "Waiting Periods Explained", href: "/health-insurance/waiting-period", description: "Understand waiting periods" },
    ],
  },
  {
    title: "Income Tax Guide",
    description: "Master your taxes with our comprehensive income tax guides. Learn about slabs, deductions, exemptions, and legal tax-saving strategies.",
    icon: Receipt,
    color: "#059669",
    href: "/tax",
    guides: [
      { title: "Income Tax Basics", href: "/tax", description: "Complete introduction to income tax" },
      { title: "Tax Slabs 2024-25", href: "/tax/income-tax-slabs", description: "Current tax rates and slabs" },
      { title: "Section 80C Guide", href: "/tax/section-80c", description: "Save up to ₹1.5 lakh in taxes" },
      { title: "Old vs New Tax Regime", href: "/tax/old-vs-new-regime", description: "Compare and choose the best regime" },
      { title: "Income Tax Calculator", href: "/tax/income-tax-calculator", description: "Calculate your tax liability" },
      { title: "Legal Tax Saving Tips", href: "/tax/how-to-save-tax-legally", description: "Smart tax planning strategies" },
    ],
  },
  {
    title: "Investment Guide",
    description: "Start your investment journey with confidence. Learn about SIPs, mutual funds, retirement planning, and wealth creation strategies.",
    icon: TrendingUp,
    color: "#7c3aed",
    href: "/investing",
    guides: [
      { title: "Personal Finance Basics", href: "/investing", description: "Start your financial journey" },
      { title: "What is SIP?", href: "/investing/what-is-sip", description: "Understanding systematic investing" },
      { title: "Emergency Fund Guide", href: "/investing/emergency-fund", description: "Build your financial safety net" },
      { title: "Retirement Planning", href: "/investing/retirement-planning", description: "Plan for a secure future" },
      { title: "SIP vs Lump Sum", href: "/investing/sip-vs-lumpsum", description: "Choose your investment approach" },
      { title: "Common Investment Mistakes", href: "/investing/common-mistakes", description: "Avoid these pitfalls" },
    ],
  },
];

const features = [
  "Comprehensive guides written by financial experts",
  "Easy-to-understand explanations for beginners",
  "Unbiased, educational content with no sales",
  "Free calculators and planning tools",
  "Up-to-date with latest regulations",
  "Available 24/7 at no cost",
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              Free Educational Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Learning Center
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Comprehensive guides to help you make informed financial decisions. 
              Learn about insurance, taxes, and investments - all in one place. 
              No sales, no promotions, just pure knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-white">
                <Link href="/term-insurance">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/tools/sip-return-calculator">
                  Try Calculators
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="bg-slate-50 border-b">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#059669] flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive guides covering all aspects of personal finance. 
            Each guide is designed to take you from beginner to confident decision-maker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guideCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: category.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">
                        <Link href={category.href} className="hover:text-primary transition-colors">
                          {category.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.guides.map((guide, guideIndex) => (
                      <Link
                        key={guideIndex}
                        href={guide.href}
                        className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <ArrowRight className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                        <div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {guide.title}
                          </span>
                          <p className="text-xs text-muted-foreground">
                            {guide.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={category.href}>
                        View All {category.title.replace(" Guide", "")} Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 border-y">
        <div className="container px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Interactive Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial <span className="gradient-text">Calculators</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apply what you learn with our free calculators. Plan investments, 
              calculate premiums, and estimate your taxes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "SIP Calculator", href: "/tools/sip-return-calculator", icon: TrendingUp },
              { title: "Income Tax Calculator", href: "/tax/income-tax-calculator", icon: Receipt },
              { title: "EMI Calculator", href: "/tools/emi-calculator", icon: Calculator },
              { title: "Term Coverage Calculator", href: "/tools/term-coverage-calculator", icon: Shield },
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link key={index} href={tool.href}>
                  <Card className="card-hover h-full group">
                    <CardContent className="pt-6 text-center">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-16">
        <div className="hero-gradient rounded-2xl text-white text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Start with our beginner-friendly guides and use our calculators to 
            apply what you learn. Your financial journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-button text-white">
              <Link href="/investing">
                Start with Investing Basics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/tax">
                Explore Tax Planning
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
