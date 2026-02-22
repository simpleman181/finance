import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Common Investing Mistakes Beginners Make | Avoid These Pitfalls",
  description: "Learn about the most common investing mistakes beginners make. Avoid these pitfalls and build wealth the right way.",
  keywords: ["investing mistakes", "common investment mistakes", "beginner investing errors", "what not to do investing"],
};

export default function CommonMistakesPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Investment Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Common Investing Mistakes to Avoid
            </h1>
            <p className="text-lg text-blue-100">
              Don't let these mistakes derail your wealth-building journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { mistake: "Starting Too Late", impact: "Miss years of compounding", solution: "Start today, even with small amounts" },
            { mistake: "Trying to Time the Market", impact: "Buy high, sell low", solution: "Invest regularly via SIP" },
            { mistake: "Stopping SIP in Market Crash", impact: "Miss recovery gains", solution: "Stay invested for long term" },
            { mistake: "Following Hot Tips", impact: "Lose money in speculation", solution: "Research before investing" },
            { mistake: "Insurance as Investment", impact: "Low returns, high charges", solution: "Buy term, invest difference" },
            { mistake: "Not Reviewing Portfolio", impact: "Portfolio drifts from goals", solution: "Review once a year" },
            { mistake: "Ignoring Inflation", impact: "Real returns lower", solution: "Invest in equity for growth" },
            { mistake: "Over-diversification", impact: "Diluted returns", solution: "5-7 funds are enough" },
          ].map((item, i) => (
            <Card key={i} className="border-l-4 border-l-red-400">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{item.mistake}</h3>
                    <p className="text-sm text-red-600">Impact: {item.impact}</p>
                    <p className="text-sm text-green-600 mt-1">Solution: {item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/investing">
              Learn Smart Investing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
