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
        <picture>
          <img src={user.picture} alt={user.name} />
        </picture>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  ) : (
    <>
      <div>You&apos;re logged out dummy!</div>
    </>
  );
}
