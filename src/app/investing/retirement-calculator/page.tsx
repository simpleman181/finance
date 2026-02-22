"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, ArrowRight, Clock, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [existingCorpus, setExistingCorpus] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflation, setInflation] = useState(6);
  const [result, setResult] = useState<any>(null);

  const calculateRetirement = () => {
    const yearsToRetire = retirementAge - currentAge;
    const inflationAdjustedExpenses = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetire);
    const corpusNeeded = inflationAdjustedExpenses * 12 * 30; // 30x annual expenses
    
    // Future value of existing corpus
    const fvExistingCorpus = existingCorpus * Math.pow(1 + expectedReturn / 100, yearsToRetire);
    
    // Required corpus
    const requiredCorpus = corpusNeeded - fvExistingCorpus;
    
    // Monthly SIP needed
    const monthlyRate = expectedReturn / 12 / 100;
    const months = yearsToRetire * 12;
    const monthlyInvestment = requiredCorpus / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    setResult({
      yearsToRetire,
      corpusNeeded: Math.round(corpusNeeded),
      monthlyInvestment: Math.max(0, Math.round(monthlyInvestment)),
      inflationAdjustedExpenses: Math.round(inflationAdjustedExpenses),
    });
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Retirement Calculator</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Retirement Corpus Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate how much you need to save for a comfortable retirement.
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Current Age: {currentAge} years</Label>
                    <Slider value={[currentAge]} onValueChange={(v) => setCurrentAge(v[0])} min={18} max={60} step={1} />
                  </div>
                  <div className="space-y-2">
                    <Label>Retirement Age: {retirementAge} years</Label>
                    <Slider value={[retirementAge]} onValueChange={(v) => setRetirementAge(v[0])} min={45} max={70} step={1} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Current Monthly Expenses: {formatCurrency(monthlyExpenses)}</Label>
                  <Slider value={[monthlyExpenses]} onValueChange={(v) => setMonthlyExpenses(v[0])} min={10000} max={500000} step={5000} />
                </div>

                <div className="space-y-2">
                  <Label>Expected Return: {expectedReturn}%</Label>
                  <Slider value={[expectedReturn]} onValueChange={(v) => setExpectedReturn(v[0])} min={6} max={15} step={0.5} />
                </div>

                <Button onClick={calculateRetirement} className="w-full cta-button text-white" size="lg">
                  Calculate Retirement Corpus
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            {result && (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#059669] text-white">
                  <CardTitle className="text-lg">Your Retirement Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Corpus Needed</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(result.corpusNeeded)}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Monthly SIP Required</p>
                      <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.monthlyInvestment)}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>• Years to retirement: {result.yearsToRetire}</p>
                      <p>• Inflation-adjusted expenses: {formatCurrency(result.inflationAdjustedExpenses)}/month</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4 cta-button text-white">
                    <Link href="/investing/what-is-sip">Start SIP Now</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
