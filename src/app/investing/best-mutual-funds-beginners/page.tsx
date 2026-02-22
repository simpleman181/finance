import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Mutual Funds for Beginners in India 2024 | Top Picks",
  description: "Discover the best mutual funds for beginners in India. Learn about large cap, index funds, and balanced funds perfect for new investors.",
  keywords: ["best mutual funds beginners", "mutual funds for new investors", "top mutual funds India", "beginner mutual funds"],
};

export default function BestMutualFundsBeginnersPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Investment Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Best Mutual Funds for Beginners
            </h1>
            <p className="text-lg text-blue-100">
              New to mutual funds? Start with these beginner-friendly options.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { category: "Large Cap Funds", risk: "Moderate", returns: "10-12%", why: "Stable, blue-chip companies" },
            { category: "Index Funds", risk: "Moderate", returns: "11-13%", why: "Low cost, market returns" },
            { category: "Balanced Funds", risk: "Low-Moderate", returns: "8-10%", why: "Mix of equity & debt" },
            { category: "ELSS Funds", risk: "High", returns: "12-15%", why: "Tax saving + growth" },
            { category: "Nifty 50 Index", risk: "Moderate", returns: "11-13%", why: "Simplest way to start" },
            { category: "Debt Funds", risk: "Low", returns: "6-8%", why: "For short-term goals" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">{item.category}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Risk</span><Badge variant="outline">{item.risk}</Badge></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Expected Returns</span><span className="font-medium">{item.returns}</span></div>
                  <p className="text-muted-foreground mt-2">Why: {item.why}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tools/sip-return-calculator">
              Start SIP Calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
