import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Heart,
  Shield,
  IndianRupee,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Building,
  Award,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Health Insurance Plans in India 2024 | Compare & Review",
  description: "Compare the best health insurance plans in India from top insurers like Star Health, HDFC Ergo, ICICI Lombard. Compare coverage, premiums, features, and claim ratios.",
  keywords: ["best health insurance India", "health insurance comparison", "top mediclaim policies", "Star Health", "HDFC Ergo health insurance"],
};

const topPlans = [
  {
    insurer: "Star Health",
    plan: "Family Health Optima",
    sumInsured: "₹10-25 L",
    premium: "₹8,000-15,000",
    claimRatio: 82.4,
    network: 14000,
    features: ["No claim bonus up to 50%", "No pre-medical check-up till 50 years", "Automatic restoration", "Cover for day care procedures"],
    rating: 4.7,
    color: "#dc2626",
  },
  {
    insurer: "HDFC Ergo",
    plan: "my:health Suraksha",
    sumInsured: "₹5-75 L",
    premium: "₹7,000-18,000",
    claimRatio: 86.5,
    network: 12000,
    features: ["Daily cash benefit", "No room rent limit", "No claim bonus", "Vaccination cover"],
    rating: 4.6,
    color: "#1e40af",
  },
  {
    insurer: "ICICI Lombard",
    plan: "Health AdvantEDGE",
    sumInsured: "₹3-1 Cr",
    premium: "₹6,500-20,000",
    claimRatio: 84.2,
    network: 11000,
    features: ["Global coverage", "Wellness rewards", "OPD cover", "No sub-limits"],
    rating: 4.6,
    color: "#059669",
  },
  {
    insurer: "Care Health",
    plan: "Care Supreme",
    sumInsured: "₹5-1 Cr",
    premium: "₹7,500-16,000",
    claimRatio: 85.3,
    network: 15000,
    features: ["Unlimited automatic restoration", "No room rent capping", "Annual health checkup", "No claim bonus 100%"],
    rating: 4.5,
    color: "#7c3aed",
  },
  {
    insurer: "Niva Bupa",
    plan: "Health Companion",
    sumInsured: "₹5-1 Cr",
    premium: "₹8,000-17,000",
    claimRatio: 83.1,
    network: 10000,
    features: ["OPD expenses cover", "International coverage", "Wellness program", "Unlimited recharge"],
    rating: 4.5,
    color: "#ea580c",
  },
];

const comparisonFactors = [
  {
    title: "Sum Insured Options",
    description: "Check if the insurer offers the coverage amount you need. Higher sum insured options provide flexibility as your needs grow.",
  },
  {
    title: "Network Hospitals",
    description: "More network hospitals mean better cashless accessibility. Check for hospitals near you and preferred healthcare providers.",
  },
  {
    title: "Claim Settlement Ratio",
    description: "Look for claim settlement ratio above 80% and quick turnaround time. Higher ratio indicates reliable claim processing.",
  },
  {
    title: "Waiting Period",
    description: "Shorter waiting periods are better. Initial waiting of 30 days, pre-existing disease cover in 2-3 years is standard.",
  },
  {
    title: "Sub-limits & Co-pay",
    description: "Avoid policies with room rent limits or co-payment clauses. These increase out-of-pocket expenses during claims.",
  },
  {
    title: "No Claim Bonus",
    description: "Check NCB structure - some offer 50-100% bonus for claim-free years. This increases effective coverage without extra premium.",
  },
];

