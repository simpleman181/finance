"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Calculator, Receipt, ArrowRight, IndianRupee, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TaxSavingPlanner() {
  const [income, setIncome] = useState(1500000);
  const [investment80C, setInvestment80C] = useState(150000);
  const [healthInsurance, setHealthInsurance] = useState(25000);
  const [nps, setNps] = useState(50000);
  const [homeLoan, setHomeLoan] = useState(200000);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const totalDeductions = Math.min(investment80C, 150000) + Math.min(healthInsurance, 75000) + Math.min(nps, 50000) + Math.min(homeLoan, 200000) + 50000; // Standard deduction
    const taxableIncome = Math.max(0, income - totalDeductions);
    
    // New regime tax (simplified)
    let newRegimeTax = 0;
    const newTaxable = Math.max(0, income - 50000);
    if (newTaxable > 300000) newRegimeTax = (newTaxable - 300000) * 0.05;
    if (newTaxable > 700000) newRegimeTax = 20000 + (newTaxable - 700000) * 0.1;
    if (newTaxable > 1000000) newRegimeTax = 50000 + (newTaxable - 1000000) * 0.15;
    
    // Old regime tax (simplified)
    let oldRegimeTax = 0;
    if (taxableIncome > 250000) oldRegimeTax = (taxableIncome - 250000) * 0.05;
    if (taxableIncome > 500000) oldRegimeTax = 12500 + (taxableIncome - 500000) * 0.2;
    if (taxableIncome > 1000000) oldRegimeTax = 112500 + (taxableIncome - 1000000) * 0.3;
    
    // Add cess
    newRegimeTax *= 1.04;
    oldRegimeTax *= 1.04;
    
    setResult({
      totalDeductions,
      taxableIncome,
      oldRegimeTax: Math.round(oldRegimeTax),
      newRegimeTax: Math.round(newRegimeTax),
      betterRegime: oldRegimeTax < newRegimeTax ? "Old" : "New",
      savings: Math.round(Math.abs(oldRegimeTax - newRegimeTax)),
    });
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(0)} L`;
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Tax Planning</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tax Saving Planner
            </h1>
            <p className="text-lg text-blue-100">
              Plan your tax-saving investments and see how much you can save under both old and new regimes.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-[#059669]" />
                  Your Tax Saving Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Annual Income: {formatCurrency(income)}</Label>
                  <Slider value={[income]} onValueChange={(v) => setIncome(v[0])} min={500000} max={5000000} step={50000} />
                </div>

                <div className="space-y-2">
                  <Label>80C Investments: {formatCurrency(investment80C)}</Label>
                  <Slider value={[investment80C]} onValueChange={(v) => setInvestment80C(v[0])} min={0} max={150000} step={5000} />
                </div>

                <div className="space-y-2">
                  <Label>Health Insurance (80D): {formatCurrency(healthInsurance)}</Label>
                  <Slider value={[healthInsurance]} onValueChange={(v) => setHealthInsurance(v[0])} min={0} max={75000} step={5000} />
                </div>

                <div className="space-y-2">
                  <Label>NPS Contribution: {formatCurrency(nps)}</Label>
                  <Slider value={[nps]} onValueChange={(v) => setNps(v[0])} min={0} max={50000} step={5000} />
                </div>

                <Button onClick={calculate} className="w-full cta-button text-white" size="lg">
                  Calculate Tax Savings
                </Button>
              </CardContent>
            </Card>
          </div>

          {result && (
            <div>
              <Card className="sticky top-20">
                <CardHeader className="bg-[#059669] text-white">
                  <CardTitle className="text-lg">Tax Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Deductions</span>
                      <span className="font-semibold">{formatCurrency(result.totalDeductions)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Old Regime Tax</span>
                      <span className="font-semibold">{formatCurrency(result.oldRegimeTax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">New Regime Tax</span>
                      <span className="font-semibold">{formatCurrency(result.newRegimeTax)}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg text-center mb-6">
                    <p className="text-sm text-muted-foreground">Better Option</p>
                    <p className="text-2xl font-bold text-green-600">{result.betterRegime} Regime</p>
                    <p className="text-sm text-muted-foreground">Save {formatCurrency(result.savings)}</p>
                  </div>
                  
                  <Button asChild className="w-full cta-button text-white">
                    <Link href="/tax/income-tax-calculator">Full Tax Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
