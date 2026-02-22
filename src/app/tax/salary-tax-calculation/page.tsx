import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Receipt, Calculator, TrendingUp, IndianRupee, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How Salary Tax is Calculated in India | Step-by-Step Guide",
  description: "Learn how income tax on salary is calculated in India. Understand HRA, LTA, standard deduction, and tax on your salary income.",
  keywords: ["salary tax calculation", "how salary is taxed", "income tax on salary", "HRA exemption", "tax on salary India"],
};

export default function SalaryTaxCalculationPage() {
  return (
    <div>
      <div className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Guide</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How Salary Tax is Calculated in India
            </h1>
            <p className="text-lg text-blue-100">
              Understand how your salary is taxed, including all deductions and exemptions.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Salary Components & Tax Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Component</th>
                    <th className="text-center py-3">Tax Status</th>
                    <th className="text-left py-3">Limit/Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-3 font-medium">Basic Salary</td><td className="text-center"><Badge className="bg-red-100 text-red-700">Fully Taxable</Badge></td><td>100% taxable</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">HRA</td><td className="text-center"><Badge className="bg-green-100 text-green-700">Partially Exempt</Badge></td><td>Least of 3 calculations</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">LTA</td><td className="text-center"><Badge className="bg-green-100 text-green-700">Exempt</Badge></td><td>2 trips in 4 years block</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Special Allowance</td><td className="text-center"><Badge className="bg-red-100 text-red-700">Fully Taxable</Badge></td><td>100% taxable</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Standard Deduction</td><td className="text-center"><Badge className="bg-green-100 text-green-700">Deduction</Badge></td><td>₹50,000 (both regimes)</td></tr>
                  <tr className="border-b"><td className="py-3 font-medium">Professional Tax</td><td className="text-center"><Badge className="bg-green-100 text-green-700">Deduction</Badge></td><td>Max ₹2,500/year</td></tr>
                  <tr><td className="py-3 font-medium">EPF Contribution</td><td className="text-center"><Badge className="bg-green-100 text-green-700">80C Deduction</Badge></td><td>Part of ₹1.5L limit</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle>HRA Exemption Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">HRA exemption is the least of:</p>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e40af]">1.</span> Actual HRA received from employer</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e40af]">2.</span> Rent paid minus 10% of basic salary</li>
                <li className="flex items-start gap-2"><span className="font-bold text-[#1e40af]">3.</span> 50% of basic (metro) or 40% of basic (non-metro)</li>
              </ol>
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
