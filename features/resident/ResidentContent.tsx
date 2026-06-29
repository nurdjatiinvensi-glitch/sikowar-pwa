"use client";

import { useRouter } from "next/navigation";

import ResidentCard from "./ResidentCard";
import { residentData } from "./residentData";

export default function ResidentContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {residentData.map((item) => (
        <ResidentCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/resident/${item.id}`)}
        />
      ))}
    </div>
  );
}
