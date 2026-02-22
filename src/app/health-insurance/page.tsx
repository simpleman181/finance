import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { ContentCard, ContentGrid } from "@/components/shared/content-card";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection, ContactCTA } from "@/components/shared/cta-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { QuickLinks } from "@/components/shared/related-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Hospital,
  IndianRupee,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Activity,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to Health Insurance in India 2024 | FinanceTaxPro",
  description: "Comprehensive guide to health insurance in India. Learn about mediclaim policies, family floater plans, critical illness cover, cashless hospitalization, and how to choose the right health insurance.",
  keywords: ["health insurance India", "mediclaim policy", "family floater health insurance", "health insurance guide", "medical insurance India"],
};

const relatedPages = [
  { title: "How Much Health Cover", description: "Calculate your ideal health coverage", href: "/health-insurance/how-much-cover", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Best Health Plans", description: "Compare top health insurance policies", href: "/health-insurance/best-plans", icon: <Shield className="h-5 w-5" /> },
  { title: "Individual vs Family Floater", description: "Choose the right plan type", href: "/health-insurance/individual-vs-family-floater", icon: <Users className="h-5 w-5" /> },
  { title: "For Parents & Seniors", description: "Health insurance for elderly", href: "/health-insurance/for-parents-seniors", icon: <Heart className="h-5 w-5" /> },
  { title: "Cashless Hospital Network", description: "How cashless treatment works", href: "/health-insurance/cashless-network", icon: <Building className="h-5 w-5" /> },
  { title: "Claim Process", description: "Step-by-step claim guide", href: "/health-insurance/claim-process", icon: <Clock className="h-5 w-5" /> },
];

const quickLinks = [
  { label: "What is Health Insurance", href: "#what-is" },
  { label: "Types of Plans", href: "#types" },
  { label: "Key Features", href: "#features" },
  { label: "How to Choose", href: "#how-to-choose" },
  { label: "Premium Calculator", href: "/health-insurance/premium-calculator" },
];

const faqs = [
  {
    question: "What is the difference between health insurance and mediclaim?",
    answer: "Mediclaim is a specific type of health insurance that covers hospitalization expenses up to the sum insured. Health insurance is a broader term that includes mediclaim plus additional benefits like day care procedures, pre and post hospitalization expenses, ambulance charges, and more. Modern health insurance policies offer comprehensive coverage beyond just hospitalization.",
  },
  {
    question: "What is the ideal health insurance coverage amount?",
    answer: "For metro cities, a minimum of ₹10-15 lakhs coverage is recommended due to higher medical costs. For smaller cities, ₹5-10 lakhs may suffice. However, with rising healthcare inflation of 10-15% annually, consider higher coverage of ₹20-25 lakhs for comprehensive protection. Factor in family size, age, and medical history when deciding.",
  },
  {
    question: "What is the waiting period in health insurance?",
    answer: "Waiting period is the time you must wait before certain coverage kicks in. Initial waiting period is 30 days for most policies. Pre-existing diseases have 2-4 years waiting period. Specific illnesses and maternity benefits have 1-2 years waiting period. Senior citizen plans may have longer waiting periods. Always check waiting periods before buying.",
  },
  {
    question: "Can I claim health insurance immediately after buying?",
    answer: "Most policies have a 30-day initial waiting period except for accidents. Pre-existing conditions have 2-4 years waiting period. Some policies offer day-one coverage for certain conditions at higher premium. Always read the policy document for waiting period details. Emergency hospitalization due to accidents is usually covered from day one.",
  },
  {
    question: "Is cashless treatment available at all hospitals?",
    answer: "Cashless treatment is available only at network hospitals empaneled with your insurer. Each insurer has its own network - some have 5,000+ hospitals while others have 10,000+. Check the network hospital list in your area before buying. In non-network hospitals, you'll need to pay first and then claim reimbursement.",
  },
  {
    question: "What documents are needed for health insurance claim?",
    answer: "For cashless claims, you need health card and KYC documents at the hospital. For reimbursement claims, you need: original bills, discharge summary, diagnostic reports, pharmacy bills, FIR (for accidents), and claim form. Keep all original documents and submit within the stipulated time (usually 15-30 days after discharge).",
  },
];

const comparisonColumns = [
  { key: "individual", label: "Individual Plan" },
  { key: "floater", label: "Family Floater" },
  { key: "critical", label: "Critical Illness" },
];

const comparisonRows = [
  { feature: "Coverage Type", values: { individual: "Single person", floater: "Entire family", critical: "Specific illnesses" } },
  { feature: "Sum Insured", values: { individual: "Per person", floater: "Shared among all", critical: "Fixed per illness" } },
  { feature: "Premium", values: { individual: "Higher total", floater: "More economical", critical: "Additional premium" } },
  { feature: "Flexibility", values: { individual: "High", floater: "Medium", critical: "Limited" } },
  { feature: "Best For", values: { individual: "Individual coverage", floater: "Families", critical: "Supplementary cover" } },
];

const planTypes = [
  {
    icon: Users,
    title: "Individual Health Insurance",
    description: "Covers a single person with a dedicated sum insured. Ideal for those who want personal coverage without dependency on others' claims. Premium is based on individual age and health profile.",
    color: "#1e40af",
  },
  {
    icon: Heart,
    title: "Family Floater Plan",
    description: "Single policy covering entire family under one sum insured that floats among all members. More economical than individual policies and simpler to manage. Best for young families.",
    color: "#059669",
  },
  {
    icon: Activity,
    title: "Critical Illness Cover",
    description: "Provides lumpsum payout on diagnosis of specified critical illnesses like cancer, heart attack, stroke. Benefit is paid regardless of actual treatment expenses. Acts as income replacement.",
    color: "#dc2626",
  },
  {
    icon: Building,
    title: "Group Health Insurance",
    description: "Employer-provided coverage for employees and sometimes their families. Typically has no waiting periods and covers pre-existing conditions from day one. Coverage ends when you leave the job.",
    color: "#7c3aed",
  },
];

const benefits = [
  { icon: Hospital, title: "Hospitalization Cover", description: "Room rent, ICU charges, doctor fees, nursing expenses during hospitalization" },
  { icon: Activity, title: "Day Care Procedures", description: "Medical procedures that don't require 24-hour hospitalization (600+ procedures covered)" },
  { icon: IndianRupee, title: "Pre & Post Hospitalization", description: "Medical expenses before (30-60 days) and after (60-180 days) hospitalization" },
  { icon: Shield, title: "Critical Illness Cover", description: "Additional lumpsum payout for major illnesses like cancer, heart attack, stroke" },
  { icon: Clock, title: "Ambulance Charges", description: "Emergency ambulance expenses up to specified limit per hospitalization" },
  { icon: CheckCircle, title: "Health Check-up", description: "Free annual health check-up after claim-free years (varies by policy)" },
];

export default function HealthInsurancePage() {
  return (
    <div>
      <HeroSection
        badge="Complete Guide"
        title="Everything You Need to Know About"
        titleHighlight="Health Insurance in India"
        description="Rising medical costs can deplete your savings in days. Learn how health insurance protects you from financial emergencies and get the right coverage for your family's medical needs."
        primaryCta={{ label: "Calculate Coverage", href: "/health-insurance/premium-calculator" }}
        secondaryCta={{ label: "Compare Plans", href: "/health-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        <QuickLinks title="Jump To Section" links={quickLinks} />

        {/* Introduction */}
        <section className="max-w-4xl mb-12" id="what-is">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What is Health Insurance?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Health insurance is a contract between you and an insurance company that provides financial 
            coverage for medical expenses. When you need medical treatment, the insurer pays for your 
            hospitalization, surgery, medication, and other healthcare costs as per the policy terms, 
            either directly to the hospital (cashless) or as reimbursement.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            With healthcare inflation in India running at 10-15% annually, a single hospitalization 
            can cost ₹2-10 lakhs depending on the treatment and city. A heart bypass surgery in a 
            private hospital costs ₹3-5 lakhs. Cancer treatment can run into ₹10-20 lakhs. Without 
            health insurance, such expenses can wipe out years of savings.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Health insurance in India is regulated by IRDAI and offers tax benefits under Section 80D. 
            Premiums paid for self, spouse, children, and parents are deductible up to ₹75,000 per year 
            (₹25,000 self + family, ₹25,000 for parents below 60, additional ₹25,000 for senior citizen parents).
          </p>
        </section>

        {/* Plan Types */}
        <section className="mb-12" id="types">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of Health Insurance Plans
          </h2>
          <ContentGrid columns={2}>
            {planTypes.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <ContentCard
                  key={index}
                  title={plan.title}
                  description={plan.description}
                  href="#"
                  icon={<Icon className="h-6 w-6" style={{ color: plan.color }} />}
                />
              );
            })}
          </ContentGrid>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What Does Health Insurance Cover?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-[#059669]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Comparing Plan Types
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Understanding the differences helps you choose the right type of coverage for your needs.
          </p>
          <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />
        </section>

        {/* How to Choose */}
        <section className="mb-12" id="how-to-choose">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How to Choose the Right Health Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg">Determine Sum Insured</h3>
                  <p className="text-muted-foreground">Consider healthcare costs in your city, family size, and medical history. For metros, ₹10-15 lakhs minimum is recommended. Higher coverage costs only marginally more.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg">Check Network Hospitals</h3>
                  <p className="text-muted-foreground">Ensure your preferred hospitals are in the insurer's cashless network. Check for network hospitals near your home and workplace for emergency accessibility.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg">Understand Waiting Periods</h3>
                  <p className="text-muted-foreground">Check initial waiting period (usually 30 days), pre-existing disease waiting (2-4 years), and specific illness waiting (1-2 years). Lower is better.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg">Check Sub-limits & Co-pay</h3>
                  <p className="text-muted-foreground">Avoid policies with room rent limits or co-payment clauses unless necessary. These can reduce premiums but increase out-of-pocket expenses during claims.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-lg">Compare Claim Settlement</h3>
                  <p className="text-muted-foreground">Look for insurers with high claim settlement ratio and quick turnaround time. Check Incurred Claims Ratio (ICR) - 60-90% indicates healthy balance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="font-semibold text-lg">Review Annually</h3>
                  <p className="text-muted-foreground">Review your coverage annually or after major life events. Increase coverage as healthcare costs rise. Most policies offer no-claim bonus that increases sum insured.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important: Don't Rely Only on Employer Insurance</h4>
                <p className="text-muted-foreground mb-4">
                  Company-provided health insurance ends when you leave your job. During job transitions, 
                  layoffs, or retirement, you may find yourself without coverage. Always maintain personal 
                  health insurance regardless of employer coverage.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Badge variant="outline" className="bg-white">Coverage may be insufficient</Badge>
                  <Badge variant="outline" className="bg-white">Ends with employment</Badge>
                  <Badge variant="outline" className="bg-white">No portability benefits</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion
          faqs={faqs}
          title="Frequently Asked Questions"
          description="Find answers to common questions about health insurance in India"
        />

        {/* Related Pages */}
        <RelatedPages title="Explore More on Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Ready to Protect Your Family's Health?"
          description="Use our comparison tools to find the best health insurance plan. Compare coverage, premiums, and features from top insurers."
          primaryCta={{ label: "Compare Plans", href: "/health-insurance/best-plans" }}
          secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        />

        <ContactCTA />
      </div>
    </div>
  );
}
