"use client";

import { useRouter } from "next/navigation";

import HouseCard from "./HouseCard";
import { houseData } from "./houseData";

export default function HouseContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {houseData.map((item) => (
        <HouseCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/house/${item.id}`)}
        />
      ))}
    </div>
  );
}
