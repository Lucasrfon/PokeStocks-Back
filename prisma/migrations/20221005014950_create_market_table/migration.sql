-- CreateTable
CREATE TABLE "market" (
    "pokemonId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "market_pkey" PRIMARY KEY ("pokemonId")
);

-- AddForeignKey
ALTER TABLE "market" ADD CONSTRAINT "market_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
