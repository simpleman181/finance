import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, Calculator, TrendingUp, IndianRupee, PiggyBank, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Section 80C Deductions List 2024-25 | Tax Saving Investments",
  description: "Complete list of Section 80C deductions. Know all tax-saving investments under 80C - PPF, ELSS, NSC, Life Insurance, EPF, and more. Save up to ₹1.5 lakh in taxes.",
  keywords: ["section 80c", "80c deductions", "tax saving investments", "80c limit", "PPF tax benefit", "ELSS 80c"],
};

const investments80C = [
  { name: "Public Provident Fund (PPF)", limit: "Up to ₹1.5L", returns: "7-8%", lockIn: "15 years", risk: "Low" },
  { name: "ELSS Mutual Funds", limit: "Up to ₹1.5L", returns: "12-15%", lockIn: "3 years", risk: "High" },
  { name: "National Savings Certificate (NSC)", limit: "Up to ₹1.5L", returns: "7-8%", lockIn: "5 years", risk: "Low" },
  { name: "Tax-Saving Fixed Deposit", limit: "Up to ₹1.5L", returns: "6-7%", lockIn: "5 years", risk: "Low" },
  { name: "Employees' Provident Fund (EPF)", limit: "12% of salary", returns: "8-9%", lockIn: "Till retirement", risk: "Low" },
  { name: "Life Insurance Premium", limit: "Up to ₹1.5L", returns: "N/A", lockIn: "Policy term", risk: "N/A" },
  { name: "NPS Tier 1 (Combined with 80CCD)", limit: "Up to ₹1.5L", returns: "9-11%", lockIn: "Till 60 years", risk: "Moderate" },
  { name: "Sukanya Samriddhi Yojana", limit: "Up to ₹1.5L", returns: "8%", lockIn: "Till girl turns 21", risk: "Low" },
  { name: "Children's Tuition Fees", limit: "Up to ₹1.5L", returns: "N/A", lockIn: "None", risk: "N/A" },
  { name: "Principal Repayment of Home Loan", limit: "Up to ₹1.5L", returns: "N/A", lockIn: "None", risk: "N/A" },
];

const faqs = [
  {
    question: "What is the maximum deduction under Section 80C?",
    answer: "The maximum deduction under Section 80C is ₹1.5 lakh per financial year. This is the combined limit across all eligible investments and expenses. You cannot claim ₹1.5 lakh each for PPF, ELSS, and insurance separately - the total across all 80C investments is capped at ₹1.5 lakh.",
  },
  {
    question: "Which is the best 80C investment for tax saving?",
    answer: "It depends on your risk profile and goals. For conservative investors, PPF offers guaranteed returns with EEE tax status. For those seeking higher returns, ELSS has potential for 12-15% returns with just 3-year lock-in. EPF is automatic for salaried and offers good returns. Best strategy: diversify across instruments based on goals.",
  },
  {
    question: "Can I invest more than ₹1.5 lakh in PPF?",
    answer: "Yes, you can deposit up to ₹1.5 lakh per year in PPF, but only the amount up to ₹1.5 lakh across all 80C investments is tax-deductible. If you invest ₹2 lakh in PPF, only ₹1.5 lakh gets 80C benefit. However, the entire amount earns interest.",
  },
  {
    question: "Is ELSS better than PPF for tax saving?",
    answer: "ELSS offers potentially higher returns (12-15% vs 7-8% for PPF) with shorter lock-in (3 years vs 15 years). However, ELSS carries market risk - returns are not guaranteed. PPF is risk-free with guaranteed returns. For long-term goals (15+ years), ELSS may create more wealth. For safety and guaranteed returns, PPF is better.",
  },
  {
    question: "Does life insurance premium qualify for 80C?",
    answer: "Yes, life insurance premium paid for self, spouse, and children qualifies under 80C. However, to be eligible, the premium should not exceed 10% of sum assured for policies issued after April 1, 2012. For policies before this date, the limit is 20%. The combined limit with all other 80C investments is ₹1.5 lakh.",
  },
  {
    question: "Can I claim both 80C and 80CCD for NPS?",
    answer: "Yes, NPS contributions can be claimed under both sections. Up to ₹1.5 lakh under 80CCD(1) which is part of overall 80C limit. Additionally, up to ₹50,000 under 80CCD(1B) which is over and above the 80C limit. So total NPS benefit can be up to ₹2 lakh (₹1.5L + ₹50K).",
  },
];

const relatedPages = [
  { title: "Complete Tax Guide", description: "Full income tax guide", href: "/tax", icon: <Receipt className="h-5 w-5" /> },
  { title: "Section 80D", description: "Health insurance deduction", href: "/tax/section-80d", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Tax Calculator", description: "Calculate your tax", href: "/tax/income-tax-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Old vs New Regime", description: "Compare tax regimes", href: "/tax/old-vs-new-regime", icon: <TrendingUp className="h-5 w-5" /> },
];

export default function Section80CPage() {
  return (
    <div>
      <HeroSection
        badge="Tax Saving Guide"
        title="Section 80C Deductions"
        titleHighlight="Complete List 2024-25"
        description="Save up to ₹46,800 in taxes with Section 80C deductions. Explore all eligible investments and expenses under 80C to maximize your tax savings."
        primaryCta={{ label: "Calculate Tax Savings", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "View Other Deductions", href: "/tax/section-80d" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Key Points */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-[#1e40af]" />
                Section 80C Key Points
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#1e40af]">₹1.5 Lakh</p>
                  <p className="text-sm text-muted-foreground">Maximum Deduction</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#059669]">₹46,800</p>
                  <p className="text-sm text-muted-foreground">Max Tax Saved (30% slab)</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#7c3aed]">10+</p>
                  <p className="text-sm text-muted-foreground">Investment Options</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investment Options Table */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            All Section 80C Investment Options
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Investment</th>
                      <th className="text-center py-3">Limit</th>
                      <th className="text-center py-3">Expected Returns</th>
                      <th className="text-center py-3">Lock-in</th>
                      <th className="text-center py-3">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investments80C.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.name}</td>
                        <td className="py-3 text-center">{item.limit}</td>
                        <td className="py-3 text-center">{item.returns}</td>
                        <td className="py-3 text-center">{item.lockIn}</td>
                        <td className="py-3 text-center">
                          <Badge className={item.risk === "Low" ? "bg-green-100 text-green-700" : item.risk === "High" ? "bg-red-100 text-red-700" : item.risk === "Moderate" ? "bg-amber-100 text-amber-700" : "bg-slate-100"}>
                            {item.risk}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Options */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Recommended 80C Strategy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg">Conservative Investor</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">PPF: ₹1.5 lakh (safety + returns)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">EPF: Continue contributions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <span className="text-sm">Tax-saving FD: For additional safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg">Balanced Investor</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1" />
                    <span className="text-sm">PPF: ₹75,000 (stability)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1" />
                    <span className="text-sm">ELSS: ₹75,000 (growth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1" />
                    <span className="text-sm">EPF: Continue + Life Insurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-lg">Aggressive Investor</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1" />
                    <span className="text-sm">ELSS: ₹1.5 lakh (max returns)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1" />
                    <span className="text-sm">NPS: Additional ₹50K under 80CCD(1B)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1" />
                    <span className="text-sm">Short 3-year lock-in for ELSS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Tax Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Your Tax Savings"
          description="Use our income tax calculator to see how much you can save with Section 80C investments."
          primaryCta={{ label: "Calculate Now", href: "/tax/income-tax-calculator" }}
          secondaryCta={{ label: "View 80D Benefits", href: "/tax/section-80d" }}
        />
      </div>
    </div>
  );
}
