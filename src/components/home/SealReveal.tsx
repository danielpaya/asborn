"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/product/ImageReveal";
import { galaCollection } from "@/data/collections";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const findImage = (id: string) => galaCollection.images.find((image) => image.id === id)!;

export function SealReveal() {
  const emblemRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !emblemRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        emblemRef.current,
        { scale: 0.92, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: emblemRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
    }, emblemRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section className="bg-asbor-black px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="DETALLE ASBOR" title="El sello de ASBOR" align="left" />

        <div className="mt-16 grid gap-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div ref={emblemRef}>
              <ImageReveal
                src={findImage("embroidery").src}
                alt={findImage("embroidery").alt}
                label={findImage("embroidery").label}
              />
            </div>
            <div>
              <p className="label-caps text-asbor-gold-muted">El Laurel de Ascenso</p>
              <h3 className="font-display text-asbor-ivory mt-3 text-3xl sm:text-4xl">
                Una composición que representa el crecimiento construido con disciplina.
              </h3>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:order-2">
              <ImageReveal
                src={findImage("claw").src}
                alt={findImage("claw").alt}
                label={findImage("claw").label}
              />
            </div>
            <div className="lg:order-1">
              <p className="label-caps text-asbor-gold-muted">El emblema</p>
              <h3 className="font-display text-asbor-ivory mt-3 text-3xl sm:text-4xl">
                Un sistema gráfico creado para representar equilibrio, dirección y
                continuidad.
              </h3>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <ImageReveal
                src={findImage("package-front").src}
                alt={findImage("package-front").alt}
                label={findImage("package-front").label}
              />
            </div>
            <div>
              <p className="label-caps text-asbor-gold-muted">La presentación</p>
              <h3 className="font-display text-asbor-ivory mt-3 text-3xl sm:text-4xl">
                La experiencia comienza antes de utilizar el jean.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
