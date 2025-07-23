-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rollNumber` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `feeStatus` VARCHAR(191) NOT NULL,
    `blocked` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_id_key`(`id`),
    UNIQUE INDEX `Student_rollNumber_key`(`rollNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
