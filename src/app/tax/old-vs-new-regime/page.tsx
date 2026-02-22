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
  Receipt,
  Calculator,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  Scale,
  IndianRupee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Old vs New Tax Regime Comparison 2024-25 | Which is Better?",
  description: "Compare old and new tax regimes in India. Calculate which regime is better for you based on income and deductions. Make an informed choice for tax filing.",
  keywords: ["old vs new tax regime", "tax regime comparison", "which tax regime is better", "income tax regime India"],
};

const comparisonData = [
  { slab: "Up to ₹2,50,000", old: "Nil", new: "Nil" },
  { slab: "₹2,50,001 - ₹3,00,000", old: "5%", new: "Nil" },
  { slab: "₹3,00,001 - ₹5,00,000", old: "5%", new: "5%" },
  { slab: "₹5,00,001 - ₹7,00,000", old: "20%", new: "5%" },
  { slab: "₹7,00,001 - ₹10,00,000", old: "20%", new: "10%" },
  { slab: "₹10,00,001 - ₹12,00,000", old: "30%", new: "15%" },
  { slab: "₹12,00,001 - ₹15,00,000", old: "30%", new: "20%" },
  { slab: "Above ₹15,00,000", old: "30%", new: "30%" },
];

const deductionsAvailable = [
  { section: "80C", old: "✅ Up to ₹1.5L", new: "❌ Not available" },
  { section: "80D (Health Insurance)", old: "✅ Up to ₹75K", new: "❌ Not available" },
  { section: "80CCD(1B) NPS", old: "✅ Up to ₹50K", new: "❌ Not available" },
  { section: "HRA Exemption", old: "✅ Available", new: "❌ Not available" },
  { section: "LTA", old: "✅ Available", new: "❌ Not available" },
  { section: "Home Loan Interest", old: "✅ Up to ₹2L", new: "❌ Not available" },
  { section: "Standard Deduction", old: "✅ ₹50,000", new: "✅ ₹50,000" },
  { section: "Professional Tax", old: "✅ Available", new: "❌ Not available" },
];

const faqs = [
  {
    question: "Which tax regime should I choose?",
    answer: "It depends on your deductions. If your total deductions exceed ₹2-2.5 lakhs (80C, 80D, HRA, LTA, home loan), the old regime is typically better. If you have minimal deductions, the new regime with lower tax rates is more beneficial. Use our tax calculator to compare both for your specific situation.",
  },
  {
    question: "Can I switch between regimes every year?",
    answer: "Yes, for salaried individuals with business income, you can choose between regimes each year at the time of filing ITR. However, if you have business income, once you opt out of the new regime, you can only opt back in once. The choice is made via Form 10-IEA.",
  },
  {
    question: "Is rebate under 87A available in both regimes?",
    answer: "Yes, rebate under Section 87A is available in both regimes. In the old regime, rebate is available if taxable income is up to ₹5 lakh. In the new regime, rebate is available if taxable income is up to ₹7 lakh. This effectively makes income up to ₹7 lakh tax-free under the new regime.",
  },
  {
    question: "What deductions are not available in the new regime?",
    answer: "Major deductions not available: 80C (PPF, ELSS, insurance), 80D (health insurance), HRA exemption, LTA, home loan interest under 24(b), professional tax, 80E (education loan interest), 80EE/80EEA (additional home loan interest), and most other chapter VI-A deductions.",
  },
  {
    question: "Do I need to submit Form 10-IEA?",
    answer: "Yes, if you have business income and want to opt for the old regime, you must file Form 10-IEA before the due date of ITR. Salaried individuals without business income don't need this form - they can simply choose the regime while filing ITR.",
  },
];

const relatedPages = [
  { title: "Income Tax Slabs", description: "Current tax slabs explained", href: "/tax/income-tax-slabs", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Section 80C", description: "Tax saving investments", href: "/tax/section-80c", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Tax Calculator", description: "Calculate your tax", href: "/tax/income-tax-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Complete Tax Guide", description: "Full income tax guide", href: "/tax", icon: <Receipt className="h-5 w-5" /> },
];

export default function OldVsNewRegimePage() {
  return (
    <div>
      <HeroSection
        badge="Tax Regime Comparison"
        title="Old vs New Tax Regime"
        titleHighlight="Which is Better?"
        description="Compare old and new tax regimes for FY 2024-25. Understand the differences in tax slabs, deductions, and find out which regime saves you more tax."
        primaryCta={{ label: "Calculate Your Tax", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "View Tax Slabs", href: "/tax/income-tax-slabs" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Tax Slabs Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Tax Slabs Comparison (FY 2024-25)
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Income Slab</TableHead>
                      <TableHead className="text-center bg-blue-50">Old Regime</TableHead>
                      <TableHead className="text-center bg-green-50">New Regime</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.slab}</TableCell>
                        <TableCell className="text-center bg-blue-50/50">{row.old}</TableCell>
                        <TableCell className="text-center bg-green-50/50">{row.new}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Cess: 4% on tax (both)</Badge>
                <Badge variant="outline">Rebate 87A: Old up to ₹5L, New up to ₹7L</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Deductions Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Deductions Availability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Old Regime Advantages
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>80C: Save ₹1.5L on PPF, ELSS, Insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>80D: Health insurance deduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>HRA exemption for renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Home loan interest deduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>LTA for travel allowance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  New Regime Advantages
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Lower tax rates across slabs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Zero tax up to ₹7L (with rebate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Standard deduction of ₹50,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Simpler - no need to track deductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Good for those with minimal investments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Example */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#1e40af]" />
                Example: ₹12 Lakh Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Old Regime</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Gross Income</span><span>₹12,00,000</span></li>
                    <li className="flex justify-between"><span>Standard Deduction</span><span>-₹50,000</span></li>
                    <li className="flex justify-between"><span>80C (PPF, Insurance)</span><span>-₹1,50,000</span></li>
                    <li className="flex justify-between"><span>80D (Health Insurance)</span><span>-₹25,000</span></li>
                    <li className="flex justify-between"><span>HRA</span><span>-₹1,00,000</span></li>
                    <li className="flex justify-between font-bold border-t pt-2"><span>Taxable Income</span><span>₹8,75,000</span></li>
                    <li className="flex justify-between font-bold text-blue-700"><span>Tax Payable</span><span>₹1,04,000</span></li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">New Regime</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Gross Income</span><span>₹12,00,000</span></li>
                    <li className="flex justify-between"><span>Standard Deduction</span><span>-₹50,000</span></li>
                    <li className="flex justify-between"><span>No other deductions</span><span>-₹0</span></li>
                    <li className="flex justify-between font-bold border-t pt-2"><span>Taxable Income</span><span>₹11,50,000</span></li>
                    <li className="flex justify-between font-bold text-green-700"><span>Tax Payable</span><span>₹85,800</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-center">
                  <strong>In this case:</strong> New regime saves ₹18,200. But with home loan interest (₹2L), 
                  old regime would save ₹41,800. Your choice depends on your deductions!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Tax Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Which Regime is Better for You"
          description="Use our income tax calculator to compare both regimes with your actual income and deductions."
          primaryCta={{ label: "Calculate Now", href: "/tax/income-tax-calculator" }}
          secondaryCta={{ label: "View 80C Options", href: "/tax/section-80c" }}
        />
      </div>
    </div>
  );
}
