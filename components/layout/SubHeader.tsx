"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type SubHeaderProps = {
  title: string;
};

export default function SubHeader({ title }: SubHeaderProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="flex items-center gap-3 px-4 py-4">
        <button onClick={() => router.back()}>
          <ChevronLeft size={22} />
        </button>

        <h1 className="text-lg font-bold">{title}</h1>
      </div>
    </div>
  );
}
