"use client";

import RegisterForm from "@/features/login/RegisterForm";

export default function RegisterPage() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-linear-to-b
        from-green-50
        to-white
        px-6
      "
    >
      <RegisterForm />
    </div>
  );
}
