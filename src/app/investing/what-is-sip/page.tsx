import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, CheckCircle, Shield, IndianRupee, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "What is SIP in Mutual Funds | Complete Guide for Beginners",
  description: "Learn what SIP (Systematic Investment Plan) is, how it works, and why it's the best way to invest in mutual funds. Start your SIP journey with just ₹500/month.",
  keywords: ["what is SIP", "SIP meaning", "SIP mutual funds", "how SIP works", "SIP investment India"],
};

export default function WhatIsSIPPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Investment Basics</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What is SIP in Mutual Funds?
            </h1>
            <p className="text-lg text-blue-100">
              A Systematic Investment Plan (SIP) is a disciplined way to invest in mutual funds. Invest fixed amounts regularly and build wealth over time.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">SIP in Simple Terms</h3>
              <p className="text-muted-foreground mb-4">
                A SIP allows you to invest a fixed amount (as low as ₹500) in a mutual fund scheme at regular intervals - typically monthly. 
                Instead of investing a large sum at once, you invest smaller amounts consistently. This builds a habit of saving and 
                takes advantage of rupee cost averaging.
              </p>
              <p className="text-muted-foreground">
                Think of SIP like a recurring deposit, but with potential for higher returns as your money is invested in stocks or bonds 
                through mutual funds. Over time, the power of compounding turns small regular investments into substantial wealth.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <IndianRupee className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Start Small</h3>
              <p className="text-sm text-muted-foreground">Begin with just ₹500/month. Increase as your income grows.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Rupee Cost Averaging</h3>
              <p className="text-sm text-muted-foreground">Buy more units when markets are low, fewer when high.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Power of Compounding</h3>
              <p className="text-sm text-muted-foreground">Small amounts grow into crores over 20-30 years.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto mb-12">
          <CardHeader>
            <CardTitle>Example: ₹10,000 Monthly SIP for 20 Years</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="text-2xl font-bold text-blue-600">₹24 Lakh</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Est. Returns (12%)</p>
                <p className="text-2xl font-bold text-green-600">₹75 Lakh</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold text-purple-600">₹99 Lakh</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Your investment grows 4x over 20 years! Use our SIP calculator to see your potential returns.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tools/sip-return-calculator">
              Calculate Your SIP Returns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
