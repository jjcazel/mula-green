export const metadata = {
  title: "My Profile",
  description: "The user's profile page",
};

export default function UserProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
