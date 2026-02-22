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
  Award,
  TrendingUp,
  Shield,
  IndianRupee,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Term Insurance Plans in India 2024 | Comparison & Review",
  description: "Compare the best term insurance plans in India from top insurers. Compare premiums, claim settlement ratios, key features, and find the right plan for your needs.",
  keywords: ["best term insurance", "term insurance comparison", "top term plans India", "HDFC term insurance", "ICICI term insurance", "term insurance review"],
};

const topPlans = [
  {
    insurer: "HDFC Life",
    plan: "Click 2 Protect Super",
    claimRatio: 99.35,
    premium: 470,
    features: ["Instant policy issuance", "Multiple payout options", "Critical illness rider"],
    rating: 4.8,
    color: "#1e40af",
  },
  {
    insurer: "ICICI Prudential",
    plan: "iProtect Smart",
    claimRatio: 98.58,
    premium: 485,
    features: ["Wellness benefits", "Terminal illness cover", "Accidental death benefit"],
    rating: 4.7,
    color: "#059669",
  },
  {
    insurer: "Max Life",
    plan: "Smart Secure Plus",
    claimRatio: 99.34,
    premium: 492,
    features: ["5% additional sum assured", "Premium break option", "Health check-ups"],
    rating: 4.8,
    color: "#7c3aed",
  },
  {
    insurer: "Tata AIA",
    plan: "Sampoorna Raksha Supreme",
    claimRatio: 99.13,
    premium: 478,
    features: ["Lumpsum + monthly income", "Waiver of premium", "Terminal illness benefit"],
    rating: 4.7,
    color: "#dc2626",
  },
  {
    insurer: "SBI Life",
    plan: "eShield Next",
    claimRatio: 97.88,
    premium: 465,
    features: ["Auto claim settlement", "Increasing cover option", "Special rates for women"],
    rating: 4.6,
    color: "#ea580c",
  },
  {
    insurer: "Bajaj Allianz",
    plan: "Smart Secure Goal",
    claimRatio: 99.02,
    premium: 499,
    features: ["Return of premium option", "Critical illness riders", "Flexi claims"],
    rating: 4.6,
    color: "#0891b2",
  },
];

const comparisonFactors = [
  {
    title: "Claim Settlement Ratio",
    description: "This is the percentage of claims settled by an insurer out of total claims received. A ratio above 95% indicates high reliability. Always prefer insurers with consistent high claim ratios over multiple years.",
    tip: "Look for trends over 3-5 years, not just one year",
  },
  {
    title: "Premium Amount",
    description: "Lower premium doesn't always mean better value. Compare what's included in the base plan. Some insurers include riders in base premium while others charge extra. Always compare for identical coverage.",
    tip: "Get quotes for the same coverage amount and term",
  },
  {
    title: "Policy Features",
    description: "Look for features like increasing sum assured, premium waiver on disability, terminal illness benefit, and flexible payout options. These features can significantly enhance your coverage.",
    tip: "Choose features based on your specific needs",
  },
  {
    title: "Rider Options",
    description: "Critical illness, accidental death, and waiver of premium riders add valuable protection. Check the illnesses covered, claim limits, and premium costs for each rider.",
    tip: "Critical illness rider is highly recommended",
  },
  {
    title: "Customer Service",
    description: "Check online reviews, IRDAI complaint ratios, and ease of claim process. Good customer service is crucial during claim settlement when your family needs support the most.",
    tip: "Test their helpline before buying",
  },
  {
    title: "Financial Stability",
    description: "Check the insurer's solvency ratio (should be above 1.5) and credit rating from agencies like ICRA, CRISIL. This indicates the insurer's ability to honor claims.",
    tip: "Solvency ratio above 1.8 is excellent",
  },
];

