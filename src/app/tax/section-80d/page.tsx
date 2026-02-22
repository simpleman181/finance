import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Receipt, Calculator, Heart, IndianRupee, CheckCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Section 80D Health Insurance Tax Benefits | Deduction Limit 2024-25",
  description: "Complete guide to Section 80D tax deductions on health insurance premiums. Learn about limits for self, family, and parents. Save up to ₹75,000 in taxes.",
  keywords: ["section 80d", "health insurance tax benefit", "80d deduction limit", "mediclaim tax deduction", "health insurance 80d"],
};

const deductionLimits = [
  { category: "Self & Family (below 60)", limit: "₹25,000", notes: "Preventive check-up included" },
  { category: "Self & Family (60+ years)", limit: "₹50,000", notes: "Enhanced for senior citizens" },
  { category: "Parents (below 60)", limit: "₹25,000", notes: "Separate from self" },
  { category: "Parents (60+ years)", limit: "₹50,000", notes: "Enhanced for senior parents" },
  { category: "Preventive Health Check-up", limit: "₹5,000", notes: "Within overall limit" },
];

const faqs = [
  {
    question: "What is the maximum deduction under Section 80D?",
    answer: "Maximum ₹75,000 for individuals below 60 (₹25,000 self + ₹50,000 for senior citizen parents). For senior citizens, maximum is ₹1,00,000 (₹50,000 self + ₹50,000 for senior citizen parents). This is separate from 80C limit.",
  },
  {
    question: "Can I claim 80D for parents' health insurance?",
    answer: "Yes, you can claim deduction for health insurance premium paid for parents (father and/or mother) whether dependent or not. This is in addition to the deduction for your own family's health insurance. Maximum ₹25,000 (₹50,000 if parents are senior citizens).",
  },
  {
    question: "Does preventive health check-up qualify for 80D?",
    answer: "Yes, expenses on preventive health check-up up to ₹5,000 within the overall 80D limit are deductible. This can be for self, spouse, children, or parents. No need to have health insurance to claim this - you can claim for check-up even without insurance.",
  },
  {
    question: "Can I claim 80D for health insurance paid in cash?",
    answer: "No, premium must be paid by any mode other than cash (cheque, DD, credit card, net banking, UPI) to qualify for 80D deduction. Preventive health check-up expenses can be paid in cash though.",
  },
];

const relatedPages = [
  { title: "Section 80C", description: "Tax saving investments", href: "/tax/section-80c", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Health Insurance Guide", description: "Complete health insurance guide", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Tax Calculator", description: "Calculate your tax", href: "/tax/income-tax-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Complete Tax Guide", description: "Full income tax guide", href: "/tax", icon: <Receipt className="h-5 w-5" /> },
];

export default function Section80DPage() {
  return (
    <div>
      <HeroSection
        badge="Tax Deduction Guide"
        title="Section 80D"
        titleHighlight="Health Insurance Tax Benefits"
        description="Save up to ₹75,000 in taxes with Section 80D deductions on health insurance premiums for self, family, and parents. Understand limits and maximize savings."
        primaryCta={{ label: "Calculate Tax Savings", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "View Health Insurance", href: "/health-insurance" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Deduction Limits */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Section 80D Deduction Limits (FY 2024-25)
          </h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Category</th>
                      <th className="text-center py-3">Maximum Limit</th>
                      <th className="text-left py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deductionLimits.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.category}</td>
                        <td className="py-3 text-center">
                          <Badge className="bg-green-100 text-green-700">{item.limit}</Badge>
                        </td>
                        <td className="py-3 text-muted-foreground">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Maximum Scenarios */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Maximum Deduction Scenarios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg">Below 60 Years (Self & Parents)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Self & Family</span><span className="font-medium">₹25,000</span></li>
                  <li className="flex justify-between"><span>Parents (below 60)</span><span className="font-medium">₹25,000</span></li>
                  <li className="flex justify-between font-bold border-t pt-2"><span>Total Deduction</span><span className="text-blue-700">₹50,000</span></li>
                  <li className="flex justify-between text-green-600"><span>Tax Saved (30% slab)</span><span>₹15,000</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg">With Senior Citizen Parents</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span>Self & Family</span><span className="font-medium">₹25,000</span></li>
                  <li className="flex justify-between"><span>Parents (60+ years)</span><span className="font-medium">₹50,000</span></li>
                  <li className="flex justify-between font-bold border-t pt-2"><span>Total Deduction</span><span className="text-green-700">₹75,000</span></li>
                  <li className="flex justify-between text-green-600"><span>Tax Saved (30% slab)</span><span>₹22,500</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Your Tax Savings"
          description="Use our income tax calculator to see how much you save with Section 80D."
          primaryCta={{ label: "Calculate Tax", href: "/tax/income-tax-calculator" }}
          secondaryCta={{ label: "View Health Insurance", href: "/health-insurance" }}
        />
      </div>
    </div>
  );
}
