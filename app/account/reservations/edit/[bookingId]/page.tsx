import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({
  params,
}: {
  params: { bookingId: string };
}) {
  const { bookingId } = params;

  const { numGuests, observations, cabinId } = await getBooking(
    Number(bookingId),
  );
  const cabin = await getCabin(cabinId);

  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <EditReservationForm
        numGuests={numGuests}
        observations={observations}
        maxCapacity={maxCapacity}
        bookingId={bookingId}
      />
    </div>
  );
}
