"use client";

import LoginForm from "@/features/login/LoginForm";

export default function LoginPage() {
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
      <LoginForm />
    </div>
  );
}
