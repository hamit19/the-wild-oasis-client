import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/cabins'
            className='hover:text-accent-400 transition-colors'>
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'>
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors flex items-center gap-3 '>
              <div className='relative w-8 h-8 rounded-full overflow-hidden '>
                <Image
                  width={100}
                  height={100}
                  src={session.user.image}
                  alt={session.user.name || "users avatar"}
                  referrerPolicy='no-referrer'
                />
              </div>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors'>
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
