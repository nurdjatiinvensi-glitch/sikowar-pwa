"use client";

import { useRouter } from "next/navigation";

import ComplaintCard from "./ComplaintCard";
import { complaintData } from "./complaintData";

export default function ComplaintContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {complaintData.map((item) => (
        <ComplaintCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/complaint/${item.id}`)}
        />
      ))}
    </div>
  );
}
