import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Short Term vs Long Term Capital Gains Tax | Comparison Guide",
  description: "Compare short term and long term capital gains tax in India. Understand holding periods, tax rates, and how to optimize your investment taxes.",
  keywords: ["short term vs long term capital gains", "STCG vs LTCG", "capital gains holding period", "capital gains tax comparison"],
};

export default function STCGvsLTCGPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Comparison</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Short Term vs Long Term Capital Gains
            </h1>
            <p className="text-lg text-blue-100">
              Understand the difference between STCG and LTCG and how they affect your investment returns.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Factor</th>
                    <th className="text-center py-3 bg-amber-50">STCG</th>
                    <th className="text-center py-3 bg-green-50">LTCG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-3 font-medium">Holding Period</td><td className="text-center bg-amber-50/50">&lt; 12 months</td><td className="text-center bg-green-50/50">&gt; 12 months</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Tax Rate (Equity)</td><td className="text-center bg-amber-50/50">15%</td><td className="text-center bg-green-50/50">10% above ₹1L</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Exemption</td><td className="text-center bg-amber-50/50">None</td><td className="text-center bg-green-50/50">₹1 Lakh/year</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Indexation</td><td className="text-center bg-amber-50/50">Not applicable</td><td className="text-center bg-green-50/50">Not for equity</td></tr>
                  <tr><td className="py-3 font-medium">Best For</td><td className="text-center bg-amber-50/50">Trading</td><td className="text-center bg-green-50/50">Investing</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tax/capital-gains-shares">
              Learn More About Capital Gains
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
