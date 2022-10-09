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

  if (!userWallet || userWallet.amount === 0) {
    throw { type: "not found" };
  }

  const job = await findJobById(jobId);
  const pokemon = await findPokemonById(pokemonId);

  if (job.type !== pokemon.type && job.type !== pokemon.type2) {
    throw { type: "type conflict" };
  }
}
