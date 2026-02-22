import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Heart,
  AlertTriangle,
  Activity,
  Users,
  TrendingUp,
  IndianRupee,
  CheckCircle,
  Zap,
  Car,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Term Insurance Riders Explained | Critical Illness, Accidental Death & More",
  description: "Complete guide to term insurance riders in India. Understand critical illness rider, accidental death benefit, waiver of premium, and other add-ons to enhance your coverage.",
  keywords: ["term insurance riders", "critical illness rider", "accidental death benefit", "waiver of premium", "term insurance add-ons"],
};

const riders = [
  {
    icon: Heart,
    name: "Critical Illness Rider",
    description: "Pays a lumpsum amount if you're diagnosed with any of the specified critical illnesses like cancer, heart attack, stroke, kidney failure, etc. This amount is paid regardless of your medical expenses and is in addition to the death benefit.",
    benefit: "Lumpsum payout on diagnosis",
    payout: "₹10L - ₹1 Cr (based on plan)",
    illnesses: ["Cancer", "Heart Attack", "Stroke", "Kidney Failure", "Major Organ Transplant", "Paralysis"],
    recommended: true,
    premium: "Additional 15-25% of base premium",
    color: "#dc2626",
  },
  {
    icon: AlertTriangle,
    name: "Accidental Death Benefit Rider",
    description: "Provides additional payout if death occurs due to an accident. This is over and above your base sum assured. Some plans also cover permanent disability due to accident.",
    benefit: "Extra payout for accidental death",
    payout: "Additional sum assured (up to ₹1 Cr)",
    illnesses: ["Accidental Death", "Permanent Total Disability", "Permanent Partial Disability"],
    recommended: true,
    premium: "Additional 5-10% of base premium",
    color: "#ea580c",
  },
  {
    icon: Activity,
    name: "Waiver of Premium Rider",
    description: "Future premiums are waived off if you become permanently disabled or are diagnosed with a critical illness. Your policy continues with full benefits without any premium payment.",
    benefit: "No future premiums on disability/illness",
    payout: "Premium waiver for remaining term",
    illnesses: ["Permanent Disability", "Critical Illness"],
    recommended: true,
    premium: "Additional 5-8% of base premium",
    color: "#7c3aed",
  },
  {
    icon: Users,
    name: "Family Income Benefit Rider",
    description: "In case of death, this rider provides monthly income to your family in addition to the lumpsum death benefit. The income is typically 0.5-1% of sum assured per month for 10-15 years.",
    benefit: "Monthly income for family",
    payout: "0.5-1% of sum assured monthly",
    illnesses: ["Death during policy term"],
    recommended: false,
    premium: "Additional 10-15% of base premium",
    color: "#059669",
  },
  {
    icon: Zap,
    name: "Accelerated Death Benefit Rider",
    description: "If diagnosed with a terminal illness with limited life expectancy (usually less than 12 months), you receive a portion of the sum assured while you're still alive. This helps with medical expenses and final arrangements.",
    benefit: "Early payout on terminal illness",
    payout: "Up to 100% of sum assured",
    illnesses: ["Terminal Illness"],
    recommended: false,
    premium: "Usually included in base plan",
    color: "#0891b2",
  },
  {
    icon: Car,
    name: "Accidental Disability Rider",
    description: "Provides financial support if you become disabled due to an accident. Coverage includes permanent total disability, permanent partial disability, and temporary total disability.",
    benefit: "Payout for accident disability",
    payout: "Based on disability extent",
    illnesses: ["Permanent Total Disability", "Permanent Partial Disability"],
    recommended: false,
    premium: "Additional 3-7% of base premium",
    color: "#1e40af",
  },
];

const riderComparison = [
  { factor: "Critical Illness", basic: false, standard: "Limited", comprehensive: "Comprehensive" },
  { factor: "Accidental Death", basic: "Optional", standard: "Included", comprehensive: "High Coverage" },
  { factor: "Waiver of Premium", basic: false, standard: "Optional", comprehensive: "Included" },
  { factor: "Disability Cover", basic: false, standard: "Limited", comprehensive: "Full Cover" },
  { factor: "Terminal Illness", basic: "Basic", standard: "Standard", comprehensive: "Accelerated" },
  { factor: "Additional Premium", basic: "Minimal", standard: "Moderate", comprehensive: "Higher" },
];

