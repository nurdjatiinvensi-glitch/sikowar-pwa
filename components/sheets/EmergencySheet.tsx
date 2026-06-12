"use client";
import { useEffect } from "react";

type EmergencySheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EmergencySheet({
  isOpen,
  onClose,
}: EmergencySheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-90 bg-black/40" onClick={onClose} />

      {/* Sheet */}
      <div
        className="
          fixed bottom-0 left-0 right-0
          z-100
          rounded-t-3xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />

        <h3 className="text-lg font-bold">Hubungi Darurat</h3>

        <p className="mt-1 text-sm text-gray-500">
          Pilih layanan yang ingin dihubungi
        </p>
      </div>
    </>
  );
}
