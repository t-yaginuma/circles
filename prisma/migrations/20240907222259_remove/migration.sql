/*
  Warnings:

  - Made the column `visibility` on table `Circle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Circle" ALTER COLUMN "visibility" SET NOT NULL;
