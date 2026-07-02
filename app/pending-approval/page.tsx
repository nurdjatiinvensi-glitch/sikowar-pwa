"use client";

import PendingApproval from "@/features/login/PendingApproval";

export default function PendingApprovalPage() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-linear-to-b
        from-green-50
        to-white
        px-6
      "
    >
      <PendingApproval />
    </div>
  );
}
