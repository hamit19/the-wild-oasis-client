import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getSettings } from "@/app/_lib/data-service";

export default async function Page({
  params,
}: {
  params: { bookingId: string };
}) {
  const { bookingId } = params;

  const [booking, settings] = await Promise.all([
    getBooking(bookingId),
    await getSettings(),
  ]);

  const { maxGustesPerBooking } = settings;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <EditReservationForm
        maxGustesPerBooking={maxGustesPerBooking}
        bookingId={bookingId}
        booking={booking}
      />
    </div>
  );
}
