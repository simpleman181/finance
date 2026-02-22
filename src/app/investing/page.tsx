import { Metadata } from "next";
import { HeroSection } from "@/components/shared/hero-section";
import { ContentCard, ContentGrid } from "@/components/shared/content-card";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedPages } from "@/components/shared/related-pages";
import { CTASection, ContactCTA } from "@/components/shared/cta-section";
import { QuickLinks } from "@/components/shared/related-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  PiggyBank,
  Calculator,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  IndianRupee,
  Shield,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Finance Basics for Beginners in India | FinanceTaxPro",
  description: "Learn personal finance basics for beginners in India. Understand budgeting, saving, investing, and wealth building strategies for financial freedom.",
  keywords: ["personal finance India", "financial planning basics", "money management tips", "investing for beginners India"],
};

const relatedPages = [
  { title: "What is SIP", description: "Understanding SIP investments", href: "/investing/what-is-sip", icon: <TrendingUp className="h-5 w-5" /> },
  { title: "Emergency Fund", description: "Build your safety net", href: "/investing/emergency-fund", icon: <Shield className="h-5 w-5" /> },
  { title: "Retirement Planning", description: "Plan for your future", href: "/investing/retirement-planning", icon: <Clock className="h-5 w-5" /> },
  { title: "SIP Calculator", description: "Calculate your returns", href: "/tools/sip-return-calculator", icon: <Calculator className="h-5 w-5" /> },
  { title: "Start Investing Small", description: "Begin with limited funds", href: "/investing/start-investing-small", icon: <IndianRupee className="h-5 w-5" /> },
  { title: "Common Mistakes", description: "Avoid investing pitfalls", href: "/investing/common-mistakes", icon: <AlertTriangle className="h-5 w-5" /> },
];

const quickLinks = [
  { label: "Budgeting Basics", href: "#budgeting" },
  { label: "Saving Rules", href: "#saving" },
  { label: "Getting Started", href: "#getting-started" },
  { label: "SIP Calculator", href: "/tools/sip-return-calculator" },
];

const financialGoals = [
  { goal: "Emergency Fund", amount: "6 months expenses", timeline: "1-2 years", priority: "Immediate" },
  { goal: "Term Insurance", amount: "10-15x annual income", timeline: "ASAP", priority: "Critical" },
  { goal: "Health Insurance", amount: "₹10-15 Lakh", timeline: "ASAP", priority: "Critical" },
  { goal: "Retirement Corpus", amount: "30x annual expenses", timeline: "20-30 years", priority: "High" },
  { goal: "Home Purchase", amount: "As per need", timeline: "5-10 years", priority: "Medium" },
  { goal: "Children's Education", amount: "₹30-50 Lakh", timeline: "15-18 years", priority: "Medium" },
];

const investmentOptions = [
  { option: "PPF", risk: "Low", returns: "7-8%", tax: "EEE", minAmount: "₹500/year", lockIn: "15 years" },
  { option: "EPF", risk: "Low", returns: "8-9%", tax: "EEE", minAmount: "12% salary", lockIn: "Till retirement" },
  { option: "SIP (Equity MF)", risk: "High", returns: "12-15%", tax: "10% LTCG", minAmount: "₹500/month", lockIn: "None" },
  { option: "NPS", risk: "Moderate", returns: "9-11%", tax: "EET", minAmount: "₹500/year", lockIn: "Till 60" },
  { option: "FD", risk: "Low", returns: "6-7%", tax: "Taxable", minAmount: "₹1,000", lockIn: "None" },
  { option: "Gold ETF/SGB", risk: "Moderate", returns: "8-10%", tax: "20% LTCG", minAmount: "₹1,000", lockIn: "8 years (SGB)" },
];

const faqs = [
  {
    question: "How much should I save every month?",
    answer: "Follow the 50-30-20 rule: 50% for needs (rent, utilities, groceries), 30% for wants (entertainment, dining), and 20% for savings and investments. As income grows, try to increase savings to 30-40%. The key is consistency - saving regularly, even small amounts, builds wealth over time.",
  },
  {
    question: "When should I start investing?",
    answer: "Start investing as soon as you have an emergency fund covering 3-6 months of expenses. The earlier you start, the more time your money has to grow through compounding. Someone starting at 25 with ₹5,000/month will have significantly more at 60 than someone starting at 35 with ₹10,000/month.",
  },
  {
    question: "What is the difference between saving and investing?",
    answer: "Saving is keeping money in safe, liquid instruments (savings account, FD) for short-term goals and emergencies. Returns are low but capital is protected. Investing is putting money in assets (stocks, mutual funds, real estate) for long-term growth. Returns are higher but capital is at risk. You need both - save for emergencies, invest for wealth creation.",
  },
  {
    question: "How do I start investing with just ₹500?",
    answer: "Start a SIP in an equity mutual fund with as little as ₹500/month. Many fund houses accept this minimum. Over time, increase the amount as income grows. PPF also accepts minimum ₹500/year. The habit of regular investing matters more than the amount initially. Use our SIP calculator to see how small amounts grow over time.",
  },
  {
    question: "What are the biggest financial mistakes to avoid?",
    answer: "Common mistakes: (1) Not having emergency fund, (2) No insurance before investing, (3) Starting too late, (4) Stopping SIPs during market crashes, (5) Timing the market, (6) Following tips without research, (7) Ignoring inflation in planning, (8) Too much insurance-cum-investment products. Educate yourself and stay disciplined.",
  },
  {
    question: "How much money do I need to retire?",
    answer: "A common rule is to have 30x your annual expenses at retirement. If you spend ₹50,000/month now, aim for ₹1.8 crores. Adjust for inflation - ₹50,000 today will be ₹1.5 lakhs in 20 years at 6% inflation. Use our retirement calculator for a personalized estimate based on your age and goals.",
  },
];

