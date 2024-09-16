"use server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@/libs/supabase/server";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const prisma = new PrismaClient();

export async function getCircles() {
  try {
    const data = await prisma.circle.findMany();
    return data;
  } catch {
    return console.error("error");
  }
}

type File = {
  size: number;
  type: string;
  name: string;
  lastModified: number;
};

export async function postCircles(formData: FormData) {
  try {
    const image = formData.get("image") as File;
    const imageName = path.parse(image.name);

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const visibility = formData.get("visibility") as string;

    const supabase = createClient();
    const bucketName = "images";
    const dir = "circles";
    const fileName = `${uuidv4()}`;
    const extension = imageName.ext;

    await supabase.storage
      .from(bucketName)
      .upload(`${dir}/${fileName}${extension}`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    const {
      data: { publicUrl },
    } = await supabase.storage
      .from(bucketName)
      .getPublicUrl(`${dir}/${fileName}${extension}`);

    const dataCircle = await prisma.circle.create({
      data: {
        name: name,
        image: publicUrl ? publicUrl : undefined,
        description: description,
        visibility: visibility,
      },
    });

    return dataCircle;
  } catch (error) {
    return console.error(error);
  }
}

export async function putCircles() {
  // const data = await prisma.circle.findMany();
  // return data;
}

export async function deleteCircles() {
  // const data = await prisma.circle.findMany();
  // return data;
}
