import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();

  const username = session?.user?.name?.split(" ").at(0);

  return (
    <span className='text-accent-400 font-semibold text-lg '>
      {" "}
      Welcome, {username}
    </span>
  );
}
