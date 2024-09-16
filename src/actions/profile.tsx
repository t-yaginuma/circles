"use server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@/libs/supabase/server";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const prisma = new PrismaClient();

export async function getProfile(userId: string) {
  try {
    const data = await prisma.profile.findUnique({
      where: {
        id: userId,
      },
    });
    console.log("hit-------");
    console.log(data);
    return data;
  } catch {
    return console.error("error");
  }
}

export async function updateProfile(userId: string, formData: FormData) {
  const supabase = createClient();
  try {
    const _formData = {
      image: formData.get("image") as File,
      artistName: formData.get("artistName") as string,
      description: formData.get("description") as string,
      city: formData.get("city") as string,
      countryCode: formData.get("countryCode") as string,
    };

    const bucketName = "images";
    const dir = "profiles";
    const fileName = `${uuidv4()}`;
    const imageName = path.parse(_formData.image.name);
    const extension = imageName.ext;

    await supabase.storage
      .from(bucketName)
      .upload(`${dir}/${fileName}${extension}`, _formData.image, {
        cacheControl: "3600",
        upsert: false,
      });

    const {
      data: { publicUrl },
    } = await supabase.storage
      .from(bucketName)
      .getPublicUrl(`${dir}/${fileName}${extension}`);

    const data = await prisma.profile.update({
      where: {
        id: userId,
      },
      data: {
        image: publicUrl ? publicUrl : undefined,
        name: _formData.artistName ? _formData.artistName : undefined,
        description: _formData.description ? _formData.description : undefined,
        city: _formData.city ? _formData.city : undefined,
        countryCode: _formData.countryCode ? _formData.countryCode : undefined,
      },
    });

    console.log("hit-------");
    console.log(data);
    return " _formData";
  } catch (error) {
    console.log(error);
    return console.error("error");
  }
}
