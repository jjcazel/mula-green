import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { getSession } from "@auth0/nextjs-auth0";

interface User {
  name: string;
  email: string;
  picture: string;
}

export default async function ProfileServer() {
  const session = await getSession();
  const user = session?.user as User; // Cast the user object to your User interface

  return user ? (
    <>
      <div>
        <img src={user.picture} alt={user.name} />
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
  ); // Consider rendering something else or handling the null case
}
