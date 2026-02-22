import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface ComparisonColumn {
  key: string;
  label: string;
  highlight?: boolean;
}

interface ComparisonRow {
  feature: string;
  values: Record<string, string | boolean | React.ReactNode>;
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  title?: string;
  description?: string;
}

export function ComparisonTable({
  columns,
  rows,
  title,
  description,
}: ComparisonTableProps) {
  return (
    <section className="my-12">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold bg-slate-50 min-w-[200px]">
                Feature
              </TableHead>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className={`font-semibold ${
                    col.highlight
                      ? "bg-[#1e40af] text-white"
                      : "bg-slate-50"
                  } text-center min-w-[150px]`}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={`text-center ${
                      col.highlight ? "bg-blue-50/50" : ""
                    }`}
                  >
                    {typeof row.values[col.key] === "boolean" ? (
                      row.values[col.key] ? (
                        <Check className="h-5 w-5 text-[#059669] mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      row.values[col.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

interface PlanCard {
  name: string;
  provider: string;
  features: { label: string; value: string; highlight?: boolean }[];
  price?: string;
  priceUnit?: string;
  ctaLabel?: string;
  ctaHref?: string;
  popular?: boolean;
}

interface PlanComparisonCardsProps {
  plans: PlanCard[];
  title?: string;
  description?: string;
}

export function PlanComparisonCards({
  plans,
  title,
  description,
}: PlanComparisonCardsProps) {
  return (
    <section className="my-12">
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl border-2 p-6 ${
              plan.popular
                ? "border-[#1e40af] shadow-lg"
                : "border-slate-200"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e40af]">
                Most Popular
              </Badge>
            )}
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">{plan.provider}</p>
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, fIndex) => (
                <div
                  key={fIndex}
                  className={`flex justify-between text-sm ${
                    feature.highlight ? "font-semibold text-[#1e40af]" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{feature.label}</span>
                  <span>{feature.value}</span>
                </div>
              ))}
            </div>
            {plan.price && (
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-muted-foreground">/{plan.priceUnit || "year"}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