const faqs = [
  {
    question: "Which is the best term insurance company in India?",
    answer: "There's no single best company as it depends on your specific needs. However, HDFC Life, Max Life, and ICICI Prudential consistently rank high due to their high claim settlement ratios (above 98%), strong financial stability, and comprehensive features. Compare plans based on claim ratio, premium, and features relevant to you.",
  },
  {
    question: "Is online term insurance better than offline?",
    answer: "Online term insurance is typically 20-30% cheaper as there are no agent commissions. The policy terms are identical whether bought online or offline. Online plans also offer instant issuance for young, healthy individuals. The main difference is that offline purchases provide agent support during claims.",
  },
  {
    question: "What documents are needed to buy term insurance?",
    answer: "You'll need identity proof (PAN, Aadhaar), address proof, age proof, income proof (salary slips or ITR), and photographs. For coverage above ₹50 lakhs or if you have health conditions, medical tests may be required. The insurer arranges these tests at their cost.",
  },
  {
    question: "Can I switch my term insurance to another company?",
    answer: "Unlike health insurance, term insurance doesn't have portability. However, you can buy a new policy and let the old one lapse. Consider this only if the new premium is significantly lower or if you need higher coverage. Remember that premium increases with age, so switching may not always be beneficial.",
  },
  {
    question: "Should I buy riders with my term insurance?",
    answer: "Critical illness and accidental death riders are valuable additions. Critical illness rider provides a lumpsum if you're diagnosed with a covered illness like cancer or heart attack. Accidental death rider provides additional payout if death is due to accident. These riders are cheaper when bought with the base policy than separately.",
  },
  {
    question: "How accurate are online term insurance calculators?",
    answer: "Online calculators provide estimates based on standard parameters. The actual premium depends on your health assessment, family medical history, lifestyle habits, and occupation. After medical tests, the insurer may offer standard terms, load the premium, or in rare cases, decline coverage.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your ideal coverage amount", href: "/term-insurance/how-much-cover", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Claim Settlement Ratio", description: "Compare claim ratios of insurers", href: "/term-insurance/claim-settlement-ratio", icon: <Award className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your term insurance premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function BestPlansPage() {
  return (
    <div>
      <HeroSection
        badge="Plan Comparison"
        title="Best Term Insurance Plans"
        titleHighlight="in India 2024"
        description="Compare the top term insurance plans from leading insurers. Analyze premiums, claim settlement ratios, features, and find the perfect plan for your family's protection."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-term-insurance" }}
        secondaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Top Plans Table */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Top Term Insurance Plans Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium shown is for ₹1 crore coverage, 30-year-old non-smoker, 30-year policy term
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Insurer</TableHead>
                    <TableHead>Plan Name</TableHead>
                    <TableHead className="text-center">Claim Ratio</TableHead>
                    <TableHead className="text-center">Monthly Premium</TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead>Key Features</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPlans.map((plan, index) => (
                    <TableRow key={index} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{plan.insurer}</TableCell>
                      <TableCell>{plan.plan}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {plan.claimRatio}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center font-semibold">₹{plan.premium}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {plan.rating}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {plan.features.map((feature, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" asChild>
                          <Link href="/tools/compare-term-insurance">
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-4 text-sm text-muted-foreground text-center">
            * Premiums are indicative and may vary based on individual profile
          </div>
        </section>

        {/* Comparison Factors */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Compare Term Insurance Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{factor.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-[#1e40af]">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      {factor.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Plans */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Featured Plans for Different Needs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#1e40af]">
              <CardHeader className="bg-[#1e40af] text-white rounded-t-lg">
                <Badge className="bg-white text-[#1e40af] w-fit mb-2">Best Overall</Badge>
                <CardTitle>HDFC Click 2 Protect Super</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">99.35% claim settlement ratio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant online issuance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Multiple payout options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Comprehensive rider options</span>
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link href="/tools/compare-term-insurance">
                    Compare Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#059669]">
              <CardHeader className="bg-[#059669] text-white rounded-t-lg">
                <Badge className="bg-white text-[#059669] w-fit mb-2">Best Value</Badge>
                <CardTitle>SBI Life eShield Next</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Competitive premium rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Auto claim settlement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Special rates for women</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Increasing cover option</span>
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link href="/tools/compare-term-insurance">
                    Compare Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7c3aed]">
              <CardHeader className="bg-[#7c3aed] text-white rounded-t-lg">
                <Badge className="bg-white text-[#7c3aed] w-fit mb-2">Best Features</Badge>
                <CardTitle>Max Life Smart Secure Plus</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">5% additional sum assured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Premium break option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Free health check-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Highest claim ratio (99.34%)</span>
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link href="/tools/compare-term-insurance">
                    Compare Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
          title="Compare Plans Side by Side"
          description="Use our comparison tool to analyze multiple plans, check premiums, and find the best term insurance for your needs."
          primaryCta={{ label: "Compare Now", href: "/tools/compare-term-insurance" }}
          secondaryCta={{ label: "Get Quote", href: "/term-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
