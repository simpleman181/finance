import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  TrendingUp,
  Shield,
  IndianRupee,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  LineChart,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Term Insurance for Self-Employed & Business Owners in India",
  description: "Complete guide to term insurance for self-employed professionals, freelancers, and business owners. Learn about coverage for business liabilities, income volatility, and family protection.",
  keywords: ["term insurance self employed", "term insurance business owner", "freelancer term insurance", "entrepreneur insurance India"],
};

const challenges = [
  {
    icon: TrendingUp,
    title: "Irregular Income",
    description: "Unlike salaried employees, self-employed individuals often face fluctuating income. This makes it crucial to have a substantial financial safety net. Term insurance ensures your family can handle income volatility even in your absence.",
    solution: "Choose flexible premium payment options",
  },
  {
    icon: Building,
    title: "Business Liabilities",
    description: "Business loans, equipment financing, and commercial property mortgages are common for entrepreneurs. If something happens to you, these liabilities shouldn't fall on your family. Your term coverage should account for all business debts.",
    solution: "Include business loans in coverage calculation",
  },
  {
    icon: Users,
    title: "No Employer Benefits",
    description: "Self-employed individuals don't have employer-provided group insurance or gratuity benefits. You need to create your own safety net. Personal term insurance becomes even more critical for comprehensive protection.",
    solution: "Build your own insurance portfolio",
  },
  {
    icon: FileText,
    title: "Income Documentation",
    description: "Proving income for high coverage can be challenging without salary slips. ITR documents, bank statements, and business financials become crucial. Choose insurers who understand self-employed income patterns.",
    solution: "Maintain clean financial records",
  },
];

const coverageTips = [
  {
    title: "Include All Business Loans",
    items: [
      "Business loans and overdraft facilities",
      "Equipment and machinery financing",
      "Commercial property mortgages",
      "Personal guarantees given for business",
      "Credit card dues (business and personal)",
    ],
  },
  {
    title: "Account for Business Continuity",
    items: [
      "Working capital needs for 6-12 months",
      "Employee salaries for transition period",
      "Cost of hiring professional manager",
      "Business restructuring costs",
      "Outstanding client commitments",
    ],
  },
  {
    title: "Personal Financial Goals",
    items: [
      "Children's education (₹30-50L per child)",
      "Children's marriage (₹15-25L)",
      "Spouse's retirement corpus",
      "Outstanding personal loans",
      "Regular household expenses for 15+ years",
    ],
  },
];

const professionSpecific = [
  {
    profession: "Doctor",
    icon: "🏥",
    recommendedCover: "₹2-5 Crore",
    considerations: "High earning potential, clinic setup loans, professional indemnity needs",
    premium: "₹15,000-25,000/year",
  },
  {
    profession: "CA/Lawyer",
    icon: "⚖️",
    recommendedCover: "₹1.5-3 Crore",
    considerations: "Office setup, staff salaries, client obligations",
    premium: "₹12,000-20,000/year",
  },
  {
    profession: "Freelancer",
    icon: "💻",
    recommendedCover: "₹1-2 Crore",
    considerations: "Irregular income, no paid leaves, self-funded retirement",
    premium: "₹8,000-15,000/year",
  },
  {
    profession: "Shop Owner",
    icon: "🏪",
    recommendedCover: "₹1.5-3 Crore",
    considerations: "Inventory, shop rental deposits, supplier dues",
    premium: "₹10,000-20,000/year",
  },
  {
    profession: "Startup Founder",
    icon: "🚀",
    recommendedCover: "₹2-5 Crore",
    considerations: "Investor commitments, company liabilities, personal guarantees",
    premium: "₹15,000-30,000/year",
  },
  {
    profession: "Consultant",
    icon: "📊",
    recommendedCover: "₹1-2.5 Crore",
    considerations: "Project-based income, client relationships, intellectual property",
    premium: "₹8,000-18,000/year",
  },
];

const incomeProofTips = [
  "Last 3 years' Income Tax Returns (ITR) with computation of income",
  "Bank statements for last 12 months showing business income",
  "GST registration and returns if applicable",
  "Business registration documents (Shop Act, Company Registration, etc.)",
  "CA certified financial statements for larger coverage amounts",
  "Profit and loss statements and balance sheets",
];

