import Link from "next/link";
import { JsonLd } from "@/components/system/JsonLd";
import { brand } from "@/config/brand";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <nav aria-label="Ruta de navegación" className="px-6 pt-28 sm:px-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: `${brand.url}${crumb.href}`,
          })),
        }}
      />
      <ol className="text-asbor-text-muted mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-xs">
        {all.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === all.length - 1 ? (
              <span className="text-asbor-gold-muted" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="focus-ring hover:text-asbor-ivory">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
