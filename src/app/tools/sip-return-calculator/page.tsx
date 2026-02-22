"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Calculator,
  TrendingUp,
  IndianRupee,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [result, setResult] = useState<{
    investedAmount: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;
    
    // SIP Future Value Formula: P × ((1 + r)^n - 1) / r × (1 + r)
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const investedAmount = monthlyInvestment * months;
    const estimatedReturns = futureValue - investedAmount;
    
    setResult({
      investedAmount: Math.round(investedAmount),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Investment Calculator</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              SIP Return Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate your SIP returns and see how small monthly investments can grow into substantial wealth over time.
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
                  <Calculator className="h-5 w-5 text-[#7c3aed]" />
                  SIP Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Monthly Investment */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Monthly Investment</Label>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      <span className="font-bold text-lg">{monthlyInvestment.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    min={500}
                    max={100000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Expected Return */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Expected Return Rate (p.a.)</Label>
                    <span className="font-bold text-lg">{expectedReturn}%</span>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    min={1}
                    max={30}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Time Period */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Time Period</Label>
                    <span className="font-bold text-lg">{timePeriod} Years</span>
                  </div>
                  <Slider
                    value={[timePeriod]}
                    onValueChange={(value) => setTimePeriod(value[0])}
                    min={1}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 Year</span>
                    <span>40 Years</span>
                  </div>
                </div>

                <Button onClick={calculateSIP} className="w-full cta-button text-white" size="lg">
                  Calculate SIP Returns
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {result ? (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#7c3aed] text-white">
                  <CardTitle className="text-lg">Your SIP Returns</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Total Value */}
                  <div className="text-center mb-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                    <p className="text-3xl font-bold text-[#7c3aed]">{formatCurrency(result.totalValue)}</p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Invested Amount</span>
                      </div>
                      <span className="font-semibold">{formatCurrency(result.investedAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Est. Returns</span>
                      </div>
                      <span className="font-semibold text-green-600">{formatCurrency(result.estimatedReturns)}</span>
                    </div>
                  </div>

                  {/* Returns Percentage */}
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="h-4 w-4" />
                      Wealth Gain
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {((result.estimatedReturns / result.investedAmount) * 100).toFixed(0)}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your money grew by {((result.estimatedReturns / result.investedAmount) * 100).toFixed(0)}%
                    </p>
                  </div>

                  {/* Visual Breakdown */}
                  <div className="mb-6">
                    <div className="h-4 rounded-full overflow-hidden bg-slate-100">
                      <div 
                        className="h-full bg-blue-500"
                        style={{ width: `${(result.investedAmount / result.totalValue) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span className="text-blue-600">Invested ({((result.investedAmount / result.totalValue) * 100).toFixed(0)}%)</span>
                      <span className="text-green-600">Returns ({((result.estimatedReturns / result.totalValue) * 100).toFixed(0)}%)</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full cta-button text-white">
                      <Link href="/investing/what-is-sip">
                        Learn About SIP
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/investing/best-mutual-funds-beginners">
                        Best Mutual Funds
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-20">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <TrendingUp className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Adjust sliders and click calculate to see your SIP returns
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Clock className="h-8 w-8 text-[#7c3aed]" />
                <div>
                  <h3 className="font-semibold mb-1">Power of Compounding</h3>
                  <p className="text-sm text-muted-foreground">
                    SIP harnesses the power of compounding. Starting early can multiply your wealth significantly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-8 w-8 text-[#059669]" />
                <div>
                  <h3 className="font-semibold mb-1">Rupee Cost Averaging</h3>
                  <p className="text-sm text-muted-foreground">
                    SIP automatically buys more units when markets are low, reducing average cost over time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <IndianRupee className="h-8 w-8 text-[#1e40af]" />
                <div>
                  <h3 className="font-semibold mb-1">Start Small</h3>
                  <p className="text-sm text-muted-foreground">
                    You can start a SIP with as little as ₹500/month. Increase as your income grows.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
