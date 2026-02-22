import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { ContentCard, ContentGrid } from "@/components/shared/content-card";
import { CTASection, ContactCTA } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { QuickLinks } from "@/components/shared/related-pages";
import { ComparisonTable } from "@/components/shared/comparison-table";
import {
  Shield,
  Calculator,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to Term Insurance in India 2024 | FinanceTaxPro",
  description: "Everything you need to know about term insurance in India. Learn how to choose the right plan, compare premiums, understand riders, and secure your family's financial future.",
  keywords: ["term insurance", "term life insurance India", "best term insurance", "term insurance guide", "life insurance India"],
  openGraph: {
    title: "Complete Guide to Term Insurance in India 2024",
    description: "Comprehensive guide to understanding and buying term insurance in India",
    type: "article",
  },
};

const relatedPages = [
  { title: "How Much Term Insurance Cover", description: "Calculate the ideal coverage amount for your family", href: "/term-insurance/how-much-cover", icon: <Calculator className="h-5 w-5" /> },
  { title: "Best Term Insurance Plans", description: "Compare top term insurance plans in India", href: "/term-insurance/best-plans", icon: <Award className="h-5 w-5" /> },
  { title: "For Salaried Employees", description: "Best term insurance options for salaried individuals", href: "/term-insurance/for-salaried", icon: <Users className="h-5 w-5" /> },
  { title: "Term Insurance Riders", description: "Understand critical illness, accidental death riders", href: "/term-insurance/riders", icon: <Shield className="h-5 w-5" /> },
  { title: "Claim Settlement Ratio", description: "Compare claim settlement ratios of insurers", href: "/term-insurance/claim-settlement-ratio", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your term insurance premium instantly", href: "/term-insurance/premium-calculator", icon: <Calculator className="h-5 w-5" /> },
];

const quickLinks = [
  { label: "What is Term Insurance", href: "#what-is-term-insurance" },
  { label: "Benefits", href: "#benefits" },
  { label: "How to Choose", href: "#how-to-choose" },
  { label: "Documents Required", href: "#documents" },
  { label: "Premium Calculator", href: "/term-insurance/premium-calculator" },
];

const faqs = [
  {
    question: "What is term insurance and how is it different from other life insurance?",
    answer: "Term insurance is a pure life insurance product that provides coverage for a specific period (term). Unlike traditional life insurance plans, it doesn't have any investment component or maturity benefit. If the policyholder dies during the term, the nominee receives the sum assured. If the policyholder survives the term, no benefit is paid. This makes term insurance the most affordable way to get high life coverage.",
  },
  {
    question: "How much term insurance coverage do I need?",
    answer: "A general rule of thumb is to have coverage of 10-15 times your annual income. However, the ideal coverage depends on factors like your age, number of dependents, existing loans, future financial goals, and current expenses. Use our Term Insurance Coverage Calculator to get a personalized recommendation.",
  },
  {
    question: "What is the right age to buy term insurance?",
    answer: "The earlier, the better. Buying term insurance in your 20s or early 30s helps you lock in lower premiums for the entire policy term. Premiums increase with age due to higher health risks. Additionally, buying young ensures you get coverage before any health issues develop that could lead to policy rejection or higher premiums.",
  },
  {
    question: "What happens if I survive the policy term?",
    answer: "If you survive the policy term, the coverage ends and no benefit is paid. This is the fundamental nature of term insurance - it's pure protection, not investment. However, the peace of mind and financial security it provides during the term is invaluable. Some insurers offer 'Return of Premium' variants that return all premiums paid if you survive, but these come with significantly higher premiums.",
  },
  {
    question: "Can I have multiple term insurance policies?",
    answer: "Yes, you can have multiple term insurance policies from different insurers. However, you must declare existing policies when applying for a new one. Having multiple policies can be useful for staggering coverage as your financial responsibilities decrease over time, or for diversifying across insurers. Just ensure the total coverage is justified by your income and needs.",
  },
  {
    question: "What are the common reasons for claim rejection?",
    answer: "The most common reasons for claim rejection include: non-disclosure or misrepresentation of facts (health conditions, habits, occupation), policy lapse due to non-payment of premiums, death within the waiting period (usually first 2-3 years for certain conditions), and death due to excluded causes (suicide in first year, dangerous activities, etc.). Always be truthful in your application and pay premiums on time.",
  },
];

const comparisonColumns = [
  { key: "term", label: "Term Insurance" },
  { key: "whole", label: "Whole Life" },
  { key: "endowment", label: "Endowment" },
  { key: "ulip", label: "ULIP" },
];

const comparisonRows = [
  { feature: "Premium Cost", values: { term: "Lowest", whole: "High", endowment: "High", ulip: "High" } },
  { feature: "Coverage Amount", values: { term: "Highest", whole: "Medium", endowment: "Low", ulip: "Low" } },
  { feature: "Investment Component", values: { term: false, whole: true, endowment: true, ulip: true } },
  { feature: "Maturity Benefit", values: { term: false, whole: true, endowment: true, ulip: true } },
  { feature: "Flexibility", values: { term: "High", whole: "Low", endowment: "Low", ulip: "Medium" } },
  { feature: "Tax Benefit", values: { term: "80C + 10(10D)", whole: "80C + 10(10D)", endowment: "80C + 10(10D)", ulip: "80C + 10(10D)" } },
];

const benefits = [
  { icon: Shield, title: "High Coverage at Low Cost", description: "Get coverage of ₹1 crore starting from just ₹490/month. Term insurance offers the highest coverage per rupee of premium among all life insurance products." },
  { icon: Users, title: "Financial Security for Family", description: "Ensure your family can maintain their lifestyle, pay off loans, and achieve future goals even in your absence. The death benefit is tax-free under Section 10(10D)." },
  { icon: TrendingUp, title: "Tax Benefits", description: "Premiums paid are deductible under Section 80C (up to ₹1.5 lakh). Death benefit received by nominee is completely tax-free under Section 10(10D)." },
  { icon: CheckCircle, title: "Flexible Payout Options", description: "Choose between lump sum payout, monthly income, or a combination. Some plans offer increasing monthly income to counter inflation." },
];

const documents = [
  "Identity Proof (PAN Card, Aadhaar, Passport)",
  "Address Proof (Aadhaar, Utility Bills, Passport)",
  "Age Proof (Birth Certificate, Passport, School Certificate)",
  "Income Proof (Salary Slips, ITR, Bank Statements)",
  "Photographs (Passport size)",
  "Medical Reports (if required based on coverage amount)",
];

export default function TermInsurancePage() {
  return (
    <div>
      <HeroSection
        badge="Complete Guide"
        title="Everything You Need to Know About"
        titleHighlight="Term Insurance in India"
        description="Term insurance is the most affordable way to secure your family's financial future. Get comprehensive coverage at a fraction of the cost of traditional life insurance. Learn how to choose the right plan, compare options, and make an informed decision."
        primaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        <QuickLinks title="Jump To Section" links={quickLinks} />

        {/* Introduction Section */}
        <section className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" id="what-is-term-insurance">
            What is Term Insurance?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Term insurance is a type of life insurance policy that provides coverage for a specified period or "term." 
            It is designed to offer financial protection to your loved ones in case of your untimely demise during the 
            policy term. Unlike traditional life insurance plans, term insurance is pure protection - there's no 
            investment component or maturity benefit.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            This simplicity makes term insurance the most affordable form of life insurance. You can get a coverage 
            of ₹1 crore for as low as ₹490 per month (for a healthy 25-year-old non-smoker). The death benefit 
            received by your nominee is completely tax-free under Section 10(10D) of the Income Tax Act.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            In India, term insurance has gained massive popularity in recent years as awareness about financial 
            planning has increased. With rising costs of living, education, and healthcare, having adequate life 
            coverage is no longer optional - it's a necessity for anyone with financial dependents.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" id="benefits">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Choose Term Insurance?
          </h2>
          <ContentGrid columns={2}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ContentCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  href="#"
                  icon={<Icon className="h-6 w-6 text-[#1e40af]" />}
                />
              );
            })}
          </ContentGrid>
        </section>

        {/* Comparison Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Term Insurance vs Other Life Insurance Plans
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Understanding how term insurance compares to other life insurance products helps you make an informed decision.
            Here's a detailed comparison:
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-[#1e40af] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#1e40af] mb-2">Expert Tip</h4>
                <p className="text-muted-foreground">
                  For most individuals, the ideal approach is "Buy Term and Invest the Difference." Purchase term 
                  insurance for protection and invest the premium savings in mutual funds, PPF, or other investment 
                  instruments. This strategy typically yields better returns than combining insurance and investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="mb-16" id="how-to-choose">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How to Choose the Right Term Insurance Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg">Determine Coverage Amount</h3>
                  <p className="text-muted-foreground">Calculate your family's future financial needs including living expenses, children's education, outstanding loans, and emergency fund. A coverage of 10-15 times your annual income is a good starting point.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg">Choose Policy Term</h3>
                  <p className="text-muted-foreground">Select a term that covers you until your financial responsibilities end - typically until your youngest child becomes independent or you retire. Most insurers offer terms up to 40 years or age 75-80.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg">Compare Premiums</h3>
                  <p className="text-muted-foreground">Get quotes from multiple insurers. Premiums can vary significantly for the same coverage. Use our comparison tool to find the best rates from top insurers.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg">Check Claim Settlement Ratio</h3>
                  <p className="text-muted-foreground">A high claim settlement ratio (above 95%) indicates the insurer's reliability in settling claims. IRDAI publishes these ratios annually for all insurance companies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-lg">Consider Riders</h3>
                  <p className="text-muted-foreground">Add-on riders like critical illness, accidental death benefit, and waiver of premium can enhance your coverage. Choose riders based on your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="font-semibold text-lg">Disclose All Information</h3>
                  <p className="text-muted-foreground">Be completely honest in your application. Non-disclosure of health conditions, habits, or occupation can lead to claim rejection later.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="mb-16" id="documents">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Documents Required for Term Insurance
          </h2>
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#059669]" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          faqs={faqs}
          title="Frequently Asked Questions"
          description="Find answers to common questions about term insurance in India"
        />

        {/* Related Pages */}
        <RelatedPages title="Explore More on Term Insurance" pages={relatedPages} />

        {/* CTA Section */}
        <CTASection
          title="Ready to Secure Your Family's Future?"
          description="Use our premium calculator to get instant quotes from top insurers. Compare plans and find the best coverage at the most affordable price."
          primaryCta={{ label: "Calculate Premium Now", href: "/term-insurance/premium-calculator" }}
          secondaryCta={{ label: "Compare Plans", href: "/term-insurance/best-plans" }}
        />

        <ContactCTA />
      </div>
    </div>
  );
}
