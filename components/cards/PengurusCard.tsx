import { MessageCircle } from "lucide-react";

type PengurusCardProps = {
  nama: string;
  jabatan: string;
  phone: string;
};

export default function PengurusCard({
  nama,
  jabatan,
  phone,
}: PengurusCardProps) {
  return (
    <div
      className="
        mb-4
        flex
        items-center
        justify-between
        rounded-2xl
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-green-100
            font-bold
            text-green-700
          "
        >
          {nama
            .split(" ")
            .map((n) => n[0])
            .join("")
            .substring(0, 2)}
        </div>

        <div>
          <h3 className="font-semibold">{nama}</h3>

          <p className="text-sm text-gray-500">{jabatan}</p>
        </div>
      </div>

      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-white
        "
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
