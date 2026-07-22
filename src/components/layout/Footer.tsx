import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { brand } from "@/config/brand";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-asbor-border bg-asbor-black border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-asbor-ivory text-3xl tracking-[0.18em]">
              ASBOR
            </p>
            <p className="text-asbor-text-muted mt-4 max-w-xs text-sm leading-relaxed">
              {brand.slogan}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <SocialIcons />
              <WhatsAppButton variant="inline" className="static" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="label-caps text-asbor-gold-muted">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="focus-ring text-asbor-text-muted hover:text-asbor-ivory text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-asbor-border text-asbor-text-muted/70 mt-14 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ASBOR. Hecho en Colombia.</p>
          <p>Sitio de demostración visual — sin funciones de compra activas.</p>
        </div>
      </div>
    </footer>
  );
}
