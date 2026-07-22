import type { Metadata } from "next";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BrandMark } from "@/components/brand/BrandMark";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center sm:px-10">
      <BrandMark kind="monogram" className="h-14 w-14 opacity-70" />
      <h1 className="font-display text-asbor-ivory mt-8 max-w-2xl text-[clamp(2.2rem,5vw,3.5rem)] leading-tight">
        Este camino no pertenece al Código ASBOR.
      </h1>
      <p className="text-asbor-text-muted mt-5 max-w-md text-base">
        La página que buscas no está disponible.
      </p>
      <div className="mt-9">
        <PrimaryButton href="/">Volver al inicio</PrimaryButton>
      </div>
    </section>
  );
}
