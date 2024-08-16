/*
  Warnings:

  - The primary key for the `stream` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `stream` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `stream` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `Link` to the `Stream` table without a default value. This is not possible if the table is not empty.
  - Made the column `thumbnail` on table `stream` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stream` DROP FOREIGN KEY `Stream_userId_fkey`;

-- AlterTable
ALTER TABLE `stream` DROP PRIMARY KEY,
    DROP COLUMN `userId`,
    ADD COLUMN `Link` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `thumbnail` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_StreamToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StreamToUser_AB_unique`(`A`, `B`),
    INDEX `_StreamToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_StreamToUser` ADD CONSTRAINT `_StreamToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Stream`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StreamToUser` ADD CONSTRAINT `_StreamToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
