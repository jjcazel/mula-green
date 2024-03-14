import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import LogoutButton from "@/components/LogoutButton";

export const getServerSideProps = withPageAuthRequired();

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
      <LogoutButton />
    </div>
  );
};

export default ProtectedPage;
