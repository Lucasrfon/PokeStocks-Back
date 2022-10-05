-- CreateTable
CREATE TABLE "Wallet" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
