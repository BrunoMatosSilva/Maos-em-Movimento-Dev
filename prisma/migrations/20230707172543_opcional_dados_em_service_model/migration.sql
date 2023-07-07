-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_paymantId_fkey";

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "paymantId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_paymantId_fkey" FOREIGN KEY ("paymantId") REFERENCES "paymant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
