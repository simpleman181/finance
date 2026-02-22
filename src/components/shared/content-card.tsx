import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  category?: string;
  readTime?: string;
  variant?: "default" | "featured" | "compact";
}

export function ContentCard({
  title,
  description,
  href,
  icon,
  category,
  readTime,
  variant = "default",
}: ContentCardProps) {
  if (variant === "compact") {
    return (
      <Link href={href} className="group">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
          {icon && (
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center text-[#1e40af]">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate group-hover:text-[#1e40af] transition-colors">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground truncate">{description}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[#1e40af] transition-colors" />
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Card className="card-hover group overflow-hidden border-2 hover:border-[#1e40af]/20">
        <CardHeader className="pb-2">
          {category && (
            <Badge variant="secondary" className="w-fit mb-2">
              {category}
            </Badge>
          )}
          <CardTitle className="text-xl group-hover:text-[#1e40af] transition-colors">
            <Link href={href}>{title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter className="border-t bg-slate-50/50">
          <div className="flex items-center justify-between w-full">
            {readTime && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {readTime}
              </div>
            )}
            <Link
              href={href}
              className="inline-flex items-center text-sm font-medium text-[#1e40af] hover:text-[#1e40af]/80"
            >
              Read More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="card-hover group h-full">
      <CardHeader>
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e40af]/10 to-[#059669]/10 flex items-center justify-center mb-4 group-hover:from-[#1e40af]/20 group-hover:to-[#059669]/20 transition-colors">
            {icon}
          </div>
        )}
        {category && (
          <Badge variant="outline" className="w-fit mb-2">
            {category}
          </Badge>
        )}
        <CardTitle className="text-lg group-hover:text-[#1e40af] transition-colors">
          <Link href={href}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {readTime && (
        <CardFooter className="border-t pt-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            {readTime} read
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

interface ContentGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ContentGrid({ children, columns = 3, className = "" }: ContentGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]} ${className}`}>
      {children}
    </div>
  );
}
