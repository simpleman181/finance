import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "SIP vs Lump Sum Investment | Which is Better for You?",
  description: "Compare SIP vs Lump Sum investment strategies. Understand the pros and cons of each approach and decide which mutual fund investment method suits you better.",
  keywords: ["SIP vs lump sum", "SIP vs one time investment", "mutual fund investment methods", "SIP investment strategy"],
};

export default function SIPVsLumpsumPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Investment Guide</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              SIP vs Lump Sum Investment
            </h1>
            <p className="text-lg text-blue-100">
              Should you invest monthly or as a lump sum? Compare both strategies and find what works for you.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                SIP (Systematic Investment Plan)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Invest fixed amount regularly (monthly/quarterly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Rupee cost averaging - buy more units when NAV is low</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">No need to time the market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Start with as low as ₹500/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Inculcates investment discipline</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Salaried individuals, beginners, those with regular income</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                Lump Sum Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Invest entire amount at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">All money starts working immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Better returns if timed correctly (market low)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Good for windfalls (bonus, inheritance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm">No need for monthly tracking</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground"><strong>Best for:</strong> Experienced investors, lump sum receipts, bullish markets</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto mb-12">
          <CardHeader>
            <CardTitle>Example: ₹1.2 Lakh Investment Over 1 Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">SIP: ₹10,000/month</h4>
                <p className="text-sm text-muted-foreground mb-2">Units bought at different NAVs throughout the year</p>
                <p className="text-lg font-bold">Estimated Value: ₹1.32 Lakh</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Lump Sum: ₹1.2 Lakh</h4>
                <p className="text-sm text-muted-foreground mb-2">All units bought at start of year</p>
                <p className="text-lg font-bold">Estimated Value: ₹1.34 Lakh*</p>
                <p className="text-xs text-muted-foreground">*If invested at market low</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tools/sip-return-calculator">
              Calculate SIP Returns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
