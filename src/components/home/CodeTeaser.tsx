import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { SymbolExplorer } from "@/components/brand/SymbolExplorer";
import { microcopy } from "@/config/brand";

export function CodeTeaser() {
  return (
    <section className="bg-asbor-black px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="CÓDIGO ASBOR"
          title="Más que símbolos."
          description="Cada forma representa una idea. Juntas construyen el lenguaje visual de ASBOR."
        />

        <div className="mt-16">
          <SymbolExplorer />
        </div>

        <div className="mt-14">
          <SecondaryButton href="/codigo-asbor">
            {microcopy.discoverSymbols}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
