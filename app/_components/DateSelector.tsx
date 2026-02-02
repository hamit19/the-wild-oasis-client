"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Cabin } from "../cabins/types";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range: DateRange, datesArr: Date[]) {
  const start = range.from;
  const end = range.to;
  if (!start || !end) return false;

  return datesArr.some((date) => isWithinInterval(date, { start, end }));
}

type DateSelectorPropsTypes = {
  settings: {
    minBookingLength: number;
    maxBookingLength: number;
  };
  bookedDates: Date[];
  cabin: Cabin;
};

function DateSelector({
  settings,
  bookedDates,
  cabin,
}: DateSelectorPropsTypes) {
  const { range, setRange, resetRange } = useReservation();

  const { regularPrice, discount } = cabin;

  const displayRange = isAlreadyBooked(range, bookedDates)
    ? { to: undefined, from: undefined }
    : range;

  const numNights = differenceInDays(
    displayRange?.to || "",
    displayRange?.from || "",
  );

  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        classNames={{
          root: `${defaultClassNames.root} pt-12 place-self-center text-sm`,
          months: `flex flex-row gap-8`,
          day: "m-0 p-0",
          dropdown_root: `${defaultClassNames.dropdown_root} text-base `,
          months_dropdown: "bg-primary-900",
          years_dropdown: "bg-primary-900",
          nav: "hidden",
        }}
        mode="range"
        required
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        endMonth={new Date(Date.UTC(new Date().getFullYear() + 5))}
        captionLayout="dropdown"
        numberOfMonths={2}
        onSelect={setRange}
        selected={displayRange}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange?.()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
