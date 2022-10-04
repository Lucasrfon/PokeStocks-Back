-- CreateTable
CREATE TABLE "Pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "type1" TEXT NOT NULL,
    "type2" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "spd" INTEGER NOT NULL,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemons_name_key" ON "Pokemons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemons_pic_key" ON "Pokemons"("pic");