export default function InvestingGuidePage() {
  return (
    <div>
      <HeroSection
        badge="Complete Guide"
        title="Personal Finance Basics"
        titleHighlight="for Beginners in India"
        description="Take control of your financial future. Learn the fundamentals of budgeting, saving, investing, and wealth building that every Indian should know."
        primaryCta={{ label: "Start SIP Calculator", href: "/tools/sip-return-calculator" }}
        secondaryCta={{ label: "Plan Retirement", href: "/investing/retirement-planning" }}
        variant="gradient"
      />

      <div className="container px-4 md:px-6 py-12">
        <QuickLinks title="Jump To Section" links={quickLinks} />

        {/* Introduction */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Personal Finance Matters
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Personal finance is about managing your money - earning, saving, spending, and investing - 
            to achieve your life goals. It's not about being rich; it's about being in control. 
            Whether you earn ₹20,000 or ₹2,00,000 a month, good financial habits can help you 
            build wealth over time.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            The principles are simple: spend less than you earn, save for emergencies, protect 
            yourself with insurance, and invest for the long term. The magic lies in compounding 
            - small, consistent actions that grow into significant wealth over decades.
          </p>
        </section>

        {/* Budgeting */}
        <section className="mb-12" id="budgeting">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            The 50-30-20 Budgeting Rule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center justify-between">
                  <span>50% - Needs</span>
                  <Badge className="bg-blue-600">Essential</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rent/EMI</li>
                  <li>• Utilities (electricity, water, internet)</li>
                  <li>• Groceries</li>
                  <li>• Transportation</li>
                  <li>• Insurance premiums</li>
                  <li>• Minimum loan payments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center justify-between">
                  <span>30% - Wants</span>
                  <Badge className="bg-purple-600">Lifestyle</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dining out</li>
                  <li>• Entertainment</li>
                  <li>• Shopping</li>
                  <li>• Subscriptions</li>
                  <li>• Travel</li>
                  <li>• Hobbies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center justify-between">
                  <span>20% - Savings</span>
                  <Badge className="bg-green-600">Wealth</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Emergency fund</li>
                  <li>• SIP/Mutual funds</li>
                  <li>• PPF/EPF</li>
                  <li>• NPS</li>
                  <li>• Stock investments</li>
                  <li>• Debt repayment (extra)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Financial Goals */}
        <section className="mb-12" id="saving">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Financial Goals Roadmap
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Goal</th>
                      <th className="text-left py-3">Target Amount</th>
                      <th className="text-left py-3">Timeline</th>
                      <th className="text-left py-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialGoals.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.goal}</td>
                        <td className="py-3">{item.amount}</td>
                        <td className="py-3">{item.timeline}</td>
                        <td className="py-3">
                          <Badge className={item.priority === "Critical" ? "bg-red-100 text-red-700" : item.priority === "High" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}>
                            {item.priority}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investment Options */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Investment Options for Beginners
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Option</th>
                      <th className="text-center py-3">Risk</th>
                      <th className="text-center py-3">Expected Returns</th>
                      <th className="text-center py-3">Tax Treatment</th>
                      <th className="text-center py-3">Min Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentOptions.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{item.option}</td>
                        <td className="py-3 text-center">
                          <Badge variant="outline" className={item.risk === "Low" ? "bg-green-50 text-green-700" : item.risk === "High" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}>
                            {item.risk}
                          </Badge>
                        </td>
                        <td className="py-3 text-center">{item.returns}</td>
                        <td className="py-3 text-center">{item.tax}</td>
                        <td className="py-3 text-center">{item.minAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Started */}
        <section className="mb-12" id="getting-started">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How to Get Started
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-lg">Build Emergency Fund</h3>
                <p className="text-muted-foreground">Save 3-6 months of expenses in a liquid fund or savings account before investing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-lg">Get Adequate Insurance</h3>
                <p className="text-muted-foreground">Buy term insurance (10-15x income) and health insurance (₹10-15L) before investing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-lg">Clear High-Interest Debt</h3>
                <p className="text-muted-foreground">Pay off credit card debt (30-40% interest) before investing. It's guaranteed returns.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-lg">Start SIP in Mutual Funds</h3>
                <p className="text-muted-foreground">Begin with a diversified equity mutual fund SIP. Start small, increase gradually.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-semibold text-lg">Diversify Gradually</h3>
                <p className="text-muted-foreground">Add PPF, NPS, and other assets over time. Don't put all eggs in one basket.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Common Investing Mistakes</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="text-sm">• Starting too late - time is your biggest asset</li>
                  <li className="text-sm">• Stopping SIP during market falls</li>
                  <li className="text-sm">• Trying to time the market</li>
                  <li className="text-sm">• Following hot tips without research</li>
                  <li className="text-sm">• Insurance as investment (ULIPs, endowment)</li>
                  <li className="text-sm">• Not reviewing portfolio regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

        {/* Related Pages */}
        <RelatedPages title="Explore More Investment Topics" pages={relatedPages} />

        {/* CTA */}
        <CTASection
          title="Start Your Investment Journey Today"
          description="Use our calculators to plan your investments and see how your money can grow over time."
          primaryCta={{ label: "SIP Calculator", href: "/tools/sip-return-calculator" }}
          secondaryCta={{ label: "Retirement Calculator", href: "/investing/retirement-calculator" }}
        />

        <ContactCTA />
      </div>
    </div>
  );
}
