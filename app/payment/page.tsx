"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Tagihan"
          subtitle="Pembayaran IPL & Kas Warga"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        <div className="-mt-2 mb-6">
          <PaymentSummary total={totalTagihan} />
        </div>

        <PaymentFilter />

        <div className="mt-6">
          <ActiveBillList />
          <UpcomingPayment />
        </div>
      </PageContent>
    </AppLayout>
  );
}
