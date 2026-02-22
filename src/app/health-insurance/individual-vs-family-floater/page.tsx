import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection } from "@/components/shared/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  IndianRupee,
  Users,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Individual vs Family Floater Health Insurance | Which is Better?",
  description: "Compare individual health insurance vs family floater plans. Understand pros, cons, and which option is better for your family's health coverage needs.",
  keywords: ["individual vs family floater", "family health insurance", "health insurance comparison", "best health insurance for family"],
};

const comparisonData = [
  { factor: "Coverage", individual: "Dedicated sum insured per person", floater: "Shared sum insured for family" },
  { factor: "Premium", individual: "Higher total premium", floater: "Lower total premium" },
  { factor: "Coverage Exhaustion", individual: "One claim doesn't affect others", floater: "One major claim can exhaust entire cover" },
  { factor: "Flexibility", individual: "Can customize per member", floater: "Same coverage for all members" },
  { factor: "Claims", individual: "Independent claim history", floater: "Shared claim history affects all" },
  { factor: "Renewal", individual: "Individual renewal dates", floater: "Single renewal for all" },
  { factor: "Tax Benefit", individual: "Section 80D per policy", floater: "Single 80D deduction" },
  { factor: "Best For", individual: "Families with elderly/sick members", floater: "Young families, couples" },
];

const individualProsCons = {
  pros: [
    "Dedicated sum insured - one member's claim doesn't affect others",
    "Customizable coverage per member based on individual needs",
    "Better for families with elderly or members with health conditions",
    "Each member gets full coverage regardless of others' claims",
    "Can choose different insurers for different members",
  ],
  cons: [
    "Higher total premium for same combined coverage",
    "Multiple policies to track and renew",
    "More paperwork for claims and renewals",
    "May not be cost-effective for young, healthy families",
  ],
};

const floaterProsCons = {
  pros: [
    "Lower total premium - more economical for families",
    "Single policy to manage and renew",
    "Flexibility in coverage usage among family members",
    "Easy to add/remove members at renewal",
    "Good for young families with low health risks",
  ],
  cons: [
    "One major illness can exhaust entire coverage",
    "Same sum insured for all - may not suit elderly",
    "Premium based on eldest member's age",
    "Pre-existing conditions of one affect entire family",
  ],
};

const scenarios = [
  {
    scenario: "Young Couple (25-35 years)",
    recommendation: "Family Floater",
    reason: "Both are young with low health risks. Shared coverage provides flexibility and lower premium. Opt for ₹10-15 lakh floater.",
    color: "#059669",
  },
  {
    scenario: "Family with Young Children",
    recommendation: "Family Floater + Super Top-up",
    reason: "Floater covers routine needs. Super top-up provides additional coverage at low cost for major illnesses.",
    color: "#1e40af",
  },
  {
    scenario: "Family with Elderly Parents",
    recommendation: "Individual Policies",
    reason: "Elderly have higher claim probability. Individual policies ensure their claims don't exhaust family coverage.",
    color: "#dc2626",
  },
  {
    scenario: "Family with Diabetic Member",
    recommendation: "Individual for High-Risk Member",
    reason: "Diabetic member has higher claim probability. Separate policy protects rest of family's coverage.",
    color: "#7c3aed",
  },
];

