import { findJobById, findJobs, findPokemonById } from "../repositories/actionsRepository";
import { getUserWallet } from "../repositories/marketRepository";

export async function getJobs() {
  const jobs = await findJobs();

  if (!jobs) {
    throw { type: "not found" };
  }

  return jobs;
}

export async function checkApplication(
  id: number,
  pokemonId: number,
  jobId: number
) {
  const userWallet = await getUserWallet(pokemonId, id);
  const pokemon = await findPokemonById(pokemonId);
  const job = await findJobById(jobId);

  if (!userWallet || userWallet.amount === 0 || !pokemon || !job) {
    throw { type: "not found" };
  }

  if (job.type !== pokemon.type1 && job.type !== pokemon.type2) {
    throw { type: "type conflict" };
  }
}
