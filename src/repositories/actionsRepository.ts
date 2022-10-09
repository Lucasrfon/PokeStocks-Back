import prisma from "../dbStrategy/prisma";

export async function findJobs() {
  return await prisma.job.findMany();
}

export async function findJobById(jobId: number) {
  return await prisma.job.findUnique({ where: { jobId } });
}

export async function findPokemonById(pokemonId: number) {
  return await prisma.pokemon.findUnique({ where: { id: pokemonId } });
}