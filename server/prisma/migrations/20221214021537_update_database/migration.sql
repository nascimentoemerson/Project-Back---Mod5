-- DropForeignKey
ALTER TABLE "ListaChamada" DROP CONSTRAINT "ListaChamada_salaID_fkey";

-- AddForeignKey
ALTER TABLE "ListaChamada" ADD CONSTRAINT "ListaChamada_salaID_fkey" FOREIGN KEY ("salaID") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;
