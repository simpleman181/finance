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
  title: "Income Tax Slabs in India 2024-25 | Old & New Regime Slabs",
  description: "Complete guide to income tax slabs in India for FY 2024-25. Compare old and new regime tax slabs, understand how tax is calculated, and plan your taxes better.",
  keywords: ["income tax slabs", "tax slabs 2024-25", "income tax rates India", "tax brackets India"],
};

const oldRegimeSlabs = [
  { slab: "Up to ₹2,50,000", tax: "Nil", taxAmount: "₹0" },
  { slab: "₹2,50,001 - ₹5,00,000", tax: "5%", taxAmount: "₹12,500" },
  { slab: "₹5,00,001 - ₹10,00,000", tax: "20%", taxAmount: "₹1,00,000" },
  { slab: "Above ₹10,00,000", tax: "30%", taxAmount: "Beyond ₹1,12,500" },
];

const newRegimeSlabs = [
  { slab: "Up to ₹3,00,000", tax: "Nil", taxAmount: "₹0" },
  { slab: "₹3,00,001 - ₹7,00,000", tax: "5%", taxAmount: "₹20,000" },
  { slab: "₹7,00,001 - ₹10,00,000", tax: "10%", taxAmount: "₹50,000" },
  { slab: "₹10,00,001 - ₹12,00,000", tax: "15%", taxAmount: "₹80,000" },
  { slab: "₹12,00,001 - ₹15,00,000", tax: "20%", taxAmount: "₹1,40,000" },
  { slab: "Above ₹15,00,000", tax: "30%", taxAmount: "Beyond ₹1,50,000" },
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
    answer: "Under the old regime, basic exemption is ₹2.5 lakh (below 60 years), ₹3 lakh (60-80 years), and ₹5 lakh (above 80 years). Under the new regime, it's ₹3 lakh for all individuals regardless of age.",
  },
  {
    question: "How is tax calculated on my salary?",
    answer: "Tax is calculated progressively - each slab rate applies only to income in that range. For example, with ₹12 lakh income under new regime: ₹0-3L is tax-free, ₹3L-7L taxed at 5% (₹20,000), ₹7L-10L at 10% (₹30,000), ₹10L-12L at 15% (₹30,000). Total before cess: ₹80,000.",
  },
  {
    question: "What is cess on income tax?",
    answer: "Health and Education Cess is 4% on the total income tax amount. If your tax is ₹1,00,000, you pay additional ₹4,000 as cess, making total tax liability ₹1,04,000. Cess applies to all taxpayers regardless of income level.",
  },
  {
    question: "What is rebate under Section 87A?",
    answer: "Rebate under 87A reduces your tax liability to zero if taxable income is below a threshold. Under old regime, rebate applies if taxable income ≤ ₹5 lakh. Under new regime, it applies if taxable income ≤ ₹7 lakh. This effectively makes income up to ₹7 lakh tax-free under new regime.",
  },
  {
    question: "Do senior citizens have different tax slabs?",
    answer: "Under the old regime: Senior citizens (60-80) get basic exemption of ₹3 lakh, Super senior citizens (above 80) get ₹5 lakh. Under the new regime, there are no special slabs for senior citizens - same ₹3 lakh basic exemption for all.",
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
        badge="Tax Slabs 2024-25"
        title="Income Tax Slabs"
        titleHighlight="in India (FY 2024-25)"
        description="Complete guide to income tax slabs under old and new regimes. Understand how progressive taxation works and calculate your tax liability."
        primaryCta={{ label: "Calculate Your Tax", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "Compare Regimes", href: "/tax/old-vs-new-regime" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* New Regime Slabs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            New Tax Regime Slabs (FY 2024-25)
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
                <Badge variant="outline" className="bg-green-50">Rebate 87A up to ₹7L</Badge>
                <Badge variant="outline">Standard Deduction: ₹50,000</Badge>
                <Badge variant="outline">Cess: 4%</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Old Regime Slabs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Old Tax Regime Slabs (FY 2024-25)
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
