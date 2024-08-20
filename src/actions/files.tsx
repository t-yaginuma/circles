"use server";

import { supabase } from "@/lib/supabase";

export async function uploadFile(formData: FormData) {
  const avatarFile = event.target.files[0];
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload("public/hoge.mp3", avatarFile, {
      cacheControl: "3600",
      upsert: false,
    });
}
