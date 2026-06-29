"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import ActiveBillList from "@/features/payment/ActiveBillList";
import PaymentFilter from "@/features/payment/components/PaymentFilter";
import PaymentSummary from "@/features/payment/components/PaymentSummary";

import UpcomingPayment from "@/features/payment/components/UpcomingPayment";
import { paymentData } from "@/features/payment/paymentData";

export default function PaymentPage() {
  const totalTagihan = paymentData
    .filter((item) => item.status === "unpaid")
    .reduce((total, item) => total + item.amount, 0);

  return (
    <AppLayout activeMenu="beranda">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-8 text-white">
            <h1 className="text-3xl font-bold">Tagihan</h1>

            <p className="mt-1 text-white/90">Pembayaran IPL & Kas Warga</p>

            <div className="mt-6">
              <PaymentSummary total={totalTagihan} />
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <PaymentFilter />

          <div className="mt-6">
            <ActiveBillList />
            <UpcomingPayment />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
