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
import { Receipt, Calculator, TrendingUp, IndianRupee, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Income Tax Slabs in India | Old & New Regime Slabs",
  description: "Complete guide to current income tax slabs in India under the old and new tax regimes. Understand how tax is calculated and plan your taxes better.",
  keywords: ["income tax slabs", "income tax rates India", "tax brackets India", "new tax regime slabs"],
};

const oldRegimeSlabs = [
  { slab: "Up to ₹2,50,000", tax: "Nil", taxAmount: "₹0" },
  { slab: "₹2,50,001 - ₹5,00,000", tax: "5%", taxAmount: "₹12,500" },
  { slab: "₹5,00,001 - ₹10,00,000", tax: "20%", taxAmount: "₹1,00,000" },
  { slab: "Above ₹10,00,000", tax: "30%", taxAmount: "Beyond ₹1,12,500" },
];

const newRegimeSlabs = [
  { slab: "Up to ₹4,00,000", tax: "Nil", taxAmount: "₹0" },
  { slab: "₹4,00,001 - ₹8,00,000", tax: "5%", taxAmount: "₹20,000" },
  { slab: "₹8,00,001 - ₹12,00,000", tax: "10%", taxAmount: "₹60,000" },
  { slab: "₹12,00,001 - ₹16,00,000", tax: "15%", taxAmount: "₹1,20,000" },
  { slab: "₹16,00,001 - ₹20,00,000", tax: "20%", taxAmount: "₹2,00,000" },
  { slab: "₹20,00,001 - ₹24,00,000", tax: "25%", taxAmount: "₹3,00,000" },
  { slab: "Above ₹24,00,000", tax: "30%", taxAmount: "Beyond ₹3,00,000" },
];

const surchargeRates = [
  { income: "₹50L - ₹1Cr", rate: "10%", cap: "Not applicable" },
  { income: "₹1Cr - ₹2Cr", rate: "15%", cap: "Not applicable" },
  { income: "₹2Cr - ₹5Cr", rate: "25%", cap: "15% on LTCG/STT" },
  { income: "Above ₹5Cr", rate: "37%", cap: "15% on LTCG/STT" },
];

const faqs = [
  {
    question: "What is the basic exemption limit for income tax?",
    answer: "Under the old regime, basic exemption is ₹2.5 lakh (below 60 years), ₹3 lakh (60-80 years), and ₹5 lakh (above 80 years). Under the new regime, it's ₹4 lakh for all individuals regardless of age.",
  },
  {
    question: "How is tax calculated on my salary?",
    answer: "Tax is calculated progressively - each slab rate applies only to income in that range. For example, with ₹12 lakh income under the new regime: ₹0-4L is tax-free, ₹4L-8L is taxed at 5% (₹20,000), ₹8L-12L at 10% (₹40,000). Total before cess: ₹60,000 - though this is then wiped out entirely for most taxpayers by the Section 87A rebate (see below).",
  },
  {
    question: "What is cess on income tax?",
    answer: "Health and Education Cess is 4% on the total income tax amount. If your tax is ₹1,00,000, you pay an additional ₹4,000 as cess, making total tax liability ₹1,04,000. Cess applies to all taxpayers regardless of income level.",
  },
  {
    question: "What is the rebate under Section 87A (now Section 157)?",
    answer: "This rebate reduces your tax liability to zero if taxable income is below a threshold. Under the old regime, it applies up to ₹5 lakh (rebate up to ₹12,500). Under the new regime, it applies up to ₹12 lakh (rebate up to ₹60,000) - combined with the ₹75,000 standard deduction, this makes salaried income up to about ₹12.75 lakh effectively tax-free under the new regime. Note: from Tax Year 2026-27, this provision sits at Section 157 of the new Income-tax Act, 2025 (still commonly called '87A' out of habit).",
  },
  {
    question: "Do senior citizens have different tax slabs?",
    answer: "Under the old regime: senior citizens (60-80) get a basic exemption of ₹3 lakh, and super senior citizens (above 80) get ₹5 lakh. Under the new regime, there are no special slabs for senior citizens - the same ₹4 lakh basic exemption applies to everyone.",
  },
  {
    question: "Did the Income-tax Act, 2025 change these slab rates?",
    answer: "No. The new Act (effective 1 April 2026, replacing the 1961 Act) is a restructuring and renumbering of the law, not a change to tax policy - slab rates, rebate amounts, and deduction limits are unchanged by it. What changed is that many familiar section numbers (like 80C and 87A) now have new numbers under the 2025 Act.",
  },
];

const relatedPages = [
  { title: "Old vs New Regime", description: "Compare tax regimes", href: "/tax/old-vs-new-regime", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Section 80C", description: "Tax saving options", href: "/tax/section-80c", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Tax Calculator", description: "Calculate your tax", href: "/tax/income-tax-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Complete Tax Guide", description: "Full income tax guide", href: "/tax", icon: <Receipt className="h-5 w-5" /> },
];

export default function TaxSlabsPage() {
  return (
    <div>
      <HeroSection
        badge="Current Tax Slabs"
        title="Income Tax Slabs"
        titleHighlight="in India"
        description="Complete guide to income tax slabs under old and new regimes. Understand how progressive taxation works and calculate your tax liability."
        primaryCta={{ label: "Calculate Your Tax", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "Compare Regimes", href: "/tax/old-vs-new-regime" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* New Regime Slabs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            New Tax Regime Slabs
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Default regime from FY 2023-24. Lower rates but fewer deductions.
          </p>
          
          <Card className="max-w-3xl mx-auto border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                New Regime Tax Slabs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Income Slab</TableHead>
                    <TableHead className="text-center">Tax Rate</TableHead>
                    <TableHead className="text-right">Cumulative Tax</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newRegimeSlabs.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.slab}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-green-100 text-green-700">{row.tax}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{row.taxAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-green-50">Rebate 87A up to ₹12L</Badge>
                <Badge variant="outline">Standard Deduction: ₹75,000</Badge>
                <Badge variant="outline">Cess: 4%</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Old Regime Slabs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Old Tax Regime Slabs
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Traditional slabs with all deductions and exemptions available.
          </p>
          
          <Card className="max-w-3xl mx-auto border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Old Regime Tax Slabs (Below 60 Years)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Income Slab</TableHead>
                    <TableHead className="text-center">Tax Rate</TableHead>
                    <TableHead className="text-right">Cumulative Tax</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {oldRegimeSlabs.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.slab}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-blue-100 text-blue-700">{row.tax}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{row.taxAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="bg-blue-50">Rebate 87A up to ₹5L</Badge>
                <Badge variant="outline">All deductions available</Badge>
                <Badge variant="outline">Cess: 4%</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Surcharge */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Surcharge Rates (High Income)
          </h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Income Range</TableHead>
                    <TableHead className="text-center">Surcharge Rate</TableHead>
                    <TableHead className="text-center">Cap on Capital Gains</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {surchargeRates.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.income}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{row.rate}</Badge>
                      </TableCell>
                      <TableCell className="text-center">{row.cap}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Tax Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Your Tax Liability"
          description="Use our income tax calculator to see exactly how much tax you need to pay under both regimes."
          primaryCta={{ label: "Calculate Now", href: "/tax/income-tax-calculator" }}
          secondaryCta={{ label: "Compare Regimes", href: "/tax/old-vs-new-regime" }}
        />
      </div>
    </div>
  );
}
