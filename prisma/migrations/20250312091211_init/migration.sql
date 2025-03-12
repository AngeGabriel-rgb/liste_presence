-- CreateTable
CREATE TABLE "Apprenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quartier" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Apprenant_email_key" ON "Apprenant"("email");
