/*
  Warnings:

  - You are about to alter the column `status` on the `blogcategory` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `blogcategory` MODIFY `status` BOOLEAN NOT NULL;
