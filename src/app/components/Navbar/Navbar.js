import Link from "next/link";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
import { getSession } from "@auth0/nextjs-auth0";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;
  return (
    <nav className="flex justify-around flex-wrap p-3">
      <Link href="/">Home</Link>
      <Link href="/profile-server">User Profile (Server)</Link>
      <Link href="/profile-client">User Profile (Client)</Link>
      {console.log("user", user)}
      {!user ? (
        <div>
          <LoginButton />
        </div>
      ) : (
        <div className="flex justify-around">
          <div className="pr-5 text-sky-400">{user.nickname}</div>
          <LogoutButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
