-- AlterTable
ALTER TABLE "User" ADD COLUMN     "salaEstudanteId" TEXT,
ADD COLUMN     "salaProfessorId" TEXT;

-- CreateTable
CREATE TABLE "ListaChamada" (
    "id" TEXT NOT NULL,
    "salaID" TEXT NOT NULL,
    "dataInicial" TIMESTAMP(3) NOT NULL,
    "dataFinal" TIMESTAMP(3) NOT NULL,
    "dia" TEXT NOT NULL,

    CONSTRAINT "ListaChamada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ListaChamadaToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ListaChamada_id_key" ON "ListaChamada"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sala_id_key" ON "Sala"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ListaChamadaToUser_AB_unique" ON "_ListaChamadaToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ListaChamadaToUser_B_index" ON "_ListaChamadaToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_salaEstudanteId_fkey" FOREIGN KEY ("salaEstudanteId") REFERENCES "Sala"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_salaProfessorId_fkey" FOREIGN KEY ("salaProfessorId") REFERENCES "Sala"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaChamada" ADD CONSTRAINT "ListaChamada_salaID_fkey" FOREIGN KEY ("salaID") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListaChamadaToUser" ADD CONSTRAINT "_ListaChamadaToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ListaChamada"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ListaChamadaToUser" ADD CONSTRAINT "_ListaChamadaToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
