import NotificationCard from "./NotificationCard";

export default function NotificationContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-700">Hari Ini</h2>

        <div className="space-y-3">
          <NotificationCard
            unread
            title="Pengumuman Baru"
            message="Kerja bakti Minggu pukul 07.00."
            time="2 menit lalu"
          />

          <NotificationCard
            unread
            title="Event Baru"
            message="Lomba 17 Agustus telah dibuat."
            time="20 menit lalu"
          />
        </div>
      </section>
      <div className="h-screen" />
    </div>
  );
}
