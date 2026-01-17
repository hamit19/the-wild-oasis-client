"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { filterType } from "../_types/filterTypes";
import { ReactNode } from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilter(filter: filterType) {
    const params = new URLSearchParams(searchParams?.toString());

    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className='border flex border-primary-800'>
      <Button
        handleFilter={handleFilter}
        filter='all'
        activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter='small'
        activeFilter={activeFilter}>
        1&mdash;3 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter='medium'
        activeFilter={activeFilter}>
        3&mdash;7 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter='large'
        activeFilter={activeFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  );
}

type ButtonTypes = {
  children: ReactNode;
  handleFilter: Function;
  activeFilter: String;
  filter: filterType;
};

function Button({ filter, activeFilter, handleFilter, children }: ButtonTypes) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`hover:bg-primary-700 px-5 py-2 ${
        activeFilter === filter ? "bg-primary-700 text-primary-100" : ""
      }`}>
      {children}
    </button>
  );
}
