"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { filterType } from "../_types/filterTypes";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: filterType) {
    const params = new URLSearchParams(searchParams?.toString());

    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className='border flex border-primary-800'>
      <button
        onClick={() => handleFilter("all")}
        className='hover:bg-primary-700 px-5 py-2 '>
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className='hover:bg-primary-700 px-5 py-2 '>
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className='hover:bg-primary-700 px-5 py-2 '>
        3&mdash;7
      </button>
      <button
        onClick={() => handleFilter("large")}
        className='hover:bg-primary-700 px-5 py-2 '>
        8&mdash;12
      </button>
    </div>
  );
}
