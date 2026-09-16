import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { InsurerLink } from "@/lib/insurer-links";

interface InsurerLinksProps {
  title?: string;
  description?: string;
  insurers: InsurerLink[];
}

// Renders a grid of insurers with a link to each one's official website.
// Opens in a new tab. No premiums, ratings, or rankings are shown here —
// this only points to the source so visitors can look up current plan
// details directly from the insurer.
export function InsurerLinks({
  title = "Explore Plans Directly From Insurers",
  description = "Visit an insurer's official website to see their current term plans, premiums, and features.",
  insurers,
}: InsurerLinksProps) {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {insurers.map((insurer) => (
          <Card key={insurer.name} className="hover:border-[#1e40af]/30 hover:shadow-md transition-all">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
              <span className="font-medium">{insurer.name}</span>
              <Button variant="outline" size="sm" asChild>
                <a href={insurer.url} target="_blank" rel="noopener noreferrer">
                  Explore
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        These links go to each insurer&apos;s official website. We don&apos;t sell policies or receive commissions — verify plan details and current pricing directly with the insurer before buying.
      </p>
    </section>
  );
}
