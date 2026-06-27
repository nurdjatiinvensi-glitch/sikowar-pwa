import { Bell, CalendarDays, UserRound, Wallet } from "lucide-react";

type NotificationCardProps = {
  type: "announcement" | "event" | "payment" | "resident";

  title: string;
  message: string;
  time: string;
  unread?: boolean;

  onClick?: () => void;
};

function getIcon(type: NotificationCardProps["type"]) {
  switch (type) {
    case "announcement":
      return <Bell size={20} className="text-blue-600" />;

    case "event":
      return <CalendarDays size={20} className="text-green-600" />;

    case "payment":
      return <Wallet size={20} className="text-orange-500" />;

    case "resident":
      return <UserRound size={20} className="text-purple-600" />;

    default:
      return null;
  }
}

export default function NotificationCard({
  type,
  title,
  message,
  time,
  unread = false,
  onClick,
}: NotificationCardProps) {
  return (
    <div
      onClick={onClick}
      className="
    flex
    cursor-pointer
    items-start
    gap-3
    rounded-2xl
    border
    border-gray-100
    bg-white
    p-4
    shadow-sm
    transition-all
    duration-200
    hover:shadow-md
    hover:border-green-200
    active:scale-[0.98]
  "
    >
      {/* Badge */}
      <div className="mt-1 flex flex-col items-center gap-2">
        {getIcon(type)}

        {unread && <div className="h-2.5 w-2.5 rounded-full bg-red-500" />}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">{message}</p>

        <p className="mt-2 text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
}
