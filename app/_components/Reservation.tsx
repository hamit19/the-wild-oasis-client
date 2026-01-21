import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { Cabin } from "../cabins/types";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function ({ cabin }: { cabin: Cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className='grid grid-cols-2 min-h-[400px] border border-primary-800'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
