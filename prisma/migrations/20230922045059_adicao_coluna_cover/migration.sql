/*
  Warnings:

  - Added the required column `cover` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "cover" TEXT NOT NULL;
