"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Calculator, Shield, ArrowRight, IndianRupee, Users } from "lucide-react";
import Link from "next/link";

export default function TermCoverageCalculator() {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [age, setAge] = useState(30);
  const [loans, setLoans] = useState(4000000);
  const [dependents, setDependents] = useState(2);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const incomeReplacement = annualIncome * 12; // 12x income
    const dependentNeeds = dependents * 1000000; // ₹10L per dependent
    const futureGoals = 2000000; // Default for education/marriage
    const totalNeed = incomeReplacement + loans + dependentNeeds + futureGoals;
    
    setResult({
      incomeReplacement,
      loans,
      dependentNeeds,
      futureGoals,
      totalNeed,
      annualPremium: Math.round(totalNeed * 0.0005), // Approx premium
    });
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(0)} L`;
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Coverage Calculator</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Term Insurance Coverage Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate how much term insurance coverage you need based on your income, liabilities, and family needs.
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
                  <Calculator className="h-5 w-5 text-[#1e40af]" />
                  Calculate Your Coverage Need
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Annual Income: {formatCurrency(annualIncome)}</Label>
                  <Slider value={[annualIncome]} onValueChange={(v) => setAnnualIncome(v[0])} min={300000} max={5000000} step={50000} />
                </div>
                
                <div className="space-y-2">
                  <Label>Outstanding Loans: {formatCurrency(loans)}</Label>
                  <Slider value={[loans]} onValueChange={(v) => setLoans(v[0])} min={0} max={20000000} step={100000} />
                </div>

                <div className="space-y-2">
                  <Label>Number of Dependents: {dependents}</Label>
                  <Slider value={[dependents]} onValueChange={(v) => setDependents(v[0])} min={0} max={6} step={1} />
                </div>

                <Button onClick={calculate} className="w-full cta-button text-white" size="lg">
                  Calculate Coverage
                </Button>
              </CardContent>
            </Card>
          </div>

          {result && (
            <div>
              <Card className="sticky top-20">
                <CardHeader className="bg-[#1e40af] text-white">
                  <CardTitle className="text-lg">Recommended Coverage</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Coverage Needed</p>
                    <p className="text-3xl font-bold text-[#1e40af]">{formatCurrency(result.totalNeed)}</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between"><span>Income Replacement (12x)</span><span>{formatCurrency(result.incomeReplacement)}</span></div>
                    <div className="flex justify-between"><span>Loan Coverage</span><span>{formatCurrency(result.loans)}</span></div>
                    <div className="flex justify-between"><span>Dependent Needs</span><span>{formatCurrency(result.dependentNeeds)}</span></div>
                  </div>
                  <Button asChild className="w-full cta-button text-white">
                    <Link href="/term-insurance/premium-calculator">Calculate Premium</Link>
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
