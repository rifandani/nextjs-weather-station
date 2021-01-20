-- CreateTable
CREATE TABLE "Sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temp" REAL NOT NULL,
    "alt" REAL NOT NULL,
    "press" REAL NOT NULL,
    "heat" REAL NOT NULL,
    "humid" REAL NOT NULL,
    "lux" REAL NOT NULL,
    "flame" INTEGER NOT NULL,
    "time" TEXT NOT NULL
);
