"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  IndianRupee,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState<string>("1200000");
  const [regime, setRegime] = useState<"old" | "new">("new");
  const [deductions, setDeductions] = useState({
    section80C: 150000,
    section80D: 25000,
    nps: 50000,
    homeLoanInterest: 200000,
  });
  const [result, setResult] = useState<{
    oldTax: number;
    newTax: number;
    selectedTax: number;
    savings: number;
  } | null>(null);

  const calculateTaxOldRegime = (income: number, ded: typeof deductions) => {
    const standardDeduction = 50000;
    const totalDeductions = Math.min(ded.section80C, 150000) + Math.min(ded.section80D, 75000) + 
                           Math.min(ded.nps, 50000) + Math.min(ded.homeLoanInterest, 200000);
    
    let taxableIncome = income - standardDeduction - totalDeductions;
    taxableIncome = Math.max(0, taxableIncome);
    
    let tax = 0;
    
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
      tax = 12500 + 100000 + (taxableIncome - 1000000) * 0.3;
    }
    
    // Add cess
    tax = tax * 1.04;
    
    // Rebate under 87A
    if (taxableIncome <= 500000) {
      tax = 0;
    }
    
    return Math.round(tax);
  };

  const calculateTaxNewRegime = (income: number) => {
    const standardDeduction = 50000;
    let taxableIncome = income - standardDeduction;
    taxableIncome = Math.max(0, taxableIncome);
    
    let tax = 0;
    
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 700000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 20000 + (taxableIncome - 700000) * 0.1;
    } else if (taxableIncome <= 1200000) {
      tax = 20000 + 30000 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 20000 + 30000 + 30000 + (taxableIncome - 1200000) * 0.2;
    } else {
      tax = 20000 + 30000 + 30000 + 60000 + (taxableIncome - 1500000) * 0.3;
    }
    
    // Add cess
    tax = tax * 1.04;
    
    // Rebate under 87A (new regime - up to 7 lakh)
    if (taxableIncome <= 700000) {
      tax = 0;
    }
    
    return Math.round(tax);
  };

  const handleCalculate = () => {
    const incomeNum = parseInt(income) || 0;
    const oldTax = calculateTaxOldRegime(incomeNum, deductions);
    const newTax = calculateTaxNewRegime(incomeNum);
    const selectedTax = regime === "old" ? oldTax : newTax;
    const savings = Math.abs(oldTax - newTax);
    
    setResult({
      oldTax,
      newTax,
      selectedTax,
      savings,
    });
  };

  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Free Calculator</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Income Tax Calculator India
            </h1>
            <p className="text-lg text-blue-100">
              Calculate your income tax under old and new regimes. Compare and choose the better option.
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
                  <Calculator className="h-5 w-5 text-[#059669]" />
                  Enter Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Annual Income */}
                <div className="space-y-2">
                  <Label htmlFor="income">Annual Gross Income</Label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="income"
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      className="pl-9"
                      placeholder="Enter annual income"
                    />
                  </div>
                </div>

                {/* Tax Regime */}
                <div className="space-y-3">
                  <Label>Tax Regime</Label>
                  <RadioGroup
                    value={regime}
                    onValueChange={(value) => setRegime(value as "old" | "new")}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label htmlFor="new" className="cursor-pointer">New Regime</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="old" id="old" />
                      <Label htmlFor="old" className="cursor-pointer">Old Regime</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Deductions (for Old Regime) */}
                {regime === "old" && (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold">Deductions (Old Regime)</h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="80c">Section 80C (Max ₹1,50,000)</Label>
                      <Input
                        id="80c"
                        type="number"
                        value={deductions.section80C}
                        onChange={(e) => setDeductions({...deductions, section80C: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="80d">Section 80D Health Insurance (Max ₹75,000)</Label>
                      <Input
                        id="80d"
                        type="number"
                        value={deductions.section80D}
                        onChange={(e) => setDeductions({...deductions, section80D: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nps">NPS 80CCD(1B) (Max ₹50,000)</Label>
                      <Input
                        id="nps"
                        type="number"
                        value={deductions.nps}
                        onChange={(e) => setDeductions({...deductions, nps: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="homeloan">Home Loan Interest 24(b) (Max ₹2,00,000)</Label>
                      <Input
                        id="homeloan"
                        type="number"
                        value={deductions.homeLoanInterest}
                        onChange={(e) => setDeductions({...deductions, homeLoanInterest: parseInt(e.target.value) || 0})}
                      />
                    </div>
                  </div>
                )}

                <Button onClick={handleCalculate} className="w-full cta-button text-white" size="lg">
                  Calculate Tax
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {result ? (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#059669] text-white">
                  <CardTitle className="text-lg">Tax Calculation Result</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Comparison */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`p-4 rounded-lg ${regime === "old" ? "bg-blue-100 border-2 border-blue-400" : "bg-slate-50"}`}>
                      <p className="text-sm text-muted-foreground">Old Regime</p>
                      <p className="text-xl font-bold">{formatCurrency(result.oldTax)}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${regime === "new" ? "bg-green-100 border-2 border-green-400" : "bg-slate-50"}`}>
                      <p className="text-sm text-muted-foreground">New Regime</p>
                      <p className="text-xl font-bold">{formatCurrency(result.newTax)}</p>
                    </div>
                  </div>

                  {/* Selected */}
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="h-5 w-5" />
                      Your Tax Liability
                    </div>
                    <p className="text-3xl font-bold text-green-700">{formatCurrency(result.selectedTax)}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Under {regime === "old" ? "Old" : "New"} Tax Regime
                    </p>
                  </div>

                  {/* Savings */}
                  {result.oldTax !== result.newTax && (
                    <div className={`p-4 rounded-lg mb-6 ${result.oldTax > result.newTax ? "bg-green-50" : "bg-blue-50"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {result.oldTax > result.newTax ? (
                          <>
                            <TrendingDown className="h-5 w-5 text-green-600" />
                            <span className="font-medium text-green-700">New Regime is Better!</span>
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-blue-700">Old Regime is Better!</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You save {formatCurrency(result.savings)} with {result.oldTax > result.newTax ? "New" : "Old"} regime
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button asChild className="w-full cta-button text-white">
                      <Link href="/tax/old-vs-new-regime">
                        Compare Regimes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/tax/section-80c">
                        View 80C Options
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-20">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Calculator className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Enter your income and click calculate to see your tax liability
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
