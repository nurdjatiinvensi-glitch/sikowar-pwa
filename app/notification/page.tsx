"use client";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";
import NotificationContent from "@/features/notification/NotificationContent";

export default function NotificationPage() {
  return (
    <AppLayout activeMenu="profile">
      <div className="flex h-screen flex-col bg-white">
        {/* HEADER */}
        <HeaderBackground variant="default">
          <BackButton />

          <div className="shrink-0 px-6 pt-6 pb-6 text-white">
            <h1 className="text-2xl font-bold">Notification</h1>

            <p className="mt-1 text-white/90">Semua aktivitas warga</p>
          </div>
        </HeaderBackground>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <NotificationContent />
        </div>
      </div>
    </AppLayout>
  );
}
