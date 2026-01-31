"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

export async function signInAction() {
  return await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  return await signOut({ redirectTo: "/" });
}

export default async function updateGuest(formData: FormData) {
  const session = await auth();

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData?.get("nationality")?.split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("invalid nationalID!");

  if (!session) throw new Error("Please login first!");

  if (nationalID && nationality && countryFlag) {
    const updateGuest = { nationalID, nationality, countryFlag };

    const { data, error } = await supabase
      .from("guests")
      .update(updateGuest)
      .eq("id", session?.user?.id);

    revalidatePath("/account/profile");

    if (error) {
      console.error(error);
      throw new Error("Guest could not be updated");
    }
  } else {
    throw new Error("Please fill out all of the fields!");
  }
}

export async function deleteReservation(bookingId: string) {
  const session = await auth();
  if (!session) throw new Error("Please login first!");

  const guestBookings = await getBookings(session.user?.id);

  const guestsBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestsBookingIds.includes(bookingId))
    throw new Error("'403' Access denied!");

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  revalidatePath("/account/reservations");

  if (error) throw new Error("Something went wrong deleting booking!");
}

export async function updateReservation(bookingId: string, formData: FormData) {
  const session = await auth();

  if (!session) throw new Error("Please login first!");

  const guestsBookings = await getBookings(session.user?.id);

  const guestsBookingIds = guestsBookings.map((booking) => booking.id);

  if (!guestsBookingIds.includes(Number(bookingId)))
    throw new Error("'403' Access denied!");

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");

  const updatedFields = { numGuests, observations };

  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Something went wrong updating booking!");

  return data;
}
