"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calculator,
  IndianRupee,
  Shield,
  TrendingUp,
  CheckCircle,
  Info,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function TermPremiumCalculator() {
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(10000000);
  const [policyTerm, setPolicyTerm] = useState(30);
  const [gender, setGender] = useState("male");
  const [tobacco, setTobacco] = useState("no");
  const [premium, setPremium] = useState<number | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculatePremium = () => {
    // Base rate per 1000 sum assured
    let baseRate = 0.49;

    // Age factor
    const ageFactors: { [key: number]: number } = {
      20: 0.6, 25: 0.8, 30: 1.0, 35: 1.4, 40: 2.0, 45: 2.8, 50: 4.0, 55: 5.5, 60: 7.5,
    };
    const nearestAge = Object.keys(ageFactors)
      .map(Number)
      .reduce((prev, curr) => (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev));
    const ageFactor = ageFactors[nearestAge];

    // Gender factor (women pay less)
    const genderFactor = gender === "female" ? 0.85 : 1.0;

    // Tobacco factor
    const tobaccoFactor = tobacco === "yes" ? 1.5 : 1.0;

    // Policy term factor
    const termFactor = policyTerm > 35 ? 1.1 : policyTerm > 25 ? 1.0 : 0.95;

    // Sum assured factor (higher cover gets discount)
    let saFactor = 1.0;
    if (sumAssured >= 10000000) saFactor = 0.95;
    if (sumAssured >= 20000000) saFactor = 0.92;
    if (sumAssured >= 50000000) saFactor = 0.90;

    // Calculate annual premium
    const annualPremium =
      (baseRate * ageFactor * genderFactor * tobaccoFactor * termFactor * saFactor * sumAssured) / 1000;

    // Add GST (18%)
    const totalPremium = annualPremium * 1.18;

    setPremium(Math.round(totalPremium / 12));
    setShowBreakdown(true);
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(0)} L`;
    }
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const sumAssuredOptions = [
    { value: 5000000, label: "₹50 Lakh" },
    { value: 7500000, label: "₹75 Lakh" },
    { value: 10000000, label: "₹1 Crore" },
    { value: 15000000, label: "₹1.5 Crore" },
    { value: 20000000, label: "₹2 Crore" },
    { value: 25000000, label: "₹2.5 Crore" },
    { value: 50000000, label: "₹5 Crore" },
    { value: 100000000, label: "₹10 Crore" },
  ];

  const termOptions = Array.from({ length: 26 }, (_, i) => i + 20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero */}
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Free Calculator</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Term Insurance Premium Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate your term insurance premium instantly. Get accurate estimates 
              based on age, coverage amount, and policy term.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-[#1e40af]" />
                  Enter Your Details
                </CardTitle>
                <CardDescription>
                  All fields are required to calculate accurate premium
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Age */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Your Age: {age} years</Label>
                    <Badge variant="outline">{age < 35 ? "Low Premium Age" : age < 50 ? "Moderate Premium" : "Higher Premium"}</Badge>
                  </div>
                  <Slider
                    value={[age]}
                    onValueChange={(value) => setAge(value[0])}
                    min={18}
                    max={65}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>18 years</span>
                    <span>65 years</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={gender}
                    onValueChange={setGender}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Female (Lower Premium)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Tobacco */}
                <div className="space-y-3">
                  <Label>Do you use tobacco?</Label>
                  <RadioGroup
                    value={tobacco}
                    onValueChange={setTobacco}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-tobacco" />
                      <Label htmlFor="no-tobacco" className="cursor-pointer">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-tobacco" />
                      <Label htmlFor="yes-tobacco" className="cursor-pointer">Yes (Higher Premium)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Sum Assured */}
                <div className="space-y-3">
                  <Label>Coverage Amount (Sum Assured)</Label>
                  <Select value={sumAssured.toString()} onValueChange={(value) => setSumAssured(Number(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sumAssuredOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Recommended: 10-15 times your annual income
                  </p>
                </div>

                {/* Policy Term */}
                <div className="space-y-3">
                  <Label>Policy Term</Label>
                  <Select value={policyTerm.toString()} onValueChange={(value) => setPolicyTerm(Number(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {termOptions.map((term) => (
                        <SelectItem key={term} value={term.toString()}>
                          {term} years
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Recommended: Cover until retirement age (60-65)
                  </p>
                </div>

                <Button onClick={calculatePremium} className="w-full cta-button text-white" size="lg">
                  Calculate Premium
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            {showBreakdown && premium ? (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#1e40af] text-white">
                  <CardTitle className="text-lg">Your Premium Estimate</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Monthly Premium</p>
                    <p className="text-4xl font-bold text-[#1e40af]">₹{premium.toLocaleString("en-IN")}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (incl. 18% GST)
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Coverage</span>
                      <span className="font-medium">{formatCurrency(sumAssured)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Policy Term</span>
                      <span className="font-medium">{policyTerm} years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Entry Age</span>
                      <span className="font-medium">{age} years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Premium</span>
                      <span className="font-medium">₹{(premium * 12).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Premium (30 yrs)</span>
                      <span className="font-medium">₹{(premium * 12 * policyTerm).toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="h-4 w-4" />
                      Tax Benefits
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Save up to ₹{(premium * 12 * 0.3).toLocaleString("en-IN")}/year in taxes 
                      under Section 80C (assuming 30% tax bracket)
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full cta-button text-white">
                      <Link href="/tools/compare-term-insurance">
                        Compare Plans
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/term-insurance/best-plans">
                        View Best Plans
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
                      Fill in your details and click calculate to see your premium estimate
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-[#1e40af]" />
                How Premium is Calculated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Age:</strong> Premium increases with age due to higher mortality risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Gender:</strong> Women typically pay 10-15% less due to longer life expectancy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Tobacco:</strong> Users pay 40-50% higher premium due to health risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Coverage:</strong> Higher sum assured may get volume discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Term:</strong> Longer terms may have slightly higher premium</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>This is an estimate. Actual premium depends on medical tests and underwriting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Premium shown includes 18% GST as applicable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Compare quotes from multiple insurers for best rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Riders will increase the premium accordingly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Premium rates may vary by insurer and are subject to change.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#1e40af] to-[#059669] text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Ready to Buy Term Insurance?</h3>
              <p className="text-blue-100 mb-4">
                Compare plans from top insurers and find the best coverage at the lowest premium
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-white text-[#1e40af] hover:bg-blue-50">
                  <Link href="/tools/compare-term-insurance">
                    Compare Plans Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/term-insurance/best-plans">
                    View Best Plans
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
