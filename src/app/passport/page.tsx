import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Plane,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  CreditCard,
  ExternalLink,
  ArrowRight,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Passport Application Guide India - How to Apply, Documents, Fees | SabPataKaro",
  description: "Complete guide to passport application in India. Learn how to apply for fresh passport, renewal, tatkal passport. Documents required, fees, do's and don'ts, and official links.",
  keywords: ["passport india", "passport application", "passport renewal", "tatkal passport", "passport documents", "passport fees"],
};

const passportTypes = [
  { type: "Fresh Passport", description: "For first-time applicants who have never held a passport", fee: "₹1,500" },
  { type: "Passport Renewal", description: "For re-issuing an expired or expiring passport", fee: "₹1,500" },
  { type: "Tatkal Passport", description: "Urgent passport with faster processing (1-3 days)", fee: "₹3,500" },
  { type: "Minor Passport", description: "For children below 18 years", fee: "₹1,000" },
];

const documents = [
  { category: "Proof of Identity", items: ["Aadhaar Card", "PAN Card", "Voter ID", "Driving License"] },
  { category: "Proof of Address", items: ["Aadhaar Card", "Utility Bills (last 1 year)", "Bank Passbook", "Ration Card"] },
  { category: "Proof of Date of Birth", items: ["Birth Certificate", "School Certificate", "Aadhaar Card"] },
  { category: "Additional Documents", items: ["Passport-size photos (white background)", "Old passport (for renewal)", "Marriage certificate (if name changed)"] },
];

const doAndDonts = {
  dos: [
    "Apply online through Passport Seva Kendra (PSK) website",
    "Book an appointment at your nearest PSK",
    "Carry original documents along with self-attested photocopies",
    "Reach the PSK at least 30 minutes before your appointment",
    "Dress formally for the photograph and interview",
    "Verify all details in the application before submission",
    "Keep the application reference number safe",
    "Track your application status online regularly",
  ],
  donts: [
    "Don't apply through unauthorized agents or touts",
    "Don't provide false or misleading information",
    "Don't forget to carry original documents",
    "Don't be late for your appointment",
    "Don't sign any blank papers or forms",
    "Don't pay anyone extra for 'faster' processing (use official Tatkal)",
    "Don't lose your old passport before receiving the new one",
    "Don't apply with incomplete documentation",
  ],
};

const steps = [
  { step: 1, title: "Register Online", description: "Create an account on Passport Seva portal (passportindia.gov.in) with valid email and mobile number." },
  { step: 2, title: "Fill Application Form", description: "Complete the online application form with accurate personal details, address, and family information." },
  { step: 3, title: "Pay Fees", description: "Pay the applicable fee online via net banking, UPI, credit/debit card, or SBI challan." },
  { step: 4, title: "Book Appointment", description: "Schedule an appointment at your nearest Passport Seva Kendra (PSK) or Post Office PSK." },
  { step: 5, title: "Visit PSK", description: "Visit the PSK on your appointment date with original documents and photocopies. Get documents verified and biometrics captured." },
  { step: 6, title: "Police Verification", description: "Police verification will be conducted at your address. Cooperate fully and provide required documents." },
  { step: 7, title: "Receive Passport", description: "Once verification is complete, passport will be dispatched and delivered to your address via Speed Post." },
];

const faqs = [
  {
    question: "How long does it take to get a passport?",
    answer: "Normal processing takes 30-45 days from the date of application. Tatkal passport is processed in 1-3 working days. Police verification may add time depending on your location.",
  },
  {
    question: "What is police verification for passport?",
    answer: "Police verification is a mandatory security check where local police verify your address and background. An officer visits your address to confirm your residence. It usually happens after your PSK visit.",
  },
  {
    question: "Can I apply for passport without Aadhaar?",
    answer: "While Aadhaar is preferred, you can apply with alternative documents like PAN card, Voter ID, or other government IDs. However, Aadhaar makes the process faster as it serves as both address and identity proof.",
  },
  {
    question: "How to change address in passport?",
    answer: "Apply for re-issue of passport with new address proof documents. You'll need to submit address proof for the new address along with other required documents. Normal processing time applies.",
  },
  {
    question: "What if my passport is lost or damaged?",
    answer: "File an FIR at the nearest police station. Apply for re-issue of passport under 'Lost/Damaged' category. You'll need the FIR copy along with standard documents. Additional verification may be required.",
  },
];

export default function PassportPage() {
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
              Passport Application Guide India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Complete guide to apply for passport in India. Learn about fresh passport, renewal, 
              tatkal passport, documents required, fees, and step-by-step process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-white">
                <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer">
                  Apply on Official Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#steps">
                  View Process
                </Link>
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
            Passport applications in India are processed only through the official Passport Seva portal. 
            This guide provides educational information to help you understand the process.
          </AlertDescription>
        </Alert>

        {/* Passport Types */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of Passport Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passportTypes.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-100 text-green-700">
                    Fee: {item.fee}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="mb-16" id="steps">
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

        {/* Documents Required */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Documents Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {/* Do's */}
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

            {/* Don'ts */}
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
                  <p className="text-sm text-muted-foreground mb-1">Normal Processing</p>
                  <p className="text-2xl font-bold text-primary">30-45 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Fee: ₹1,500</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-muted-foreground mb-1">Tatkal Processing</p>
                  <p className="text-2xl font-bold text-amber-600">1-3 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Fee: ₹3,500</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Minor Passport</p>
                  <p className="text-2xl font-bold text-primary">30-45 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Fee: ₹1,000</p>
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
              <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Passport Seva Portal
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://www.passportindia.gov.in/AppOnlineProject/online/apptAvailStatus" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Check Appointment Availability
              </a>
            </Button>
            <Button AsChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://www.passportindia.gov.in/AppOnlineProject/trackStatus" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Track Application Status
              </a>
            </Button>
          </div>
        </section>

        {/* Warning */}
        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Important Warning</AlertTitle>
          <AlertDescription className="text-amber-700">
            Beware of touts and unauthorized agents promising faster passport processing. 
            Only apply through official Passport Seva Kendras. SabPataKaro is an educational 
            platform and is not affiliated with the Ministry of External Affairs.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
