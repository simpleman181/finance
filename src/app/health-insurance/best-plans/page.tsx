import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { InsurerLinks } from "@/components/shared/insurer-links";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, IndianRupee, Users } from "lucide-react";
import { healthInsurers } from "@/lib/insurer-links";

export const metadata: Metadata = {
  title: "Health Insurance Plans in India | Educational Guide",
  description: "Learn how health insurance plans work in India, what factors to evaluate, and how to choose the right coverage. Educational information only — no product recommendations or ratings.",
  keywords: ["health insurance India", "how health insurance works", "health insurance guide", "choosing health insurance"],
};

const comparisonFactors = [
  {
    title: "Sum Insured Options",
    description: "Check if the insurer offers the coverage amount you need. Higher sum insured options provide flexibility as your needs grow.",
  },
  {
    title: "Network Hospitals",
    description: "More network hospitals mean better cashless accessibility. Check for hospitals near you and preferred healthcare providers.",
  },
  {
    title: "Claim Settlement Ratio",
    description: "Look for claim settlement ratio above 80% and quick turnaround time. Higher ratio indicates reliable claim processing.",
  },
  {
    title: "Waiting Period",
    description: "Shorter waiting periods are better. Initial waiting of 30 days, pre-existing disease cover in 2-3 years is standard.",
  },
  {
    title: "Sub-limits & Co-pay",
    description: "Avoid policies with room rent limits or co-payment clauses. These increase out-of-pocket expenses during claims.",
  },
  {
    title: "No Claim Bonus",
    description: "Check NCB structure - some offer 50-100% bonus for claim-free years. This increases effective coverage without extra premium.",
  },
];

const faqs = [
  {
    question: "How do I choose a health insurance company in India?",
    answer: "There's no single best company for everyone — it depends on your needs. Consider claim settlement ratio, network hospitals in your area, premium for your required sum insured, waiting periods, and specific features like room rent limits or co-pay clauses. Visit a few insurers' official sites to compare current plans before deciding.",
  },
  {
    question: "Is cashless treatment better than reimbursement?",
    answer: "Cashless treatment is more convenient as you don't have to pay upfront and claim later. However, cashless is only available at network hospitals. Reimbursement allows treatment at any hospital but requires you to pay first. Ideally, choose an insurer with wide network hospitals near you for cashless accessibility.",
  },
  {
    question: "What is incurred claim ratio in health insurance?",
    answer: "Incurred Claim Ratio (ICR) is the ratio of total claims paid to total premium collected. ICR between 60-90% is considered healthy - it indicates the insurer settles claims fairly without being unsustainable. Very high ICR (>100%) may indicate lax underwriting, while very low ICR (<50%) may indicate claim rejection tendency.",
  },
  {
    question: "Can I port my health insurance to another company?",
    answer: "Yes, IRDAI allows health insurance portability. You can switch insurers while retaining waiting period benefits. Apply for portability at least 45 days before renewal. The new insurer must accept the port-in request. All continuity benefits including waiting periods are transferred to the new policy.",
  },
  {
    question: "Should I buy individual or family floater health insurance?",
    answer: "For young families with low health risks, family floater is more economical and provides flexibility in coverage usage. For families with elderly members or those with health conditions, individual policies may be better as senior claims won't exhaust family coverage. Many people combine both approaches.",
  },
  {
    question: "What is restore benefit in health insurance?",
    answer: "Restore benefit automatically reinstates your sum insured if it's exhausted during the policy year. For example, if you have ₹10 lakh coverage and use it all, restore benefit adds another ₹10 lakh for future claims in the same year. Some policies offer unlimited restoration, others restore only once. This is valuable for families.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your coverage need", href: "/health-insurance/how-much-cover", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Family Floater vs Individual", description: "Choose the right plan type", href: "/health-insurance/individual-vs-family-floater", icon: <Users className="h-5 w-5" /> },
];

export default function BestPlansPage() {
  return (
    <div>
      <HeroSection
        badge="Educational Guide"
        title="Understanding Health Insurance"
        titleHighlight="Plans in India"
        description="Learn what to look for in a health insurance plan and how to evaluate options from different insurers to find the right coverage for your family. This page doesn't rank or recommend specific products."
        primaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        secondaryCta={{ label: "Health Insurance Guide", href: "/health-insurance" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Comparison Factors */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Compare Health Insurance Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outbound insurer links */}
        <InsurerLinks
          title="Explore Health Plans Directly From Insurers"
          description="See current plans, coverage, and premiums on each insurer's own website."
          insurers={healthInsurers}
        />

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />
      </div>
    </div>
  );
}
