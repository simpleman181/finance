import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { ContentCard, ContentGrid } from "@/components/shared/content-card";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection, ContactCTA } from "@/components/shared/cta-section";
import { QuickLinks } from "@/components/shared/related-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Receipt,
  TrendingUp,
  Calculator,
  CheckCircle,
  AlertTriangle,
  IndianRupee,
  FileText,
  PiggyBank,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to Income Tax in India 2024 | FinanceTaxPro",
  description: "Comprehensive guide to income tax in India. Learn about tax slabs, deductions, exemptions, and smart tax-saving strategies under the Income Tax Act.",
  keywords: ["income tax India", "tax guide", "tax slabs", "tax deductions", "tax saving", "income tax calculator"],
};

const relatedPages = [
  { title: "Tax Slabs", description: "Current income tax slabs", href: "/tax/income-tax-slabs", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Old vs New Regime", description: "Compare tax regimes", href: "/tax/old-vs-new-regime", icon: <Calculator className="h-5 w-5" /> },
  { title: "Section 80C", description: "Tax saving investments", href: "/tax/section-80c", icon: <PiggyBank className="h-5 w-5" /> },
  { title: "Section 80D", description: "Health insurance deduction", href: "/tax/section-80d", icon: <Receipt className="h-5 w-5" /> },
  { title: "Tax Calculator", description: "Calculate your tax", href: "/tax/income-tax-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Save Tax Legally", description: "Smart tax strategies", href: "/tax/how-to-save-tax-legally", icon: <CheckCircle className="h-5 w-5" /> },
];

const quickLinks = [
  { label: "Tax Slabs", href: "#tax-slabs" },
  { label: "Deductions", href: "#deductions" },
  { label: "Filing ITR", href: "#itr" },
  { label: "Tax Calculator", href: "/tax/income-tax-calculator" },
];

const taxSlabs = [
  { slab: "Up to ₹3,00,000", oldRegime: "Nil", newRegime: "Nil" },
  { slab: "₹3,00,001 - ₹5,00,000", oldRegime: "5%", newRegime: "5%" },
  { slab: "₹5,00,001 - ₹7,00,000", oldRegime: "20%", newRegime: "10%" },
  { slab: "₹7,00,001 - ₹10,00,000", oldRegime: "20%", newRegime: "15%" },
  { slab: "₹10,00,001 - ₹12,00,000", oldRegime: "30%", newRegime: "20%" },
  { slab: "₹12,00,001 - ₹15,00,000", oldRegime: "30%", newRegime: "25%" },
  { slab: "Above ₹15,00,000", oldRegime: "30%", newRegime: "30%" },
];

const deductions = [
  { section: "80C", limit: "₹1,50,000", items: "PPF, ELSS, NSC, Life Insurance, EPF, Tax-saving FD, Children's tuition fees" },
  { section: "80D", limit: "₹25,000-75,000", items: "Health insurance premium for self, family, and parents" },
  { section: "80CCD(1B)", limit: "₹50,000", items: "NPS (National Pension System) contribution" },
  { section: "80E", limit: "No limit", items: "Interest on education loan (for 8 years)" },
  { section: "80EEA", limit: "₹1,50,000", items: "Interest on home loan for affordable housing" },
  { section: "80TTA", limit: "₹10,000", items: "Interest on savings account" },
];

const faqs = [
  {
    question: "What is the basic exemption limit for income tax?",
    answer: "Under both old and new tax regimes, the basic exemption limit is ₹3 lakh for individuals below 60 years. For senior citizens (60-80 years), it's ₹3 lakh under new regime and ₹2.5 lakh under old. For super senior citizens (above 80), it's ₹5 lakh under old regime. Income up to these limits is tax-free.",
  },
  {
    question: "Which tax regime is better - old or new?",
    answer: "It depends on your deductions. If your total deductions (80C, 80D, HRA, LTA, etc.) exceed ₹2-2.5 lakhs, old regime is typically better. If you have minimal deductions, new regime offers lower tax rates. Use our tax calculator to compare both for your specific situation.",
  },
  {
    question: "When is the last date to file ITR?",
    answer: "For individuals and non-audit cases, the due date is July 31st of the assessment year. For businesses requiring audit, it's October 31st. Late filing attracts penalty up to ₹5,000 (₹1,000 for income below ₹5 lakh) and interest on tax due. File on time to avoid penalties.",
  },
  {
    question: "What is Form 16?",
    answer: "Form 16 is a TDS certificate issued by your employer showing salary income and tax deducted. It's essential for filing ITR as it contains all salary details, deductions, and tax already paid. Employers must issue it by June 15th. Download from your employer's portal.",
  },
  {
    question: "How can I save tax legally?",
    answer: "Use Section 80C (₹1.5L in PPF, ELSS, EPF), 80CCD(1B) (₹50K in NPS), 80D (health insurance), 80E (education loan interest), HRA exemption, LTA, and home loan interest deduction under 24(b). Invest in tax-efficient instruments and structure salary optimally.",
  },
  {
    question: "What happens if I don't file ITR?",
    answer: "Non-filing can lead to: penalty up to ₹10,000, inability to carry forward losses, difficulty getting loans/visas, and potential scrutiny notice. Even if income is below taxable limit, filing ITR is recommended as it serves as income proof and enables refunds.",
  },
];

export default function TaxGuidePage() {
  return (
    <div>
      <HeroSection
        badge="Complete Tax Guide"
        title="Everything You Need to Know About"
        titleHighlight="Income Tax in India"
        description="Understanding income tax doesn't have to be complicated. Learn about tax slabs, deductions, exemptions, and smart strategies to legally minimize your tax burden."
        primaryCta={{ label: "Calculate Your Tax", href: "/tax/income-tax-calculator" }}
        secondaryCta={{ label: "Compare Regimes", href: "/tax/old-vs-new-regime" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        <QuickLinks title="Jump To Section" links={quickLinks} />

        {/* Introduction */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Understanding Income Tax in India
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Income tax in India is governed by the Income Tax Act, 1961 and administered by the 
            Central Board of Direct Taxes (CBDT). It's a progressive tax where higher income attracts 
            higher tax rates. The tax year runs from April 1 to March 31, and returns must be filed 
            by July 31 of the following year.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            With the introduction of the new tax regime in 2020, taxpayers now have a choice between 
            the old regime (with deductions) and new regime (lower rates, fewer deductions). 
            Understanding both helps you make an informed decision for maximum tax savings.
          </p>
        </section>

        {/* Tax Slabs */}
        <section className="mb-12" id="tax-slabs">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Income Tax Slabs (FY 2024-25)
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Income Slab</th>
                      <th className="text-center py-3 bg-blue-50">Old Regime</th>
                      <th className="text-center py-3 bg-green-50">New Regime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxSlabs.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{row.slab}</td>
                        <td className="py-3 text-center bg-blue-50/50">{row.oldRegime}</td>
                        <td className="py-3 text-center bg-green-50/50">{row.newRegime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-4">
                <Badge variant="outline" className="bg-blue-50">Standard Deduction: ₹50,000 (both)</Badge>
                <Badge variant="outline" className="bg-amber-50">Cess: 4% on tax (both)</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Deductions */}
        <section className="mb-12" id="deductions">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Tax Deductions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deductions.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#059669] text-white">{item.section}</Badge>
                    <Badge variant="outline" className="text-[#1e40af]">{item.limit}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ITR Filing */}
        <section className="mb-12" id="itr">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Income Tax Return (ITR) Filing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#1e40af]" />
                  Documents Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Form 16 from employer", "Bank statements", "Investment proofs (80C, 80D)", "Form 26AS (tax credit statement)", "Aadhaar and PAN", "Capital gains statements", "Property documents (if applicable)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-[#059669]" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-sm">Form 16 issued by</span>
                    <Badge variant="outline">June 15</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">ITR due date (Individuals)</span>
                    <Badge variant="outline" className="bg-red-50 text-red-700">July 31</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">Advance tax installments</span>
                    <Badge variant="outline">Jun/Sep/Dec/Mar</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">Belated ITR deadline</span>
                    <Badge variant="outline">December 31</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Avoid These Tax Mistakes</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="text-sm">• Not filing ITR even when below taxable limit</li>
                  <li className="text-sm">• Missing the July 31 deadline</li>
                  <li className="text-sm">• Not verifying ITR within 30 days</li>
                  <li className="text-sm">• Wrong regime selection</li>
                  <li className="text-sm">• Not declaring all income sources</li>
                  <li className="text-sm">• Claiming invalid deductions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Tax Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Calculate Your Tax Now"
          description="Use our income tax calculator to compare old and new regimes and find your tax liability."
          primaryCta={{ label: "Calculate Tax", href: "/tax/income-tax-calculator" }}
          secondaryCta={{ label: "Compare Regimes", href: "/tax/old-vs-new-regime" }}
        />

        <ContactCTA />
      </div>
    </div>
  );
}
