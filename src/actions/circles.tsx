"use server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@/libs/supabase/server";

const prisma = new PrismaClient();

export async function getCircles() {
  try {
    const data = await prisma.circle.findMany();
    return data;
  } catch {
    return console.error("error");
  }
}

export async function postCircles(formData: FormData) {
  const supabase = createClient();

  const image = formData.get("image") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const visibility = formData.get("visibility") as string;
  console.log(image);
  console.log(name);
  console.log(description);
  console.log(visibility);
  try {
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("circles")
      .upload("hoge.jpg", image, {
        cacheControl: "3600",
        upsert: false,
      });

    console.log("-------");
    console.log(data);
    console.log(error);

    const dataCircle = await prisma.circle.create({
      data: {
        name: name,
        image: "/test.jpg",
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
