/*
  Warnings:

  - You are about to drop the column `stars` on the `course_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `dorm_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `lecturer_opinions` table. All the data in the column will be lost.
  - Added the required column `rate` to the `course_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `dorm_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `lecturer_opinions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "course_opinions" DROP COLUMN "stars",
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "dorm_opinions" DROP COLUMN "stars",
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "lecturer_opinions" DROP COLUMN "stars",
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
