import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { InsurerLinks } from "@/components/shared/insurer-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, TrendingUp, Shield, IndianRupee } from "lucide-react";
import { termInsurers } from "@/lib/insurer-links";

export const metadata: Metadata = {
  title: "Term Insurance Plans in India | Educational Guide",
  description: "Learn how term insurance plans work in India, what factors to evaluate, and how to choose the right coverage. Educational information only — no product recommendations or ratings.",
  keywords: ["term insurance plans India", "how term insurance works", "term insurance guide", "choosing term insurance"],
};

const comparisonFactors = [
  {
    title: "Claim Settlement Ratio",
    description: "This is the percentage of claims settled by an insurer out of total claims received. A ratio above 95% indicates high reliability. Always prefer insurers with consistent high claim ratios over multiple years.",
    tip: "Look for trends over 3-5 years, not just one year",
  },
  {
    title: "Premium Amount",
    description: "Lower premium doesn't always mean better value. Compare what's included in the base plan. Some insurers include riders in base premium while others charge extra. Always compare for identical coverage.",
    tip: "Get quotes for the same coverage amount and term",
  },
  {
    title: "Policy Features",
    description: "Look for features like increasing sum assured, premium waiver on disability, terminal illness benefit, and flexible payout options. These features can significantly enhance your coverage.",
    tip: "Choose features based on your specific needs",
  },
  {
    title: "Rider Options",
    description: "Critical illness, accidental death, and waiver of premium riders add valuable protection. Check the illnesses covered, claim limits, and premium costs for each rider.",
    tip: "Critical illness rider is highly recommended",
  },
  {
    title: "Customer Service",
    description: "Check online reviews, IRDAI complaint ratios, and ease of claim process. Good customer service is crucial during claim settlement when your family needs support the most.",
    tip: "Test their helpline before buying",
  },
  {
    title: "Financial Stability",
    description: "Check the insurer's solvency ratio (should be above 1.5) and credit rating from agencies like ICRA, CRISIL. This indicates the insurer's ability to honor claims.",
    tip: "Solvency ratio above 1.8 is excellent",
  },
];

const faqs = [
  {
    question: "How do I choose a term insurance company in India?",
    answer: "There's no single best company for everyone — it depends on your specific needs. Compare insurers based on claim settlement ratio (look for consistency over 3-5 years, not just one year), premium for your exact required coverage, the riders and features available, and their solvency ratio. Visit a few insurers' official sites to compare current plans before deciding.",
  },
  {
    question: "Is online term insurance better than offline?",
    answer: "Online term insurance is typically 20-30% cheaper as there are no agent commissions. The policy terms are identical whether bought online or offline. Online plans also offer instant issuance for young, healthy individuals. The main difference is that offline purchases provide agent support during claims.",
  },
  {
    question: "What documents are needed to buy term insurance?",
    answer: "You'll need identity proof (PAN, Aadhaar), address proof, age proof, income proof (salary slips or ITR), and photographs. For coverage above ₹50 lakhs or if you have health conditions, medical tests may be required. The insurer arranges these tests at their cost.",
  },
  {
    question: "Can I switch my term insurance to another company?",
    answer: "Unlike health insurance, term insurance doesn't have portability. However, you can buy a new policy and let the old one lapse. Consider this only if the new premium is significantly lower or if you need higher coverage. Remember that premium increases with age, so switching may not always be beneficial.",
  },
  {
    question: "Should I buy riders with my term insurance?",
    answer: "Critical illness and accidental death riders are valuable additions. Critical illness rider provides a lumpsum if you're diagnosed with a covered illness like cancer or heart attack. Accidental death rider provides additional payout if death is due to accident. These riders are cheaper when bought with the base policy than separately.",
  },
  {
    question: "How accurate are online term insurance calculators?",
    answer: "Online calculators provide estimates based on standard parameters. The actual premium depends on your health assessment, family medical history, lifestyle habits, and occupation. After medical tests, the insurer may offer standard terms, load the premium, or in rare cases, decline coverage.",
  },
];

const relatedPages = [
  { title: "Complete Term Insurance Guide", description: "Everything you need to know about term insurance", href: "/term-insurance", icon: <Shield className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your ideal coverage amount", href: "/term-insurance/how-much-cover", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Claim Settlement Ratio", description: "Understand what claim ratios mean", href: "/term-insurance/claim-settlement-ratio", icon: <Award className="h-5 w-5" /> },
  { title: "Premium Calculator", description: "Calculate your term insurance premium", href: "/term-insurance/premium-calculator", icon: <IndianRupee className="h-5 w-5" /> },
];

export default function BestPlansPage() {
  return (
    <div>
      <HeroSection
        badge="Educational Guide"
        title="Understanding Term Insurance"
        titleHighlight="Plans in India"
        description="Learn what to look for in a term insurance plan and how to evaluate options from different insurers to find the right coverage for your family. This page doesn't rank or recommend specific products."
        primaryCta={{ label: "Calculate Premium", href: "/term-insurance/premium-calculator" }}
        secondaryCta={{ label: "Term Insurance Guide", href: "/term-insurance" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Comparison Factors */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Compare Term Insurance Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{factor.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-[#1e40af]">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      {factor.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outbound insurer links */}
        <InsurerLinks
          title="Explore Term Plans Directly From Insurers"
          description="See current plans, premiums, and features on each insurer's own website."
          insurers={termInsurers}
        />

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Term Insurance" pages={relatedPages} />
      </div>
    </div>
  );
}
