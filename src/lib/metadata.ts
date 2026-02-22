import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// Base site configuration
export const siteConfig = {
  name: "SabPataKaro",
  description: "Taxes, Insurance, Money Management, Investment, Passport, PAN, Aadhar, Driving License – Sab Pata Karo Yahan!",
  tagline: "Taxes, Insurance, Money Management, Investment, Passport, PAN – Sab Pata Karo Yahan!",
  url: "https://sabpatakaro.com",
  ogImage: "/og-image.png",
  twitterHandle: "@sabpatakaro",
  email: "mailtosabpatakaro@gmail.com",
};

// Metadata for all pages
export const pageMetadata: Record<string, PageMetadata> = {
  // Homepage
  "/": {
    title: "SabPataKaro - Taxes, Insurance, Money, Passport, PAN, Aadhar & More | India",
    description: "Complete guide to Taxes, Insurance, Money Management, Investment, Passport, PAN Card, Aadhar, Driving License in India. Free calculators, guides, and official links. Sab Pata Karo Yahan!",
    keywords: ["sab pata karo", "taxes india", "insurance guide", "passport india", "pan card", "aadhar", "driving license", "money management", "investment india"],
  },

  // Guides Hub Page
  "/guides": {
    title: "Complete Guides - Learning Center | SabPataKaro",
    description: "Comprehensive guides on taxes, insurance, passport, PAN card, Aadhar, driving license, and investments in India. Sab Pata Karo Yahan!",
    keywords: ["financial guides", "government guides india", "passport guide", "pan card guide", "aadhar guide"],
  },

  // Passport Section
  "/passport": {
    title: "Passport Application Guide India - How to Apply, Documents, Fees | SabPataKaro",
    description: "Complete guide to passport application in India. Learn how to apply for fresh passport, renewal, tatkal passport. Documents required, fees, do's and don'ts, and official links.",
    keywords: ["passport india", "passport application", "passport renewal", "tatkal passport", "passport documents", "passport fees"],
  },

  // PAN Card Section
  "/pan-card": {
    title: "PAN Card Application Guide India - How to Apply, Documents, Fees | SabPataKaro",
    description: "Complete guide to PAN card application in India. Learn how to apply for new PAN, correction, duplicate PAN. Documents required, fees, do's and don'ts, and official links.",
    keywords: ["pan card", "pan card application", "new pan card", "pan correction", "pan card documents", "pan card fees"],
  },

  // Aadhar Section
  "/aadhar": {
    title: "Aadhar Card Guide India - How to Apply, Update, Download | SabPataKaro",
    description: "Complete guide to Aadhar card in India. Learn how to apply for new Aadhar, update details, download e-Aadhar. Documents required, do's and don'ts, and official links.",
    keywords: ["aadhar card", "aadhar application", "aadhar update", "e-aadhar", "aadhar enrollment", "uidai"],
  },

  // Driving License Section
  "/driving-license": {
    title: "Driving License Guide India - How to Apply, Documents, Test | SabPataKaro",
    description: "Complete guide to driving license in India. Learn how to apply for learner's license, permanent license, renewal. Documents required, test tips, do's and don'ts.",
    keywords: ["driving license india", "driving licence application", "learner license", "dl renewal", "driving test", "rto"],
  },

  // Term Insurance Pages
  "/term-insurance": {
    title: "Term Insurance Guide India - Learn Coverage, Benefits & Rules | SabPataKaro",
    description: "Complete educational guide to term insurance in India. Understand coverage amounts, premium calculations, claim settlement ratios, riders, and how to choose the right policy. No sales, pure education.",
    keywords: ["term insurance", "term life insurance india", "term insurance guide", "life coverage", "term plan basics"],
  },
  "/term-insurance/best-plans": {
    title: "Term Insurance Plans Comparison - How to Evaluate & Choose | SabPataKaro",
    description: "Learn how to compare term insurance plans in India. Understand claim settlement ratios, solvency ratios, premium factors, and key features to consider. Educational comparison guide.",
    keywords: ["term insurance comparison", "best term plans", "claim settlement ratio", "insurance comparison guide"],
  },
  "/term-insurance/premium-calculator": {
    title: "Term Insurance Premium Calculator - Estimate Your Coverage Cost | SabPataKaro",
    description: "Free term insurance premium calculator. Estimate your premium based on age, sum assured, policy term, and lifestyle factors. Educational tool for financial planning.",
    keywords: ["term insurance calculator", "premium calculator", "life insurance premium", "term plan cost"],
  },
  "/term-insurance/how-much-cover": {
    title: "How Much Term Insurance Cover Do You Need? - Calculation Guide | SabPataKaro",
    description: "Learn how to calculate the right term insurance coverage amount. Understand income replacement method, expense calculation, liabilities, and inflation factors.",
    keywords: ["term insurance coverage", "how much life insurance", "coverage calculator", "sum assured guide"],
  },
  "/term-insurance/claim-settlement-ratio": {
    title: "Claim Settlement Ratio in Term Insurance - What It Means & Why It Matters | SabPataKaro",
    description: "Understand claim settlement ratio (CSR) in term insurance. Learn how to interpret CSR data, why it matters, and other factors to consider when choosing an insurer.",
    keywords: ["claim settlement ratio", "CSR insurance", "insurance claims", "term insurance claims"],
  },
  "/term-insurance/riders": {
    title: "Term Insurance Riders Explained - Additional Benefits & Coverage | SabPataKaro",
    description: "Complete guide to term insurance riders in India. Learn about critical illness rider, accidental death benefit, waiver of premium, and other add-on covers.",
    keywords: ["term insurance riders", "critical illness rider", "accidental death benefit", "insurance add-ons"],
  },
  "/term-insurance/mistakes": {
    title: "Common Term Insurance Mistakes to Avoid - Expert Guide | SabPataKaro",
    description: "Avoid common mistakes when buying term insurance. Learn about underinsurance, incorrect nominee details, hiding health information, and other pitfalls.",
    keywords: ["term insurance mistakes", "insurance pitfalls", "life insurance tips", "term plan errors"],
  },
  "/term-insurance/for-salaried": {
    title: "Term Insurance for Salaried Employees - Complete Guide | SabPataKaro",
    description: "Term insurance guide for salaried employees in India. Learn about employer coverage gaps, optimal coverage amount, tax benefits, and how to choose the right policy.",
    keywords: ["term insurance salaried", "employee life insurance", "group insurance gaps", "salaried insurance guide"],
  },
  "/term-insurance/for-self-employed": {
    title: "Term Insurance for Self-Employed & Business Owners - Guide | SabPataKaro",
    description: "Term insurance planning for self-employed professionals and business owners. Understand coverage needs, business continuity, and tax planning strategies.",
    keywords: ["term insurance self-employed", "business owner insurance", "entrepreneur life insurance"],
  },
  "/term-insurance/vs-traditional": {
    title: "Term Insurance vs Traditional Life Insurance - Complete Comparison | SabPataKaro",
    description: "Compare term insurance with traditional life insurance plans. Understand the differences in premiums, returns, coverage, and which is better for your needs.",
    keywords: ["term vs traditional insurance", "term vs endowment", "life insurance comparison", "term plan benefits"],
  },

  // Health Insurance Pages
  "/health-insurance": {
    title: "Health Insurance Guide India - Learn Coverage, Benefits & Claims | SabPataKaro",
    description: "Complete educational guide to health insurance in India. Understand policy types, coverage, exclusions, network hospitals, and claim process. No sales, pure education.",
    keywords: ["health insurance india", "medical insurance guide", "health coverage", "health policy basics"],
  },
  "/health-insurance/best-plans": {
    title: "Health Insurance Plans Comparison - How to Evaluate & Choose | SabPataKaro",
    description: "Learn how to compare health insurance plans in India. Understand coverage limits, network hospitals, exclusions, waiting periods, and key features to consider.",
    keywords: ["health insurance comparison", "best health plans", "medical insurance comparison", "health policy guide"],
  },
  "/health-insurance/how-much-cover": {
    title: "How Much Health Insurance Cover Do You Need? - Calculation Guide | SabPataKaro",
    description: "Calculate the right health insurance coverage amount. Learn about medical inflation, family size, pre-existing conditions, and city-wise coverage recommendations.",
    keywords: ["health insurance coverage", "how much health cover", "sum insured calculation", "medical coverage guide"],
  },
  "/health-insurance/for-parents-seniors": {
    title: "Health Insurance for Parents & Senior Citizens - Complete Guide | SabPataKaro",
    description: "Guide to health insurance for parents and senior citizens in India. Learn about age limits, pre-existing disease coverage, co-payment, and specialized plans.",
    keywords: ["health insurance parents", "senior citizen insurance", "parents health cover", "elderly health insurance"],
  },
  "/health-insurance/claim-process": {
    title: "Health Insurance Claim Process - Step-by-Step Guide | SabPataKaro",
    description: "Complete guide to health insurance claims in India. Learn cashless claims, reimbursement process, documents required, and common claim rejection reasons.",
    keywords: ["health insurance claim", "cashless claim", "reimbursement claim", "medical claim process"],
  },
  "/health-insurance/cashless-network": {
    title: "Cashless Network Hospitals in Health Insurance - Complete Guide | SabPataKaro",
    description: "Understand cashless network hospitals in health insurance. Learn how to find network hospitals, pre-authorization process, and cashless claim benefits.",
    keywords: ["cashless hospital", "network hospitals", "cashless claim", "health insurance network"],
  },
  "/health-insurance/waiting-period": {
    title: "Health Insurance Waiting Period - Types & What to Know | SabPataKaro",
    description: "Learn about waiting periods in health insurance. Understand initial waiting period, pre-existing disease waiting period, and maternity waiting period.",
    keywords: ["health insurance waiting period", "PED waiting period", "initial waiting period", "insurance waiting time"],
  },
  "/health-insurance/copayment-sublimits": {
    title: "Co-payment & Sublimits in Health Insurance - Complete Guide | SabPataKaro",
    description: "Understand co-payment and sublimits in health insurance policies. Learn how they affect premiums, claim amounts, and things to consider before buying.",
    keywords: ["health insurance copayment", "policy sublimits", "co-pay meaning", "health insurance limits"],
  },
  "/health-insurance/individual-vs-family-floater": {
    title: "Individual vs Family Floater Health Insurance - Which to Choose | SabPataKaro",
    description: "Compare individual and family floater health insurance plans. Understand pros, cons, cost differences, and which is better for your family.",
    keywords: ["individual vs floater", "family health insurance", "floater plan", "health insurance comparison"],
  },
  "/health-insurance/premium-calculator": {
    title: "Health Insurance Premium Calculator - Estimate Your Cost | SabPataKaro",
    description: "Free health insurance premium calculator. Estimate your premium based on age, sum insured, family size, and coverage requirements.",
    keywords: ["health insurance calculator", "premium calculator", "medical insurance cost", "health policy premium"],
  },

  // Tax Pages
  "/tax": {
    title: "Income Tax Guide India - Tax Planning, Deductions & Filing | SabPataKaro",
    description: "Complete income tax guide for India. Learn about tax slabs, deductions under 80C, 80D, old vs new regime, tax planning strategies, and e-filing process.",
    keywords: ["income tax india", "tax planning", "tax deductions", "income tax guide", "tax saving"],
  },
  "/tax/income-tax-slabs": {
    title: "Income Tax Slabs in India - Current Rates & How They Work | SabPataKaro",
    description: "Current income tax slabs in India for old and new tax regime. Understand tax rates for different income brackets, surcharge, and cess calculations.",
    keywords: ["income tax slabs", "tax rates india", "tax brackets", "income tax rates"],
  },
  "/tax/section-80c": {
    title: "Section 80C Deductions - Save Up to ₹1.5 Lakh in Taxes | SabPataKaro",
    description: "Complete guide to Section 80C deductions. Learn about eligible investments like PPF, ELSS, NSC, life insurance, and how to maximize your tax savings.",
    keywords: ["section 80c", "80c deductions", "tax saving investments", "ppf", "elss tax saving"],
  },
  "/tax/section-80d": {
    title: "Section 80D Deductions - Health Insurance Tax Benefits | SabPataKaro",
    description: "Guide to Section 80D tax deductions for health insurance premiums. Learn about deduction limits, preventive health check-up, and family coverage benefits.",
    keywords: ["section 80d", "health insurance tax benefit", "80d deduction", "medical insurance tax"],
  },
  "/tax/old-vs-new-regime": {
    title: "Old vs New Tax Regime - Which is Better for You? | SabPataKaro",
    description: "Compare old and new income tax regimes in India. Calculate which regime saves more tax based on your income, deductions, and investments.",
    keywords: ["old vs new tax regime", "tax regime comparison", "which tax regime", "income tax calculation"],
  },
  "/tax/income-tax-calculator": {
    title: "Income Tax Calculator India - Calculate Your Tax Liability | SabPataKaro",
    description: "Free income tax calculator for India. Calculate your tax liability under old and new regime. Includes all deductions and tax slabs for FY 2024-25.",
    keywords: ["income tax calculator", "tax calculator india", "tax liability calculator", "income tax computation"],
  },
  "/tax/best-tax-saving-options": {
    title: "Best Tax Saving Options in India - Complete Guide | SabPataKaro",
    description: "Explore the best tax saving options in India. Compare Section 80C investments, health insurance, NPS, and other tax-efficient instruments.",
    keywords: ["tax saving options", "best tax investments", "tax efficient investments", "save tax india"],
  },
  "/tax/how-to-save-tax-legally": {
    title: "How to Save Tax Legally in India - Expert Tips & Strategies | SabPataKaro",
    description: "Legal ways to save income tax in India. Learn about legitimate deductions, exemptions, tax planning strategies, and common mistakes to avoid.",
    keywords: ["save tax legally", "legal tax saving", "tax planning strategies", "reduce tax liability"],
  },
  "/tax/salary-tax-calculation": {
    title: "Salary Income Tax Calculation - Complete Guide for Salaried | SabPataKaro",
    description: "Guide to income tax calculation for salary income. Understand taxable salary, HRA exemption, standard deduction, Form 16, and tax planning for employees.",
    keywords: ["salary tax calculation", "income tax for salaried", "form 16", "hra exemption", "salary income tax"],
  },
  "/tax/mutual-funds-taxation": {
    title: "Mutual Funds Taxation in India - Capital Gains Tax Guide | SabPataKaro",
    description: "Complete guide to mutual funds taxation in India. Learn about equity and debt fund taxation, LTCG, STCG, indexation benefits, and tax-efficient investing.",
    keywords: ["mutual funds taxation", "capital gains tax", "mf tax", "equity fund taxation", "debt fund tax"],
  },
  "/tax/capital-gains-shares": {
    title: "Capital Gains Tax on Shares - Complete Tax Guide | SabPataKaro",
    description: "Guide to capital gains tax on shares and stocks in India. Understand short-term and long-term capital gains, tax rates, and how to calculate tax on share trading.",
    keywords: ["capital gains tax shares", "stock taxation", "share trading tax", "STCG LTCG shares"],
  },
  "/tax/short-vs-long-term-capital-gains": {
    title: "Short-term vs Long-term Capital Gains - Tax Rates & Differences | SabPataKaro",
    description: "Understand the difference between short-term and long-term capital gains. Learn about holding periods, tax rates, and how they apply to different investments.",
    keywords: ["short term capital gains", "long term capital gains", "STCG vs LTCG", "capital gains holding period"],
  },

  // Investing Pages
  "/investing": {
    title: "Investment Guide India - Personal Finance & Wealth Building | SabPataKaro",
    description: "Complete investment guide for India. Learn about SIPs, mutual funds, stocks, PPF, NPS, retirement planning, and wealth creation strategies for beginners.",
    keywords: ["investment guide india", "personal finance", "wealth building", "mutual funds guide", "investment basics"],
  },
  "/investing/what-is-sip": {
    title: "What is SIP? - Systematic Investment Plan Complete Guide | SabPataKaro",
    description: "Learn everything about Systematic Investment Plan (SIP). Understand how SIP works, benefits, types of SIP, and how to start investing in mutual funds via SIP.",
    keywords: ["what is sip", "systematic investment plan", "sip meaning", "sip investment", "how sip works"],
  },
  "/investing/sip-vs-lumpsum": {
    title: "SIP vs Lump Sum Investment - Which is Better? | SabPataKaro",
    description: "Compare SIP and lump sum investment strategies. Learn pros and cons of each approach, when to choose SIP vs lump sum, and how to decide.",
    keywords: ["sip vs lumpsum", "sip or lump sum", "mutual fund investment", "investment strategy"],
  },
  "/investing/best-mutual-funds-beginners": {
    title: "Best Mutual Funds for Beginners - How to Choose & Start | SabPataKaro",
    description: "Guide to choosing mutual funds for beginners. Learn about fund types, risk assessment, how to analyze funds, and build a starter portfolio.",
    keywords: ["mutual funds beginners", "best mf for beginners", "how to choose mutual funds", "mutual fund basics"],
  },
  "/investing/emergency-fund": {
    title: "Emergency Fund - Why You Need It & How to Build One | SabPataKaro",
    description: "Complete guide to emergency fund planning. Learn how much to save, where to keep emergency funds, and why it's crucial for financial security.",
    keywords: ["emergency fund", "emergency savings", "contingency fund", "financial safety net"],
  },
  "/investing/retirement-planning": {
    title: "Retirement Planning India - Complete Guide to Secure Your Future | SabPataKaro",
    description: "Guide to retirement planning in India. Learn about NPS, EPF, PPF, retirement corpus calculation, and how to build a comfortable retirement fund.",
    keywords: ["retirement planning india", "nps", "retirement corpus", "pension planning", "retire early"],
  },
  "/investing/retirement-calculator": {
    title: "Retirement Calculator India - Plan Your Retirement Corpus | SabPataKaro",
    description: "Free retirement calculator for India. Calculate how much you need for retirement based on your lifestyle, inflation, and expected returns.",
    keywords: ["retirement calculator", "corpus calculator", "retirement planning tool", "pension calculator"],
  },
  "/investing/common-mistakes": {
    title: "Common Investment Mistakes to Avoid - Expert Guide | SabPataKaro",
    description: "Learn about common investment mistakes Indians make. Avoid emotional investing, timing the market, concentration risk, and other pitfalls.",
    keywords: ["investment mistakes", "investing errors", "common financial mistakes", "investment pitfalls"],
  },
  "/investing/how-much-to-save": {
    title: "How Much Should You Save? - Savings Guide by Age & Income | SabPataKaro",
    description: "Learn how much of your income you should save. Age-wise savings guide, 50/30/20 rule, and tips to increase your savings rate.",
    keywords: ["how much to save", "savings rate", "how much savings", "income saving percentage"],
  },
  "/investing/start-investing-small": {
    title: "How to Start Investing with Small Amounts - Beginner's Guide | SabPataKaro",
    description: "Guide to start investing with small amounts. Learn about micro-investing, SIPs starting at ₹500, and how to build wealth with limited income.",
    keywords: ["start investing small", "invest with little money", "small investments", "beginner investing"],
  },

  // Tools Pages
  "/tools/sip-return-calculator": {
    title: "SIP Return Calculator - Calculate Mutual Fund Returns | SabPataKaro",
    description: "Free SIP return calculator. Estimate your mutual fund SIP returns based on monthly investment, tenure, and expected returns. Plan your investments better.",
    keywords: ["sip calculator", "sip return calculator", "mutual fund calculator", "sip returns"],
  },
  "/tools/emi-calculator": {
    title: "EMI Calculator - Calculate Loan EMI for Home, Car, Personal | SabPataKaro",
    description: "Free EMI calculator for home loan, car loan, and personal loan. Calculate monthly EMI, total interest, and compare different loan options.",
    keywords: ["emi calculator", "loan emi calculator", "home loan emi", "car loan calculator"],
  },
  "/tools/term-coverage-calculator": {
    title: "Term Insurance Coverage Calculator - Find Your Ideal Sum Assured | SabPataKaro",
    description: "Calculate how much term insurance coverage you need. Based on income, expenses, liabilities, and future financial goals.",
    keywords: ["term coverage calculator", "sum assured calculator", "life insurance coverage", "term insurance needs"],
  },
  "/tools/compare-term-insurance": {
    title: "Term Insurance Comparison Tool - Compare Plans Side by Side | SabPataKaro",
    description: "Compare term insurance plans side by side. Understand key differences in features, premiums, and benefits to make an informed decision.",
    keywords: ["term insurance comparison", "compare term plans", "life insurance comparison tool"],
  },
  "/tools/health-coverage-estimator": {
    title: "Health Insurance Coverage Estimator - Find Your Ideal Cover | SabPataKaro",
    description: "Calculate how much health insurance coverage you need based on family size, location, lifestyle, and medical history.",
    keywords: ["health coverage estimator", "health insurance calculator", "sum insured calculator"],
  },
  "/tools/compare-health-insurance": {
    title: "Health Insurance Comparison Tool - Compare Plans Side by Side | SabPataKaro",
    description: "Compare health insurance plans side by side. Understand differences in coverage, premiums, exclusions, and network hospitals.",
    keywords: ["health insurance comparison", "compare health plans", "medical insurance comparison"],
  },
  "/tools/tax-saving-planner": {
    title: "Tax Saving Planner - Optimize Your Tax Deductions | SabPataKaro",
    description: "Plan your tax savings with our interactive tool. Explore Section 80C, 80D, and other deductions to minimize your tax liability.",
    keywords: ["tax saving planner", "tax planning tool", "80c planner", "tax optimization"],
  },
  "/tools/financial-health-check": {
    title: "Financial Health Check - Assess Your Financial Wellness | SabPataKaro",
    description: "Take a financial health check to assess your savings, investments, insurance, and debt. Get personalized recommendations for improvement.",
    keywords: ["financial health check", "financial wellness", "money health", "financial assessment"],
  },

  // Legal Pages
  "/about": {
    title: "About SabPataKaro - Our Mission & Team",
    description: "Learn about SabPataKaro, India's trusted platform for financial and government services information. Our mission to help every Indian access accurate information.",
    keywords: ["about sabpatakaro", "financial education platform", "government services guide india"],
  },
  "/contact": {
    title: "Contact Us - Get in Touch with SabPataKaro",
    description: "Contact SabPataKaro for questions, feedback, or suggestions. We're here to help you with your financial and government services queries.",
    keywords: ["contact sabpatakaro", "finance queries", "government services questions"],
  },
  "/disclaimer": {
    title: "Disclaimer - SabPataKaro Terms & Conditions",
    description: "Read our disclaimer regarding information provided on SabPataKaro. Educational content only - not professional advice.",
    keywords: ["disclaimer", "terms of use", "information disclaimer"],
  },
  "/privacy-policy": {
    title: "Privacy Policy - How We Protect Your Data | SabPataKaro",
    description: "SabPataKaro's privacy policy. Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws.",
    keywords: ["privacy policy", "data protection", "user privacy india"],
  },
  "/terms-of-service": {
    title: "Terms of Service - SabPataKaro Usage Terms",
    description: "Terms of service for using SabPataKaro. Read our usage terms, acceptable use policy, and user responsibilities.",
    keywords: ["terms of service", "terms of use", "user agreement"],
  },
};

// Generate metadata for a page
export function generatePageMetadata(path: string): Metadata {
  const page = pageMetadata[path];
  
  if (!page) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: "SabPataKaro Team" }],
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
