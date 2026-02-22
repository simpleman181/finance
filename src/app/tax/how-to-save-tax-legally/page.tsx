import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, TrendingUp, IndianRupee, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Save Tax Legally in India | Smart Tax Strategies 2024-25",
  description: "Learn legal ways to save tax in India. From 80C investments to HRA exemptions, discover all legitimate tax-saving strategies for individuals.",
  keywords: ["how to save tax legally", "legal tax saving", "tax saving tips", "reduce tax India"],
};

export default function HowToSaveTaxLegallyPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Saving Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How to Save Tax Legally in India
            </h1>
            <p className="text-lg text-blue-100">
              All legitimate ways to reduce your tax liability. No shortcuts, only smart planning.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { section: "Section 80C", limit: "Up to ₹1.5L", options: "PPF, ELSS, EPF, Life Insurance, NSC, Tax-Saving FD" },
            { section: "Section 80CCD(1B)", limit: "Up to ₹50K", options: "NPS additional deduction" },
            { section: "Section 80D", limit: "Up to ₹75K", options: "Health insurance for self + parents" },
            { section: "HRA Exemption", limit: "Varies", options: "Rent paid minus 10% of basic (least of 3)" },
            { section: "Section 24(b)", limit: "Up to ₹2L", options: "Home loan interest deduction" },
            { section: "Section 80E", limit: "No limit", options: "Education loan interest (8 years)" },
            { section: "LTA Exemption", limit: "Varies", options: "Travel expenses 2 trips in 4-year block" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.section}</h3>
                    <p className="text-sm text-muted-foreground">{item.options}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">{item.limit}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tax/income-tax-calculator">
              Calculate Your Tax Savings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
