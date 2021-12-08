-- CreateTable
CREATE TABLE "Test" (
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_nom_key" ON "Test"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Test_prenom_key" ON "Test"("prenom");
