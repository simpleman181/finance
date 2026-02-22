import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Car,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  ExternalLink,
  AlertTriangle,
  HelpCircle,
  User,
  RefreshCw,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Driving License Guide India - How to Apply, Documents, Test | SabPataKaro",
  description: "Complete guide to driving license in India. Learn how to apply for learner's license, permanent license, renewal. Documents required, test tips, do's and don'ts.",
  keywords: ["driving license india", "driving licence application", "learner license", "dl renewal", "driving test", "rto"],
};

const licenseTypes = [
  { type: "Learner's License (LL)", description: "Temporary license valid for 6 months. Must have before applying for permanent DL.", icon: FileCheck },
  { type: "Permanent Driving License", description: "Full driving license after passing the driving test. Valid for 20 years or age 50.", icon: Car },
  { type: "Commercial License", description: "For driving commercial vehicles like trucks, buses, taxis. Additional requirements apply.", icon: Car },
  { type: "International Driving Permit", description: "For driving abroad. Valid for 1 year. Apply at your RTO.", icon: RefreshCw },
];

const documents = [
  { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID"] },
  { category: "Address Proof", items: ["Aadhaar Card", "Utility Bills", "Passport", "Ration Card"] },
  { category: "Age Proof", items: ["Birth Certificate", "Passport", "School Certificate", "Aadhaar Card"] },
  { category: "Other Documents", items: ["Passport size photos", "Medical certificate (Form 1A)", "Learner's license (for DL)"] },
];

const doAndDonts = {
  dos: [
    "Apply through official Parivahan portal or RTO",
    "Practice thoroughly before the driving test",
    "Carry all original documents to RTO",
    "Reach RTO early on test day",
    "Learn traffic rules and road signs",
    "Keep LL for at least 30 days before DL test",
    "Wear helmet/seatbelt during test",
    "Renew DL before it expires",
  ],
  donts: [
    "Don't drive without valid license",
    "Don't use agent or tout services",
    "Don't provide false information",
    "Don't forget to carry license while driving",
    "Don't skip the learning period",
    "Don't use mobile while driving test",
    "Don't argue with the testing officer",
    "Don't let your license expire",
  ],
};

const steps = [
  { step: 1, title: "Apply for Learner's License", description: "Visit Parivahan portal or RTO. Fill Form 1, submit documents, pay ₹200 fee, and appear for written test on traffic rules." },
  { step: 2, title: "Pass Written Test", description: "Answer questions on traffic signs, rules, and regulations. Score at least 60% to pass. Test is conducted online at RTO." },
  { step: 3, title: "Get Learner's License", description: "After passing the test, receive your LL. Valid for 6 months. Practice driving with LL holder beside you." },
  { step: 4, title: "Practice Driving", description: "Wait at least 30 days from LL issue date. Practice driving in various conditions with a licensed driver." },
  { step: 5, title: "Book Driving Test Slot", description: "After 30 days, book a slot for driving test at RTO through Parivahan portal. Pay test fee." },
  { step: 6, title: "Appear for Driving Test", description: "Demonstrate driving skills including start, stop, parking, U-turn, and following traffic rules." },
  { step: 7, title: "Receive Driving License", description: "After passing the test, DL is printed and dispatched to your address within 7-14 days." },
];

const testTips = [
  "Practice the 'H' test (figure-8) thoroughly - it's often the elimination round",
  "Learn all traffic signs and signals before written test",
  "Practice parallel parking and reverse parking",
  "Keep proper hand position on steering wheel (10 and 2 o'clock)",
  "Always use indicators when turning",
  "Check mirrors frequently during the test",
  "Don't rush - drive at a comfortable, controlled speed",
  "Wear seatbelt/helmet before starting the vehicle",
];

const faqs = [
  {
    question: "How long does it take to get driving license?",
    answer: "Learner's license is issued same day after passing written test. Permanent DL is issued 7-14 days after passing the driving test. The entire process takes about 1.5-2 months including the mandatory 30-day learning period.",
  },
  {
    question: "Can I drive with just learner's license?",
    answer: "Yes, but with conditions. You must have a permanent license holder sitting beside you. Display 'L' sign on front and back of vehicle. You cannot drive on highways or carry passengers other than the instructor.",
  },
  {
    question: "What happens if I fail the driving test?",
    answer: "You can retake the test after 7 days. Pay the test fee again. There's no limit on attempts. Practice more on your weak areas before reappearing.",
  },
  {
    question: "How to renew expired driving license?",
    answer: "Apply for renewal within 30 days of expiry at your RTO. Submit Form 9, old DL, medical certificate, and photos. If expired for more than 30 days, additional fees apply. No driving test required for renewal.",
  },
  {
    question: "Is driving license valid across India?",
    answer: "Yes, driving license issued by any RTO in India is valid throughout the country. However, for commercial license, some states may have additional requirements.",
  },
];

export default function DrivingLicensePage() {
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
              Driving License Guide India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Complete guide to driving license in India. Learn how to apply for learner's 
              license, permanent license, renewal, and pass the driving test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-white">
                <a href="https://parivahan.gov.in/parivahan/" target="_blank" rel="noopener noreferrer">
                  Apply on Parivahan Portal
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
            Driving license applications are processed through the Parivahan portal or your 
            local RTO. This guide provides educational information to help you understand the process.
          </AlertDescription>
        </Alert>

        {/* License Types */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Types of Driving Licenses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenseTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.type}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Step by Step */}
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

        {/* Documents */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Documents Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Test Tips */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Driving Test Tips
          </h2>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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

        {/* Fees */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Fees & Validity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Learner's License</p>
                  <p className="text-2xl font-bold text-primary">₹200</p>
                  <p className="text-sm text-muted-foreground mt-1">Valid: 6 months</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Permanent DL</p>
                  <p className="text-2xl font-bold text-green-600">₹200-500</p>
                  <p className="text-sm text-muted-foreground mt-1">Valid: 20 years or age 50</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">DL Renewal</p>
                  <p className="text-2xl font-bold text-primary">₹200-1000</p>
                  <p className="text-sm text-muted-foreground mt-1">Based on delay</p>
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
              <a href="https://parivahan.gov.in/parivahan/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Parivahan Portal
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://sarathi.parivahan.gov.in/sarathiservice/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Sarathi (DL Services)
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://parivahan.gov.in/rcdlstatus/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Check DL Status
              </a>
            </Button>
          </div>
        </section>

        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Important Warning</AlertTitle>
          <AlertDescription className="text-amber-700">
            Never drive without a valid license. It's illegal and dangerous. Avoid agents and touts 
            who promise quick licenses. SabPataKaro is an educational platform and is not affiliated 
            with Ministry of Road Transport & Highways.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
