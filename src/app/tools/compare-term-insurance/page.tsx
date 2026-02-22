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
  Shield,
  Heart,
  TrendingUp,
  Calculator,
  IndianRupee,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Term Insurance Plans in India | Side by Side Comparison",
  description: "Compare term insurance plans from top insurers in India. Compare premiums, coverage, claim ratios, and features side by side to find the best plan.",
  keywords: ["compare term insurance", "term insurance comparison", "best term insurance India", "term plan comparison"],
};

const termPlans = [
  { insurer: "HDFC Life", plan: "Click 2 Protect Super", premium: 470, claimRatio: 99.35, features: ["Instant issuance", "Multiple payout options"], rating: 4.8 },
  { insurer: "ICICI Prudential", plan: "iProtect Smart", premium: 485, claimRatio: 98.58, features: ["Wellness benefits", "Terminal illness cover"], rating: 4.7 },
  { insurer: "Max Life", plan: "Smart Secure Plus", premium: 492, claimRatio: 99.34, features: ["5% additional SA", "Premium break option"], rating: 4.8 },
  { insurer: "Tata AIA", plan: "Sampoorna Raksha", premium: 478, claimRatio: 99.13, features: ["Lumpsum + income", "Waiver of premium"], rating: 4.7 },
  { insurer: "SBI Life", plan: "eShield Next", premium: 465, claimRatio: 97.88, features: ["Auto claim", "Special women rates"], rating: 4.6 },
];

export default function CompareTermInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Comparison Tool</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Compare Term Insurance Plans
            </h1>
            <p className="text-lg text-blue-100">
              Compare term insurance plans from India's top insurers side by side. Find the best coverage at the most affordable premium.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        {/* Comparison Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#1e40af]" />
              Term Insurance Comparison (₹1 Crore, 30 years, Non-smoker)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Insurer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead className="text-center">Monthly Premium</TableHead>
                    <TableHead className="text-center">Claim Ratio</TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead>Key Features</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {termPlans.map((plan, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{plan.insurer}</TableCell>
                      <TableCell>{plan.plan}</TableCell>
                      <TableCell className="text-center">
                        <span className="font-bold text-lg">₹{plan.premium}</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </TableCell>
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
                          <Link href="/term-insurance/premium-calculator">Get Quote</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Premiums are indicative for a 30-year-old non-smoker. Actual premium may vary based on individual profile.
            </p>
          </CardContent>
        </Card>

        {/* Key Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Shield, title: "Claim Settlement Ratio", description: "Choose insurers with 95%+ ratio for reliable claim processing" },
            { icon: IndianRupee, title: "Premium Amount", description: "Compare premiums for identical coverage across insurers" },
            { icon: Award, title: "Policy Features", description: "Look for flexible payout options and rider benefits" },
            { icon: CheckCircle, title: "Customer Service", description: "Check reviews and support quality before buying" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-[#1e40af]" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-[#1e40af] to-[#059669] text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Ready to Buy Term Insurance?</h3>
                <p className="text-blue-100">Calculate your exact premium based on your profile</p>
              </div>
              <div className="flex gap-4">
                <Button asChild className="bg-white text-[#1e40af] hover:bg-blue-50">
                  <Link href="/term-insurance/premium-calculator">
                    Calculate Premium
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/term-insurance/best-plans">View Best Plans</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
