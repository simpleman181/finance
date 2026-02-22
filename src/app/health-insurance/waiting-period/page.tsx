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
  Clock,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Activity,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Waiting Period in Health Insurance Explained | Complete Guide",
  description: "Understand waiting periods in health insurance - initial, pre-existing disease, and specific illness waiting periods. Know what's covered and when coverage starts.",
  keywords: ["health insurance waiting period", "pre-existing disease waiting period", "initial waiting period", "health insurance coverage start"],
};

const waitingTypes = [
  {
    icon: Calendar,
    title: "Initial Waiting Period",
    duration: "30 days",
    description: "No claims (except accidents) are admissible in the first 30 days from policy start date. This applies to all new policies and prevents people from buying insurance after falling sick.",
    color: "#1e40af",
  },
  {
    icon: Activity,
    title: "Pre-Existing Disease (PED) Waiting",
    duration: "1-4 years",
    description: "Conditions like diabetes, hypertension, heart disease that existed before buying the policy are covered only after 2-4 years of continuous coverage. Varies by insurer and condition.",
    color: "#dc2626",
  },
  {
    icon: Clock,
    title: "Specific Disease Waiting",
    duration: "1-2 years",
    description: "Certain treatments like cataract, hernia, knee replacement, maternity have 1-2 year waiting regardless of whether condition existed before. Check policy wordings for list.",
    color: "#7c3aed",
  },
];

const commonDiseases = [
  { disease: "Cataract", waiting: "1-2 years" },
  { disease: "Hernia", waiting: "1-2 years" },
  { disease: "Knee Replacement", waiting: "2-3 years" },
  { disease: "Kidney Stones", waiting: "1-2 years" },
  { disease: "Piles/Fistula", waiting: "1-2 years" },
  { disease: "Sinusitis", waiting: "1-2 years" },
  { disease: "Maternity", waiting: "2-4 years" },
  { disease: "ENT Disorders", waiting: "1-2 years" },
];

const pedConditions = [
  { condition: "Diabetes", typicalWaiting: "2-4 years", notes: "Often covered after 2-3 years with sub-limits" },
  { condition: "Hypertension", typicalWaiting: "2-3 years", notes: "Related complications may have longer wait" },
  { condition: "Heart Disease", typicalWaiting: "3-4 years", notes: "Previous cardiac issues take longest" },
  { condition: "Asthma", typicalWaiting: "2-3 years", notes: "Respiratory complications included" },
  { condition: "Thyroid Disorders", typicalWaiting: "2-3 years", notes: "Common and generally shorter wait" },
  { condition: "Kidney Disease", typicalWaiting: "3-4 years", notes: "Chronic conditions need longer wait" },
];

const tips = [
  "Buy health insurance early - before developing health conditions",
  "Declare all existing conditions honestly to avoid claim rejection",
  "Check waiting periods before buying - shorter is better",
  "Some plans offer reduced waiting periods for extra premium",
  "Port your policy to retain waiting period benefits when switching insurers",
  "Group insurance from employer typically has no waiting periods",
];

