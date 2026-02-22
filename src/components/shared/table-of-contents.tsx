"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const isInitialized = useRef(false);

  // Extract headings from the page
  // This is a valid use of useEffect for synchronizing with external DOM state
  useEffect(() => {
    if (isInitialized.current) return;
    
    const elements = Array.from(
      document.querySelectorAll("main h2, main h3, main h4")
    );

    const items: TOCItem[] = elements.map((element) => {
      const level = parseInt(element.tagName.substring(1));
      const text = element.textContent || "";
      const id = element.id || text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      
      // Add ID to element if it doesn't have one
      if (!element.id) {
        element.id = id;
      }

      return { id: element.id || id, text, level };
    });

    if (items.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHeadings(items);
      isInitialized.current = true;
    }
  }, []);

  // Track active heading on scroll
  const handleScroll = useCallback(() => {
    const elements = headings.map((h) => document.getElementById(h.id));
    
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveId(element.id);
          return;
        }
      }
    }
    setActiveId("");
  }, [headings]);

  useEffect(() => {
    if (headings.length === 0) return;
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      setActiveId(id);
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Toggle Table of Contents"
      >
        <List className="h-5 w-5" />
      </button>

      {/* TOC Container */}
      <nav
        className={cn(
          "fixed lg:sticky top-24 right-0 lg:top-24 z-40",
          "bg-white dark:bg-slate-900 border-l lg:border rounded-l-lg lg:rounded-lg shadow-lg lg:shadow-sm",
          "w-72 max-h-[calc(100vh-120px)] overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
        aria-label="Table of Contents"
      >
        <div className="p-4">
          <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
            <List className="h-4 w-4" />
            Table of Contents
          </h2>
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={cn(
                    "w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                    "hover:bg-slate-100 dark:hover:bg-slate-800",
                    heading.level === 2 && "font-medium",
                    heading.level === 3 && "pl-4 text-muted-foreground",
                    heading.level === 4 && "pl-6 text-xs text-muted-foreground",
                    activeId === heading.id && "text-primary bg-primary/10 font-medium"
                  )}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Wrapper component to add TOC to any page
interface ContentWithTOCProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentWithTOC({ children, className }: ContentWithTOCProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="lg:mr-80">
        {children}
      </div>
      <div className="hidden lg:block lg:fixed lg:right-4 lg:w-72">
        <TableOfContents />
      </div>
    </div>
  );
}
