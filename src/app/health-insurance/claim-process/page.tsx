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
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Health Insurance Claim Process | Step-by-Step Guide",
  description: "Complete guide to health insurance claim process in India. Learn how to file cashless and reimbursement claims, documents required, and common reasons for claim rejection.",
  keywords: ["health insurance claim process", "cashless claim", "reimbursement claim", "claim documents", "health insurance claim"],
};

const cashlessProcess = [
  { step: 1, title: "Intimate Insurer", description: "Inform insurer within 24 hours of emergency admission or 3 days before planned treatment." },
  { step: 2, title: "Visit Network Hospital", description: "Go to a network hospital and present health card and photo ID at the insurance desk." },
  { step: 3, title: "Submit Pre-Authorization", description: "Hospital fills pre-auth form with treatment details and estimated cost, sends to insurer." },
  { step: 4, title: "Get Approval", description: "Insurer reviews and approves cashless request, usually within 2-4 hours." },
  { step: 5, title: "Treatment & Discharge", description: "Get treated. Hospital settles bills directly with insurer." },
  { step: 6, title: "Pay Non-Covered Amount", description: "Pay only for items not covered (consumables, documentation charges)." },
];

const reimbursementProcess = [
  { step: 1, title: "Intimate Within 24-48 Hours", description: "Inform insurer about hospitalization within specified time (24-48 hours for emergency)." },
  { step: 2, title: "Get Treated", description: "Get treatment at any hospital. Pay all bills from your pocket initially." },
  { step: 3, title: "Collect All Documents", description: "Gather original bills, discharge summary, reports, and all medical documents." },
  { step: 4, title: "Submit Claim Form", description: "Fill claim form and submit with all documents within 15-30 days of discharge." },
  { step: 5, title: "Claim Processing", description: "Insurer verifies documents and processes claim (usually 15-30 days)." },
  { step: 6, title: "Receive Reimbursement", description: "Approved amount credited to your bank account." },
];

const documentsRequired = [
  "Duly filled claim form",
  "Health insurance card copy",
  "Photo ID proof (Aadhaar/PAN)",
  "Original hospital bills with payment receipts",
  "Discharge summary from hospital",
  "Doctor's prescription advising hospitalization",
  "All investigation reports (X-ray, MRI, blood tests)",
  "Pharmacy bills with doctor's prescription",
  "Implant/stent invoice (if applicable)",
  "FIR copy (in case of accident)",
  "Cancelled cheque for NEFT transfer",
];

const faqs = [
  {
    question: "What is the time limit for filing a health insurance claim?",
    answer: "For emergency hospitalization, intimate insurer within 24-48 hours. For planned treatment, inform 3-5 days in advance. Submit reimbursement claim documents within 15-30 days of discharge (varies by insurer). Late intimation may not lead to rejection but can cause delays. Always inform insurer as soon as possible.",
  },
  {
    question: "Why do health insurance claims get rejected?",
    answer: "Common reasons: (1) Non-disclosure of pre-existing conditions, (2) Treatment during waiting period, (3) Policy lapse due to non-payment, (4) Excluded treatments (cosmetic surgery, dental), (5) Incomplete documentation, (6) Treatment not medically necessary, (7) Fraud or misrepresentation. Honest disclosure and proper documentation prevent most rejections.",
  },
  {
    question: "Can I claim from multiple health insurance policies?",
    answer: "Yes, you can claim from multiple policies. For cashless, you can use one policy and claim balance from another via reimbursement. For reimbursement, submit original bills to one insurer and certified copies to another with settlement letter from first insurer. This is useful when sum insured from one policy is insufficient.",
  },
  {
    question: "How long does it take to get claim reimbursement?",
    answer: "Once all documents are submitted, insurers typically process claims within 15-30 days. IRDAI mandates final decision within 30 days of receiving complete documents. If additional documents needed, another 15 days may be taken. For cashless, approval is usually within 2-4 hours.",
  },
  {
    question: "What if cashless claim is rejected?",
    answer: "Cashless rejection doesn't mean claim rejection. You can: (1) Pay and submit for reimbursement, (2) Appeal with additional documents, (3) Check if rejection is due to policy terms or administrative issues. Common rejection reasons are incomplete pre-auth form, policy terms exclusion, or network issues. Reimbursement claims are assessed on merits.",
  },
  {
    question: "Is pre-approval needed for planned hospitalization?",
    answer: "Yes, for planned procedures like cataract surgery, knee replacement, or planned surgeries, get pre-authorization from insurer before admission. Submit doctor's advice, estimated cost, and hospital details. This ensures smooth cashless processing. Emergency admissions don't need prior approval but should be intimated within 24 hours.",
  },
];

const relatedPages = [
  { title: "Complete Health Insurance Guide", description: "Everything about health insurance", href: "/health-insurance", icon: <Heart className="h-5 w-5" /> },
  { title: "Cashless Network", description: "How cashless hospitalization works", href: "/health-insurance/cashless-network", icon: <Building className="h-5 w-5" /> },
  { title: "Waiting Period", description: "Understand waiting periods", href: "/health-insurance/waiting-period", icon: <Clock className="h-5 w-5" /> },
  { title: "Compare Plans", description: "Compare health insurance plans", href: "/tools/compare-health-insurance", icon: <Shield className="h-5 w-5" /> },
];

export default function ClaimProcessPage() {
  return (
    <div>
      <HeroSection
        badge="Claim Guide"
        title="Health Insurance"
        titleHighlight="Claim Process"
        description="Step-by-step guide to filing health insurance claims. Learn the cashless and reimbursement process, required documents, and how to avoid claim rejection."
        primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
        secondaryCta={{ label: "Cashless Network", href: "/health-insurance/cashless-network" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        {/* Cashless Process */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Cashless Claim Process
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {cashlessProcess.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{item.title}</h3>
                          {index < cashlessProcess.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reimbursement Process */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Reimbursement Claim Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reimbursementProcess.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Documents Required */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Documents Required for Claim
          </h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#1e40af]" />
                Checklist for Reimbursement Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {documentsRequired.map((doc, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 inline mr-1 text-amber-600" />
                  Keep all original documents safely. Submit within the time limit specified in your policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-green-800 mb-4">Tips for Smooth Claim Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keep health card accessible at all times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Save insurer helpline number in phone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Intimate insurer within time limits</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Collect all original documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keep copies of submitted documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Follow up on claim status regularly</span>
                  </li>
                </ul>
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
          title="Need to Compare Health Insurance?"
          description="Find the best health insurance plan with high claim settlement ratio and comprehensive coverage."
          primaryCta={{ label: "Compare Plans", href: "/tools/compare-health-insurance" }}
          secondaryCta={{ label: "View Best Plans", href: "/health-insurance/best-plans" }}
        />
      </div>
    </div>
  );
}
