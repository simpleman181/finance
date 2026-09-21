import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - SabPataKaro",
  description: "SabPataKaro is a free educational resource helping Indians understand personal finance, insurance, taxation, and government services. No products sold, no hidden agenda.",
  keywords: ["about sabpatakaro", "financial education India", "who we are"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SabPataKaro</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Sab Pata Karo Yahan! — a free educational resource to help Indians understand
              personal finance, insurance, and taxation.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Financial decisions — buying insurance, filing taxes, planning investments,
              applying for government documents — are things every Indian has to navigate,
              yet clear, unbiased information about how they actually work is hard to find.
              SabPataKaro exists to close that gap: plain-language guides on term insurance,
              health insurance, income tax, investing basics, and government services like
              PAN, Aadhaar, passport, and driving licence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Do (and Don't Do)</h2>
            <div className="bg-slate-50 rounded-xl p-6 space-y-3">
              <p className="text-muted-foreground">
                We publish free educational content only. We do not sell insurance policies,
                offer investment or tax advice, or act as an intermediary for any financial
                product. We're not affiliated with IRDAI, any insurer, the Income Tax
                Department, UIDAI, or any other government body.
              </p>
              <p className="text-muted-foreground">
                Where our guides mention specific insurers or reference official government
                portals, those are pointers to help you find the right place to look —
                not endorsements or recommendations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Content & AI Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              This site uses AI assistance to help research and draft educational content,
              which is then reviewed before publishing. Financial rules, tax slabs, and
              government processes change — always verify current details from official
              sources (linked throughout our guides) before making a decision or taking
              action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              Spotted an error, have a suggestion, or just want to say hello? Visit our{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact page
              </Link>{" "}
              or email us directly at{" "}
              <a href="mailto:logixmagix@proton.me" className="text-primary font-medium hover:underline">
                logixmagix@proton.me
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
