import React from "react";
import { getCabins } from "../_lib/data-service";
import { Cabin } from "../cabins/types";
import CabinCard from "./CabinCard";

export default async function CabinList() {
  const cabins: Cabin[] = await getCabins();

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}
