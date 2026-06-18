import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function SettingCard({ icon, title, description }: Props) {
  return (
    <button
      className="
        flex w-full items-center justify-between
        rounded-2xl bg-white p-4 shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-green-50
          "
        >
          {icon}
        </div>

        <div className="text-left">
          <p className="font-medium">{title}</p>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <ChevronRight size={20} />
    </button>
  );
}
