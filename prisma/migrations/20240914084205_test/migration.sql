/*
  Warnings:

  - The `id` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `userId` on the `ProfileLink` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `ProfileSchedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."ProfileLink" DROP CONSTRAINT "ProfileLink_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProfileSchedule" DROP CONSTRAINT "ProfileSchedule_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."ProfileLink" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."ProfileSchedule" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "public"."Profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileLink_userId_key" ON "public"."ProfileLink"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSchedule_userId_key" ON "public"."ProfileSchedule"("userId");

-- AddForeignKey
ALTER TABLE "public"."ProfileLink" ADD CONSTRAINT "ProfileLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProfileSchedule" ADD CONSTRAINT "ProfileSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
