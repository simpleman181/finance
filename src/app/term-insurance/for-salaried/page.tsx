import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building,
  TrendingUp,
  Shield,
  IndianRupee,
  CheckCircle,
  AlertTriangle,
  Clock,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Term Insurance for Salaried Employees in India | Complete Guide",
  description: "Complete guide to term insurance for salaried employees. Learn about employer coverage, group insurance limitations, and how much additional coverage you need.",
  keywords: ["term insurance for salaried", "employee term insurance", "group insurance vs term insurance", "salary insurance India"],
};

const considerations = [
  {
    icon: Building,
    title: "Employer-Provided Coverage",
    description: "Many companies offer group term insurance as part of their benefits package. However, this coverage is typically 1-2 times your annual salary, which is usually insufficient. More importantly, it ends when you leave the job - a critical gap when you need coverage the most.",
    action: "Check your company policy details",
  },
  {
    icon: Clock,
    title: "Job Change Risks",
    description: "In today's dynamic job market, changing jobs is common. During transition periods between jobs, you may be without coverage. If you take a sabbatical or are between jobs for an extended period, the risk of being uninsured increases significantly.",
    action: "Maintain personal term insurance",
  },
  {
    icon: TrendingUp,
    title: "Coverage Gap Analysis",
    description: "If your ideal coverage is ₹2 crore (based on your needs) and your employer provides ₹20 lakhs, you have a gap of ₹1.8 crore. This gap should be covered by a personal term insurance policy that stays with you regardless of employment status.",
    action: "Calculate your coverage gap",
  },
  {
    icon: IndianRupee,
    title: "Tax Benefits",
    description: "Premiums paid for personal term insurance are deductible under Section 80C (up to ₹1.5 lakh). While employer-paid premiums are tax-exempt up to ₹50,000, the coverage is limited. Personal policies give you both adequate coverage and tax benefits.",
    action: "Maximize your 80C benefits",
  },
];

const benefits = [
  {
    title: "Continuous Coverage",
    description: "Personal term insurance stays with you regardless of job changes, layoffs, or career breaks. You're protected even during job transitions.",
  },
  {
    title: "Higher Coverage Amount",
    description: "While employer coverage is limited to 1-2x salary, personal policies can provide ₹1-5 crore coverage based on your needs.",
  },
  {
    title: "Customizable Features",
    description: "Choose riders, payout options, and policy terms that suit your specific situation. Employer plans are one-size-fits-all.",
  },
  {
    title: "Fixed Premiums",
    description: "Lock in lower premiums when you're young. Employer group insurance premiums increase with age and are not guaranteed.",
  },
  {
    title: "Family Protection",
    description: "Ensure your family's financial security is not tied to your employment. Your coverage continues even if you lose your job.",
  },
  {
    title: "Peace of Mind",
    description: "Focus on your career knowing your family is protected. No need to worry about coverage gaps during job changes.",
  },
];

const salarySlabs = [
  {
    range: "₹3-5 Lakh",
    recommendedCover: "₹50 Lakh - ₹75 Lakh",
    annualPremium: "₹4,000 - ₹6,000",
    tips: ["Start with basic coverage", "Focus on clearing debts first", "Consider increasing cover as income grows"],
  },
  {
    range: "₹5-10 Lakh",
    recommendedCover: "₹75 Lakh - ₹1.5 Crore",
    annualPremium: "₹6,000 - ₹12,000",
    tips: ["Cover all outstanding loans", "Include children's education fund", "Add critical illness rider"],
  },
  {
    range: "₹10-20 Lakh",
    recommendedCover: "₹1.5 Crore - ₹3 Crore",
    annualPremium: "₹10,000 - ₹20,000",
    tips: ["Comprehensive coverage essential", "Consider increasing cover option", "Include multiple riders"],
  },
  {
    range: "₹20+ Lakh",
    recommendedCover: "₹3 Crore - ₹5 Crore+",
    annualPremium: "₹15,000 - ₹30,000",
    tips: ["May need multiple policies", "Stagger coverage based on goals", "Estate planning considerations"],
  },
];

