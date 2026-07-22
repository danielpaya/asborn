import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/product/ImageReveal";
import { galaCollection } from "@/data/collections";

const packagingItems = ["package-front", "package-back", "letter", "label"];

export function PackagingSection() {
  const images = packagingItems
    .map((id) => galaCollection.images.find((image) => image.id === id))
    .filter((image): image is NonNullable<typeof image> => Boolean(image));

  return (
    <section className="bg-asbor-ivory px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tone="dark"
          title="La experiencia comienza cuando lo recibes."
          description="Cada unidad de GALA 001 estará acompañada por una presentación pensada para proteger el producto y convertir el primer contacto con ASBOR en un momento especial."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <ImageReveal
              key={image.id}
              src={image.src}
              alt={image.alt}
              label={image.label}
              caption={image.label}
              tone="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
