import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  IndianRupee,
  Users,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Activity,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Health Insurance Cover Do You Need | Coverage Calculator",
  description: "Calculate the right health insurance coverage amount based on your city, family size, medical history, and lifestyle. Don't be under-insured when you need it most.",
  keywords: ["health insurance coverage", "how much health insurance", "medical insurance coverage calculator", "ideal health cover India"],
};

const coverageFactors = [
  {
    icon: MapPin,
    title: "Your City of Residence",
    description: "Healthcare costs vary significantly by location. A heart surgery costs ₹3-4 lakhs in a tier-2 city but ₹5-7 lakhs in Mumbai or Delhi. Metro cities have 40-60% higher medical costs. If you live in a metro, budget for higher coverage.",
    recommendation: "Metro: ₹10-15L minimum | Tier-2: ₹7-10L | Tier-3: ₹5-7L",
  },
  {
    icon: Users,
    title: "Family Size & Ages",
    description: "More family members mean more coverage needs. Elderly members have higher health risks and costs. A family of 4 with elderly parents needs significantly more coverage than a young couple. Factor in ages when deciding sum insured.",
    recommendation: "Add ₹3-5L per adult member, ₹5-7L for seniors",
  },
  {
    icon: Activity,
    title: "Medical History",
    description: "Family history of chronic diseases like diabetes, heart conditions, or cancer increases your risk. Pre-existing conditions may require higher coverage for potential complications. Consider critical illness add-on if family history exists.",
    recommendation: "Add 30-50% buffer for high-risk medical history",
  },
  {
    icon: TrendingUp,
    title: "Healthcare Inflation",
    description: "Medical inflation in India is 10-15% annually - higher than general inflation. What costs ₹5 lakhs today will cost ₹12-15 lakhs in 10 years. Your coverage needs to account for future cost escalation, not just current prices.",
    recommendation: "Build 50-70% inflation buffer over current costs",
  },
];

const cityWiseRecommendations = [
  { city: "Delhi NCR", baseCoverage: "₹10-15 Lakh", premium: "₹8,000-15,000/year", note: "Highest medical costs in India" },
  { city: "Mumbai", baseCoverage: "₹10-15 Lakh", premium: "₹8,000-15,000/year", note: "High corporate hospital rates" },
  { city: "Bangalore", baseCoverage: "₹8-12 Lakh", premium: "₹7,000-12,000/year", note: "Growing healthcare costs" },
  { city: "Chennai", baseCoverage: "₹8-12 Lakh", premium: "₹6,000-12,000/year", note: "Good hospital network" },
  { city: "Pune/Hyderabad", baseCoverage: "₹8-10 Lakh", premium: "₹6,000-10,000/year", note: "Moderate costs" },
  { city: "Tier-2 Cities", baseCoverage: "₹5-8 Lakh", premium: "₹4,000-8,000/year", note: "Lower facility costs" },
];

const commonTreatments = [
  { treatment: "Heart Bypass Surgery", tier1: "₹4-6 L", tier2: "₹3-4 L", tier3: "₹2-3 L" },
  { treatment: "Knee Replacement", tier1: "₹3-5 L", tier2: "₹2-3 L", tier3: "₹1.5-2 L" },
  { treatment: "Cancer Treatment", tier1: "₹10-20 L", tier2: "₹8-15 L", tier3: "₹5-10 L" },
  { treatment: "Kidney Transplant", tier1: "₹6-10 L", tier2: "₹5-8 L", tier3: "₹4-6 L" },
  { treatment: "ICU (per day)", tier1: "₹25,000-50,000", tier2: "₹15,000-30,000", tier3: "₹10,000-20,000" },
  { treatment: "Normal Delivery", tier1: "₹50,000-1 L", tier2: "₹30,000-60,000", tier3: "₹20,000-40,000" },
];

