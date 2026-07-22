import type { ProductSpecification } from "@/data/product-specifications";
import { statusLabels } from "@/data/product-specifications";
import { cn } from "@/lib/utils";

const statusTone: Record<ProductSpecification["status"], string> = {
  defined: "border-asbor-gold text-asbor-gold",
  testing: "border-asbor-silver text-asbor-silver",
  pending: "border-asbor-text-muted/50 text-asbor-text-muted",
};

export function ProductDetailCard({ spec }: { spec: ProductSpecification }) {
  return (
    <div className="border-asbor-border flex flex-col gap-3 border p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-asbor-ivory text-sm font-medium">{spec.label}</p>
        <span
          className={cn(
            "label-caps shrink-0 border px-2.5 py-1 text-[10px]",
            statusTone[spec.status]
          )}
        >
          {statusLabels[spec.status]}
        </span>
      </div>
      {spec.value && <p className="text-asbor-ivory text-sm">{spec.value}</p>}
      <p className="text-asbor-text-muted text-sm leading-relaxed">{spec.description}</p>
    </div>
  );
}
