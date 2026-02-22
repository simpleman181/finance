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
  Building,
  CheckCircle,
  AlertTriangle,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cashless Hospital Network in Health Insurance | Complete Guide",
  description: "Understand how cashless hospitalization works in health insurance. Learn about network hospitals, cashless vs reimbursement, and how to use your health card for cashless treatment.",
  keywords: ["cashless hospitalization", "network hospitals", "cashless health insurance", "health card", "cashless claim process"],
};

const cashlessSteps = [
  { step: 1, title: "Choose Network Hospital", description: "Select a hospital from your insurer's network list. Verify cashless facility availability before admission." },
  { step: 2, title: "Show Health Card & ID", description: "Present your health insurance card along with photo ID (Aadhaar/PAN) at the hospital insurance desk." },
  { step: 3, title: "Pre-Authorization Request", description: "Hospital sends pre-authorization request to insurer/TPA with estimated treatment cost and medical details." },
  { step: 4, title: "Approval from Insurer", description: "Insurer reviews and approves the cashless request, usually within 2-4 hours for planned procedures." },
  { step: 5, title: "Treatment & Discharge", description: "Get treated without paying upfront. Hospital bills settled directly by insurer." },
  { step: 6, title: "Pay Non-Covered Amount", description: "Pay only for items not covered by insurance (consumables, documentation charges, etc.)" },
];

const faqs = [
  {
    question: "What is cashless hospitalization?",
    answer: "Cashless hospitalization means you don't have to pay upfront for treatment at network hospitals. The insurer directly settles the bill with the hospital. You only need to pay for non-covered expenses. This is especially valuable during emergencies when arranging large sums quickly is difficult.",
  },
  {
    question: "Is cashless available at all hospitals?",
    answer: "No, cashless is only available at network hospitals empaneled with your insurer. Each insurer has its own network - some have 5,000+ hospitals, others have 15,000+. Always check if your preferred hospital is in the network before planned treatments. Non-network hospitals require reimbursement claims.",
  },
  {
    question: "What if my cashless request is rejected?",
    answer: "Cashless can be rejected for various reasons: insufficient coverage, non-covered treatment, policy lapse, or incomplete documentation. If rejected, you can: (1) Pay and claim reimbursement, (2) Appeal with additional documents, (3) Approach insurance ombudsman if unfairly rejected. Rejection doesn't mean claim denial.",
  },
  {
    question: "Can I get cashless for planned treatments?",
    answer: "Yes, for planned treatments like cataract surgery or knee replacement, inform insurer 3-5 days in advance. Get pre-authorization approved before admission. This ensures smooth cashless experience. Emergency admissions don't need prior intimation but should be informed within 24 hours.",
  },
  {
    question: "What documents are needed for cashless treatment?",
    answer: "You need: Health insurance card, Photo ID (Aadhaar/PAN), Policy documents, Doctor's prescription advising hospitalization, and in case of accidents, FIR copy. For planned procedures, pre-authorization form is needed. Keep digital copies on your phone for emergencies.",
  },
  {
    question: "How long does cashless approval take?",
    answer: "Emergency cases: Usually 30-60 minutes for initial approval. Planned procedures: 2-4 hours after submitting all documents. It's advisable to start the process early in the day. For planned treatments, get approval 1-2 days before admission to avoid last-minute issues.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Claim Process", description: "How to file health insurance claims", href: "/health-insurance/claim-process", icon: <Shield className="h-5 w-5" /> },
  { title: "Co-payment & Sub-limits", description: "Understand policy limits", href: "/health-insurance/copayment-sublimits", icon: <AlertTriangle className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function CashlessNetworkPage() {
  return (
    <div>
      <HeroSection
        badge="Cashless Treatment Guide"
        title="Cashless Hospital Network"
        titleHighlight="Explained"
        description="Get treated without paying upfront. Understand how cashless hospitalization works, find network hospitals, and learn the step-by-step process for hassle-free treatment."
        primaryCta={{ label: "Find Network Hospitals", href: "#" }}
        secondaryCta={{ label: "Claim Process", href: "/health-insurance/claim-process" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* What is Cashless */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-[#1e40af]" />
                What is Cashless Hospitalization?
              </h3>
              <p className="text-muted-foreground mb-4">
                Cashless hospitalization allows you to get treated at network hospitals without paying 
                upfront. Your insurer directly settles the medical bills with the hospital. You only 
                need to pay for items not covered by your policy (like consumables, documentation charges).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#1e40af]">No Upfront Payment</p>
                  <p className="text-sm text-muted-foreground">Hospital bills settled directly</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#059669]">Quick Process</p>
                  <p className="text-sm text-muted-foreground">Approval in 30 mins - 4 hours</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#7c3aed]">Hassle-free</p>
                  <p className="text-sm text-muted-foreground">No paperwork during emergency</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Step by Step Process */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Cashless Claim Process - Step by Step
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {cashlessSteps.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency vs Planned */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Emergency vs Planned Cashless Treatment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Emergency Admission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Inform insurer within 24 hours of admission</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Show health card at hospital insurance desk</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Quick approval in 30-60 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Can be done even at non-network (reimbursement later)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Planned Treatment
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Inform insurer 3-5 days before admission</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Get pre-authorization approved in advance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Choose from network hospitals for cashless</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-sm">Hassle-free admission on scheduled date</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Numbers */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-amber-800 mb-4">Important Things to Remember</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Keep Helpline Numbers Handy</p>
                    <p className="text-sm text-muted-foreground">Save insurer's 24x7 helpline for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Check Network Hospitals</p>
                    <p className="text-sm text-muted-foreground">Know network hospitals near home and work</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Carry Health Card Always</p>
                    <p className="text-sm text-muted-foreground">Digital or physical copy for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Inform Within Time Limits</p>
                    <p className="text-sm text-muted-foreground">24 hours for emergency, 3 days for planned</p>
                  </div>
                </div>
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
          title="Need to File a Claim?"
          description="Understand the complete claim process for both cashless and reimbursement claims."
          primaryCta={{ label: "Claim Process Guide", href: "/health-insurance/claim-process" }}
          secondaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        />
      </div>
    </div>
  );
}
