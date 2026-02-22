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
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Payment & Sub-Limits in Health Insurance | Complete Guide",
  description: "Understand co-payment and sub-limits in health insurance. Learn how these cost-sharing features affect your premium and out-of-pocket expenses during claims.",
  keywords: ["co-payment health insurance", "copay in health insurance", "room rent sub-limit", "health insurance sub-limits", "co-pay meaning"],
};

const copayTypes = [
  { type: "Standard Co-pay", description: "Fixed percentage (10-20%) on all claims. Common in senior citizen policies.", impact: "Reduces premium by 10-15%" },
  { type: "Zone-based Co-pay", description: "Co-pay applicable when treatment taken in higher-cost zone than policy zone.", impact: "Important for those in smaller cities" },
  { type: "Hospital Co-pay", description: "Higher co-pay for non-network hospitals or specific hospital categories.", impact: "Encourages network hospital usage" },
  { type: "PED Co-pay", description: "Additional co-pay for claims related to pre-existing diseases.", impact: "Common in policies covering PED" },
];

const subLimits = [
  { type: "Room Rent Limit", description: "Maximum per day room rent (e.g., 1% of sum insured for shared room, 2% for private). Exceeding this can proportionally reduce other benefits.", example: "₹10L policy → ₹2,000/day room rent limit" },
  { type: "ICU Limit", description: "Maximum ICU charges per day, usually 2-4% of sum insured. ICU costs can be ₹25,000-50,000/day in private hospitals.", example: "₹10L policy → ₹20,000-40,000/day ICU limit" },
  { type: "Disease-wise Limit", description: "Maximum coverage for specific diseases (cataract: ₹25,000-50,000, hernia: ₹50,000) regardless of sum insured.", example: "Even with ₹10L cover, cataract may be capped at ₹40,000" },
  { type: "Treatment Limit", description: "Cap on specific treatments like knee replacement, angioplasty. Treatment cost beyond limit is out-of-pocket.", example: "Knee replacement capped at ₹2L even if actual cost is ₹3.5L" },
];

const exampleCalculation = {
  sumInsured: 1000000,
  roomRentLimit: 10000,
  actualRoomRent: 15000,
  hospitalizationDays: 5,
  otherExpenses: 400000,
  copay: 20,
};

