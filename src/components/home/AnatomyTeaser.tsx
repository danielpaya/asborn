import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { anatomyModules } from "@/data/product-specifications";
import { microcopy } from "@/config/brand";

export function AnatomyTeaser() {
  return (
    <section className="bg-asbor-charcoal px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Diseñado para sentirse bien."
          description="ASBOR busca conservar el carácter del denim y ofrecer la comodidad necesaria para acompañar el movimiento cotidiano."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {anatomyModules.map((module) => (
            <div key={module.id} className="border-asbor-border border p-6">
              <h3 className="font-display text-asbor-ivory text-2xl">{module.title}</h3>
              <p className="text-asbor-text-muted mt-3 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SecondaryButton href="/anatomia">{microcopy.exploreAnatomy}</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
