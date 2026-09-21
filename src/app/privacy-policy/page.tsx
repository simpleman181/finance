import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - SabPataKaro",
  description: "Learn what information SabPataKaro collects, how it's used, and your choices. We collect minimal data — no accounts, no tracking cookies.",
  keywords: ["sabpatakaro privacy policy", "data collection", "website privacy"],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-blue-100">
              We collect very little, and we don't sell or share it.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              SabPataKaro is a free educational website. There's no user account or login, and
              we do not sell insurance or handle payments, so we have little reason to collect
              personal data. This page explains the little we do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information You Provide</h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Contact Form</h3>
              <p className="text-muted-foreground">
                If you use our{" "}
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  contact form
                </Link>
                , we collect the name, email address, and message you choose to provide. This
                is used solely to respond to your query and is not used for marketing or
                shared with third parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Automatically Collected Information</h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Analytics</h3>
              <p className="text-muted-foreground">
                We use Vercel Analytics to understand aggregate site usage — which pages are
                visited and how often. This is a cookieless analytics tool: it does not use
                tracking cookies and does not build an individual profile of you or track you
                across other websites.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Calculators & Tools</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any figures you enter into our calculators (premium calculator, SIP calculator,
              tax calculator, etc.) are processed in your browser to show you a result. We do
              not store or transmit these inputs to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party & Government Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our guides link to official government portals (UIDAI, Income Tax Department,
              Passport Seva, Parivahan, etc.) and insurers' websites for you to explore further
              or complete official processes. Once you leave SabPataKaro, that site's own
              privacy policy applies — we have no visibility into or control over what they
              collect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can browse SabPataKaro without submitting any personal information at all —
              the contact form is the only place we ask for it, and it's entirely optional. To
              request deletion of a message you sent us, email{" "}
              <a href="mailto:logixmagix@proton.me" className="text-primary font-medium hover:underline">
                logixmagix@proton.me
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy as the site evolves. Material changes will be reflected
              on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
