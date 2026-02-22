import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, IndianRupee, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Start Investing with Small Amount | Beginner Guide",
  description: "Learn how to start investing with small amounts like ₹500 or ₹1000. Start your investment journey today with limited funds.",
  keywords: ["start investing small amount", "invest with little money", "how to start investing", "invest ₹500"],
};

export default function StartInvestingSmallPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Beginner Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How to Start Investing with Small Amount
            </h1>
            <p className="text-lg text-blue-100">
              You don't need lakhs to start investing. Begin with ₹500/month and build wealth over time.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl font-bold mb-6">Options to Start with Small Amounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { option: "SIP in Mutual Funds", minAmount: "₹500/month", returns: "12-15%", note: "Start with equity funds" },
              { option: "PPF", minAmount: "₹500/year", returns: "7-8%", note: "Government backed, tax-free" },
              { option: "Digital Gold", minAmount: "₹100", returns: "8-10%", note: "Start with ₹100 on apps" },
              { option: "NPS", minAmount: "₹500/year", returns: "9-11%", note: "Good for retirement" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">{item.option}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Min Amount</span><Badge className="bg-green-100 text-green-700">{item.minAmount}</Badge></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Expected Returns</span><span className="font-medium">{item.returns}</span></div>
                    <p className="text-muted-foreground mt-2">{item.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tools/sip-return-calculator">
              Start SIP Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
