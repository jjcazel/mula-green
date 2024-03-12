import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
    </div>
  );
};

export default withPageAuthRequired(ProtectedPage as any);
