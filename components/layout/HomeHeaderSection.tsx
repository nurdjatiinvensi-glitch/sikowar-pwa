"use client";

import HeroCard from "@/components/cards/HeroCard";
import Header from "@/components/layout/Header";
import HeaderBackground from "@/components/layout/HeaderBackground";

export default function HomeHeaderSection() {
  return (
    <div className="sticky top-0 z-40">
      <HeaderBackground variant="home">
        <Header />
      </HeaderBackground>

      <div className="relative z-20 px-4 -mt-20">
        <HeroCard />
      </div>
    </div>
  );
}
