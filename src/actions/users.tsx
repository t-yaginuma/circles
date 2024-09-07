"use server";
import { PrismaClient } from "@prisma/client";
import { supabase } from "@/lib/supabase";

const prisma = new PrismaClient();

export async function getUser() {
  try {
    // const data = await prisma.user.findMany();
    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: "60d5922d00581b8f0062e3a8",
    //   },
    // });
    // return data;
  } catch {
    return console.error("error");
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
