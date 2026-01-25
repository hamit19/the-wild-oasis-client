"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { DateRange, OnSelectHandler } from "react-day-picker";

interface ContextInterface {
  range: DateRange;
  setRange?: OnSelectHandler<DateRange>;
  resetRange?: () => void;
}

const initialState = {
  from: undefined,
  to: undefined,
};

const ReservationContext = createContext<ContextInterface>({
  range: initialState,
});

export default function ReservationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [range, setRange] = useState<DateRange>(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("You use useReservation context outside of the Provider!");

  return context;
}
