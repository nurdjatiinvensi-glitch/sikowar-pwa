"use client";

import Link from "next/link";

type BackButtonProps = {
  href?: string;
};

export default function BackButton({ href = "/" }: BackButtonProps) {
  return (
    <Link href={href} className="text-sm text-white/90">
      ← Kembali
    </Link>
  );
}
