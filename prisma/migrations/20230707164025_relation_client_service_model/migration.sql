/*
  Warnings:

  - Added the required column `patientId` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "services" ADD COLUMN     "patientId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
