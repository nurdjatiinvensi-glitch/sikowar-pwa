"use client";

import { useRouter } from "next/navigation";

import PaymentCard from "./PaymentCard";
import { paymentData } from "./paymentData";

export default function PaymentContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {paymentData.map((item) => (
        <PaymentCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/payment/${item.id}`)}
        />
      ))}
    </div>
  );
}
