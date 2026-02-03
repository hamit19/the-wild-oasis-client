import { getCabinPrice } from "@/app/_lib/data-service";

async function Price({ cabinId }: { cabinId: number }) {
  const cabinPrice = await getCabinPrice(cabinId);

  return (
    <p className="mt-12 text-3xl flex gap-3 items-baseline">
      {cabinPrice?.discount ? (
        <>
          <span className="text-3xl font-[350]">
            ${cabinPrice.regularPrice - cabinPrice.discount}
          </span>
          <span className="line-through font-semibold text-primary-600">
            ${cabinPrice.regularPrice}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${cabinPrice?.regularPrice}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}

export default Price;
