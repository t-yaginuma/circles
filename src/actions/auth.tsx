"use server";

import { supabase } from "@/lib/supabase";

export async function signUp(formData: FormData) {
  console.log("------------");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(email);
  console.log(password);
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  console.log(data);
  console.log(error?.code);
  if (error) {
    return error?.code;
  } else {
    return "success";
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return {
      status: error.status,
      code: error.code,
    };
  } else {
    return "success";
  }
}

export async function signOut() {
  console.log("HITTTT");
  const { error } = await supabase.auth.signOut();
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  ("user------------");
  console.log(user);
  return user;
}