const faqs = [
  {
    question: "Are term insurance riders worth it?",
    answer: "Yes, select riders significantly enhance your coverage at relatively low additional cost. Critical illness and accidental death benefit riders are highly recommended as they cover major risks that can financially devastate families. The waiver of premium rider ensures your policy continues even if you can't pay due to disability.",
  },
  {
    question: "Can I add riders to my existing term insurance?",
    answer: "Most insurers allow adding riders only at the time of policy purchase or during renewal. Some insurers may allow adding riders mid-term subject to fresh underwriting. Check with your insurer about the possibility and any waiting periods that may apply.",
  },
  {
    question: "Is critical illness rider better than standalone critical illness insurance?",
    answer: "Adding a critical illness rider to term insurance is usually cheaper than buying standalone critical illness cover. However, standalone policies offer wider coverage with more illnesses covered and higher sum assured options. If you have a family history of critical illness, consider a standalone policy for comprehensive coverage.",
  },
  {
    question: "What happens to riders if I survive the policy term?",
    answer: "Term insurance riders, like the base policy, offer no maturity benefit. If you survive the policy term without making any claims, all rider benefits expire. This is similar to the base term insurance - you pay for protection, not investment returns.",
  },
  {
    question: "Can I claim on multiple riders for the same event?",
    answer: "It depends on the rider terms. If you have both critical illness and waiver of premium riders, being diagnosed with a critical illness can trigger both - you get the lumpsum from CI rider AND your future premiums are waived. However, you generally can't claim twice for the same type of benefit.",
  },
  {
    question: "How much critical illness cover should I have?",
    answer: "Ideally, your critical illness cover should be at least ₹15-20 lakhs, though experts recommend ₹25-50 lakhs for comprehensive coverage. This should cover treatment costs, lost income during recovery, and lifestyle modifications. Treatment for cancer or heart conditions can easily cost ₹10-20 lakhs.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "Best Plans", description: "Compare top term insurance plans", href: "/term-insurance/best-plans", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium with riders", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Common Mistakes", description: "Avoid these insurance mistakes", href: "/term-insurance/mistakes", icon: <AlertTriangle className="h-5 w-5" /> },
];

export default function RidersPage() {
  return (
    <div>
      <HeroSection
        badge="Riders Guide"
        title="Term Insurance Riders"
        titleHighlight="Explained Simply"
        description="Enhance your term insurance coverage with riders. Learn about critical illness, accidental death, waiver of premium, and other add-ons that provide comprehensive protection."
        primaryCta={{ label: "Calculate with Riders", href: "/term-insurance/premium-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">What are Term Insurance Riders?</h3>
              <p className="text-muted-foreground mb-4">
                Riders are optional add-ons to your base term insurance policy that provide additional benefits 
                at an extra cost. They work like toppings on a pizza - the base policy is your protection, 
                and riders add extra layers of security for specific situations. Most riders cost only 
                5-25% extra premium but can significantly enhance your coverage.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#1e40af]">6+</p>
                  <p className="text-sm text-muted-foreground">Rider Types</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#059669]">5-25%</p>
                  <p className="text-sm text-muted-foreground">Extra Premium</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-2xl font-bold text-[#7c3aed]">High</p>
                  <p className="text-sm text-muted-foreground">Value Addition</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rider Cards */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of Term Insurance Riders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riders.map((rider, index) => {
              const Icon = rider.icon;
              return (
                <Card key={index} className={`h-full ${rider.recommended ? 'border-2' : ''}`} style={{ borderColor: rider.recommended ? rider.color : undefined }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${rider.color}15` }}>
                        <Icon className="h-6 w-6" style={{ color: rider.color }} />
                      </div>
                      {rider.recommended && (
                        <Badge style={{ backgroundColor: rider.color }} className="text-white">
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{rider.name}</CardTitle>
                    <CardDescription>{rider.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Benefit</p>
                        <p className="font-medium">{rider.benefit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Premium Impact</p>
                        <p className="font-medium" style={{ color: rider.color }}>{rider.premium}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Covers:</p>
                      <div className="flex flex-wrap gap-1">
                        {rider.illnesses.map((illness, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {illness}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Which Riders to Choose */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Which Riders Should You Choose?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-slate-200">
              <CardHeader className="bg-slate-50">
                <CardTitle className="text-lg">Budget Option</CardTitle>
                <p className="text-sm text-muted-foreground">Minimal additional cost</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accidental Death Benefit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Terminal Illness (usually included)</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Good for those starting their financial journey with limited budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1e40af]">
              <CardHeader className="bg-[#1e40af] text-white">
                <Badge className="bg-white text-[#1e40af] w-fit mb-2">Recommended</Badge>
                <CardTitle className="text-lg">Balanced Option</CardTitle>
                <p className="text-sm text-blue-200">Best value for most people</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Critical Illness Rider (₹15-25L)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accidental Death Benefit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Waiver of Premium</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Comprehensive coverage at reasonable cost. Suitable for most families.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7c3aed]">
              <CardHeader className="bg-[#7c3aed] text-white">
                <CardTitle className="text-lg">Complete Protection</CardTitle>
                <p className="text-sm text-purple-200">Maximum coverage</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Critical Illness (₹25-50L)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accidental Death (High Cover)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Waiver of Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Accidental Disability</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  For those who want complete protection against all major risks.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Term Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Enhance Your Coverage Today"
          description="Add the right riders to your term insurance for comprehensive protection. Calculate your premium with various rider combinations."
          primaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