const faqs = [
  {
    question: "Can I convert my individual policy to family floater?",
    answer: "No, you cannot directly convert individual policy to floater. However, you can let the individual policy lapse and buy a new floater policy. This means losing continuity benefits and waiting periods served. Better option: keep existing individual and add floater for additional coverage.",
  },
  {
    question: "What happens to family floater if eldest member dies?",
    answer: "The policy continues for remaining members with adjusted premium. Premium reduces as it's based on eldest member's age. Sum insured remains same. You may need to update policy documents and nominee details. Some insurers allow restructuring at renewal.",
  },
  {
    question: "Is family floater premium based on eldest member?",
    answer: "Yes, in most family floater policies, premium is calculated based on the eldest member's age. This is why adding elderly parents to floater can significantly increase premium. For families with large age gaps, individual policies may be more economical.",
  },
  {
    question: "Can I have both individual and family floater policies?",
    answer: "Yes, you can have both. In fact, this is a smart strategy. Use floater for routine coverage and individual policy for personal protection. During claims, you can choose either policy based on coverage and convenience. Having multiple policies provides comprehensive protection.",
  },
  {
    question: "How does claim in family floater affect other members?",
    answer: "When one member makes a claim, the sum insured reduces for everyone. For example, in ₹10 lakh floater, if one member claims ₹6 lakh, only ₹4 lakh remains for all members that year. This is why floaters work best when all members are relatively healthy.",
  },
  {
    question: "Should I include my parents in my family floater?",
    answer: "Generally not recommended. Parents' higher age and health risks will: (1) Significantly increase premium, (2) Higher chance of claims exhausting family coverage, (3) Affect the entire family's claim history. Better to buy separate individual policies for parents.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "How Much Cover", description: "Calculate your coverage need", href: "/health-insurance/how-much-cover", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "For Parents & Seniors", description: "Health insurance for elderly", href: "/health-insurance/for-parents-seniors", icon: <Users className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function IndividualVsFloaterPage() {
  return (
    <div>
      <HeroSection
        badge="Plan Comparison"
        title="Individual vs Family Floater"
        titleHighlight="Health Insurance"
        description="Confused between individual health insurance and family floater? Understand the key differences, pros and cons, and which option suits your family better."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Quick Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Quick Comparison
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Factor</th>
                      <th className="text-center py-3 bg-blue-50">Individual Plan</th>
                      <th className="text-center py-3 bg-green-50">Family Floater</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{row.factor}</td>
                        <td className="py-3 text-center bg-blue-50/50">{row.individual}</td>
                        <td className="py-3 text-center bg-green-50/50">{row.floater}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Pros & Cons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#1e40af]">
              <CardHeader className="bg-[#1e40af] text-white">
                <CardTitle>Individual Health Insurance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <Badge className="bg-green-100 text-green-700 mb-3">Advantages</Badge>
                  <ul className="space-y-2">
                    {individualProsCons.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-700 mb-3">Disadvantages</Badge>
                  <ul className="space-y-2">
                    {individualProsCons.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#059669]">
              <CardHeader className="bg-[#059669] text-white">
                <CardTitle>Family Floater Plan</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <Badge className="bg-green-100 text-green-700 mb-3">Advantages</Badge>
                  <ul className="space-y-2">
                    {floaterProsCons.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Badge className="bg-red-100 text-red-700 mb-3">Disadvantages</Badge>
                  <ul className="space-y-2">
                    {floaterProsCons.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scenario-based Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Which Should You Choose?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.scenario}</CardTitle>
                    <Badge style={{ backgroundColor: item.color }} className="text-white">
                      {item.recommendation}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#1e40af]" />
                Example: Family of 4 (Husband 35, Wife 32, 2 Kids)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1e40af] mb-3">Individual Policies</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Husband (₹10L)</span>
                      <span>₹8,000/year</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wife (₹10L)</span>
                      <span>₹7,500/year</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Child 1 (₹5L)</span>
                      <span>₹3,000/year</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Child 2 (₹5L)</span>
                      <span>₹3,000/year</span>
                    </li>
                    <li className="flex justify-between font-bold pt-2 border-t">
                      <span>Total (₹30L cover)</span>
                      <span>₹21,500/year</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#059669] mb-3">Family Floater</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>₹10L Floater (4 members)</span>
                      <span>₹12,000/year</span>
                    </li>
                    <li className="text-muted-foreground text-xs mt-2">
                      Single sum insured shared by all members
                    </li>
                    <li className="flex justify-between font-bold pt-4 border-t">
                      <span>Total (₹10L shared)</span>
                      <span>₹12,000/year</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-amber-50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Best Option:</strong> For this young family, ₹10L floater + ₹15L super top-up 
                  (₹3,000/year) = ₹15,000/year provides ₹25L coverage - better than individual policies 
                  at lower cost.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Choose the Right Coverage for Your Family"
          description="Compare health insurance plans and find the best option for your family's needs and budget."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
