import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { HistoryTeaser } from "@/components/home/HistoryTeaser";
import { GalaShowcase } from "@/components/home/GalaShowcase";
import { SealReveal } from "@/components/home/SealReveal";
import { AnatomyTeaser } from "@/components/home/AnatomyTeaser";
import { FounderStory } from "@/components/home/FounderStory";
import { CodeTeaser } from "@/components/home/CodeTeaser";
import { PackagingSection } from "@/components/home/PackagingSection";
import { JourneySection } from "@/components/home/JourneySection";
import { SocialSection } from "@/components/home/SocialSection";
import { TurnSection } from "@/components/home/TurnSection";

export const metadata: Metadata = {
  title: brand.siteTitle,
  description: brand.siteDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <HistoryTeaser />
      <GalaShowcase />
      <SealReveal />
      <AnatomyTeaser />
      <FounderStory />
      <CodeTeaser />
      <PackagingSection />
      <JourneySection />
      <SocialSection />
      <TurnSection />
    </>
  );
}
