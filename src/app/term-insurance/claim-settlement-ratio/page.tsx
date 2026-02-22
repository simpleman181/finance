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
  Award,
  TrendingUp,
  Shield,
  IndianRupee,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Claim Settlement Ratio of Insurance Companies in India 2024",
  description: "Compare claim settlement ratios of all life insurance companies in India. Understand what CSR means, why it matters, and how to choose an insurer with high claim reliability.",
  keywords: ["claim settlement ratio", "CSR insurance", "term insurance claim ratio", "IRDAI claim ratio", "best insurance company claim settlement"],
};

const claimRatios = [
  { insurer: "Max Life", csr: 99.34, claims: 31245, trend: "up", color: "#059669" },
  { insurer: "HDFC Life", csr: 99.35, claims: 28987, trend: "stable", color: "#1e40af" },
  { insurer: "Tata AIA", csr: 99.13, claims: 15678, trend: "up", color: "#7c3aed" },
  { insurer: "ICICI Prudential", csr: 98.58, claims: 24532, trend: "stable", color: "#dc2626" },
  { insurer: "Bajaj Allianz", csr: 99.02, claims: 19876, trend: "up", color: "#ea580c" },
  { insurer: "Kotak Life", csr: 98.82, claims: 13456, trend: "stable", color: "#0891b2" },
  { insurer: "SBI Life", csr: 97.88, claims: 32145, trend: "up", color: "#1e40af" },
  { insurer: "Aditya Birla Sun Life", csr: 98.05, claims: 11234, trend: "stable", color: "#dc2626" },
  { insurer: "PNB MetLife", csr: 98.17, claims: 8765, trend: "up", color: "#1e40af" },
  { insurer: "Aviva Life", csr: 98.25, claims: 5432, trend: "stable", color: "#7c3aed" },
];

const csrFactors = [
  {
    title: "What is Claim Settlement Ratio?",
    description: "CSR is the percentage of claims an insurance company settles against the total claims received in a financial year. A CSR of 98% means the insurer settled 98 out of every 100 claims received. IRDAI publishes these ratios annually.",
    icon: Info,
  },
  {
    title: "Why CSR Matters",
    description: "A high CSR indicates the insurer's reliability in honoring claims. When your family files a claim during an already difficult time, you want them to face minimal hurdles. Companies with high CSR tend to have smoother claim processes.",
    icon: Shield,
  },
  {
    title: "CSR Trend Analysis",
    description: "Look at CSR over 3-5 years, not just one year. A consistently high CSR (above 95%) over multiple years is more reliable than a single year's spike. Avoid insurers with volatile or declining CSR trends.",
    icon: TrendingUp,
  },
  {
    title: "Volume Matters",
    description: "A high CSR with high claim volume is more impressive than high CSR with few claims. An insurer handling 30,000+ claims with 98%+ CSR demonstrates robust claim processing capabilities at scale.",
    icon: BarChart3,
  },
];

const csrMyths = [
  {
    myth: "High CSR means guaranteed claim approval",
    reality: "CSR is a historical indicator, not a guarantee. Your claim can still be rejected for non-disclosure, fraud, or policy exclusion. Honest disclosure and policy understanding are crucial.",
  },
  {
    myth: "Only CSR matters when choosing insurer",
    reality: "Consider premium competitiveness, policy features, customer service, riders, and financial stability along with CSR. A holistic view helps make better decisions.",
  },
  {
    myth: "New insurers have unreliable CSR",
    reality: "New insurers need time to establish track record. Look at their parent company's reputation, solvency ratio, and product features. Some new insurers offer excellent value.",
  },
  {
    myth: "Public sector insurers have lower CSR",
    reality: "LIC has consistently maintained high CSR (98.52% in FY 2022-23). Both public and private insurers can have excellent claim settlement records. Judge by data, not ownership.",
  },
];

