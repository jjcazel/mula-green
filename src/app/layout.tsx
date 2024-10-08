import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "./components/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MulaGreen",
  description: "A personalized finance dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <UserProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
