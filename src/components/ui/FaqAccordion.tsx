import type { Faq } from "@/data/faqs";

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-asbor-border border-asbor-border divide-y border-y">
      {items.map((item) => (
        <details key={item.id} className="group py-5">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="text-asbor-ivory text-base">{item.question}</span>
            <span
              aria-hidden="true"
              className="text-asbor-gold shrink-0 transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </summary>
          <p className="text-asbor-text-muted mt-3 max-w-2xl text-sm leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
