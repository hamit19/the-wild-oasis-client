import type { ReactNode } from "react";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "The wild Oasis | %s",
    default: "Welcome to The Wild Oasis",
  },
  description:
    "Luxury cabins nestled in nature, offering a serene escape with modern amenities and breathtaking views. ",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={` ${josefinSans.className} relative text-gray-100 bg-primary-950 min-h-screen flex flex-col`}>
        <Header />
        <div className='flex-1  grid px-8 py-12'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
