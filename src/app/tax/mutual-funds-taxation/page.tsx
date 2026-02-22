import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax on Mutual Funds in India | LTCG, STCG, Dividend Tax",
  description: "Complete guide to mutual fund taxation in India. Learn about tax on equity funds, debt funds, SIP taxation, and capital gains on mutual funds.",
  keywords: ["mutual funds tax", "SIP tax", "equity fund tax", "debt fund tax", "mutual fund capital gains"],
};

export default function MutualFundsTaxationPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tax on Mutual Funds in India
            </h1>
            <p className="text-lg text-blue-100">
              Understand how mutual fund returns are taxed - equity funds, debt funds, and SIP investments.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle>Equity Mutual Funds</CardTitle>
              <p className="text-sm text-muted-foreground">&gt;65% invested in equity</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                  <span className="text-sm">STCG (&lt;1 year)</span>
                  <Badge className="bg-amber-100 text-amber-700">15%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-sm">LTCG (&gt;1 year)</span>
                  <Badge className="bg-green-100 text-green-700">10% above ₹1L</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle>Debt Mutual Funds</CardTitle>
              <p className="text-sm text-muted-foreground">&lt;65% in equity</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                  <span className="text-sm">STCG (&lt;3 years)</span>
                  <Badge className="bg-amber-100 text-amber-700">As per slab</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-sm">LTCG (&gt;3 years)</span>
                  <Badge className="bg-purple-100 text-purple-700">20% with indexation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
