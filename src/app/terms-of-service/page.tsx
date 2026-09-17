import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - SabPataKaro",
  description: "Terms governing your use of SabPataKaro's free educational content, calculators, and tools.",
  keywords: ["sabpatakaro terms of service", "terms and conditions"],
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg md:text-xl text-blue-100">
              The terms for using SabPataKaro's free educational content and tools.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using SabPataKaro, you agree to these terms. If you don't agree,
              please don't use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use of the Site</h2>
            <p className="text-muted-foreground leading-relaxed">
              SabPataKaro is free to access for personal, non-commercial, educational use. You
              may not scrape, republish, or redistribute our content at scale, or use the site
              in any way that could disable, overburden, or impair it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Educational Content, Not Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, calculators, and tools on SabPataKaro are for general educational
              purposes only and do not constitute financial, tax, insurance, or legal advice.
              See our{" "}
              <Link href="/disclaimer" className="text-primary font-medium hover:underline">
                Disclaimer
              </Link>{" "}
              for more detail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Products Sold</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell insurance, investment products, or any financial product on this
              site, and we do not process payments. Where we link to insurers or government
              portals, any transaction you complete happens entirely on their site, under
              their terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content, design, and branding of SabPataKaro belong to SabPataKaro unless
              otherwise credited. You may share links to our pages, but please don't copy
              substantial content elsewhere without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our guides link to official government portals and insurers' websites for your
              convenience. We don't control these sites and aren't responsible for their
              content, accuracy, or availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to the Site or These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our content, tools, or these terms at any time. Continued use of
              the site after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about these terms? Reach us via our{" "}
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
