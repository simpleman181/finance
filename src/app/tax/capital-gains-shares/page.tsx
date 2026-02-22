import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capital Gains Tax on Shares in India | Complete Guide",
  description: "Understand capital gains tax on shares in India. Learn about STCG, LTCG, tax rates, and how to calculate tax on share trading profits.",
  keywords: ["capital gains tax shares", "stock market tax India", "LTCG tax", "STCG tax", "share profit tax"],
};

export default function CapitalGainsSharesPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Capital Gains Tax on Shares
            </h1>
            <p className="text-lg text-blue-100">
              Learn how profits from share trading and investments are taxed in India.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle>Short Term Capital Gains (STCG)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Badge className="bg-amber-100 text-amber-700">Holding Period</Badge>
                  <span>Less than 12 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-red-100 text-red-700">Tax Rate</Badge>
                  <span>15% (flat rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">Exemption</Badge>
                  <span>No basic exemption limit</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle>Long Term Capital Gains (LTCG)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-100 text-green-700">Holding Period</Badge>
                  <span>More than 12 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="bg-green-100 text-green-700">Tax Rate</Badge>
                  <span>10% above ₹1 lakh</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">Exemption</Badge>
                  <span>First ₹1 lakh tax-free</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tax/income-tax-calculator">
              Calculate Your Tax
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
