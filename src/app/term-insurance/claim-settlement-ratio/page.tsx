import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { InsurerLinks } from "@/components/shared/insurer-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { termInsurers } from "@/lib/insurer-links";
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
  title: "Claim Settlement Ratio of Insurance Companies in India",
  description: "Understand what claim settlement ratio (CSR) means, why it matters, and how to evaluate it when choosing a term insurance company. Educational guide only — no ranking.",
  keywords: ["claim settlement ratio", "CSR insurance", "term insurance claim ratio", "IRDAI claim ratio"],
};

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
    reality: "LIC has historically maintained a high CSR. Both public and private insurers can have excellent claim settlement records — check the current published figures rather than assuming based on ownership.",
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
  { title: "Explore Insurers", description: "See term insurers' official plans", href: "/term-insurance/best-plans", icon: <Award className="h-5 w-5" /> },
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
        description="Understand what claim settlement ratio means, why it's worth checking before choosing term insurance, and where to find the current, official figures."
        primaryCta={{ label: "Explore Insurers", href: "/term-insurance/best-plans" }}
        secondaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
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

        {/* Explore insurers directly */}
        <InsurerLinks
          title="Explore Term Plans Directly From Insurers"
          description="See each insurer's current claim settlement ratio on their own site, or check the official IRDAI Annual Report for the authoritative, dated figures."
          insurers={termInsurers}
        />

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
          description="Check each insurer's current claim settlement ratio directly on their site before you buy."
          primaryCta={{ label: "Explore Insurers", href: "/term-insurance/best-plans" }}
          secondaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
