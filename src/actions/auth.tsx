"use server";

import { supabase } from "@/lib/supabase";

export async function signUp(formData: FormData) {
  console.log("HITTTT");
  const { data, error } = await supabase.auth.signUp({
    email: "toru45s@gmail.com",
    password: "adminadmin",
  });

  console.log(data);
  console.log(error);
}

export async function signIn(formData: FormData) {
  console.log("()=> HITTTT");
  console.log(formData.get("email"));
  console.log(formData.get("password"));

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log(data);
  console.log(error);
  getUser();
}

export async function signOut() {
  console.log("HITTTT");
  const { error } = await supabase.auth.signOut();
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user");
  console.log(user);
}
