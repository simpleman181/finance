import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  breadcrumbs?: { label: string; href: string }[];
  variant?: "default" | "compact" | "gradient";
}

export function HeroSection({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  variant = "default",
}: HeroSectionProps) {
  const bgClass = variant === "gradient" 
    ? "hero-gradient text-white" 
    : variant === "compact"
    ? "bg-slate-50 border-b"
    : "bg-gradient-to-br from-slate-50 to-blue-50 border-b";

  return (
    <section className={`${bgClass}`}>
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-muted-foreground hover:text-foreground">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center rounded-full border border-[#059669]/20 bg-[#059669]/10 px-4 py-1.5 text-sm font-medium text-[#059669] mb-6">
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${variant === "gradient" ? "text-white" : ""}`}>
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className={variant === "gradient" ? "text-yellow-300" : "gradient-text"}>
                {titleHighlight}
              </span>
            </>
          )}
        </h1>

        {/* Description */}
        <p className={`text-lg md:text-xl max-w-3xl mb-8 ${variant === "gradient" ? "text-blue-100" : "text-muted-foreground"}`}>
          {description}
        </p>

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Button asChild size="lg" className="cta-button text-white">
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild variant={variant === "gradient" ? "secondary" : "outline"} size="lg">
                <Link href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
