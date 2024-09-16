"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@/libs/supabase/server";
import { getProfile } from "@/actions/profile";

const prisma = new PrismaClient();

export async function login(formData: FormData) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const _formData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(_formData);
  const userId = data.user?.id;

  const profile = userId && (await getProfile(userId));
  console.log("----------");
  console.log(profile);

  return profile;

  if (error) {
    redirect("/error");
  } else {
  }
}

export async function signUp(formData: FormData) {
  const supabase = createClient();
  console.log("----");
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const _formData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp(_formData);

  if (error) {
    console.log("--------");
    console.log(error.status);
  }

  const dataProfile = data.user
    ? await prisma.profile.create({
        data: {
          id: data.user.id,
          email: formData.get("email") as string,
        },
      })
    : undefined;

  return {
    dataProfile: dataProfile && dataProfile,
    error: {
      status: error && error.status,
      code: error && error.code,
    },
  };
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
