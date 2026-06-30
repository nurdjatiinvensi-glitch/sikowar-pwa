"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // TODO:
    // nanti cek token login

    router.replace("/login");
  }, [router]);

  return null;
}
