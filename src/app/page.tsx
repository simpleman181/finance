import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Heart,
  Receipt,
  TrendingUp,
  Calculator,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Term Insurance",
    description: "Secure your family's financial future with the right term insurance plan. Compare plans, understand riders, and find the best coverage.",
    icon: Shield,
    color: "#1e40af",
    href: "/term-insurance",
    links: [
      { label: "Complete Guide", href: "/term-insurance" },
      { label: "Best Plans", href: "/term-insurance/best-plans" },
      { label: "Premium Calculator", href: "/term-insurance/premium-calculator" },
      { label: "Claim Settlement Ratio", href: "/term-insurance/claim-settlement-ratio" },
    ],
  },
  {
    title: "Health Insurance",
    description: "Protect yourself and your family from rising medical costs. Compare health insurance policies and find comprehensive coverage.",
    icon: Heart,
    color: "#dc2626",
    href: "/health-insurance",
    links: [
      { label: "Complete Guide", href: "/health-insurance" },
      { label: "Best Plans", href: "/health-insurance/best-plans" },
      { label: "For Parents & Seniors", href: "/health-insurance/for-parents-seniors" },
      { label: "Claim Process", href: "/health-insurance/claim-process" },
    ],
  },
  {
    title: "Tax Planning",
    description: "Maximize your tax savings under the Income Tax Act. Learn about deductions, exemptions, and smart tax-saving strategies.",
    icon: Receipt,
    color: "#059669",
    href: "/tax",
    links: [
      { label: "Complete Tax Guide", href: "/tax" },
      { label: "Section 80C", href: "/tax/section-80c" },
      { label: "Old vs New Regime", href: "/tax/old-vs-new-regime" },
      { label: "Tax Calculator", href: "/tax/income-tax-calculator" },
    ],
  },
  {
    title: "Investments",
    description: "Start your investment journey with confidence. Learn about SIPs, mutual funds, retirement planning, and wealth creation strategies.",
    icon: TrendingUp,
    color: "#7c3aed",
    href: "/investing",
    links: [
      { label: "Personal Finance Basics", href: "/investing" },
      { label: "What is SIP", href: "/investing/what-is-sip" },
      { label: "Best Mutual Funds", href: "/investing/best-mutual-funds-beginners" },
      { label: "Retirement Planning", href: "/investing/retirement-planning" },
    ],
  },
  {
    title: "Tools & Calculators",
    description: "Make informed financial decisions with our interactive calculators. Plan investments, compare insurance, and optimize your taxes.",
    icon: Calculator,
    color: "#ea580c",
    href: "/tools/compare-term-insurance",
    links: [
      { label: "SIP Calculator", href: "/tools/sip-return-calculator" },
      { label: "EMI Calculator", href: "/tools/emi-calculator" },
      { label: "Tax Saving Planner", href: "/tools/tax-saving-planner" },
      { label: "Financial Health Check", href: "/tools/financial-health-check" },
    ],
  },
];

const featuredTools = [
  {
    title: "Term Insurance Premium Calculator",
    description: "Calculate your term insurance premium based on age, coverage, and policy term.",
    href: "/term-insurance/premium-calculator",
    icon: Shield,
    color: "#1e40af",
  },
  {
    title: "Income Tax Calculator",
    description: "Calculate your income tax liability under old and new tax regimes.",
    href: "/tax/income-tax-calculator",
    icon: Receipt,
    color: "#059669",
  },
  {
    title: "SIP Return Calculator",
    description: "Estimate your mutual fund returns with our SIP calculator.",
    href: "/tools/sip-return-calculator",
    icon: TrendingUp,
    color: "#7c3aed",
  },
  {
    title: "EMI Calculator",
    description: "Calculate your loan EMI for home, car, or personal loans.",
    href: "/tools/emi-calculator",
    icon: Calculator,
    color: "#ea580c",
  },
];

const stats = [
  { label: "Pages of Content", value: "50+", icon: Award },
  { label: "Financial Tools", value: "10+", icon: Calculator },
  { label: "Insurance Plans Compared", value: "100+", icon: Shield },
  { label: "Tax Saving Tips", value: "50+", icon: Receipt },
];

const features = [
  "Comprehensive guides written by financial experts",
  "Easy-to-use calculators for informed decisions",
  "Unbiased comparisons of insurance plans",
  "Up-to-date tax regulations and slabs",
  "Free to use with no registration required",
  "Trusted by thousands of Indian investors",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-0">
                India's #1 Finance Education Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Complete Guide to{" "}
                <span className="text-yellow-300">Finance, Insurance & Tax</span>{" "}
                in India
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                Make informed financial decisions with our comprehensive guides, 
                comparison tools, and interactive calculators. Expert advice on 
                insurance, investments, and tax planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="cta-button text-white">
                  <Link href="/term-insurance">
                    Explore Term Insurance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/tax">
                    Calculate Your Tax
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur rounded-3xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#059669] flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Smart Tax Planning</p>
                      <p className="text-sm text-blue-100">Save up to ₹1.5 Lakh under 80C</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1e40af] flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Term Insurance</p>
                      <p className="text-sm text-blue-100">₹1 Cr cover from ₹490/month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#7c3aed] flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">SIP Investments</p>
                      <p className="text-sm text-blue-100">Start with just ₹500/month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#dc2626] flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Health Insurance</p>
                      <p className="text-sm text-blue-100">Cashless treatment at 10,000+ hospitals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 border-b">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1e40af]/10 mb-3">
                    <Icon className="h-6 w-6 text-[#1e40af]" />
                  </div>
                  <p className="text-3xl font-bold text-[#1e40af]">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our{" "}
            <span className="gradient-text">Knowledge Base</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guides on insurance, tax planning, and investments 
            to help you make informed financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="card-hover group h-full">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: category.color }} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e40af] transition-colors">
                    <Link href={category.href}>{category.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1e40af] transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 border-y">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Interactive Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial{" "}
              <span className="gradient-text">Calculators & Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make smart financial decisions with our easy-to-use calculators. 
              Get instant results and plan your finances better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link key={index} href={tool.href}>
                  <Card className="card-hover h-full group">
                    <CardHeader>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${tool.color}15` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: tool.color }} />
                      </div>
                      <CardTitle className="text-lg group-hover:text-[#1e40af] transition-colors">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/tools/sip-return-calculator">
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="container px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="outline">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Thousands of{" "}
              <span className="gradient-text">Indian Investors</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              FinanceTaxPro is your reliable partner for all financial decisions. 
              Our expert-researched content helps you navigate the complex world 
              of insurance, taxes, and investments with confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#059669] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-[#1e40af] mx-auto mb-3" />
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm text-muted-foreground">Monthly Users</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-[#059669] mx-auto mb-3" />
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-8 w-8 text-[#7c3aed] mx-auto mb-3" />
              <p className="text-2xl font-bold">Expert</p>
              <p className="text-sm text-muted-foreground">Curated Content</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 pb-16 md:pb-20">
        <div className="hero-gradient rounded-2xl text-white text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Start your journey to financial freedom today. Explore our comprehensive 
            guides and use our calculators to make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-button text-white">
              <Link href="/term-insurance">
                Get Started with Insurance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/tax">
                Plan Your Taxes
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
