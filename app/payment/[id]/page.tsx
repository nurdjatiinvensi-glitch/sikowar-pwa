import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import { paymentData } from "@/features/payment/paymentData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PaymentDetailPage({ params }: Props) {
  const { id } = await params;

  const payment = paymentData.find((item) => item.id === id);

  if (!payment) {
    return <div className="p-6">Data tidak ditemukan</div>;
  }

  return (
    <AppLayout activeMenu="beranda">
      <HeaderBackground variant="default">
        <div className="px-6 pt-8 pb-8 text-white">
          <BackButton />

          <h1 className="mt-4 text-3xl font-bold">{payment.title}</h1>

          <p className="mt-2 text-white/90">Detail Pembayaran</p>
        </div>
      </HeaderBackground>

      <div className="px-6 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{payment.description}</h2>

          <p className="mt-6 text-4xl font-bold text-green-700">
            Rp {payment.amount.toLocaleString("id-ID")}
          </p>

          {payment.dueDate && (
            <p className="mt-4 text-sm text-orange-600">
              Jatuh Tempo : {payment.dueDate}
            </p>
          )}

          <button
            className="
              mt-8
              w-full
              rounded-2xl
              bg-green-700
              py-4
              font-semibold
              text-white
            "
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
