import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

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
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground
          variant="page"
          title="Detail Tagihan"
          showBackButton
        />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        {/* Hero Card */}
        <div className="-mt-2 mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm">
          <span className="text-sm font-medium text-green-700">Tagihan</span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {payment.title}
          </h1>

          <p className="mt-2 text-gray-500">{payment.description}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-4xl font-bold text-green-700">
            Rp {payment.amount.toLocaleString("id-ID")}
          </p>

          {payment.dueDate && (
            <p className="mt-4 text-sm text-orange-600">
              Jatuh Tempo : {payment.dueDate}
            </p>
          )}

          <div className="mt-6 rounded-2xl bg-green-50 p-4">
            <p className="text-sm text-gray-500">Status</p>

            <p className="mt-1 font-semibold text-green-700">
              {payment.status === "paid" ? "Lunas" : "Belum Lunas"}
            </p>
          </div>

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
      </PageContent>
    </AppLayout>
  );
}
