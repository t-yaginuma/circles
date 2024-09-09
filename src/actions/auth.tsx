"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@/libs/supabase/server";

const prisma = new PrismaClient();

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  } else {
    return true;
  }

  // revalidatePath("/", "layout");
  // redirect("/");
}

export async function signUp(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const dataProfile = await prisma.profile.create({
    data: {
      id: "",
      email: "",
      name: "",
      image: "",
      city: "",
      country: "",
    },
  });
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
}

// export async function getUser() {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   ("user------------");
//   console.log(user);
//   return user;
// }
