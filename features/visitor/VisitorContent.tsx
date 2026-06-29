"use client";

import { useRouter } from "next/navigation";

import VisitorCard from "./VisitorCard";
import { visitorData } from "./visitorData";

export default function VisitorContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {visitorData.map((item) => (
        <VisitorCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/visitor/${item.id}`)}
        />
      ))}
    </div>
  );
}
