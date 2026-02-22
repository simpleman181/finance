import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "gradient" | "dark";
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "gradient",
}: CTASectionProps) {
  const bgClass = {
    default: "bg-slate-50 border",
    gradient: "hero-gradient text-white",
    dark: "bg-slate-900 text-white",
  }[variant];

  return (
    <section className={`${bgClass} rounded-xl my-12`}>
      <div className="container px-6 py-12 md:py-16 text-center">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${variant !== "default" ? "text-white" : ""}`}>
          {title}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${variant === "default" ? "text-muted-foreground" : "text-blue-100"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="cta-button text-white">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button asChild variant={variant === "default" ? "outline" : "secondary"} size="lg">
              <Link href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export function ContactCTA({
  title = "Need Help? Talk to Our Experts",
  description = "Our certified financial advisors are here to help you make the right decisions.",
}: ContactCTAProps) {
  return (
    <section className="bg-gradient-to-r from-[#1e40af] to-[#059669] rounded-xl my-12">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className="text-blue-100">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-[#1e40af] hover:bg-blue-50">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
