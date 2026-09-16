// Curated list of insurers with links to their official websites.
// This is intentionally static (not fetched live) — see /term-insurance/best-plans
// and /health-insurance/best-plans for context on why.
//
// To add another insurer later: just add one object to the relevant array below.
// Please verify the URL is the insurer's real official page before adding it.

export interface InsurerLink {
  name: string;
  url: string;
}

export const termInsurers: InsurerLink[] = [
  { name: "HDFC Life", url: "https://www.hdfclife.com/term-insurance-plans" },
  { name: "ICICI Prudential Life", url: "https://www.iciciprulife.com/term-insurance.html" },
  { name: "Axis Max Life", url: "https://www.axismaxlife.com/term-insurance-plans" },
  { name: "Tata AIA Life", url: "https://www.tataaia.com/life-insurance-plans/term-insurance.html" },
  { name: "SBI Life", url: "https://www.sbilife.co.in/life-insurance-plans/term-insurance" },
  { name: "Bajaj Life Insurance", url: "https://www.bajajlifeinsurance.com/term-insurance-plans.html" },
  { name: "LIC", url: "https://licindia.in/term-assurance-plans" },
];

export const healthInsurers: InsurerLink[] = [
  { name: "Star Health", url: "https://www.starhealth.in/health-insurance/" },
  { name: "HDFC ERGO", url: "https://www.hdfcergo.com/health-insurance" },
  { name: "ICICI Lombard", url: "https://www.icicilombard.com/health-insurance" },
  { name: "Care Health Insurance", url: "https://www.careinsurance.com/health-insurance/" },
  { name: "Niva Bupa", url: "https://www.nivabupa.com/health-insurance" },
  { name: "Tata AIG", url: "https://www.tataaig.com/health-insurance" },
  { name: "Bajaj General Insurance", url: "https://www.bajajgeneralinsurance.com/content/bagic/en/health-insurance-plan.html" },
];
