import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad preliminar de ASBOR, pendiente de revisión legal.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

const points = [
  "Este sitio es una demostración visual. El formulario de turno y el formulario del laboratorio no envían ni almacenan información.",
  "No existe un turno de compra real. No existe una compra. No existe pago.",
  "No existe garantía de disponibilidad sobre GALA 001. El precio puede cambiar antes del lanzamiento.",
  "La versión final de ASBOR requerirá autorización explícita de tratamiento de datos personales, conforme a la normativa colombiana aplicable.",
  "No se solicita número de cédula en ninguna encuesta de esta demostración.",
];

export default function PrivacidadPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacidad", href: "/privacidad" }]} />

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="LEGAL — PENDIENTE DE REVISIÓN"
            title="Política de privacidad"
          />
          <p className="text-asbor-text-muted mt-6 max-w-2xl text-sm leading-relaxed">
            Este documento es preliminar y se presenta únicamente con fines de
            demostración visual. Será reemplazado por una política de privacidad
            definitiva, revisada por un equipo legal, antes del lanzamiento real de ASBOR.
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