const faqs = [
  {
    question: "What is a good claim settlement ratio for term insurance?",
    answer: "A claim settlement ratio above 95% is considered good, and above 98% is excellent. However, also look at the absolute number of claims handled. A company handling 30,000+ claims with 98% CSR is more reliable than one handling 1,000 claims with 99% CSR. Consistency over multiple years matters more than a single year's ratio.",
  },
  {
    question: "Where can I find the official claim settlement ratio data?",
    answer: "IRDAI (Insurance Regulatory and Development Authority of India) publishes the Annual Report which contains claim settlement ratios for all registered life insurance companies. You can access these reports on the IRDAI website. The data is typically released 6-8 months after the financial year ends.",
  },
  {
    question: "Can claim be rejected even with high CSR insurer?",
    answer: "Yes, claim rejection can happen with any insurer if there's non-disclosure of material facts (health conditions, habits, occupation), fraud, policy lapse due to non-payment, death due to excluded causes (suicide in first year), or death during waiting period for certain conditions. High CSR indicates better processes, but honest disclosure is essential.",
  },
  {
    question: "What is the difference between CSR and Solvency Ratio?",
    answer: "Claim Settlement Ratio measures an insurer's ability to honor claims (process reliability). Solvency Ratio measures financial strength to meet long-term obligations (financial stability). IRDAI mandates minimum solvency ratio of 1.5. Both are important - CSR for claim reliability, solvency for financial stability.",
  },
  {
    question: "Does higher CSR mean higher premium?",
    answer: "Not necessarily. Premium is determined by age, health, coverage amount, policy term, and riders. Some insurers with excellent CSR offer competitive premiums. Don't compromise on claim reliability to save a small amount on premium - the difference is usually ₹500-1,000 annually.",
  },
  {
    question: "How often is claim settlement ratio updated?",
    answer: "IRDAI publishes claim settlement ratios annually, typically releasing the data 6-8 months after the financial year ends (usually around October-November). The ratios you see are from the previous financial year. Always check the latest available data when comparing insurers.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "Best Plans", description: "Compare top term insurance plans", href: "/term-insurance/best-plans", icon: <Award className="h-5 w-5" /> },
  { title: "Common Mistakes", description: "Avoid these claim rejection reasons", href: "/term-insurance/mistakes", icon: <AlertTriangle className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function ClaimSettlementRatioPage() {
  return (
    <div>
      <HeroSection
        badge="CSR Guide"
        title="Claim Settlement Ratio"
        titleHighlight="Explained & Compared"
        description="Understand what claim settlement ratio means, why it's crucial for choosing term insurance, and compare CSR of all major insurance companies in India."
        primaryCta={{ label: "Compare Insurers", href: "/tools/compare-term-insurance" }}
        secondaryCta={{ label: "Best Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Key Stat */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-[#1e40af] to-[#059669] text-white">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold">95%+</p>
                  <p className="text-blue-100">Good CSR Threshold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%+</p>
                  <p className="text-blue-100">Excellent CSR</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">3-5 Years</p>
                  <p className="text-blue-100">Trend Analysis Period</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What is CSR */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Understanding Claim Settlement Ratio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {csrFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#1e40af]/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-[#1e40af]" />
                    </div>
                    <CardTitle>{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CSR Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Claim Settlement Ratio Comparison (FY 2022-23)
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Insurance Company</TableHead>
                      <TableHead className="text-center">CSR (%)</TableHead>
                      <TableHead className="text-center">Claims Handled</TableHead>
                      <TableHead className="text-center">Rating</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {claimRatios.map((company, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{company.insurer}</TableCell>
                        <TableCell className="text-center">
                          <Badge className={company.csr >= 99 ? "bg-green-100 text-green-700" : company.csr >= 98 ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}>
                            {company.csr}%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">{company.claims.toLocaleString()}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center">
                            {company.csr >= 99 ? (
                              <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                            ) : company.csr >= 98 ? (
                              <Badge className="bg-blue-100 text-blue-700">Very Good</Badge>
                            ) : (
                              <Badge className="bg-amber-100 text-amber-700">Good</Badge>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Source: IRDAI Annual Report FY 2022-23 | CSR may vary slightly based on claim type
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CSR Myths */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Common CSR Myths vs Reality
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {csrMyths.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Myth</Badge>
                      <p className="mt-2 text-muted-foreground">{item.myth}</p>
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-700">Reality</Badge>
                      <p className="mt-2">{item.reality}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Tips for Claim Settlement</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Disclose all health conditions, habits, and occupation details honestly at the time of purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Pay premiums on time - lapsed policies lead to claim rejection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Update nominee details and keep them informed about the policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Keep all policy documents and medical records accessible to your family</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Term Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Choose a Reliable Insurer"
          description="Compare term insurance plans from top insurers with high claim settlement ratios. Make sure your family's claim is honored when they need it most."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-term-insurance" }}
          secondaryCta={{ label: "View Best Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
