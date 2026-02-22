import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  Users,
  IndianRupee,
  TrendingUp,
  Home,
  GraduationCap,
  Heart,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Term Insurance Cover Do You Need in India | Calculator",
  description: "Calculate the right term insurance coverage amount based on your income, expenses, liabilities, and future goals. Use our comprehensive guide to determine your ideal life insurance coverage.",
  keywords: ["term insurance coverage", "how much term insurance", "life insurance calculator", "term cover calculation", "insurance coverage India"],
};

const coverageFactors = [
  {
    icon: IndianRupee,
    title: "Annual Income",
    description: "The most common rule is 10-15 times your annual income. This ensures your family can maintain their lifestyle for years even without your income. For example, if you earn ₹12 lakhs annually, consider coverage of ₹1.2-1.8 crores.",
    formula: "Annual Income × 10-15",
  },
  {
    icon: Users,
    title: "Number of Dependents",
    description: "More dependents mean higher coverage needs. Consider your spouse, children, and elderly parents. Each dependent adds to the financial responsibility your insurance must cover.",
    formula: "Add ₹10-20L per dependent",
  },
  {
    icon: Home,
    title: "Outstanding Loans & Liabilities",
    description: "Include all your debts - home loan, car loan, personal loans, credit card dues. Your coverage should be enough to clear all liabilities so your family isn't burdened with debt repayment.",
    formula: "Sum of all outstanding loans",
  },
  {
    icon: GraduationCap,
    title: "Children's Education",
    description: "Education costs in India are rising at 10-12% annually. Factor in school fees, college education, and higher studies abroad. A good education today costs ₹25-50 lakhs or more.",
    formula: "₹25-50L per child",
  },
  {
    icon: Heart,
    title: "Family's Annual Expenses",
    description: "Calculate monthly household expenses (rent, utilities, groceries, healthcare) and multiply by 12-15 years. This ensures your family can maintain their standard of living.",
    formula: "Monthly Expenses × 12 × 15 years",
  },
  {
    icon: TrendingUp,
    title: "Future Goals & Inflation",
    description: "Account for inflation at 6-7% annually. What costs ₹1 lakh today will cost ₹3.8 lakhs in 20 years. Build a buffer for future financial goals like children's marriage.",
    formula: "Add 30-40% inflation buffer",
  },
];

