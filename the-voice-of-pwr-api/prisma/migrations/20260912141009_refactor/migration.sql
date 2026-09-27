-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "coordinator_id" INTEGER;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_coordinator_id_fkey" FOREIGN KEY ("coordinator_id") REFERENCES "lecturers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
