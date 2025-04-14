/*
  Warnings:

  - You are about to drop the column `categoryId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `idPlan` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `benefit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categoryservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `metatag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `price` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `benefit` DROP FOREIGN KEY `Benefit_idPlan_fkey`;

-- DropForeignKey
ALTER TABLE `metatag` DROP FOREIGN KEY `MetaTag_slug_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_idPlan_fkey`;

-- DropForeignKey
ALTER TABLE `pages` DROP FOREIGN KEY `Pages_categoryServiceId_fkey`;

-- DropForeignKey
ALTER TABLE `planservice` DROP FOREIGN KEY `PlanService_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `price` DROP FOREIGN KEY `Price_idPlan_fkey`;

-- DropIndex
DROP INDEX `Order_categoryId_fkey` ON `order`;

-- DropIndex
DROP INDEX `Order_idPlan_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `categoryId`,
    DROP COLUMN `idPlan`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `benefit`;

-- DropTable
DROP TABLE `categoryservice`;

-- DropTable
DROP TABLE `metatag`;

-- DropTable
DROP TABLE `pages`;

-- DropTable
DROP TABLE `planservice`;

-- DropTable
DROP TABLE `price`;
