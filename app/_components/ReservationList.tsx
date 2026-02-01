"use client";

import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";
import { Booking } from "../_types/filterTypes";

export default function ReservationList({ bookings }: { bookings: Booking[] }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings: Booking[], bookingId: number) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function onDelete(bookingId: number) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId.toString());
  }

  return optimisticBookings?.map((booking: Booking) => (
    <ReservationCard onDelete={onDelete} booking={booking} key={booking.id} />
  ));
}
