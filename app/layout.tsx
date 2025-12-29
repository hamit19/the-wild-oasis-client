import type { ReactNode } from "react";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='text-gray-100 bg-primary-950 min-h-screen'>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
