"use client";

import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";
import { Booking } from "../_types/types";

export default function ReservationList({ bookings }: { bookings: Booking[] }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings: Booking[], bookingId: string) => {
      return curBookings.filter((booking) => String(booking.id) !== bookingId);
    },
  );

  async function onDelete(bookingId: string) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return optimisticBookings?.map((booking: Booking) => (
    <ReservationCard onDelete={onDelete} booking={booking} key={booking.id} />
  ));
}
