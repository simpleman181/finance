import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
  columns?: 2 | 3 | 4;
}

export function RelatedPages({
  title = "Related Articles",
  pages,
  columns = 3,
}: RelatedPagesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="my-12">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className={`grid grid-cols-1 gap-4 ${gridCols[columns]}`}>
        {pages.map((page, index) => (
          <Link key={index} href={page.href} className="group">
            <Card className="h-full hover:border-[#1e40af]/30 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                {page.icon && (
                  <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af] mb-3 group-hover:bg-[#1e40af]/20 transition-colors">
                    {page.icon}
                  </div>
                )}
                <CardTitle className="text-base group-hover:text-[#1e40af] transition-colors flex items-center justify-between">
                  {page.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {page.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

interface QuickLinksProps {
  title?: string;
  links: { label: string; href: string }[];
}

export function QuickLinks({ title = "Quick Links", links }: QuickLinksProps) {
  return (
    <div className="bg-slate-50 rounded-lg p-6 my-8">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border text-sm hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
