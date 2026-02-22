import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  IndianRupee,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Users,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Common Term Insurance Mistakes to Avoid | Complete Guide",
  description: "Avoid these common mistakes when buying term insurance in India. Learn about under-insurance, non-disclosure, wrong policy term, and other pitfalls that can lead to claim rejection.",
  keywords: ["term insurance mistakes", "term insurance errors", "claim rejection reasons", "insurance pitfalls", "term insurance tips"],
};

const mistakes = [
  {
    icon: IndianRupee,
    title: "Being Under-insured",
    problem: "Buying coverage of just ₹20-30 lakhs when you need ₹1-2 crores based on your income, debts, and dependents.",
    consequence: "Your family receives a payout that's insufficient to maintain their lifestyle, pay off loans, or fund future goals. They may struggle financially despite your planning.",
    solution: "Calculate coverage as 10-15 times annual income + all loans + future goals. For ₹12L income with ₹40L home loan, you need at least ₹1.6 Cr coverage.",
    severity: "high",
  },
  {
    icon: FileText,
    title: "Hiding Medical History",
    problem: "Not disclosing pre-existing conditions, past surgeries, family history of diseases, or lifestyle habits like smoking and alcohol consumption.",
    consequence: "This is the #1 reason for claim rejection. Insurers can reject claims even years later if they find non-disclosure. Your family loses the entire benefit when they need it most.",
    solution: "Declare ALL health conditions honestly. Pay slightly higher premium if needed. A policy that costs more but pays is infinitely better than a cheaper policy that rejects claims.",
    severity: "critical",
  },
  {
    icon: Clock,
    title: "Choosing Wrong Policy Term",
    problem: "Taking a 15-20 year term when you have 25-30 years of financial responsibilities ahead (children's education, spouse's retirement).",
    consequence: "Coverage ends just when you need it most. After 50, buying new insurance is extremely expensive or may be denied due to health issues developed during the term.",
    solution: "Choose term until retirement age (60-65) or until your youngest child becomes independent. Better to have coverage longer than needed than fall short.",
    severity: "high",
  },
  {
    icon: RefreshCw,
    title: "Relying Only on Employer Insurance",
    problem: "Depending solely on company-provided group insurance which is typically only 1-2 times your salary.",
    consequence: "Coverage ends when you leave your job. During job transitions, layoffs, or career breaks, you're completely unprotected. Your family gets minimal payout if something happens.",
    solution: "Maintain personal term insurance regardless of employer coverage. Consider employer insurance as a bonus, not your primary protection.",
    severity: "high",
  },
  {
    icon: Users,
    title: "Ignoring Nominee Details",
    problem: "Not updating nominee details, choosing minor as nominee without guardian, or not informing family about the policy.",
    consequence: "Delayed or disputed claims. Family may not even know the policy exists. Legal complications can tie up the death benefit for years.",
    solution: "Update nominee immediately after marriage, childbirth, or any change. Keep policy documents accessible. Tell your spouse/family about the policy and claim process.",
    severity: "medium",
  },
  {
    icon: Shield,
    title: "Buying Without Comparing",
    problem: "Buying the first policy an agent recommends without comparing premiums, features, claim ratios, or rider options.",
    consequence: "You may pay 30-50% higher premium for similar or worse coverage. Or get stuck with an insurer having poor claim settlement record.",
    solution: "Compare at least 5-6 insurers on premium, CSR, features, and riders. Online comparison makes this easy. Don't rush into a decades-long commitment.",
    severity: "medium",
  },
  {
    icon: TrendingUp,
    title: "Not Considering Inflation",
    problem: "Buying ₹50L coverage today thinking it's enough, without accounting for inflation reducing its value over 20-30 years.",
    consequence: "₹50L today will have purchasing power of only ₹19L after 20 years at 5% inflation. Your family's real protection declines every year.",
    solution: "Build 30-40% buffer in coverage. Consider increasing cover option where sum assured grows by 5-10% annually. Review coverage every 5 years.",
    severity: "medium",
  },
  {
    icon: AlertTriangle,
    title: "Delaying the Purchase",
    problem: "Thinking 'I'm young and healthy, I'll buy later' or waiting for the 'perfect time' to buy insurance.",
    consequence: "Premium increases by 8-10% every year you delay. Health issues may develop making coverage expensive or impossible to get. You remain unprotected.",
    solution: "Buy as early as possible - ideally in your 20s. Lock in low premiums for the entire policy term. Tomorrow's health is never guaranteed.",
    severity: "high",
  },
];

const claimRejectionReasons = [
  { reason: "Non-disclosure of health conditions", percentage: 35 },
  { reason: "Non-disclosure of lifestyle habits (smoking, alcohol)", percentage: 20 },
  { reason: "Policy lapse due to non-payment of premium", percentage: 18 },
  { reason: "Death within contestability period (first 2-3 years)", percentage: 12 },
  { reason: "Death due to excluded causes", percentage: 10 },
  { reason: "Fraud or misrepresentation", percentage: 5 },
];

