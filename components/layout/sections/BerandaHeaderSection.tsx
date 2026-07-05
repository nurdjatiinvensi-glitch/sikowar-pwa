"use client";

import ProfileCard from "@/components/cards/ProfileCard";
import Header from "@/components/layout/Header";
import HeaderBackground from "@/components/layout/HeaderBackground";

export default function HomeHeaderSection() {
  return (
    <>
      <div className="sticky top-0 z-40">
        <HeaderBackground variant="home">
          <Header />
        </HeaderBackground>

        <ProfileCard />
      </div>
    </>
  );
}
