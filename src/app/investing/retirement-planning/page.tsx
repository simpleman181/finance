import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, CheckCircle, IndianRupee, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Retirement Planning in India | Complete Guide for Secure Future",
  description: "Plan your retirement in India with our comprehensive guide. Learn about NPS, EPF, PPF, and how much you need for a comfortable retirement.",
  keywords: ["retirement planning India", "NPS", "EPF", "retirement corpus", "pension planning India"],
};

export default function RetirementPlanningPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Future Planning</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Retirement Planning in India
            </h1>
            <p className="text-lg text-blue-100">
              Start planning for retirement today. Learn how to build a corpus that ensures financial independence in your golden years.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">The 30x Rule for Retirement</h3>
              <p className="text-muted-foreground mb-4">
                A common guideline: Your retirement corpus should be at least 30 times your annual expenses. 
                If you spend ₹50,000/month (₹6 lakh/year), aim for ₹1.8 crores. Adjust this for inflation - 
                ₹50,000 today will need ₹2.9 lakh/month in 25 years at 6% inflation.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">30x</p>
                  <p className="text-xs text-muted-foreground">Annual Expenses</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">₹1.8 Cr</p>
                  <p className="text-xs text-muted-foreground">Minimum Corpus</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">25+ Years</p>
                  <p className="text-xs text-muted-foreground">Time Horizon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Retirement Investment Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">EPF</h3>
              <p className="text-sm text-muted-foreground mb-3">Auto-deducted from salary. 12% of basic + employer contribution.</p>
              <Badge className="bg-green-100 text-green-700">8-9% Returns</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">PPF</h3>
              <p className="text-sm text-muted-foreground mb-3">Tax-free returns. 15-year lock-in, can extend in blocks.</p>
              <Badge className="bg-blue-100 text-blue-700">7-8% Returns</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">NPS</h3>
              <p className="text-sm text-muted-foreground mb-3">Market-linked returns. Tax benefit up to ₹2L total (80C + 80CCD).</p>
              <Badge className="bg-purple-100 text-purple-700">9-11% Returns</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Mutual Funds</h3>
              <p className="text-sm text-muted-foreground mb-3">Higher returns for long-term. Start SIP early.</p>
              <Badge className="bg-amber-100 text-amber-700">12-15% Returns</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/investing/retirement-calculator">
              Calculate Retirement Corpus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
