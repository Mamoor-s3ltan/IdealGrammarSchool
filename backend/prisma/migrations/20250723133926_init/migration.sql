/*
  Warnings:

  - Added the required column `adminId` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `salary` ADD COLUMN `adminId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `adminId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `teacher` ADD COLUMN `adminId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salary` ADD CONSTRAINT `Salary_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
