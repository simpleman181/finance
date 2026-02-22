"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Calculator,
  IndianRupee,
  Clock,
  ArrowRight,
  Home,
  Car,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState<"years" | "months">("years");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
    principal: number;
  } | null>(null);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureType === "years" ? tenure * 12 : tenure;
    
    // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;
    
    setResult({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principal: loanAmount,
    });
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const loanTypes = [
    { icon: Home, label: "Home Loan", amount: "₹30L - ₹5Cr", rate: "8-9%", tenure: "Up to 30 years" },
    { icon: Car, label: "Car Loan", amount: "₹1L - ₹50L", rate: "7-12%", tenure: "Up to 7 years" },
    { icon: CreditCard, label: "Personal Loan", amount: "₹50K - ₹25L", rate: "10-20%", tenure: "Up to 5 years" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Loan Calculator</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate your loan EMI for home, car, or personal loans. Know your monthly payments before you borrow.
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
                  <Calculator className="h-5 w-5 text-[#ea580c]" />
                  EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Loan Amount</Label>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      <span className="font-bold text-lg">{formatCurrency(loanAmount)}</span>
                    </div>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={50000}
                    max={100000000}
                    step={50000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹50,000</span>
                    <span>₹10 Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Interest Rate (p.a.)</Label>
                    <span className="font-bold text-lg">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={1}
                    max={30}
                    step={0.25}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Loan Tenure</Label>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{tenure} {tenureType}</span>
                    </div>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={1}
                    max={tenureType === "years" ? 30 : 360}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {tenureType === "years" ? "1 Year" : "1 Month"}
                    </span>
                    <div className="flex gap-2">
                      <Badge 
                        variant={tenureType === "years" ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setTenureType("years")}
                      >
                        Years
                      </Badge>
                      <Badge 
                        variant={tenureType === "months" ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setTenureType("months")}
                      >
                        Months
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {tenureType === "years" ? "30 Years" : "360 Months"}
                    </span>
                  </div>
                </div>

                <Button onClick={calculateEMI} className="w-full cta-button text-white" size="lg">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {result ? (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#ea580c] text-white">
                  <CardTitle className="text-lg">Your EMI</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* EMI */}
                  <div className="text-center mb-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
                    <p className="text-3xl font-bold text-[#ea580c]">{formatCurrency(result.emi)}</p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Principal</span>
                      </div>
                      <span className="font-semibold">{formatCurrency(result.principal)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-sm">Total Interest</span>
                      </div>
                      <span className="font-semibold text-amber-600">{formatCurrency(result.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Total Payment</span>
                      <span className="font-bold text-[#ea580c]">{formatCurrency(result.totalPayment)}</span>
                    </div>
                  </div>

                  {/* Interest Percentage */}
                  <div className="mb-6">
                    <div className="h-4 rounded-full overflow-hidden bg-slate-100">
                      <div 
                        className="h-full bg-amber-500"
                        style={{ width: `${(result.totalInterest / result.totalPayment) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span className="text-blue-600">Principal ({((result.principal / result.totalPayment) * 100).toFixed(0)}%)</span>
                      <span className="text-amber-600">Interest ({((result.totalInterest / result.totalPayment) * 100).toFixed(0)}%)</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full cta-button text-white">
                      <Link href="/tools/financial-health-check">
                        Financial Health Check
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/investing/retirement-planning">
                        Retirement Planning
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
                      Adjust values and click calculate to see your EMI
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Loan Types */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Common Loan Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#ea580c]/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#ea580c]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{loan.label}</h3>
                        <p className="text-sm text-muted-foreground">Amount: {loan.amount}</p>
                        <p className="text-sm text-muted-foreground">Rate: {loan.rate}</p>
                        <p className="text-sm text-muted-foreground">{loan.tenure}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
