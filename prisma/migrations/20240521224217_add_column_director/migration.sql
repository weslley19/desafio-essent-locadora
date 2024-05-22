/*
  Warnings:

  - Added the required column `directorId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "directorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
