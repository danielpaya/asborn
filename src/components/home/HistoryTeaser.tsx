import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialText } from "@/components/ui/EditorialText";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { microcopy } from "@/config/brand";

export function HistoryTeaser() {
  return (
    <section className="bg-asbor-black px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="El comienzo de algo que quiere trascender." />
        <EditorialText
          className="mt-8 max-w-2xl"
          lines={[
            "ASBOR nació de una inconformidad: encontrar un jean diferente, con identidad y buena presentación, normalmente significaba pagar demasiado.",
            "Nuestra propuesta comienza con una colección limitada y una meta clara: mejorar cada producto, cada proceso y cada detalle sin perder la posibilidad de ser accesibles.",
          ]}
          lineClassName="text-asbor-text-muted"
        />
        <div className="mt-9">
          <SecondaryButton href="/historia">{microcopy.discoverHistory}</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