const checklist = [
  "Declare all health conditions, surgeries, and medications",
  "Disclose smoking, alcohol consumption, and tobacco use",
  "Mention family history of heart disease, cancer, diabetes",
  "Declare high-risk occupation or hobbies",
  "Choose coverage based on thorough calculation, not guess",
  "Select policy term covering all financial responsibilities",
  "Compare multiple insurers on premium and CSR",
  "Add essential riders (critical illness, accidental death)",
  "Update nominee details and inform family",
  "Set up auto-debit for premium payments",
  "Keep policy documents accessible to family",
  "Review coverage after major life events",
];

const faqs = [
  {
    question: "What is the biggest mistake people make with term insurance?",
    answer: "The biggest mistake is non-disclosure of health conditions or lifestyle habits. This is the leading cause of claim rejection. People think hiding conditions will get them lower premiums, but it puts the entire coverage at risk. Always be completely honest in your application, even if it means paying slightly higher premiums.",
  },
  {
    question: "Can an insurer reject claim after many years of premium payment?",
    answer: "Yes, insurers can reject claims even years later if they find material non-disclosure at the time of application. The contestability period is typically 2-3 years, after which claim rejection becomes harder but not impossible if fraud or misrepresentation is proven. This is why honest disclosure is crucial.",
  },
  {
    question: "What happens if I forget to pay my premium?",
    answer: "Most policies have a 15-30 day grace period. If you miss that, the policy lapses and coverage stops. You can revive a lapsed policy within 2-5 years by paying pending premiums with interest and possibly undergoing fresh medical tests. Set up auto-debit to avoid this risk.",
  },
  {
    question: "Is it okay to have multiple term insurance policies?",
    answer: "Yes, you can have multiple policies from different insurers. This can be useful for staggering coverage or diversifying across insurers. However, you must declare all existing policies when applying for a new one. Make sure the total coverage is justified by your income.",
  },
  {
    question: "What should I tell my family about my term insurance?",
    answer: "Your family should know: which company you're insured with, the policy number, coverage amount, nominee details, and where policy documents are kept. They should understand the claim process and have contact details of the insurer. Many claims are delayed simply because families don't know the policy exists.",
  },
  {
    question: "How often should I review my term insurance coverage?",
    answer: "Review your coverage at least every 5 years or after major life events - marriage, birth of a child, taking a large loan, significant salary increase, or parents becoming dependent. Your coverage needs change as your responsibilities and income grow.",
  },
];

const relatedPages = [
  { title: "Complete Guide", description: "Everything about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your coverage", href: "/term-insurance/how-much-cover", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Claim Settlement Ratio", description: "Compare insurer reliability", href: "/term-insurance/claim-settlement-ratio", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function MistakesPage() {
  return (
    <div>
      <HeroSection
        badge="Important Warning"
        title="Common Term Insurance"
        titleHighlight="Mistakes to Avoid"
        description="Don't let these common mistakes put your family's financial future at risk. Learn from others' errors and ensure your term insurance actually protects your loved ones."
        primaryCta={{ label: "Calculate Correct Coverage", href: "/tools/term-coverage-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Warning Banner */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Critical Warning: These Mistakes Can Lead to Claim Rejection
                  </h3>
                  <p className="text-muted-foreground">
                    Over 15,000 term insurance claims worth ₹2,500+ crores are rejected annually in India. 
                    Most rejections happen due to mistakes made at the time of purchase - mistakes that families 
                    discover only when filing a claim. Don't let your family face this situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Claim Rejection Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Are Claims Rejected?
          </h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {claimRejectionReasons.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.reason}</span>
                        <span className="text-sm font-medium">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Source: IRDAI Annual Report & Industry Analysis
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Common Mistakes & How to Avoid Them
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((mistake, index) => {
              const Icon = mistake.icon;
              return (
                <Card key={index} className={`h-full ${mistake.severity === 'critical' ? 'border-2 border-red-300' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <Badge className={mistake.severity === 'critical' ? 'bg-red-100 text-red-700' : mistake.severity === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}>
                        {mistake.severity === 'critical' ? 'Critical' : mistake.severity === 'high' ? 'High Risk' : 'Medium Risk'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-3">{mistake.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-red-700 mb-1">The Problem:</p>
                      <p className="text-sm text-muted-foreground">{mistake.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Consequence:</p>
                      <p className="text-sm text-muted-foreground">{mistake.consequence}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-700 mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{mistake.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Pre-Purchase Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Pre-Purchase Checklist
          </h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Before Buying Term Insurance, Ensure:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
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
          title="Don't Make These Mistakes"
          description="Get the right coverage with proper disclosure. Use our calculator to determine your ideal coverage and compare plans from top insurers."
          primaryCta={{ label: "Calculate Coverage", href: "/tools/term-coverage-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
