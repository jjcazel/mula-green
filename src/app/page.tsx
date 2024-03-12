import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <h1>Welcome to My Application</h1>
        <LoginButton />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
