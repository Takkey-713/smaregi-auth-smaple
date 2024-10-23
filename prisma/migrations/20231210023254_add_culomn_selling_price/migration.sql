/*
  Warnings:

  - Added the required column `sellingPrice` to the `wines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wines" ADD COLUMN     "sellingPrice" DOUBLE PRECISION NOT NULL;