const faqs = [
  {
    question: "What is the minimum term insurance coverage I should have?",
    answer: "As a minimum, your term insurance should cover all your outstanding loans plus at least 10 times your annual income. However, this is the bare minimum. For comprehensive protection, consider all factors including dependents, future goals, and inflation. Most financial advisors recommend coverage of at least ₹1 crore for young professionals.",
  },
  {
    question: "Should I include my spouse's income in coverage calculation?",
    answer: "If your spouse is also earning, you can factor in their income when calculating the coverage gap. The insurance should cover the shortfall between family expenses and your spouse's income. However, if your spouse takes a career break after your demise, you need coverage for that scenario too.",
  },
  {
    question: "How does age affect coverage requirements?",
    answer: "Younger people need higher coverage because they have more working years ahead and likely have young dependents. As you age, your financial responsibilities decrease - children become independent, loans get paid off. It's wise to review your coverage every 5 years or after major life events.",
  },
  {
    question: "Should I account for existing investments while calculating coverage?",
    answer: "Yes, you should subtract your existing investments and savings from the total coverage needed. Include your EPF, PPF, mutual funds, fixed deposits, and other investments. However, don't count assets like your primary residence as your family needs a place to live.",
  },
  {
    question: "What if I can't afford the premium for adequate coverage?",
    answer: "Start with whatever coverage you can afford. Even partial coverage is better than none. As your income grows, you can buy additional policies. Many insurers offer increasing coverage options where the sum assured grows by 5-10% annually to keep pace with inflation.",
  },
  {
    question: "How often should I review my term insurance coverage?",
    answer: "Review your coverage at least every 5 years or after major life events - marriage, birth of a child, taking a large loan, significant income change, or parents becoming dependent. Under-insurance is as risky as having no insurance.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Calculator className="h-5 w-5" /> },
  { title: "Best Term Insurance Plans", description: "Compare top term insurance plans in India", href: "/term-insurance/best-plans", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your term insurance premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Term Insurance for Salaried", description: "Best options for salaried employees", href: "/term-insurance/for-salaried", icon: <Users className="h-5 w-5" /> },
];

export default function HowMuchCoverPage() {
  return (
    <div>
      <HeroSection
        badge="Coverage Guide"
        title="How Much Term Insurance"
        titleHighlight="Cover Do You Need?"
        description="Calculate the right coverage amount based on your income, expenses, liabilities, and family's future needs. Don't leave your family under-protected."
        primaryCta={{ label: "Calculate Coverage", href: "/tools/term-coverage-calculator" }}
        secondaryCta={{ label: "View Premium Rates", href: "/term-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Quick Formula Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Calculator className="h-6 w-6 text-[#1e40af]" />
                Quick Coverage Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-semibold text-center mb-4">
                  Total Coverage = (Annual Income × 10) + Outstanding Loans + Future Goals - Existing Investments
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-[#1e40af]">₹1.2 Cr</p>
                    <p className="text-sm text-muted-foreground">Income Replacement</p>
                    <p className="text-xs text-muted-foreground">(₹12L × 10)</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-[#dc2626]">₹40 L</p>
                    <p className="text-sm text-muted-foreground">Outstanding Loans</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-[#7c3aed]">₹50 L</p>
                    <p className="text-sm text-muted-foreground">Future Goals</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-[#059669]">= ₹2.1 Cr</p>
                    <p className="text-sm text-muted-foreground">Total Coverage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Factors */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Key Factors That Determine Your Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just multiply your income by 10. Consider all these factors to get the right coverage amount for your family's complete financial security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#1e40af]/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-[#1e40af]" />
                    </div>
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">{factor.formula}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Step-by-Step Coverage Calculation
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Calculate Income Replacement Need</h3>
                <p className="text-muted-foreground">Multiply your annual income by 10-15 times. For a ₹15 lakh annual income, this means ₹1.5-2.25 crores. This ensures your family can maintain their lifestyle for a decade or more.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Add All Outstanding Debts</h3>
                <p className="text-muted-foreground">List all your loans - home loan (₹40L), car loan (₹5L), personal loan (₹3L), education loan (₹8L). Total: ₹56 lakhs. Your insurance should clear all these liabilities.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Include Future Financial Goals</h3>
                <p className="text-muted-foreground">Children's education (₹30-50L per child), marriage expenses (₹15-25L), spouse's retirement corpus. These are non-negotiable goals that must be funded.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Account for Inflation</h3>
                <p className="text-muted-foreground">Add 30-40% to your calculated amount as inflation buffer. ₹1 crore today will have the purchasing power of only ₹38 lakhs after 20 years at 5% inflation.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Subtract Existing Assets</h3>
                <p className="text-muted-foreground">Deduct your existing investments - EPF, PPF, mutual funds, FDs, other life insurance. Don't include your primary residence. The result is your ideal coverage amount.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Example: Rahul's Coverage Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Component</th>
                      <th className="text-right py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Annual Income (₹15L × 12)</td>
                      <td className="text-right font-medium">₹1,80,00,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Home Loan Outstanding</td>
                      <td className="text-right font-medium">₹45,00,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Car Loan Outstanding</td>
                      <td className="text-right font-medium">₹5,00,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Child's Education Fund</td>
                      <td className="text-right font-medium">₹40,00,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Inflation Buffer (20%)</td>
                      <td className="text-right font-medium">₹54,00,000</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-3 font-semibold">Total Coverage Needed</td>
                      <td className="text-right font-bold text-[#059669]">₹3,24,00,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Less: Existing Investments</td>
                      <td className="text-right font-medium text-red-600">-₹24,00,000</td>
                    </tr>
                    <tr className="bg-[#1e40af] text-white">
                      <td className="py-3 font-semibold">Ideal Term Insurance Coverage</td>
                      <td className="text-right font-bold">₹3 Crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warning Section */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Common Mistakes to Avoid</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Don't rely solely on employer-provided group insurance - it ends when you leave the job</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Don't ignore inflation - a ₹1 crore cover today won't be enough in 15 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Don't count your spouse's income if they might take a career break after your demise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Review coverage after major life events - marriage, children, promotion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Term Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Ready to Calculate Your Coverage?"
          description="Use our interactive coverage calculator to get a personalized recommendation based on your specific situation."
          primaryCta={{ label: "Calculate Now", href: "/tools/term-coverage-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
