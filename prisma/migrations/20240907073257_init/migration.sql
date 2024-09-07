/*
  Warnings:

  - You are about to drop the column `city` on the `Circle` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Circle` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Circle` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Circle_email_key";

-- AlterTable
ALTER TABLE "public"."Circle" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "email",
ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);
