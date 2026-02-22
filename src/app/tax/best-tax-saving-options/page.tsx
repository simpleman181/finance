import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, TrendingUp, IndianRupee, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Tax Saving Options for Salaried People in India 2024-25",
  description: "Discover the best tax saving options for salaried individuals. Compare PPF, ELSS, NPS, and other tax-saving investments to maximize your savings.",
  keywords: ["best tax saving options", "tax saving for salaried", "tax saving investments", "80C investments"],
};

export default function BestTaxSavingOptionsPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Planning</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Best Tax Saving Options for Salaried
            </h1>
            <p className="text-lg text-blue-100">
              Maximize your tax savings with the right mix of investments. Compare all options here.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: "PPF", limit: "₹1.5L", returns: "7-8%", lockIn: "15Y", risk: "Low" },
            { name: "ELSS", limit: "₹1.5L", returns: "12-15%", lockIn: "3Y", risk: "High" },
            { name: "NPS", limit: "₹2L*", returns: "9-11%", lockIn: "Till 60", risk: "Moderate" },
            { name: "Tax-Saving FD", limit: "₹1.5L", returns: "6-7%", lockIn: "5Y", risk: "Low" },
            { name: "NSC", limit: "₹1.5L", returns: "7-8%", lockIn: "5Y", risk: "Low" },
            { name: "EPF/VPF", limit: "12% salary", returns: "8-9%", lockIn: "Retirement", risk: "Low" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">{item.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Limit</span><span className="font-medium">{item.limit}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Returns</span><span className="font-medium">{item.returns}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Lock-in</span><span className="font-medium">{item.lockIn}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Risk</span>
                    <Badge className={item.risk === "Low" ? "bg-green-100 text-green-700" : item.risk === "High" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}>{item.risk}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tax/section-80c">
              View All 80C Options
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