const faqs = [
  {
    question: "Is employer-provided term insurance enough?",
    answer: "Usually not. Employer-provided coverage is typically 1-2 times your annual salary, while financial advisors recommend 10-15 times your income. Additionally, this coverage ends when you leave the job. Always maintain a personal term insurance policy for comprehensive protection.",
  },
  {
    question: "What happens to my company insurance if I resign?",
    answer: "Your company-provided term insurance coverage ends on your last working day or shortly after. Some companies offer conversion to individual policies, but at significantly higher premiums. It's always better to have your own personal term insurance that isn't tied to your employment.",
  },
  {
    question: "Should I disclose my employer insurance while buying personal term insurance?",
    answer: "Yes, you should disclose all existing life insurance policies when applying for a new one. This helps insurers assess the total coverage and ensures there are no issues during claim settlement. Having employer insurance doesn't prevent you from buying additional personal coverage.",
  },
  {
    question: "Can I claim tax benefits on both employer and personal term insurance?",
    answer: "Employer-paid premiums up to ₹50,000 are tax-exempt perquisites. For personal term insurance, you can claim deductions under Section 80C up to ₹1.5 lakh. Both benefits can be availed separately. However, the premium you pay for personal insurance qualifies for 80C deduction.",
  },
  {
    question: "How much term insurance should a 30-year-old salaried person have?",
    answer: "A 30-year-old earning ₹10 lakh annually should have coverage of at least ₹1-1.5 crore. Factor in any existing loans (home loan, car loan), future goals (children's education), and current expenses. For ₹1 crore coverage, the annual premium would be approximately ₹7,000-10,000.",
  },
  {
    question: "Should I increase my term insurance coverage after salary hike?",
    answer: "Review your coverage every 2-3 years or after major salary changes. If your income has increased significantly, your lifestyle and family's financial needs have likely increased too. You can buy an additional policy to bridge the gap rather than replacing the existing one.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your ideal coverage amount", href: "/term-insurance/how-much-cover", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "For Self Employed", description: "Term insurance for business owners", href: "/term-insurance/for-self-employed", icon: <Briefcase className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function ForSalariedPage() {
  return (
    <div>
      <HeroSection
        badge="For Salaried Employees"
        title="Term Insurance for"
        titleHighlight="Salaried Employees"
        description="Your employer's group insurance is not enough. Learn why salaried professionals need personal term insurance and how much coverage you actually need beyond your company policy."
        primaryCta={{ label: "Calculate Coverage Gap", href: "/tools/term-coverage-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Key Insight */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">
                    Important: Your Company Insurance Has Limitations
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Most companies provide coverage of just 1-2 times your annual salary. If you earn ₹12 lakhs, 
                    your company cover might be only ₹12-24 lakhs. Your family would need much more to maintain 
                    their lifestyle, pay off loans, and fund future goals. Plus, this coverage ends the day you leave your job.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-2xl font-bold text-amber-600">₹12L</p>
                      <p className="text-xs text-muted-foreground">Your Salary</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-2xl font-bold text-red-600">₹24L</p>
                      <p className="text-xs text-muted-foreground">Company Cover</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">₹1.5 Cr</p>
                      <p className="text-xs text-muted-foreground">Actual Need</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Considerations for Salaried Employees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#1e40af]/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-[#1e40af]" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="bg-blue-50">
                      {item.action}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits of Personal Policy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why You Need Personal Term Insurance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#059669] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Salary-based Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Recommended Coverage by Salary Range
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salarySlabs.map((slab, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="bg-[#1e40af] text-white rounded-t-lg">
                  <CardDescription className="text-blue-200">Annual Salary</CardDescription>
                  <CardTitle className="text-xl">{slab.range}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Recommended Cover</p>
                      <p className="text-lg font-semibold text-[#1e40af]">{slab.recommendedCover}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Est. Annual Premium</p>
                      <p className="text-lg font-semibold text-[#059669]">{slab.annualPremium}</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs font-medium mb-2">Tips:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {slab.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison: Company vs Personal */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Company Insurance vs Personal Term Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Feature</th>
                      <th className="text-center py-3">Company Insurance</th>
                      <th className="text-center py-3">Personal Insurance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Coverage Amount</td>
                      <td className="text-center text-red-600">1-2x Salary (Limited)</td>
                      <td className="text-center text-green-600">As per Need (₹1-5 Cr)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Portability</td>
                      <td className="text-center text-red-600">Lost when you leave job</td>
                      <td className="text-center text-green-600">Stays with you for life</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Customization</td>
                      <td className="text-center text-red-600">One-size-fits-all</td>
                      <td className="text-center text-green-600">Fully customizable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Riders</td>
                      <td className="text-center text-red-600">Limited or none</td>
                      <td className="text-center text-green-600">Multiple options</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Premium</td>
                      <td className="text-center text-green-600">Employer pays</td>
                      <td className="text-center text-amber-600">You pay (tax benefits)</td>
                    </tr>
                    <tr>
                      <td className="py-3">Claim Control</td>
                      <td className="text-center text-red-600">Employer involvement</td>
                      <td className="text-center text-green-600">Direct nominee claim</td>
                    </tr>
                  </tbody>
                </table>
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
          title="Secure Your Family's Future Today"
          description="Don't rely solely on your employer's coverage. Get a personal term insurance policy that stays with you through all career changes."
          primaryCta={{ label: "Calculate Your Coverage", href: "/tools/term-coverage-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
