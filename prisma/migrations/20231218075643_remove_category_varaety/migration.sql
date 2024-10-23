/*
  Warnings:

  - You are about to drop the column `categoryId` on the `wines` table. All the data in the column will be lost.
  - You are about to drop the column `varietyId` on the `wines` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `varieties` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `wines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variety` to the `wines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "wines" DROP CONSTRAINT "wines_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "wines" DROP CONSTRAINT "wines_varietyId_fkey";

-- AlterTable
ALTER TABLE "wines" DROP COLUMN "categoryId",
DROP COLUMN "varietyId",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "variety" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "varieties";
