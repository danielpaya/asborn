import type { Metadata } from "next";
import { VisualSuccessMessage } from "@/components/ui/VisualSuccessMessage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { laboratorioContent } from "@/data/laboratorio";

export const metadata: Metadata = {
  title: "Sugerencia enviada — Demostración",
  description:
    "Confirmación visual de demostración del envío de una sugerencia al Laboratorio ASBOR.",
  alternates: { canonical: "/gracias/sugerencia" },
  robots: { index: false, follow: true },
};

export default function GraciasSugerenciaPage() {
  return (
    <section className="flex min-h-[70svh] items-center px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-xl">
        <VisualSuccessMessage
          title={laboratorioContent.successTitle}
          body={laboratorioContent.successBody}
          notice={laboratorioContent.notice}
          actions={
            <>
              <SecondaryButton href="/laboratorio">Volver al Laboratorio</SecondaryButton>
              <PrimaryButton href="/">Volver al inicio</PrimaryButton>
            </>
          }
        />
      </div>
    </section>
  );
}
