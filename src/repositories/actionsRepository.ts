import prisma from "../dbStrategy/prisma";

export async function findJobs() {
  return await prisma.job.findMany();
}

export async function findJobById(id: number) {
  return await prisma.job.findUnique({ where: { id } });
}

export async function findPokemonById(id: number) {
  return await prisma.pokemon.findUnique({ where: { id } });
}