const faqs = [
  {
    question: "Can I claim during the waiting period?",
    answer: "Only claims arising from accidents are admissible during the initial 30-day waiting period. After that, you can claim for illnesses that are not subject to specific waiting periods. Pre-existing diseases and specific treatments have their own waiting periods. Emergency hospitalization due to accidents is covered from day one.",
  },
  {
    question: "Does waiting period reset on renewal?",
    answer: "No, waiting periods don't reset on renewal with the same insurer. Once you've served a waiting period, it stays served as long as you renew continuously. However, if you switch insurers and don't port properly, waiting periods start fresh. Always port your policy to retain continuity benefits.",
  },
  {
    question: "What happens to waiting period if I switch insurers?",
    answer: "If you port your policy properly (apply 45 days before renewal), all waiting periods served are transferred to the new policy. The new insurer must honor continuity benefits. If you let the old policy lapse and buy fresh, all waiting periods start from zero. This is why portability is important.",
  },
  {
    question: "Can I reduce pre-existing disease waiting period?",
    answer: "Some insurers offer plans with reduced PED waiting periods (1-2 years instead of 3-4) for higher premium. Some corporate/group policies cover pre-existing conditions from day one. If you have group insurance through employer, you may get coverage without waiting periods.",
  },
  {
    question: "Is waiting period applicable for renewals?",
    answer: "No, waiting periods are only for new policies or when adding new members. Once served, they don't apply again as long as you renew the same policy continuously. This is why it's important to not let your policy lapse. Even a one-day gap means starting fresh with all waiting periods.",
  },
  {
    question: "How is pre-existing disease determined?",
    answer: "Pre-existing diseases are those that existed before policy inception. Insurers determine this through: (1) Information declared in proposal form, (2) Medical tests at policy inception, (3) Treatment history from hospital records, (4) Doctor consultations before policy start. Non-disclosure can lead to claim rejection.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "For Parents & Seniors", description: "Health insurance for elderly", href: "/health-insurance/for-parents-seniors", icon: <Heart className="h-5 w-5" /> },
  { title: "Claim Process", description: "How to file claims", href: "/health-insurance/claim-process", icon: <Shield className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function WaitingPeriodPage() {
  return (
    <div>
      <HeroSection
        badge="Understanding Waiting Period"
        title="Waiting Period in"
        titleHighlight="Health Insurance Explained"
        description="Health insurance doesn't cover everything from day one. Understand waiting periods - when coverage starts, what's excluded initially, and how to plan your purchase."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Types of Waiting Periods */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of Waiting Periods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waitingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="h-full border-2" style={{ borderColor: type.color }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${type.color}15` }}>
                      <Icon className="h-6 w-6" style={{ color: type.color }} />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <Badge className="w-fit" style={{ backgroundColor: type.color }}>{type.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Specific Disease Waiting */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Common Diseases with Specific Waiting Periods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specific Disease Waiting List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {commonDiseases.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span className="text-sm">{item.disease}</span>
                      <Badge variant="outline">{item.waiting}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pre-Existing Disease Waiting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pedConditions.map((item, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm">{item.condition}</span>
                        <Badge className="bg-red-100 text-red-700">{item.typicalWaiting}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual Timeline */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg">Waiting Period Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1e40af] flex items-center justify-center text-white text-sm font-bold z-10">0</div>
                    <div>
                      <p className="font-semibold">Day 0 - Policy Starts</p>
                      <p className="text-sm text-muted-foreground">Only accidental emergencies covered</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center text-white text-sm font-bold z-10">30</div>
                    <div>
                      <p className="font-semibold">30 Days - Initial Waiting Over</p>
                      <p className="text-sm text-muted-foreground">Regular illnesses now covered (except PED & specific diseases)</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#7c3aed] flex items-center justify-center text-white text-sm font-bold z-10">1Y</div>
                    <div>
                      <p className="font-semibold">1-2 Years - Specific Disease Coverage</p>
                      <p className="text-sm text-muted-foreground">Cataract, hernia, etc. covered after 1-2 years</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white text-sm font-bold z-10">3Y</div>
                    <div>
                      <p className="font-semibold">2-4 Years - Pre-Existing Disease Coverage</p>
                      <p className="text-sm text-muted-foreground">Diabetes, hypertension, heart conditions now covered</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-4">Tips to Navigate Waiting Periods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Warning</h4>
                <p className="text-muted-foreground">
                  If you don't declare a pre-existing condition and make a claim later, 
                  the insurer can reject your claim even after the waiting period is over. 
                  Honesty at the time of purchase is crucial. It's better to pay slightly 
                  higher premium than face claim rejection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Learn More About Health Insurance" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Start Your Coverage Early"
          description="Buy health insurance before you need it. Start serving waiting periods now so coverage is ready when you need it."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "Calculate Premium", href: "/health-insurance/premium-calculator" }}
        />
      </div>
    </div>
  );
}
