import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, CheckCircle, Shield, IndianRupee, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build Emergency Fund in India | Step-by-Step Guide",
  description: "Learn how to build an emergency fund in India. Understand how much to save, where to keep it, and why it's the foundation of financial planning.",
  keywords: ["emergency fund", "emergency fund India", "how to save emergency fund", "financial safety net"],
};

export default function EmergencyFundPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Financial Safety Net</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How to Build an Emergency Fund
            </h1>
            <p className="text-lg text-blue-100">
              An emergency fund is your financial safety net. Learn how to build one before investing in anything else.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Why You Need an Emergency Fund FIRST</h3>
                  <p className="text-muted-foreground">
                    Before investing in stocks, mutual funds, or any other instrument, you need 3-6 months of expenses saved. 
                    This fund protects you from job loss, medical emergencies, or unexpected expenses without dipping into investments or taking loans.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-[#1e40af]" />
                How Much to Save?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium">Minimum: 3 months expenses</p>
                  <p className="text-sm text-muted-foreground">For stable jobs, dual income households</p>
                </li>
                <li className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium">Recommended: 6 months expenses</p>
                  <p className="text-sm text-muted-foreground">For most people - provides adequate cushion</p>
                </li>
                <li className="p-3 bg-amber-50 rounded-lg">
                  <p className="font-medium">Extended: 9-12 months</p>
                  <p className="text-sm text-muted-foreground">For self-employed, single income, uncertain jobs</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#059669]" />
                Where to Keep It?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Savings Account</p>
                    <p className="text-sm text-muted-foreground">Instant access, low returns (3-4%)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Liquid Mutual Fund</p>
                    <p className="text-sm text-muted-foreground">T+1 withdrawal, better returns (6-7%)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Flexi Fixed Deposit</p>
                    <p className="text-sm text-muted-foreground">Auto-sweep facility, good compromise</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto mb-12">
          <CardHeader>
            <CardTitle>Step-by-Step: Building Your Emergency Fund</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold">Calculate Monthly Expenses</h4>
                  <p className="text-sm text-muted-foreground">Include rent, EMIs, utilities, groceries, insurance premiums, and essential spending</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold">Set Target Amount</h4>
                  <p className="text-sm text-muted-foreground">Monthly expenses × 6 = Your emergency fund target</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold">Open Separate Account</h4>
                  <p className="text-sm text-muted-foreground">Don't mix with regular savings. Consider a sweep FD or liquid fund</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold">Automate Savings</h4>
                  <p className="text-sm text-muted-foreground">Set up auto-debit of 10-20% of income to this fund until target reached</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/investing">
              Learn More About Investing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
