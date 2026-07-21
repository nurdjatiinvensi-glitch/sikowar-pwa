"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

import { notificationData } from "@/features/notification/notificationData";

export default function NotificationButton() {
  const unreadCount = notificationData.filter((item) => !item.isRead).length;

  return (
    <Link
      href="/notification"
      className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        bg-white
        shadow-md
        transition
        hover:scale-105
      "
    >
      <Bell size={20} className="text-gray-700" />

      {unreadCount > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            bg-red-500
            px-1
            text-[10px]
            font-bold
            text-white
          "
        >
          {unreadCount}
        </span>
      )}
    </Link>
  );
}
