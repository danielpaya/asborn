import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialVideoCard } from "@/components/media/SocialVideoCard";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { socialVideos } from "@/config/media";

export function SocialSection() {
  return (
    <section className="bg-asbor-black px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="COMUNIDAD"
          title="ASBOR en movimiento."
          description="Conoce el proceso detrás de cada detalle."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {socialVideos.map((item) => (
            <SocialVideoCard key={item.id} item={item} />
          ))}
        </div>

        <div className="border-asbor-border mt-14 flex flex-col items-center gap-6 border-t pt-10 sm:flex-row sm:justify-between">
          <SocialIcons className="gap-8" />
          <WhatsAppButton variant="inline" className="static" />
        </div>
      </div>
    </section>
  );
}
