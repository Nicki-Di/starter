/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Users` table. All the data in the column will be lost.
  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "email",
ADD COLUMN     "username" TEXT NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("username");
