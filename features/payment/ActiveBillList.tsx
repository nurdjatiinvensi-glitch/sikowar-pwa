"use client";

import { useRouter } from "next/navigation";

import PaymentCard from "./BillCard";
import { paymentData } from "./paymentData";

export default function PaymentContent() {
  const router = useRouter();

  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Tagihan Aktif</h2>

      <div className="space-y-4">
        {paymentData.map((item) => (
          <PaymentCard
            key={item.id}
            item={item}
            onClick={() => router.push(`/payment/${item.id}`)}
          />
        ))}
      </div>
    </>
  );
}
