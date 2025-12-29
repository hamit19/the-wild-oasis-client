import type { ReactNode } from "react";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";

export const metadata = {
  title: {
    template: "The wild Oasis | %s",
    default: "Welcome to The Wild Oasis",
  },
  description:
    "Luxury cabins nestled in nature, offering a serene escape with modern amenities and breathtaking views. ",
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
