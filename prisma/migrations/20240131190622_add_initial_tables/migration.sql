/*
  Warnings:

  - Added the required column `status` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "imageUrl" TEXT NOT NULL;
