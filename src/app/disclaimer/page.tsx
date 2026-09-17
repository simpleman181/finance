import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - SabPataKaro",
  description: "SabPataKaro provides general educational information only. Read our disclaimer regarding financial advice, accuracy, and government affiliation before using this site.",
  keywords: ["sabpatakaro disclaimer", "educational content disclaimer"],
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
            <p className="text-lg md:text-xl text-blue-100">Please read this carefully before using SabPataKaro.</p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-800 mb-2">Educational Purpose Only</h3>
            <p className="text-muted-foreground text-sm">
              Everything on SabPataKaro is general information provided for educational
              purposes. It is not financial, insurance, tax, or legal advice, and it does not
              take into account your individual circumstances.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing on this site should be treated as a recommendation to buy, sell, or
              avoid any financial product, or as a substitute for advice from a licensed
              financial advisor, chartered accountant, insurance advisor, or lawyer. Always
              consult a qualified professional before making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Government or Insurer Affiliation</h2>
            <p className="text-muted-foreground leading-relaxed">
              SabPataKaro is an independent, privately run educational website. We are not
              affiliated with, endorsed by, or acting on behalf of IRDAI, the Income Tax
              Department, UIDAI, the Passport Seva / Ministry of External Affairs, any state
              transport department, or any insurance company. Where we link to official
              government portals or insurers' websites, those links go to independent third
              parties — always complete actual applications, payments, or transactions only on
              official government websites or directly with a licensed insurer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Accuracy & Currency of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tax laws, insurance regulations, premiums, and government procedures change
              periodically. We aim to keep our content accurate and current, and some of it is
              AI-assisted, but we cannot guarantee it reflects the latest rules at the moment
              you read it. Before acting on anything here — filing taxes, buying a policy,
              applying for a document — verify current details from the relevant official
              source.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              SabPataKaro and its contributors are not liable for any loss or damage arising
              from decisions made based on information on this site, including outdated
              information, errors, or third-party links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If something on this site seems inaccurate or outdated, please let us know via
              our{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
