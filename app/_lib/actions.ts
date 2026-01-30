"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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
