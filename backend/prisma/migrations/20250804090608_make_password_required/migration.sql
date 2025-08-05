/*
  Warnings:

  - Made the column `password` on table `teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `teacher` MODIFY `password` VARCHAR(191) NOT NULL;
