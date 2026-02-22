"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Calculator, Heart, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function HealthCoverageEstimator() {
  const [city, setCity] = useState("metro");
  const [familySize, setFamilySize] = useState(4);
  const [seniorCount, setSeniorCount] = useState(0);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const baseCover = city === "metro" ? 1000000 : 700000;
    const perMember = 300000;
    const seniorExtra = seniorCount > 0 ? 500000 : 0;
    const recommended = baseCover + (familySize * perMember) + seniorExtra;
    
    setResult({
      recommended,
      city,
      familySize,
      premium: Math.round(recommended * 0.008), // Approx 0.8% of sum insured
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
            <Badge className="bg-white/20 text-white border-0 mb-4">Coverage Estimator</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Health Insurance Coverage Estimator
            </h1>
            <p className="text-lg text-blue-100">
              Estimate how much health insurance coverage your family needs based on city and family size.
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
                  <Calculator className="h-5 w-5 text-[#dc2626]" />
                  Estimate Your Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>City Type</Label>
                  <div className="flex gap-4">
                    <Button variant={city === "metro" ? "default" : "outline"} onClick={() => setCity("metro")} className="flex-1">
                      Metro (Delhi, Mumbai, Bangalore)
                    </Button>
                    <Button variant={city === "tier2" ? "default" : "outline"} onClick={() => setCity("tier2")} className="flex-1">
                      Tier-2/3 City
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Family Members: {familySize}</Label>
                  <Slider value={[familySize]} onValueChange={(v) => setFamilySize(v[0])} min={1} max={6} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Senior Citizens (60+): {seniorCount}</Label>
                  <Slider value={[seniorCount]} onValueChange={(v) => setSeniorCount(v[0])} min={0} max={2} step={1} />
                </div>

                <Button onClick={calculate} className="w-full cta-button text-white" size="lg">
                  Estimate Coverage
                </Button>
              </CardContent>
            </Card>
          </div>

          {result && (
            <div>
              <Card className="sticky top-20">
                <CardHeader className="bg-[#dc2626] text-white">
                  <CardTitle className="text-lg">Recommended Coverage</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Sum Insured Needed</p>
                    <p className="text-3xl font-bold text-[#dc2626]">{formatCurrency(result.recommended)}</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <p>• City: {result.city === "metro" ? "Metro" : "Tier-2/3"}</p>
                    <p>• Family Size: {result.familySize} members</p>
                    <p>• Est. Annual Premium: {formatCurrency(result.premium)}</p>
                  </div>
                  <Button asChild className="w-full cta-button text-white">
                    <Link href="/health-insurance/premium-calculator">Get Quote</Link>
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
