import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  TrendingUp,
  IndianRupee,
  CheckCircle,
  XCircle,
  Lightbulb,
  Scale,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Term Insurance vs Traditional Life Insurance | Complete Comparison",
  description: "Detailed comparison between term insurance and traditional life insurance plans (endowment, whole life, ULIP). Understand the pros, cons, and which is better for you.",
  keywords: ["term vs traditional life insurance", "term insurance vs endowment", "term vs whole life", "term vs ULIP", "best life insurance India"],
};

const comparisonData = [
  { factor: "Premium Cost", term: "₹490-600/month for ₹1 Cr", traditional: "₹3,000-5,000/month for ₹1 Cr" },
  { factor: "Coverage Amount", term: "Very High (₹1-5 Cr)", traditional: "Low to Medium (₹10-50 L)" },
  { factor: "Investment Component", term: "None", traditional: "Yes (forced savings)" },
  { factor: "Maturity Benefit", term: "No", traditional: "Yes (guaranteed)" },
  { factor: "Death Benefit", term: "Sum Assured (High)", traditional: "Sum Assured + Bonus (Low)" },
  { factor: "Returns on Investment", term: "N/A", traditional: "4-6% (low compared to other options)" },
  { factor: "Flexibility", term: "High - Choose any term", traditional: "Low - Fixed structure" },
  { factor: "Tax Benefits", term: "80C deduction on premium", traditional: "80C deduction + 10(10D)" },
  { factor: "Transparency", term: "Very High", traditional: "Low - Complex structure" },
  { factor: "Best For", term: "Pure protection seekers", traditional: "Forced savings seekers" },
];

const prosConsTerm = {
  pros: [
    "Highest coverage at lowest premium - get ₹1 crore cover from just ₹490/month",
    "Simple and transparent - easy to understand and compare",
    "Flexibility to choose policy term and payout options",
    "Tax-free death benefit under Section 10(10D)",
    "Ideal for young families with financial dependents",
    "Can invest difference in premium for better returns",
  ],
  cons: [
    "No maturity benefit - money paid is gone if you survive",
    "No cash value or loan facility",
    "Premium increases significantly with age",
    "Need to separately plan investments",
  ],
};

const prosConsTraditional = {
  pros: [
    "Guaranteed maturity benefit - you get something back",
    "Forced savings for undisciplined investors",
    "Bonus additions increase final payout",
    "Loan facility available against policy",
    "Combined insurance and investment in one product",
  ],
  cons: [
    "Very low coverage - can't adequately protect family",
    "Poor returns (4-6%) compared to PPF, FD, mutual funds",
    "High premiums strain monthly budget",
    "Complex structure difficult to understand",
    "Lock-in for 15-30 years with high surrender charges",
  ],
};

const exampleScenario = {
  profile: "30-year-old male, non-smoker",
  premium: "₹5,000/month for 30 years",
  term: {
    coverage: "₹1 Crore",
    totalPremium: "₹18 lakhs (30 years)",
    deathBenefit: "₹1 Crore (tax-free)",
    maturityBenefit: "₹0",
    investment: "If you invest ₹4,500/month in equity MF (assuming 12% returns)",
    investmentValue: "₹1.58 Crore after 30 years",
    totalBenefit: "₹1 Cr insurance + ₹1.58 Cr investments",
  },
  traditional: {
    coverage: "₹20 Lakhs",
    totalPremium: "₹18 lakhs (30 years)",
    deathBenefit: "₹20-25 Lakhs (with bonus)",
    maturityBenefit: "₹25-30 Lakhs (with bonus)",
    investment: "Built-in (forced savings)",
    investmentValue: "Approx ₹25-30 Lakhs",
    totalBenefit: "₹20L insurance + ₹25-30L savings",
  },
};

