import { Grid2x2 } from "lucide-react";
import Link from "next/link";

export default function MoreButton() {
  return (
    <Link href="/menu" className="flex flex-col items-center">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gray-100
        "
      >
        <Grid2x2 size={24} className="text-gray-700" />
      </div>

      <p className="mt-2 text-sm font-medium">Lainnya</p>
    </Link>
  );
}
