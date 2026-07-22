import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/brand/Timeline";

export function JourneySection() {
  return (
    <section className="bg-asbor-black-soft px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="EL CAMINO DE ASBOR"
          title="Cada colección debe superar a la anterior."
        />
        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