const faqs = [
  {
    question: "Is term insurance better than traditional life insurance?",
    answer: "For pure protection needs, term insurance is significantly better. It provides much higher coverage at a fraction of the cost. However, if you're an undisciplined saver who needs forced savings, traditional plans might work. The 'Buy Term and Invest the Difference' strategy typically yields better financial outcomes for most people.",
  },
  {
    question: "Why are traditional plans so expensive?",
    answer: "Traditional plans bundle insurance and investment, with high charges for fund management, policy administration, and agent commissions (15-35% of first year premium). The insurance component is also priced higher than pure term. These charges eat into your returns, resulting in 4-6% overall returns despite your money being locked for decades.",
  },
  {
    question: "What happens to my traditional policy if I stop paying premium?",
    answer: "If you stop paying premium after 3 years, the policy acquires paid-up value and continues with reduced sum assured. You can also surrender the policy after 3 years but surrender value is only 30-50% of premiums paid. Before 3 years, you lose all money paid. This is why traditional plans have high exit costs.",
  },
  {
    question: "Can I have both term insurance and traditional policy?",
    answer: "Yes, you can have multiple life insurance policies. Many people have a traditional policy (often bought early in career or as tax-saving) plus additional term insurance for adequate coverage. When buying new coverage, declare all existing policies to the insurer.",
  },
  {
    question: "Is ULIP better than term insurance?",
    answer: "ULIPs have improved after 2018 regulations capping charges, but term insurance + mutual fund combination still typically works better for most people. ULIPs charge mortality charges internally which increases with age, reducing returns. They also have lock-in and limited fund options. For pure protection, term insurance remains superior.",
  },
  {
    question: "What is the 'Buy Term and Invest the Difference' strategy?",
    answer: "This strategy involves buying a term insurance plan for protection (lower premium) and investing the premium difference in mutual funds, PPF, or other instruments. Example: Instead of a ₹5,000/month traditional plan with ₹20L cover, buy ₹1 Cr term for ₹500/month and invest ₹4,500 in equity MF. This typically yields far better returns and higher protection.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "Best Term Plans", description: "Compare top term insurance plans", href: "/term-insurance/best-plans", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate ideal coverage", href: "/term-insurance/how-much-cover", icon: <Target className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function VsTraditionalPage() {
  return (
    <div>
      <HeroSection
        badge="Comparison Guide"
        title="Term Insurance vs"
        titleHighlight="Traditional Life Insurance"
        description="Confused between term insurance and traditional plans? Understand the key differences, pros and cons, and which option is better for your financial goals."
        primaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        secondaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Quick Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Quick Comparison
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factor</TableHead>
                      <TableHead className="text-center bg-blue-50">Term Insurance</TableHead>
                      <TableHead className="text-center bg-purple-50">Traditional Plans</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.factor}</TableCell>
                        <TableCell className="text-center bg-blue-50/50">{row.term}</TableCell>
                        <TableCell className="text-center bg-purple-50/50">{row.traditional}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Pros & Cons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Term Insurance */}
            <Card className="border-2 border-[#1e40af]">
              <CardHeader className="bg-[#1e40af] text-white">
                <CardTitle>Term Insurance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <Badge className="bg-green-100 text-green-700 mb-3">Advantages</Badge>
                  <ul className="space-y-2">
                    {prosConsTerm.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-700 mb-3">Disadvantages</Badge>
                  <ul className="space-y-2">
                    {prosConsTerm.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Traditional Plans */}
            <Card className="border-2 border-[#7c3aed]">
              <CardHeader className="bg-[#7c3aed] text-white">
                <CardTitle>Traditional Life Insurance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <Badge className="bg-green-100 text-green-700 mb-3">Advantages</Badge>
                  <ul className="space-y-2">
                    {prosConsTraditional.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-700 mb-3">Disadvantages</Badge>
                  <ul className="space-y-2">
                    {prosConsTraditional.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Real-Life Comparison
          </h2>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#1e40af]" />
                Scenario: {exampleScenario.profile}
              </CardTitle>
              <p className="text-muted-foreground">Monthly Investment: {exampleScenario.premium}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Term Option */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#1e40af] mb-4">Buy Term + Invest</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Term Insurance Cover</span>
                      <span className="font-semibold">{exampleScenario.term.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Term Premium</span>
                      <span>₹500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investment in MF</span>
                      <span>₹4,500/month</span>
                    </div>
                    <hr className="border-blue-200" />
                    <div className="flex justify-between">
                      <span>Death Benefit</span>
                      <span className="font-semibold text-green-700">{exampleScenario.term.deathBenefit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maturity Value (30 yrs)</span>
                      <span className="font-semibold text-green-700">{exampleScenario.term.investmentValue}</span>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs text-muted-foreground">{exampleScenario.term.investment}</p>
                    </div>
                  </div>
                </div>

                {/* Traditional Option */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#7c3aed] mb-4">Traditional Plan</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Coverage</span>
                      <span className="font-semibold">{exampleScenario.traditional.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium</span>
                      <span>₹5,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investment</span>
                      <span>Built-in</span>
                    </div>
                    <hr className="border-purple-200" />
                    <div className="flex justify-between">
                      <span>Death Benefit</span>
                      <span className="font-semibold">{exampleScenario.traditional.deathBenefit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maturity Value (30 yrs)</span>
                      <span className="font-semibold">{exampleScenario.traditional.maturityBenefit}</span>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs text-muted-foreground">Returns: 4-6% (locked for 30 years)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                  <p className="font-semibold text-green-800">The Verdict</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  With 'Buy Term + Invest', you get ₹1 Crore protection (5x more) and potentially ₹1.58 Crore 
                  maturity value (5x more). Even with conservative 10% MF returns, you'd have ₹1.02 Crore. 
                  Term + Investment wins on both protection and wealth creation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* When to Choose What */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            When to Choose What?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-[#1e40af]">
              <CardHeader className="bg-[#1e40af] text-white">
                <CardTitle>Choose Term Insurance If:</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You want maximum protection for your family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You have loans and financial dependents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You can invest separately in MF, PPF, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You want transparency and flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You're looking for cost-effective insurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7c3aed]">
              <CardHeader className="bg-[#7c3aed] text-white">
                <CardTitle>Consider Traditional Plans If:</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You need forced savings discipline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You want guaranteed maturity returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You don't want to manage investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You need loan against policy facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">You have low risk tolerance</span>
                  </li>
                </ul>
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
          title="Make the Right Choice for Your Family"
          description="Get maximum protection at minimum cost with term insurance. Compare plans from top insurers and secure your family's future today."
          primaryCta={{ label: "Compare Term Plans", href: "/term-insurance/best-plans" }}
          secondaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