const faqs = [
  {
    question: "How much health insurance do I really need?",
    answer: "For a single person in a metro city, minimum ₹10 lakh coverage is recommended. For families, consider ₹15-25 lakhs family floater or ₹5-10 lakhs per person. Factor in your city's medical costs, family medical history, and future inflation. It's better to have excess coverage than fall short during a medical emergency.",
  },
  {
    question: "Is ₹5 lakh health insurance enough?",
    answer: "₹5 lakh may suffice for basic treatments in tier-2/3 cities, but is inadequate for metros or serious illnesses. A single heart surgery in Mumbai can cost ₹5-7 lakhs, exhausting your entire coverage. Cancer treatment can run into ₹10-20 lakhs. Consider at least ₹10-15 lakhs for comprehensive protection.",
  },
  {
    question: "Should I get separate policies for parents?",
    answer: "Yes, it's advisable to have separate policies for parents, especially if they're above 50 or have health conditions. Family floaters with elderly members face two issues: higher premium for entire family and coverage exhaustion if seniors have claims. Individual policies for parents provide dedicated coverage at potentially lower combined premium.",
  },
  {
    question: "How does no-claim bonus affect coverage?",
    answer: "Most policies offer no-claim bonus of 5-50% of sum insured for each claim-free year, up to a maximum of 50-100%. This means a ₹10 lakh policy can become ₹15-20 lakhs over time without additional premium. Consider this when buying - you can start with lower coverage that grows over time.",
  },
  {
    question: "Can I increase my health insurance coverage later?",
    answer: "Yes, you can increase coverage at renewal time. Some policies allow increasing sum insured without fresh medical underwriting up to certain limits. Alternatively, you can buy a super top-up policy for additional coverage at lower cost. The best time to increase is before developing health issues.",
  },
  {
    question: "Should I consider top-up plans?",
    answer: "Top-up and super top-up plans provide additional coverage at low cost (₹5-10 lakhs extra for ₹2,000-4,000/year). They kick in after your base policy sum insured is exhausted. Super top-up is better as it considers cumulative claims in a year. Ideal for those wanting high coverage on budget.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Best Plans", description: "Compare top health insurance policies", href: "/health-insurance/best-plans", icon: <Shield className="h-5 w-5" /> },
  { title: "Family Floater vs Individual", description: "Choose the right plan type", href: "/health-insurance/individual-vs-family-floater", icon: <Users className="h-5 w-5" /> },
  { title: "Coverage Calculator", description: "Calculate your ideal coverage", href: "/tools/health-coverage-estimator", icon: <Calculator className="h-5 w-5" /> },
];

export default function HowMuchCoverPage() {
  return (
    <div>
      <HeroSection
        badge="Coverage Guide"
        title="How Much Health Insurance"
        titleHighlight="Cover Do You Need?"
        description="Medical costs can spiral into lakhs. Calculate the right coverage amount based on your city, family size, and health risks. Don't be under-insured when you need it most."
        primaryCta={{ label: "Calculate Coverage", href: "/tools/health-coverage-estimator" }}
        secondaryCta={{ label: "Compare Plans", href: "/health-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Quick Estimate */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Calculator className="h-6 w-6 text-[#059669]" />
                Quick Coverage Estimate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-semibold text-center mb-4">
                  Recommended Coverage = Base Need × Family Factor × Risk Factor
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Metro City</p>
                    <p className="text-2xl font-bold text-[#1e40af]">₹10-15L</p>
                    <p className="text-xs text-muted-foreground">Base Coverage</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Family of 4</p>
                    <p className="text-2xl font-bold text-[#059669]">× 1.5</p>
                    <p className="text-xs text-muted-foreground">Family Factor</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">With Seniors</p>
                    <p className="text-2xl font-bold text-[#7c3aed]">₹20-25L</p>
                    <p className="text-xs text-muted-foreground">Total Coverage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Factors */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Factors That Determine Your Coverage Need
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-[#059669]" />
                    </div>
                    <CardTitle>{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{factor.description}</p>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {factor.recommendation}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* City-wise Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            City-wise Coverage Recommendations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityWiseRecommendations.map((city, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{city.city}</h3>
                    <Badge variant="outline">{city.note}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Recommended Cover</span>
                      <span className="font-semibold text-[#059669]">{city.baseCoverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Est. Annual Premium</span>
                      <span className="font-medium">{city.premium}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Treatment Costs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Common Treatment Costs in India
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Treatment</th>
                      <th className="text-right py-3">Metro Cities</th>
                      <th className="text-right py-3">Tier-2 Cities</th>
                      <th className="text-right py-3">Tier-3 Cities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonTreatments.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.treatment}</td>
                        <td className="text-right text-red-600">{item.tier1}</td>
                        <td className="text-right text-amber-600">{item.tier2}</td>
                        <td className="text-right text-green-600">{item.tier3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Costs are approximate and vary by hospital, treatment complexity, and room category
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Warning: Under-Insurance Risk</h4>
                <p className="text-muted-foreground mb-4">
                  Many Indians are under-insured with just ₹2-5 lakh coverage. A single serious illness 
                  can exhaust this and more. When coverage falls short, you dip into savings, take loans, 
                  or compromise on treatment quality. Don't let inadequate coverage put your family's 
                  financial future at risk.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="bg-white text-red-700">
                    68% Indians under-insured
                  </Badge>
                  <Badge variant="outline" className="bg-white text-red-700">
                    Medical inflation: 15%/year
                  </Badge>
                  <Badge variant="outline" className="bg-white text-red-700">
                    Cancer costs: ₹10-20L
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Your Ideal Coverage"
          description="Use our interactive calculator to get personalized coverage recommendation based on your specific situation."
          primaryCta={{ label: "Calculate Now", href: "/tools/health-coverage-estimator" }}
          secondaryCta={{ label: "Compare Plans", href: "/health-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
