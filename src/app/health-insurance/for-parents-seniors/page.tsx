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
  Clock,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Health Insurance for Parents & Senior Citizens in India | Complete Guide",
  description: "Complete guide to health insurance for parents and senior citizens in India. Compare plans, understand coverage, waiting periods, and find the best policy for elderly family members.",
  keywords: ["health insurance for parents", "senior citizen health insurance", "mediclaim for elderly", "parents health insurance India"],
};

const seniorPlans = [
  { insurer: "Star Health", plan: "Red Carpet", entryAge: "60-75 years", sumInsured: "₹1-25 L", waitingPeriod: "1-2 years", coPay: "20%", premium: "₹15,000-35,000" },
  { insurer: "Care Health", plan: "Care Senior", entryAge: "61+ years", sumInsured: "₹3-25 L", waitingPeriod: "1-2 years", coPay: "20%", premium: "₹12,000-30,000" },
  { insurer: "Niva Bupa", plan: "Senior First", entryAge: "60-80 years", sumInsured: "₹5-25 L", waitingPeriod: "1-2 years", coPay: "20%", premium: "₹14,000-32,000" },
  { insurer: "ManipalCigna", plan: "Senior Citizen", entryAge: "56-80 years", sumInsured: "₹5-25 L", waitingPeriod: "1-2 years", coPay: "15%", premium: "₹13,000-28,000" },
];

const keyFeatures = [
  { feature: "Entry Age", description: "Most plans accept entry up to 65-80 years. Some have no maximum entry age. Renewal is lifelong in most policies." },
  { feature: "Co-payment", description: "Almost all senior plans have 10-30% co-pay. This means you bear part of claim amount. Lower co-pay plans have higher premium." },
  { feature: "Waiting Period", description: "Pre-existing diseases covered after 1-4 years. Some plans offer shorter waiting periods for select conditions." },
  { feature: "Medical Tests", description: "Pre-policy medical check-up usually required. Tests at insurer's cost in most cases. Results affect premium and coverage." },
  { feature: "Sum Insured", description: "Usually limited to ₹5-25 lakhs. Some plans offer higher coverage. Consider super top-up for additional coverage." },
  { feature: "Premium", description: "Higher than regular policies due to increased risk. Premium increases with age. Compare quotes from multiple insurers." },
];

const challenges = [
  { icon: Activity, title: "Pre-existing Conditions", description: "Parents often have diabetes, hypertension, or heart conditions. These may have 2-4 year waiting periods or permanent exclusions in some plans." },
  { icon: IndianRupee, title: "High Premiums", description: "Senior citizen policies cost 2-3 times more than regular policies. A ₹10 lakh policy for 60-year-old costs ₹15,000-25,000 annually." },
  { icon: Clock, title: "Age Restrictions", description: "Many regular policies don't accept new entrants above 65. Even senior plans have maximum entry ages, making early purchase important." },
  { icon: Shield, title: "Limited Coverage", description: "Sum insured options are limited for seniors. Co-payment clauses mean sharing claim costs. Some treatments may be excluded." },
];

const faqs = [
  {
    question: "Can I get health insurance for my 70-year-old parents?",
    answer: "Yes, several insurers offer policies for people up to 80 years. Star Health Red Carpet, Care Senior, and Niva Bupa Senior First accept entry up to 75-80 years. Medical tests will be required, and premiums will be higher. The best time to buy is before parents develop major health issues.",
  },
  {
    question: "What is co-payment in senior citizen health insurance?",
    answer: "Co-payment is the percentage of claim amount you pay from your pocket. If a policy has 20% co-pay and claim is ₹5 lakhs, you pay ₹1 lakh and insurer pays ₹4 lakhs. Most senior citizen policies have 10-30% co-pay. Lower co-pay plans have higher premiums.",
  },
  {
    question: "Are pre-existing diseases covered for senior citizens?",
    answer: "Yes, but after a waiting period of 1-4 years depending on the condition and insurer. Some plans cover select pre-existing conditions from day one. Chronic conditions like diabetes and hypertension typically have 2-3 year waiting periods. Declare all conditions honestly when applying.",
  },
  {
    question: "Should I include parents in my employer's group insurance?",
    answer: "If your employer offers coverage for parents, it's a good starting point. Group policies often cover pre-existing conditions from day one with no waiting period. However, coverage may be limited and ends when you leave the job. Consider additional personal policy for comprehensive coverage.",
  },
  {
    question: "What medical tests are required for senior citizen health insurance?",
    answer: "Typically includes blood tests (sugar, cholesterol, kidney function), ECG, blood pressure, urine analysis, and sometimes chest X-ray or stress test based on age and declared conditions. Tests are usually at insurer's cost. Results determine premium and any permanent exclusions.",
  },
  {
    question: "Can I claim tax benefit on parents' health insurance premium?",
    answer: "Yes, under Section 80D, you can claim deduction for parents' health insurance premium up to ₹25,000 (₹50,000 if parents are senior citizens). This is separate from the ₹25,000 deduction for your own family's policy. So you can claim up to ₹75,000 total deduction.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Waiting Period Explained", description: "Understand waiting periods", href: "/health-insurance/waiting-period", icon: <Clock className="h-5 w-5" /> },
  { title: "Co-payment & Sub-limits", description: "Understand policy limits", href: "/health-insurance/copayment-sublimits", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function ForParentsSeniorsPage() {
  return (
    <div>
      <HeroSection
        badge="Senior Citizen Guide"
        title="Health Insurance for"
        titleHighlight="Parents & Senior Citizens"
        description="Healthcare needs increase with age. Get comprehensive coverage for your parents with plans designed for senior citizens. Understand waiting periods, co-payment, and find the best policy."
        primaryCta={{ label: "Compare Senior Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Key Insight */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Don't Wait Until It's Too Late
                  </h3>
                  <p className="text-muted-foreground">
                    As parents age, getting insurance becomes harder and more expensive. 
                    After 70, options are very limited. After 80, almost no insurer offers new policies. 
                    Buy coverage NOW before age or health conditions make it impossible or unaffordable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Challenges in Getting Insurance for Seniors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Features of Senior Citizen Health Insurance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item.feature}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Popular Senior Citizen Health Plans
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Insurer</th>
                      <th className="text-left py-3">Plan</th>
                      <th className="text-center py-3">Entry Age</th>
                      <th className="text-center py-3">Sum Insured</th>
                      <th className="text-center py-3">Co-pay</th>
                      <th className="text-center py-3">Annual Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seniorPlans.map((plan, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{plan.insurer}</td>
                        <td className="py-3">{plan.plan}</td>
                        <td className="py-3 text-center">{plan.entryAge}</td>
                        <td className="py-3 text-center">{plan.sumInsured}</td>
                        <td className="py-3 text-center"><Badge variant="outline">{plan.coPay}</Badge></td>
                        <td className="py-3 text-center font-semibold">{plan.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Premiums are indicative for 65-year-old individual. Actual premium may vary based on health condition.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-green-800 mb-4">Tips for Buying Insurance for Parents</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Buy before age 60-65 when options are better and premiums lower</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Declare all existing health conditions honestly to avoid claim rejection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Consider super top-up for additional coverage at low cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Check network hospitals for preferred doctors and hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Keep separate policy for parents - don't add to family floater</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Protect Your Parents' Health Today"
          description="Don't wait for a medical emergency. Get comprehensive health insurance for your parents now while options are still available."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
