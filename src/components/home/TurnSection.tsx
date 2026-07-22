import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { surveySteps, surveyContent } from "@/data/purchase-turn-survey";
import { cn } from "@/lib/utils";

export function TurnSection() {
  return (
    <section className="bg-asbor-black relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
      >
        <div className="border-asbor-gold absolute top-0 -right-24 h-96 w-96 rounded-full border" />
        <div className="border-asbor-gold absolute bottom-0 -left-24 h-96 w-96 rounded-full border" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="label-caps text-asbor-gold">GALA 001</p>
          <h2 className="font-display text-asbor-ivory mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]">
            Sé parte del primer capítulo.
          </h2>
          <p className="text-asbor-text-muted mt-6 max-w-md text-lg leading-relaxed">
            Completa esta encuesta para conocer cómo funcionará el turno de compra de GALA
            001.
          </p>
          <p className="text-asbor-text-muted/80 mt-4 max-w-md text-sm leading-relaxed">
            {surveyContent.process}
          </p>
          <p className="label-caps border-asbor-gold/40 text-asbor-gold-muted mt-6 inline-block border px-4 py-2">
            {surveyContent.notice}
          </p>
          <div className="mt-9">
            <PrimaryButton href="/turno">{surveyContent.submitLabel}</PrimaryButton>
          </div>
        </div>

        <ol className="border-asbor-border bg-asbor-black-soft/50 space-y-4 border p-8">
          {surveySteps.map((step) => (
            <li key={step.id} className="flex items-center gap-4">
              <span
                className={cn(
                  "border-asbor-gold/60 text-asbor-gold flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs"
                )}
              >
                {step.index}
              </span>
              <span className="text-asbor-ivory text-sm">{step.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
