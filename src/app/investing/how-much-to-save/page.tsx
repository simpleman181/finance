import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, ArrowRight, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Should You Save Every Month | Savings Guide",
  description: "Learn how much you should save every month. Understand 50-30-20 rule, savings rate by age, and how to build wealth systematically.",
  keywords: ["how much to save", "monthly savings", "savings rate", "50-30-20 rule", "how much should I save"],
};

export default function HowMuchToSavePage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Savings Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How Much Should You Save Every Month?
            </h1>
            <p className="text-lg text-blue-100">
              Learn the ideal savings rate and build a habit that creates wealth.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <Card className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">The 50-30-20 Rule</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">50%</p>
                <p className="text-sm text-muted-foreground">Needs</p>
                <p className="text-xs text-muted-foreground">Rent, bills, groceries</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">30%</p>
                <p className="text-sm text-muted-foreground">Wants</p>
                <p className="text-xs text-muted-foreground">Entertainment, dining</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-2xl font-bold text-green-600">20%</p>
                <p className="text-sm text-muted-foreground">Savings</p>
                <p className="text-xs text-muted-foreground">Invest, emergency fund</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-xl font-bold mb-4">Savings Rate by Age</h2>
          <div className="space-y-3">
            {[
              { age: "20s", rate: "10-20%", note: "Start the habit" },
              { age: "30s", rate: "20-30%", note: "Peak earning years" },
              { age: "40s", rate: "30-40%", note: "Accelerate savings" },
              { age: "50s", rate: "40-50%", note: "Catch-up for retirement" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="font-medium">{item.age}</span>
                <Badge className="bg-green-100 text-green-700">{item.rate}</Badge>
                <span className="text-sm text-muted-foreground">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href="/tools/sip-return-calculator">
              Calculate Your SIP
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
