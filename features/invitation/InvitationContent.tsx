"use client";

import { useRouter } from "next/navigation";

import InvitationCard from "./InvitationCard";
import { invitationData } from "./invitationData";

export default function InvitationContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {invitationData.map((item) => (
        <InvitationCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/invitation/${item.id}`)}
        />
      ))}
    </div>
  );
}
