/*
  Warnings:

  - The values [Takedown] on the enum `Blog_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `status` ENUM('Published', 'Archived', 'Draft') NOT NULL;
