"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PaymentContent from "@/features/payment/PaymentContent";
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
            <h1 className="text-3xl font-bold">Payment</h1>

            <p className="mt-1 text-white/90">Pembayaran dan Keuangan Warga</p>

            <div className="mt-6 rounded-3xl bg-white/20 p-5 backdrop-blur">
              <p className="text-sm text-white/80">Total Tagihan</p>

              <h2 className="mt-2 text-3xl font-bold">
                Rp {totalTagihan.toLocaleString("id-ID")}
              </h2>

              <button
                className="
                  mt-5
                  rounded-2xl
                  bg-white
                  px-5
                  py-3
                  font-semibold
                  text-green-700
                "
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <PaymentContent />
        </div>
      </div>
    </AppLayout>
  );
}
