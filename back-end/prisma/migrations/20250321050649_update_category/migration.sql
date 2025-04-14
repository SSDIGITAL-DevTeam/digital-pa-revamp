/*
  Warnings:

  - Made the column `createdAt` on table `blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `blog` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `BlogCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `blogcategory` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