const faqs = [
  {
    question: "Which is the best health insurance company in India?",
    answer: "There's no single best company as it depends on your needs. Star Health is known for wide network and comprehensive coverage. HDFC Ergo offers good digital experience. ICICI Lombard has global coverage options. Consider claim settlement ratio, network hospitals in your area, premium, and specific features when choosing.",
  },
  {
    question: "Is cashless treatment better than reimbursement?",
    answer: "Cashless treatment is more convenient as you don't have to pay upfront and claim later. However, cashless is only available at network hospitals. Reimbursement allows treatment at any hospital but requires you to pay first. Ideally, choose an insurer with wide network hospitals near you for cashless accessibility.",
  },
  {
    question: "What is incurred claim ratio in health insurance?",
    answer: "Incurred Claim Ratio (ICR) is the ratio of total claims paid to total premium collected. ICR between 60-90% is considered healthy - it indicates the insurer settles claims fairly without being unsustainable. Very high ICR (>100%) may indicate lax underwriting, while very low ICR (<50%) may indicate claim rejection tendency.",
  },
  {
    question: "Can I port my health insurance to another company?",
    answer: "Yes, IRDAI allows health insurance portability. You can switch insurers while retaining waiting period benefits. Apply for portability at least 45 days before renewal. The new insurer must accept the port-in request. All continuity benefits including waiting periods are transferred to the new policy.",
  },
  {
    question: "Should I buy individual or family floater health insurance?",
    answer: "For young families with low health risks, family floater is more economical and provides flexibility in coverage usage. For families with elderly members or those with health conditions, individual policies may be better as senior claims won't exhaust family coverage. Many people combine both approaches.",
  },
  {
    question: "What is restore benefit in health insurance?",
    answer: "Restore benefit automatically reinstates your sum insured if it's exhausted during the policy year. For example, if you have ₹10 lakh coverage and use it all, restore benefit adds another ₹10 lakh for future claims in the same year. Some policies offer unlimited restoration, others restore only once. This is valuable for families.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your coverage need", href: "/health-insurance/how-much-cover", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Family Floater vs Individual", description: "Choose the right plan type", href: "/health-insurance/individual-vs-family-floater", icon: <Users className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function BestPlansPage() {
  return (
    <div>
      <HeroSection
        badge="Plan Comparison"
        title="Best Health Insurance Plans"
        titleHighlight="in India 2024"
        description="Compare the top health insurance plans from leading insurers. Analyze coverage, premiums, claim ratios, and find the perfect plan for your family's health protection."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Top Plans Table */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Top Health Insurance Plans Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare leading plans based on coverage, features, and value for money
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Insurer</TableHead>
                    <TableHead>Plan Name</TableHead>
                    <TableHead className="text-center">Sum Insured</TableHead>
                    <TableHead className="text-center">Network</TableHead>
                    <TableHead className="text-center">Claim Ratio</TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPlans.map((plan, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{plan.insurer}</TableCell>
                      <TableCell>{plan.plan}</TableCell>
                      <TableCell className="text-center">{plan.sumInsured}</TableCell>
                      <TableCell className="text-center">{plan.network.toLocaleString()}+</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {plan.claimRatio}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {plan.rating}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" asChild>
                          <Link href="/tools/compare-health-insurance">View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        {/* Plan Details */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Plans Detailed Review
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPlans.slice(0, 3).map((plan, index) => (
              <Card key={index} className="h-full border-2" style={{ borderColor: plan.color }}>
                <CardHeader style={{ backgroundColor: `${plan.color}10` }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{plan.insurer}</CardTitle>
                      <p className="text-sm text-muted-foreground">{plan.plan}</p>
                    </div>
                    <Badge style={{ backgroundColor: plan.color }} className="text-white">
                      <Star className="h-3 w-3 mr-1 fill-white" /> {plan.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Sum Insured</p>
                        <p className="font-semibold">{plan.sumInsured}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Premium</p>
                        <p className="font-semibold">{plan.premium}/year</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" style={{ backgroundColor: plan.color }} asChild>
                      <Link href="/tools/compare-health-insurance">
                        Compare Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Factors */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Compare Health Insurance Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Compare Plans Side by Side"
          description="Use our comparison tool to analyze multiple plans, check premiums, and find the best health insurance for your family."
          primaryCta={{ label: "Compare Now", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "Get Quote", href: "/health-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
