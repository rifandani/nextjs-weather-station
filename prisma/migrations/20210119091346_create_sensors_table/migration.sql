-- CreateTable
CREATE TABLE "Sensors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temp" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "press" TEXT NOT NULL,
    "heat" TEXT NOT NULL,
    "humid" TEXT NOT NULL,
    "lux" TEXT NOT NULL,
    "flame" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
