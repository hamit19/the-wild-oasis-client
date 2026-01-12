import React from "react";
import { getCabins } from "../_lib/data-service";
import { Cabin } from "../cabins/types";
import CabinCard from "./CabinCard";
import { filterType } from "../cabins/page";

export default async function CabinList({ filter }: { filter: filterType }) {
  const cabins: Cabin[] = await getCabins();

  let displayCabins;

  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );

  if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (filter === "all") displayCabins = cabins;

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
        {displayCabins?.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}
