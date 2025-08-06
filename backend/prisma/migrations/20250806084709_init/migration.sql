-- DropForeignKey
ALTER TABLE `feestatus` DROP FOREIGN KEY `FeeStatus_studentId_fkey`;

-- AddForeignKey
ALTER TABLE `FeeStatus` ADD CONSTRAINT `FeeStatus_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
