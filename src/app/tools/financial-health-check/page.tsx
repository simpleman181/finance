"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function FinancialHealthCheck() {
  const [emergencyFund, setEmergencyFund] = useState(3);
  const [insuranceCover, setInsuranceCover] = useState(10);
  const [savingsRate, setSavingsRate] = useState(20);
  const [investments, setInvestments] = useState(50);
  const [debtRatio, setDebtRatio] = useState(30);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    let score = 0;
    const checks = [];
    
    // Emergency fund (3-6 months)
    if (emergencyFund >= 6) { score += 20; checks.push({ name: "Emergency Fund", status: "good", message: "Excellent! 6+ months saved" }); }
    else if (emergencyFund >= 3) { score += 15; checks.push({ name: "Emergency Fund", status: "ok", message: "Good, but aim for 6 months" }); }
    else { checks.push({ name: "Emergency Fund", status: "bad", message: "Need to build emergency fund" }); }
    
    // Insurance cover
    if (insuranceCover >= 15) { score += 20; checks.push({ name: "Insurance Cover", status: "good", message: "Well protected" }); }
    else if (insuranceCover >= 10) { score += 15; checks.push({ name: "Insurance Cover", status: "ok", message: "Consider increasing cover" }); }
    else { checks.push({ name: "Insurance Cover", status: "bad", message: "Under-insured" }); }
    
    // Savings rate
    if (savingsRate >= 30) { score += 20; checks.push({ name: "Savings Rate", status: "good", message: "Excellent savings habit" }); }
    else if (savingsRate >= 20) { score += 15; checks.push({ name: "Savings Rate", status: "ok", message: "Good, try to increase" }); }
    else { checks.push({ name: "Savings Rate", status: "bad", message: "Aim for 20%+ savings" }); }
    
    // Investment discipline
    if (investments >= 75) { score += 20; checks.push({ name: "Investment Discipline", status: "good", message: "Great investment habit" }); }
    else if (investments >= 50) { score += 15; checks.push({ name: "Investment Discipline", status: "ok", message: "Good, can improve" }); }
    else { checks.push({ name: "Investment Discipline", status: "bad", message: "Start investing regularly" }); }
    
    // Debt ratio
    if (debtRatio <= 30) { score += 20; checks.push({ name: "Debt Management", status: "good", message: "Debt well managed" }); }
    else if (debtRatio <= 50) { score += 10; checks.push({ name: "Debt Management", status: "ok", message: "Work on reducing debt" }); }
    else { checks.push({ name: "Debt Management", status: "bad", message: "High debt burden" }); }
    
    let rating = "Poor";
    if (score >= 80) rating = "Excellent";
    else if (score >= 60) rating = "Good";
    else if (score >= 40) rating = "Fair";
    
    setResult({ score, rating, checks });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Financial Health</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Health Check
            </h1>
            <p className="text-lg text-blue-100">
              Assess your overall financial health and get personalized recommendations.
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
                  Your Financial Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Emergency Fund: {emergencyFund} months of expenses</Label>
                  <Slider value={[emergencyFund]} onValueChange={(v) => setEmergencyFund(v[0])} min={0} max={12} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Insurance Cover: {insuranceCover}x annual income</Label>
                  <Slider value={[insuranceCover]} onValueChange={(v) => setInsuranceCover(v[0])} min={0} max={20} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Savings Rate: {savingsRate}% of income</Label>
                  <Slider value={[savingsRate]} onValueChange={(v) => setSavingsRate(v[0])} min={0} max={50} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Investment Consistency: {investments}%</Label>
                  <Slider value={[investments]} onValueChange={(v) => setInvestments(v[0])} min={0} max={100} step={5} />
                </div>

                <div className="space-y-2">
                  <Label>EMI/Debt: {debtRatio}% of income</Label>
                  <Slider value={[debtRatio]} onValueChange={(v) => setDebtRatio(v[0])} min={0} max={70} step={5} />
                </div>

                <Button onClick={calculate} className="w-full cta-button text-white" size="lg">
                  Check Financial Health
                </Button>
              </CardContent>
            </Card>
          </div>

          {result && (
            <div>
              <Card className="sticky top-20">
                <CardHeader className="bg-[#7c3aed] text-white">
                  <CardTitle className="text-lg">Your Financial Score</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-[#7c3aed]">{result.score}/100</p>
                    <Badge className={`mt-2 ${result.score >= 60 ? "bg-green-100 text-green-700" : result.score >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                      {result.rating}
                    </Badge>
                  </div>
                  
                  <Progress value={result.score} className="h-3 mb-6" />
                  
                  <div className="space-y-3">
                    {result.checks.map((check: any, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        {check.status === "good" && <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />}
                        {check.status === "ok" && <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />}
                        {check.status === "bad" && <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />}
                        <div>
                          <p className="text-sm font-medium">{check.name}</p>
                          <p className="text-xs text-muted-foreground">{check.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full mt-6 cta-button text-white">
                    <Link href="/investing">Improve Your Finances</Link>
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