const faqs = [
  {
    question: "How much term insurance do self-employed people need?",
    answer: "Self-employed individuals typically need higher coverage than salaried employees because they have business liabilities in addition to personal responsibilities. A good starting point is 15-20 times your average annual income plus all business loans and personal debts. Also factor in working capital needs and family's living expenses for at least 15 years.",
  },
  {
    question: "Can I get term insurance if I just started my business?",
    answer: "Yes, you can get term insurance even as a new business owner. However, coverage amount may be limited based on past income proofs. Some insurers accept bank statements showing business transactions. As your business grows and income stabilizes, you can increase coverage by buying additional policies.",
  },
  {
    question: "What documents do self-employed need for term insurance?",
    answer: "Self-employed individuals need to provide IT returns for the last 2-3 years, bank statements for 6-12 months, business registration documents, and in some cases, CA-certified financials. For high coverage (above ₹1 crore), insurers may require additional income proof and medical tests.",
  },
  {
    question: "Does term insurance cover business loans?",
    answer: "The death benefit from term insurance can be used by your family to pay off any liabilities, including business loans. However, it's separate from keyman insurance that covers the business itself. If you have personal guarantees on business loans, your family becomes liable after your demise - term insurance protects them from this burden.",
  },
  {
    question: "Is term insurance premium tax deductible for self-employed?",
    answer: "Yes, self-employed individuals can claim deduction for term insurance premium under Section 80C up to ₹1.5 lakh. Additionally, if you've paid premium for your spouse or children's policy, those also qualify for 80C deduction. The death benefit received by nominees is tax-free under Section 10(10D).",
  },
  {
    question: "What if my business income fluctuates significantly?",
    answer: "Choose premium payment options that align with your cash flow. Options include annual, half-yearly, quarterly, or monthly premiums. Some insurers offer limited premium payment terms where you pay higher premiums for fewer years. Consider building an emergency fund to cover premiums during lean periods.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your ideal coverage amount", href: "/term-insurance/how-much-cover", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "For Salaried Employees", description: "Term insurance for salaried professionals", href: "/term-insurance/for-salaried", icon: <Users className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function ForSelfEmployedPage() {
  return (
    <div>
      <HeroSection
        badge="For Self-Employed"
        title="Term Insurance for"
        titleHighlight="Self-Employed & Business Owners"
        description="As a business owner or freelancer, you don't have employer-provided insurance. Learn how to protect your family and business with the right term insurance coverage."
        primaryCta={{ label: "Calculate Coverage", href: "/tools/term-coverage-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Key Insight */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <LineChart className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    Self-Employed Need Higher Coverage
                  </h3>
                  <p className="text-muted-foreground">
                    Unlike salaried employees with fixed income and employer benefits, self-employed individuals 
                    face income volatility, business liabilities, and no guaranteed retirement benefits. Your term 
                    insurance should cover business debts, family expenses, and provide for irregular income periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Unique Challenges for Self-Employed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">
                      💡 {item.solution}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Coverage Tips */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What to Include in Your Coverage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coverageTips.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="bg-[#1e40af] text-white rounded-t-lg">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Profession Specific */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Coverage by Profession
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionSpecific.map((prof, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{prof.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{prof.profession}</CardTitle>
                      <p className="text-sm text-muted-foreground">Recommended: {prof.recommendedCover}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{prof.considerations}</p>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-sm">Est. Premium</span>
                    <Badge className="bg-green-100 text-green-700">{prof.premium}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Income Proof Section */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#1e40af]" />
                Documents Required for Self-Employed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {incomeProofTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    For coverage above ₹1 crore, insurers may require additional financial documents and medical tests.
                    Maintain consistent ITR filings as they serve as primary income proof for self-employed individuals.
                  </p>
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
          title="Protect Your Business & Family"
          description="As a self-employed professional, your family's financial security depends solely on your planning. Get comprehensive term insurance coverage today."
          primaryCta={{ label: "Calculate Coverage", href: "/tools/term-coverage-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
