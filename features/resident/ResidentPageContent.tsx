"use client";

import { useSearchParams } from "next/navigation";

import ResidentCard from "./ResidentCard";
import { residentData } from "./residentData";

export default function ResidentPageContent() {
  const searchParams = useSearchParams();

  const houseId = searchParams.get("houseId");

  const residents = houseId
    ? residentData.filter((item) => item.houseId === houseId)
    : residentData;

  return (
    <div className="space-y-4">
      {residents.map((item) => (
        <ResidentCard key={item.id} item={item} />
      ))}
    </div>
  );
}
