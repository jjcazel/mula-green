import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { getSession } from "@auth0/nextjs-auth0";

interface User {
  name: string;
  email: string;
  picture: string;
}

export default async function HomePage() {
  const session = await getSession();
  const user = session?.user as User;
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <h1>Welcome to My Application</h1>
      </div>
      {!user ? (
        <div>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
