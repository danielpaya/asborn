import { SectionHeading } from "@/components/ui/SectionHeading";
import { FounderVideo } from "@/components/media/FounderVideo";
import { founderQuote } from "@/config/brand";

export function FounderStory() {
  return (
    <section className="bg-asbor-black px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <FounderVideo />

        <div>
          <SectionHeading
            eyebrow="EL FUNDADOR"
            title="Por qué nació ASBOR."
            description="ASBOR comenzó como una inconformidad: encontrar jeans diferentes, con personalidad y buena presentación, normalmente significaba pagar precios demasiado altos."
          />

          <blockquote className="border-asbor-gold/50 mt-8 space-y-4 border-l pl-6">
            {founderQuote.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-display text-asbor-ivory text-xl leading-relaxed sm:text-2xl"
              >
                {paragraph}
              </p>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
