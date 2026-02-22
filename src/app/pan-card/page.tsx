import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  ExternalLink,
  AlertTriangle,
  HelpCircle,
  User,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PAN Card Application Guide India - How to Apply, Documents, Fees | SabPataKaro",
  description: "Complete guide to PAN card application in India. Learn how to apply for new PAN, correction, duplicate PAN. Documents required, fees, do's and don'ts, and official links.",
  keywords: ["pan card", "pan card application", "new pan card", "pan correction", "pan card documents", "pan card fees"],
};

const panTypes = [
  { type: "Individual PAN", description: "For Indian citizens above 18 years", form: "Form 49A" },
  { type: "Minor PAN", description: "For children below 18 years (managed by parent/guardian)", form: "Form 49A" },
  { type: "NRI PAN", description: "For Non-Resident Indians", form: "Form 49A" },
  { type: "Company/Firm PAN", description: "For businesses, companies, LLPs", form: "Form 49AA" },
];

const documents = [
  { category: "Proof of Identity", items: ["Aadhaar Card", "PAN Card (if applying for duplicate/correction)", "Passport", "Voter ID", "Driving License"] },
  { category: "Proof of Address", items: ["Aadhaar Card", "Passport", "Utility Bills (last 3 months)", "Bank Statement", "Ration Card"] },
  { category: "Proof of Date of Birth", items: ["Birth Certificate", "Passport", "Aadhaar Card", "School Certificate", "Driving License"] },
];

const doAndDonts = {
  dos: [
    "Apply through official NSDL or UTIITSL portals only",
    "Keep original documents ready for verification",
    "Use the same details as in your supporting documents",
    "Verify all information before submission",
    "Keep the acknowledgment number safe for tracking",
    "Link your PAN with Aadhaar (mandatory)",
    "Update your PAN details if there are any changes",
    "Use your correct PAN for all financial transactions",
  ],
  donts: [
    "Don't apply through unauthorized agents",
    "Don't hold multiple PAN cards (illegal)",
    "Don't provide incorrect or false information",
    "Don't forget to link PAN with Aadhaar",
    "Don't share your PAN details with strangers",
    "Don't use someone else's PAN for any purpose",
    "Don't forget to update address if changed",
    "Don't delay in correcting errors in PAN",
  ],
};

const steps = [
  { step: 1, title: "Choose Portal", description: "Visit NSDL (tin-nsdl.com) or UTIITSL (utiitsl.com) - both are official portals for PAN application." },
  { step: 2, title: "Select Application Type", description: "Choose 'New PAN' for fresh application, 'Correction' for changes, or 'Reprint' for duplicate PAN." },
  { step: 3, title: "Fill Form 49A/49AA", description: "Complete the online form with accurate personal details, address, and contact information." },
  { step: 4, title: "Upload Documents", description: "Upload scanned copies of identity proof, address proof, and date of birth proof." },
  { step: 5, title: "Pay Fees", description: "Pay the application fee (₹93 for Indian address, ₹864 for foreign address) via net banking, UPI, or card." },
  { step: 6, title: "Submit & Track", description: "Submit the form and note the acknowledgment number. Track status online using this number." },
  { step: 7, title: "Receive PAN Card", description: "PAN card will be dispatched within 15-20 days and delivered to your address via Speed Post." },
];

const faqs = [
  {
    question: "What is PAN and why is it required?",
    answer: "Permanent Account Number (PAN) is a 10-character alphanumeric identifier issued by the Income Tax Department. It's mandatory for filing income tax returns, opening bank accounts, investing in mutual funds, property transactions above ₹10 lakh, and many other financial activities.",
  },
  {
    question: "How long does it take to get a PAN card?",
    answer: "After successful application and verification, PAN card is dispatched within 15-20 working days. You can download e-PAN immediately after approval (usually within 2-3 days). Physical PAN card takes longer.",
  },
  {
    question: "Is it mandatory to link PAN with Aadhaar?",
    answer: "Yes, it's mandatory to link your PAN with Aadhaar. The last date has been extended multiple times. If not linked, your PAN may become inoperative. Link through the Income Tax e-filing portal.",
  },
  {
    question: "What if I have more than one PAN?",
    answer: "Having multiple PAN cards is illegal. You must surrender the additional PAN(s) immediately. Use the 'Request for New PAN Card or/and Changes or Correction in PAN Data' form to surrender duplicate PAN.",
  },
  {
    question: "How to correct mistakes in PAN card?",
    answer: "Apply for PAN correction through NSDL or UTIITSL portal. Select 'Changes or Correction in existing PAN Data' option. Submit required documents as proof for the change. Fee is ₹93 for Indian address.",
  },
];

export default function PANCardPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-0 mb-4">
              Government Services Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PAN Card Application Guide India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Complete guide to apply for PAN card in India. Learn about new PAN application, 
              correction, duplicate PAN, documents required, fees, and step-by-step process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-white">
                <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer">
                  Apply on NSDL Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.pan.utiitsl.com/PAN_online/appindex.html" target="_blank" rel="noopener noreferrer">
                  Apply on UTIITSL
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        {/* Important Notice */}
        <Alert className="mb-12 border-blue-200 bg-blue-50">
          <HelpCircle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Official Portal</AlertTitle>
          <AlertDescription className="text-blue-700">
            PAN applications are processed through NSDL and UTIITSL portals. Both are authorized 
            by the Income Tax Department. This guide provides educational information only.
          </AlertDescription>
        </Alert>

        {/* PAN Types */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of PAN Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panTypes.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Form: {item.form}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step by Step */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Step-by-Step Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4 mb-6 last:mb-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1 pb-6 border-b last:border-0">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Documents Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    {doc.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doc.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Do's and Don'ts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Do's
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {doAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {doAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Processing Time & Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Physical PAN Card</p>
                  <p className="text-2xl font-bold text-primary">15-20 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Fee: ₹93 (India)</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">e-PAN (Instant)</p>
                  <p className="text-2xl font-bold text-green-600">2-3 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Free with Aadhaar</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Foreign Address</p>
                  <p className="text-2xl font-bold text-primary">20-30 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Fee: ₹864</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Official Links */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Official Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                NSDL PAN Portal
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://www.pan.utiitsl.com/PAN_online/appindex.html" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                UTIITSL PAN Portal
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://www.incometax.gov.in/iec/foportal" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Income Tax Portal
              </a>
            </Button>
          </div>
        </section>

        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Important Warning</AlertTitle>
          <AlertDescription className="text-amber-700">
            Beware of unauthorized agents charging extra fees. Apply only through official NSDL or UTIITSL portals. 
            SabPataKaro is an educational platform and is not affiliated with the Income Tax Department.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
