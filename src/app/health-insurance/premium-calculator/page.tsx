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
  Heart,
  Users,
  CheckCircle,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function HealthPremiumCalculator() {
  const [sumInsured, setSumInsured] = useState(1000000);
  const [age, setAge] = useState(30);
  const [planType, setPlanType] = useState("individual");
  const [members, setMembers] = useState(1);
  const [premium, setPremium] = useState<number | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculatePremium = () => {
    // Base rate per lakh sum insured
    let baseRate = 45;

    // Age factor
    const ageFactor = age < 25 ? 0.8 : age < 35 ? 1.0 : age < 45 ? 1.3 : age < 55 ? 1.8 : 2.5;

    // Plan type factor
    const planFactor = planType === "individual" ? 1.0 : 0.85;

    // Sum insured factor (higher SI gets discount)
    const siFactor = sumInsured >= 2000000 ? 0.9 : sumInsured >= 1000000 ? 0.95 : 1.0;

    // Member factor for floater
    const memberFactor = planType === "floater" ? 1 + (members - 1) * 0.3 : members;

    // Calculate annual premium
    const annualPremium = baseRate * ageFactor * planFactor * siFactor * memberFactor * (sumInsured / 100000);

    // Add GST (18%)
    const totalPremium = annualPremium * 1.18;

    setPremium(Math.round(totalPremium));
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="hero-gradient text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-white/20 text-white border-0 mb-4">Free Calculator</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Health Insurance Premium Calculator
            </h1>
            <p className="text-lg text-blue-100">
              Calculate your health insurance premium instantly. Get estimates for individual and family floater plans.
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
                {/* Age */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Eldest Member Age: {age} years</Label>
                    <Badge variant="outline">{age < 35 ? "Low Risk" : age < 50 ? "Moderate Risk" : "High Risk"}</Badge>
                  </div>
                  <Slider
                    value={[age]}
                    onValueChange={(value) => setAge(value[0])}
                    min={18}
                    max={70}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>18 years</span>
                    <span>70 years</span>
                  </div>
                </div>

                {/* Plan Type */}
                <div className="space-y-3">
                  <Label>Plan Type</Label>
                  <RadioGroup
                    value={planType}
                    onValueChange={setPlanType}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="floater" id="floater" />
                      <Label htmlFor="floater">Family Floater</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Members for Floater */}
                {planType === "floater" && (
                  <div className="space-y-3">
                    <Label>Number of Family Members</Label>
                    <Select value={members.toString()} onValueChange={(value) => setMembers(Number(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Members
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Sum Insured */}
                <div className="space-y-3">
                  <Label>Sum Insured (Coverage Amount)</Label>
                  <Select value={sumInsured.toString()} onValueChange={(value) => setSumInsured(Number(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[500000, 700000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000].map((amount) => (
                        <SelectItem key={amount} value={amount.toString()}>
                          {formatCurrency(amount)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculatePremium} className="w-full cta-button text-white" size="lg">
                  Calculate Premium
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {showBreakdown && premium ? (
              <Card className="sticky top-20">
                <CardHeader className="bg-[#059669] text-white">
                  <CardTitle className="text-lg">Your Premium Estimate</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Annual Premium</p>
                    <p className="text-4xl font-bold text-[#059669]">₹{premium?.toLocaleString("en-IN")}</p>
                    <p className="text-sm text-muted-foreground mt-1">(incl. 18% GST)</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Coverage</span>
                      <span className="font-medium">{formatCurrency(sumInsured)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Plan Type</span>
                      <span className="font-medium">{planType === "floater" ? "Family Floater" : "Individual"}</span>
                    </div>
                    {planType === "floater" && (
                      <div className="flex justify-between text-sm">
                        <span>Members</span>
                        <span className="font-medium">{members}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span>Monthly Premium</span>
                      <span className="font-medium">₹{Math.round((premium || 0) / 12).toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="h-4 w-4" />
                      Tax Benefit
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Save up to ₹{Math.round((premium || 0) * 0.3).toLocaleString("en-IN")} in taxes under Section 80D
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full cta-button text-white">
                      <Link href="/tools/compare-health-insurance">Compare Plans</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/health-insurance/best-plans">View Best Plans</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-20">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Heart className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Fill in your details to see premium estimate
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
