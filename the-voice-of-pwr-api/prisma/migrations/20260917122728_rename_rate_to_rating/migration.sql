/*
  Warnings:

  - You are about to drop the column `rate` on the `course_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `dorm_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `lecturer_opinions` table. All the data in the column will be lost.
  - Added the required column `rating` to the `course_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `dorm_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `lecturer_opinions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course_opinions" DROP COLUMN "rate",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "dorm_opinions" DROP COLUMN "rate",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "lecturer_opinions" DROP COLUMN "rate",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
