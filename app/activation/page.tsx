"use client";

import AppLayout from "@/components/layout/AppLayout";
import HeaderBackground from "@/components/layout/HeaderBackground";
import PageContent from "@/components/ui/PageContent";

import ActivationForm from "@/features/activation/ActivationForm";

export default function ActivationPage() {
  return (
    <AppLayout
      activeMenu="beranda"
      header={
        <HeaderBackground variant="page" title="Aktivasi Akun" showBackButton />
      }
    >
      <PageContent className="px-4 pt-4 pb-28">
        <ActivationForm />
      </PageContent>
    </AppLayout>
  );
}
