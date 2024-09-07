// import { PrismaClient, Prisma } from "@prisma/client";

// const prisma = new PrismaClient();

// const userData = [
//   {
//     name: "Open 1",
//     image:
//       "https://dwixiyvbqbrsernfiuwj.supabase.co/storage/v1/object/sign/circles/profile_67d042cf327df7867cfd274026b79ffc.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaXJjbGVzL3Byb2ZpbGVfNjdkMDQyY2YzMjdkZjc4NjdjZmQyNzQwMjZiNzlmZmMud2VicCIsImlhdCI6MTcyNTY5NDc5NSwiZXhwIjoxNzI2Mjk5NTk1fQ.ADEWyIORCfpvT3VuxMTc-UzAiy9U7Ez_JCC7HF-VVec&t=2024-09-07T07%3A39%3A54.962Z",
//     description: "どうも平生が記念事もほとんど同じ講演たなまでにしばなら",
//   },
//   {
//     name: "Open 2",
//     image:
//       "https://dwixiyvbqbrsernfiuwj.supabase.co/storage/v1/object/sign/circles/profile_67d042cf327df7867cfd274026b79ffc.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaXJjbGVzL3Byb2ZpbGVfNjdkMDQyY2YzMjdkZjc4NjdjZmQyNzQwMjZiNzlmZmMud2VicCIsImlhdCI6MTcyNTY5NDc5NSwiZXhwIjoxNzI2Mjk5NTk1fQ.ADEWyIORCfpvT3VuxMTc-UzAiy9U7Ez_JCC7HF-VVec&t=2024-09-07T07%3A39%3A54.962Z",
//     description:
//       "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//   },
//   {
//     name: "Open 3 no-imaege",
//     description:
//       "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de",
//   },
//   {
//     name: "Open 4",
//     image:
//       "https://dwixiyvbqbrsernfiuwj.supabase.co/storage/v1/object/sign/circles/profile_67d042cf327df7867cfd274026b79ffc.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjaXJjbGVzL3Byb2ZpbGVfNjdkMDQyY2YzMjdkZjc4NjdjZmQyNzQwMjZiNzlmZmMud2VicCIsImlhdCI6MTcyNTY5NDc5NSwiZXhwIjoxNzI2Mjk5NTk1fQ.ADEWyIORCfpvT3VuxMTc-UzAiy9U7Ez_JCC7HF-VVec&t=2024-09-07T07%3A39%3A54.962Z",
//     description:
//       "どうも平生が記念事もほとんど同じ講演たなまでにしばならですがも通用ありありなかろて、しっかりにもすれありなくますない。がたをなるあるものはけっして今でひとまずですたた。",
//   },
// ] satisfies Prisma.CircleCreateInput[];

// async function main() {
//   console.log(`Start seeding ...`);
//   for (const u of userData) {
//     const user = await prisma.circle.create({
//       data: u,
//     });
//     console.log(`Created user with id: ${user.id}`);
//   }
//   console.log(`Seeding finished.`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
