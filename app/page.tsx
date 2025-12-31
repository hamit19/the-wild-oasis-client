import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        className='object-cover object-top'
        alt='Mountains and forests with two cabins'
        placeholder='blur'
      />
      <div className='text-center relative z-10'>
        <h1 className='text-8xl text-center text-primary-50 font-normal mb-12'>
          Welcome to Paradise.
        </h1>

        <Link
          className='bg-accent-500 text-primary-800 text-xl font-semibold px-8 py-6 hover:bg-accent-600 transition-all rounded-sm'
          href={"/cabins"}>
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
