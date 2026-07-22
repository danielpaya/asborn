import { surveySteps } from "@/data/purchase-turn-survey";
import { cn } from "@/lib/utils";

interface SurveyProgressProps {
  currentIndex: number;
}

export function SurveyProgress({ currentIndex }: SurveyProgressProps) {
  const total = surveySteps.length;
  const current = surveySteps[currentIndex];
  const percent = ((currentIndex + 1) / total) * 100;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="label-caps text-asbor-gold-muted">
          Paso {current.index} de {total}
        </p>
        <p className="label-caps text-asbor-text-muted">{current.title}</p>
      </div>
      <div className="bg-asbor-border mt-3 h-[2px] w-full" role="presentation">
        <div
          className="bg-asbor-gold h-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ol className="mt-6 hidden flex-col gap-4 lg:flex">
        {surveySteps.map((step, index) => (
          <li key={step.id} className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs",
                index < currentIndex &&
                  "border-asbor-gold bg-asbor-gold text-asbor-black",
                index === currentIndex && "border-asbor-gold text-asbor-gold",
                index > currentIndex && "border-asbor-border text-asbor-text-muted"
              )}
              aria-hidden="true"
            >
              {index < currentIndex ? "✓" : step.index}
            </span>
            <span
              className={cn(
                "text-sm",
                index === currentIndex ? "text-asbor-ivory" : "text-asbor-text-muted"
              )}
            >
              {step.title}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
