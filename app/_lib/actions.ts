"use server";

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

  if (nationalID && nationality && countryFlag) {
    const updateGuest = { nationalID, nationality, countryFlag };

    if (!session) throw new Error("Please login first!");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
      throw new Error("invalid nationalID!");

    const { data, error } = await supabase
      .from("guests")
      .update(updateGuest)
      .eq("id", session?.user?.id)
      .select()
      .single();

    if (error) {
      console.error(error);
      throw new Error("Guest could not be updated");
    }

    return data;
  } else {
    throw new Error("Please fill out all of the fields!");
  }
}
