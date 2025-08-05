-- DropForeignKey
ALTER TABLE `classassignment` DROP FOREIGN KEY `ClassAssignment_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `homework` DROP FOREIGN KEY `Homework_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `salary` DROP FOREIGN KEY `Salary_teacherId_fkey`;

-- DropIndex
DROP INDEX `ClassAssignment_teacherId_fkey` ON `classassignment`;

-- DropIndex
DROP INDEX `Homework_teacherId_fkey` ON `homework`;

-- DropIndex
DROP INDEX `Salary_teacherId_fkey` ON `salary`;

-- AddForeignKey
ALTER TABLE `ClassAssignment` ADD CONSTRAINT `ClassAssignment_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Homework` ADD CONSTRAINT `Homework_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Salary` ADD CONSTRAINT `Salary_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