const faqs = [
  {
    question: "Should I choose a policy with co-payment?",
    answer: "If you're young and healthy, co-pay policies can save 15-20% on premium. However, during claims, you'll bear part of the cost. For senior citizens, co-pay is almost unavoidable. For families, policies without co-pay provide better financial protection. Evaluate your health risk and ability to pay during emergencies before deciding.",
  },
  {
    question: "What happens if I exceed room rent limit?",
    answer: "This is critical: exceeding room rent limit can lead to proportional reduction in all other expenses. If your policy has 1% room rent limit (₹2,000/day for ₹2L policy) and you choose ₹4,000/day room, not just room rent but doctor fees, surgery costs, and all other expenses may be calculated at 50% rate. This 'proportionate deduction' can significantly increase your out-of-pocket expense.",
  },
  {
    question: "How to avoid sub-limit impact on claims?",
    answer: "Look for policies with 'no sub-limits' or 'no room rent cap'. These policies allow you to choose any room category without affecting other benefits. Alternatively, be conscious of limits when selecting rooms - if your sum insured is ₹5 lakh, don't choose rooms above ₹5,000/day (1% limit). Policies without sub-limits cost 10-15% more but provide better claim experience.",
  },
  {
    question: "Can I remove co-pay from my existing policy?",
    answer: "Co-pay terms are generally fixed at policy inception. Some insurers allow removing co-pay at renewal by paying higher premium, but this varies. Contact your insurer before renewal to explore options. If not possible, you may need to port to a different policy without co-pay.",
  },
  {
    question: "What is deductible vs co-pay?",
    answer: "Deductible is a fixed amount you pay before insurance kicks in (e.g., first ₹5,000 per claim). Co-pay is a percentage of each bill you bear (e.g., 20% of ₹1 lakh = ₹20,000). Deductibles are common in top-up plans, co-pay in senior citizen policies. Both reduce premium but increase out-of-pocket during claims.",
  },
  {
    question: "Are there policies without any co-pay or sub-limits?",
    answer: "Yes, many comprehensive policies have no co-pay and no room rent limits. HDFC Ergo my:health Suraksha, ICICI Lombard Health AdvantEDGE, and Care Supreme offer such plans. They cost 15-20% more but provide complete coverage. For those who can afford higher premium, these policies offer the best claim experience.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Best Plans", description: "Compare top health insurance policies", href: "/health-insurance/best-plans", icon: <Shield className="h-5 w-5" /> },
  { title: "Waiting Period", description: "Understand waiting periods", href: "/health-insurance/waiting-period", icon: <Info className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function CopaymentSublimitsPage() {
  return (
    <div>
      <HeroSection
        badge="Understanding Policy Terms"
        title="Co-Payment & Sub-Limits"
        titleHighlight="in Health Insurance"
        description="These terms can significantly impact your claim amount. Understand how co-pay and sub-limits work, and choose policies wisely to avoid surprise expenses during hospitalization."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Best Plans", href: "/health-insurance/best-plans" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Co-Payment Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What is Co-Payment?
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-4">
                Co-payment (co-pay) is the percentage of claim amount that you agree to bear from your 
                own pocket. If your policy has 20% co-pay and the claim amount is ₹5 lakhs, you pay 
                ₹1 lakh and the insurer pays ₹4 lakhs. Co-pay reduces your premium but increases 
                out-of-pocket expenses during claims.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">Example:</p>
                <p className="text-muted-foreground">
                  Claim Amount: ₹5,00,000 | Co-pay: 20%<br/>
                  You Pay: ₹1,00,000 | Insurer Pays: ₹4,00,000
                </p>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-bold mb-4">Types of Co-Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copayTypes.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{item.type}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700">{item.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sub-Limits Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What are Sub-Limits?
          </h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground">
                Sub-limits are caps on specific expenses within your overall sum insured. Even if you 
                have ₹10 lakh coverage, room rent may be limited to 1% (₹2,000/day), or cataract 
                treatment capped at ₹40,000. Exceeding sub-limits means paying the difference yourself.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subLimits.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                    {item.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-xs text-red-700">{item.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Example */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto border-2 border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                How Room Rent Sub-limit Affects Your Claim
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Scenario 1: Within Limit</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Room rent: ₹2,000/day (within limit)</li>
                    <li>Hospitalization: 5 days</li>
                    <li>Other expenses: ₹4,00,000</li>
                    <li className="font-semibold pt-2 border-t">You pay: ₹0 extra</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Scenario 2: Exceeded Limit</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Room rent: ₹4,000/day (exceeded by 100%)</li>
                    <li>Hospitalization: 5 days</li>
                    <li>Proportional deduction on ALL expenses!</li>
                    <li className="font-semibold pt-2 border-t text-red-600">You pay: ₹2,00,000+ extra</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> Proportionate deduction applies to ALL hospitalization 
                  expenses when room rent limit is exceeded, not just room rent. This can lead to 
                  significantly higher out-of-pocket expenses.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-blue-50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-blue-800 mb-4">How to Choose Wisely</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Prefer policies without room rent limits for flexibility during hospitalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>If budget is tight, choose higher sum insured with co-pay over lower sum insured without</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>For senior citizens, co-pay is unavoidable - focus on coverage over co-pay percentage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Read policy wordings carefully - understand all sub-limits before purchase</span>
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
          title="Find Plans Without Hidden Limits"
          description="Compare health insurance plans with clear terms. Choose policies with no sub-limits and co-pay options that suit your budget."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "View Best Plans", href: "/health-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
