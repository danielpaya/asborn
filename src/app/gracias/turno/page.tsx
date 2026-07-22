import type { Metadata } from "next";
import { VisualSuccessMessage } from "@/components/ui/VisualSuccessMessage";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { surveyContent } from "@/data/purchase-turn-survey";

export const metadata: Metadata = {
  title: "Turno registrado — Demostración",
  description: "Confirmación visual de demostración del turno de compra de GALA 001.",
  alternates: { canonical: "/gracias/turno" },
  robots: { index: false, follow: true },
};

export default function GraciasTurnoPage() {
  return (
    <section className="flex min-h-[70svh] items-center px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-xl">
        <VisualSuccessMessage
          title={surveyContent.successTitle}
          body={surveyContent.successBody}
          notice={surveyContent.notice}
          actions={
            <>
              <SecondaryButton href="/coleccion/gala-001">
                {surveyContent.backToCollection}
              </SecondaryButton>
              <PrimaryButton href="/">Volver al inicio</PrimaryButton>
            </>
          }
        />
      </div>
    </section>
  );
}
