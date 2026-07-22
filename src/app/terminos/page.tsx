import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones preliminares de uso del sitio de demostración de ASBOR.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

const points = [
  "Este sitio web es una demostración visual de la marca ASBOR y de su primera colección, GALA 001.",
  "Ninguna funcionalidad de este sitio procesa pagos, crea cuentas de usuario ni ejecuta transacciones reales.",
  "Los precios mostrados son estimados y pueden cambiar antes del lanzamiento definitivo.",
  "El estado de GALA 001 es 'próximo lanzamiento'. No se garantiza disponibilidad de unidades.",
  "Estos términos son preliminares y se reemplazarán por condiciones definitivas, revisadas legalmente, antes del lanzamiento real.",
];

export default function TerminosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Términos", href: "/terminos" }]} />

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="LEGAL — PENDIENTE DE REVISIÓN"
            title="Términos y condiciones"
          />
          <p className="text-asbor-text-muted mt-6 max-w-2xl text-sm leading-relaxed">
            Este documento es preliminar y se presenta únicamente con fines de
            demostración visual. Será reemplazado por términos y condiciones definitivos,
            revisados por un equipo legal, antes del lanzamiento real de ASBOR.
          </p>

          <ul className="mt-10 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="text-asbor-ivory flex gap-3 text-sm leading-relaxed"
              >
                <span className="bg-asbor-gold mt-2 h-1 w-1 shrink-0 rounded-full" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
