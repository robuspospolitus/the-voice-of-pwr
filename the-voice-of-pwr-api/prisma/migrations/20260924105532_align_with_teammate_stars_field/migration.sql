/*
  Warnings:

  - You are about to drop the column `rating` on the `course_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `dorm_opinions` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `lecturer_opinions` table. All the data in the column will be lost.
  - Added the required column `stars` to the `course_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `dorm_opinions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `lecturer_opinions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course_opinions" DROP COLUMN "rating",
ADD COLUMN     "stars" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "dorm_opinions" DROP COLUMN "rating",
ADD COLUMN     "stars" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "lecturer_opinions" DROP COLUMN "rating",
ADD COLUMN     "stars" INTEGER NOT NULL;
