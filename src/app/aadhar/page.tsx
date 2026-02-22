import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Fingerprint,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  ExternalLink,
  AlertTriangle,
  HelpCircle,
  User,
  Edit,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aadhar Card Guide India - How to Apply, Update, Download | SabPataKaro",
  description: "Complete guide to Aadhar card in India. Learn how to apply for new Aadhar, update details, download e-Aadhar. Documents required, do's and don'ts, and official links.",
  keywords: ["aadhar card", "aadhar application", "aadhar update", "e-aadhar", "aadhar enrollment", "uidai"],
};

const services = [
  { title: "New Aadhar Enrollment", description: "For first-time applicants who don't have Aadhar", icon: User, color: "#1e40af" },
  { title: "Aadhar Update", description: "Update name, address, mobile number, photo, etc.", icon: Edit, color: "#059669" },
  { title: "Download e-Aadhar", description: "Get digital copy of your Aadhar card instantly", icon: Download, color: "#7c3aed" },
  { title: "Aadhar Lock/Unlock", description: "Secure your Aadhar biometrics from misuse", icon: Fingerprint, color: "#dc2626" },
];

const documents = [
  { category: "Proof of Identity", items: ["PAN Card", "Passport", "Voter ID", "Driving License", "Ration Card"] },
  { category: "Proof of Address", items: ["Passport", "Bank Statement", "Utility Bills", "Ration Card", "Property Tax Receipt"] },
  { category: "Proof of Date of Birth", items: ["Birth Certificate", "Passport", "SSLC Certificate", "PAN Card"] },
  { category: "Proof of Relationship", items: ["PDS Card", "Pension Card", "Family entitlement documents"] },
];

const updateableFields = [
  { field: "Name", documents: "Identity proof with correct name" },
  { field: "Address", documents: "Address proof with correct address" },
  { field: "Mobile Number", documents: "No document (OTP verification)" },
  { field: "Email ID", documents: "No document (OTP verification)" },
  { field: "Date of Birth", documents: "Birth certificate or equivalent" },
  { field: "Photo", documents: "No document (photo taken at center)" },
  { field: "Biometrics", documents: "No document (captured at center)" },
  { field: "Gender", documents: "Supporting document if required" },
];

const doAndDonts = {
  dos: [
    "Apply through official UIDAI centers or authorized banks only",
    "Carry original documents for verification",
    "Keep the enrollment slip safe until you receive Aadhar",
    "Link Aadhar with PAN, bank account, and mobile number",
    "Update your Aadhar whenever there are changes",
    "Use mAadhar app for easy access to your Aadhar",
    "Lock your biometrics when not in use for security",
    "Verify Aadhar before accepting it as identity proof",
  ],
  donts: [
    "Don't share your Aadhar OTP with anyone",
    "Don't use Aadhar for purposes not intended",
    "Don't apply for multiple Aadhar cards",
    "Don't share Aadhar details on unsecured platforms",
    "Don't ignore Aadhar linking deadlines",
    "Don't let anyone photocopy your Aadhar without need",
    "Don't share enrollment ID with strangers",
    "Don't use unauthorized agents for Aadhar services",
  ],
};

const faqs = [
  {
    question: "How long does it take to get Aadhar card?",
    answer: "After enrollment, Aadhar is generated within 90 days. You can download e-Aadhar from UIDAI website once generated using your enrollment ID. Physical Aadhar card takes 3-5 weeks to reach by post.",
  },
  {
    question: "Is Aadhar mandatory?",
    answer: "Aadhar is required for many government services, subsidies, and financial transactions. However, Supreme Court has ruled that it cannot be made mandatory for all services. Check specific requirements for your needs.",
  },
  {
    question: "How to update mobile number in Aadhar?",
    answer: "Visit any Aadhar enrollment center with your Aadhar card. Fill the update form, provide mobile number, and pay ₹50 fee. Your mobile will be linked via OTP verification at the center.",
  },
  {
    question: "What if I lose my Aadhar card?",
    answer: "Download e-Aadhar from UIDAI website using your Aadhar number or enrollment ID. You can also order a reprint of Aadhar card online for ₹50, delivered by Speed Post.",
  },
  {
    question: "How to lock Aadhar biometrics?",
    answer: "Visit UIDAI website or use mAadhar app to lock your biometrics. This prevents misuse of your fingerprint/iris data. You can unlock temporarily when needed for authentication.",
  },
];

export default function AadharPage() {
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
              Aadhar Card Guide India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Complete guide to Aadhar card in India. Learn how to apply for new Aadhar, 
              update details, download e-Aadhar, and secure your Aadhar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button text-white">
                <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">
                  Visit UIDAI Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="https://eaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
                  Download e-Aadhar
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
            Aadhar services are provided by UIDAI (Unique Identification Authority of India). 
            This guide provides educational information to help you understand the process.
          </AlertDescription>
        </Alert>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Aadhar Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${item.color}15` }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Apply for New Aadhar
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Find Enrollment Center", description: "Locate nearest Aadhar enrollment center via UIDAI website. Banks and post offices also provide this service." },
                { step: 2, title: "Fill Enrollment Form", description: "Fill the Aadhar enrollment form with correct details - name, address, date of birth, mobile number, email." },
                { step: 3, title: "Submit Documents", description: "Submit proof of identity, address, date of birth, and relationship (for child enrollment)." },
                { step: 4, title: "Biometric Capture", description: "Your photo, fingerprints (all 10 fingers), and iris scan will be captured at the center." },
                { step: 5, title: "Get Acknowledgment", description: "Receive enrollment slip with 14-digit enrollment ID. Keep it safe to track status and download e-Aadhar." },
                { step: 6, title: "Receive Aadhar", description: "Aadhar is generated in 90 days. Download e-Aadhar online or wait for physical card by post (3-5 weeks)." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
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

        {/* Updateable Fields */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Aadhar Update - Fields & Documents
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium">Field to Update</th>
                      <th className="text-left py-3 font-medium">Documents Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updateableFields.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.field}</td>
                        <td className="py-3 text-muted-foreground">{item.documents}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                UIDAI Portal
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://eaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Download e-Aadhar
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://ssup.uidai.gov.in/ssup/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Aadhar Update
              </a>
            </Button>
            <Button AsChild variant="outline" className="h-auto py-4 justify-start">
              <a href="https://myaadhaar.uidai.gov.in/lockUnlockAadhaar" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Lock Biometrics
              </a>
            </Button>
          </div>
        </section>

        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Important Warning</AlertTitle>
          <AlertDescription className="text-amber-700">
            Never share your Aadhar OTP with anyone. UIDAI never asks for OTP via phone or email. 
            SabPataKaro is an educational platform and is not affiliated with UIDAI.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
