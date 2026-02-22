import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Heart,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Health Insurance Plans in India | Side by Side Comparison",
  description: "Compare health insurance plans from top insurers in India. Compare coverage, premiums, network hospitals, and features to find the best health policy.",
  keywords: ["compare health insurance", "health insurance comparison", "best mediclaim India", "health policy comparison"],
};

const healthPlans = [
  { insurer: "Star Health", plan: "Family Health Optima", premium: 8000, network: 14000, claimRatio: 82.4, features: ["No room rent limit", "50% NCB"], rating: 4.7 },
  { insurer: "HDFC Ergo", plan: "my:health Suraksha", premium: 7500, network: 12000, claimRatio: 86.5, features: ["Daily cash benefit", "No sub-limits"], rating: 4.6 },
  { insurer: "ICICI Lombard", plan: "Health AdvantEDGE", premium: 7000, network: 11000, claimRatio: 84.2, features: ["Global coverage", "OPD cover"], rating: 4.6 },
  { insurer: "Care Health", plan: "Care Supreme", premium: 8000, network: 15000, claimRatio: 85.3, features: ["Unlimited restore", "Annual checkup"], rating: 4.5 },
  { insurer: "Niva Bupa", plan: "Health Companion", premium: 8500, network: 10000, claimRatio: 83.1, features: ["OPD expenses", "Wellness program"], rating: 4.5 },
];

export default function CompareHealthInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Comparison Tool</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Compare Health Insurance Plans
            </h1>
            <p className="text-lg text-blue-100">
              Compare health insurance policies from India's leading insurers. Find comprehensive coverage for you and your family.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        {/* Comparison Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#dc2626]" />
              Health Insurance Comparison (₹10 Lakh Family Floater)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Insurer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead className="text-center">Annual Premium</TableHead>
                    <TableHead className="text-center">Network Hospitals</TableHead>
                    <TableHead className="text-center">Claim Ratio</TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead>Key Features</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {healthPlans.map((plan, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{plan.insurer}</TableCell>
                      <TableCell>{plan.plan}</TableCell>
                      <TableCell className="text-center">
                        <span className="font-bold">₹{plan.premium.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">/year</span>
                      </TableCell>
                      <TableCell className="text-center">{plan.network.toLocaleString()}+</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-green-100 text-green-700">{plan.claimRatio}%</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {plan.rating}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {plan.features.map((f, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{f}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" asChild>
                          <Link href="/health-insurance/premium-calculator">Get Quote</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Premiums are indicative for a family of 4 (eldest member 35 years). Actual premium may vary.
            </p>
          </CardContent>
        </Card>

        {/* Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Building, title: "Network Hospitals", description: "More hospitals mean better cashless accessibility near you" },
            { icon: Shield, title: "Claim Settlement", description: "High claim ratio indicates reliable claim processing" },
            { icon: Heart, title: "Coverage Features", description: "Look for no sub-limits, restoration benefits, and NCB" },
            { icon: CheckCircle, title: "Waiting Period", description: "Shorter waiting periods for pre-existing diseases" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#dc2626]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-[#dc2626]" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-[#dc2626] to-[#059669] text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Find Your Perfect Health Insurance</h3>
                <p className="text-green-100">Calculate premium for your family's specific needs</p>
              </div>
              <div className="flex gap-4">
                <Button asChild className="bg-white text-[#dc2626] hover:bg-red-50">
                  <Link href="/health-insurance/premium-calculator">
                    Calculate Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/health-insurance/best-plans">View Best Plans</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
