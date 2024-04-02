// currently not used anywhere

// import React from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { LoginButton } from "./LoginButton";
// import { LogoutButton } from "./LogoutButton";

// const UserProfile = () => {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   if (!user) return <LoginButton />;

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <LogoutButton />
//     </div>
//   );
// };

// export default UserProfile;
