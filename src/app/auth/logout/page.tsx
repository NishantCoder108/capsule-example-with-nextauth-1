"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    router.replace("/");
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
