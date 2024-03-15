"use client";

import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <>
      <div>
        <picture>
          <img
            src={user?.picture || "/default-avatar.png"}
            alt={user?.name || "Username"}
          />
        </picture>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <LogoutButton />
    </>
  ) : (
    <>
      <div>You&apos;re logged out dummy!</div>
      <LoginButton />
    </>
  );
}
