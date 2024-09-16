/*
  Warnings:

  - You are about to drop the column `country` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "country",
ADD COLUMN     "countryCode" TEXT;
