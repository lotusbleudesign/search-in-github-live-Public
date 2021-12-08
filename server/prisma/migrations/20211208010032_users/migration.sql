-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hireable" TEXT,
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "twitter_username" DROP NOT NULL;
