"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import BackButton from "@/components/layout/BackButton";
import HeaderBackground from "@/components/layout/HeaderBackground";

import NotificationContent from "@/features/notification/NotificationContent";
import { notificationData } from "@/features/notification/notificationData";
import { NotificationItem } from "@/features/notification/types";

export default function NotificationPage() {
  const router = useRouter();

  const [notifications, setNotifications] = useState(notificationData);

  const unreadCount = notifications.filter((item) => !item.isRead).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        isRead: true,
      })),
    );
  };

  const handleNotificationClick = (item: NotificationItem) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.notificationId === item.notificationId
          ? {
              ...n,
              isRead: true,
            }
          : n,
      ),
    );

    switch (item.targetType) {
      case "announcement":
        router.push(`/announcements/${item.targetId}`);
        break;

      case "event":
        router.push(`/event/${item.targetId}`);
        break;

      case "payment":
        router.push("/coming-soon");
        break;

      case "resident":
        router.push("/profile");
        break;
    }
  };

  return (
    <AppLayout activeMenu="profile">
      <div className="flex h-screen flex-col bg-white">
        <HeaderBackground variant="default">
          <BackButton />

          <div className="px-6 pt-6 pb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Notification</h1>

                <p className="mt-1 text-white/90">Semua aktivitas warga</p>
              </div>

              <button
                onClick={markAllAsRead}
                className="
                  rounded-xl
                  bg-white/20
                  px-4
                  py-2
                  text-sm
                  backdrop-blur
                "
              >
                Tandai Semua
              </button>
            </div>

            {unreadCount > 0 && (
              <div className="mt-4 inline-flex rounded-full bg-red-500 px-3 py-1 text-sm font-semibold">
                {unreadCount} Belum Dibaca
              </div>
            )}
          </div>
        </HeaderBackground>

        <div className="flex-1 overflow-y-auto px-4 py-6 pb-28">
          <NotificationContent
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
          />
        </div>
      </div>
    </AppLayout>
  );
}
