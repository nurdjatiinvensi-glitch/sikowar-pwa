type NotificationCardProps = {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
};

export default function NotificationCard({
  title,
  message,
  time,
  unread = false,
}: NotificationCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      {/* Badge */}
      <div className="mt-2">
        {unread ? (
          <div className="h-3 w-3 rounded-full bg-red-500" />
        ) : (
          <div className="h-3 w-3 rounded-full bg-gray-300" />
        )}
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
