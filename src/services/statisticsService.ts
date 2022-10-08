import { findUserById } from "../repositories/authRepository";
import { findAlbum } from "../repositories/statisticsRepository";

export async function getProfile(id: number) {
  const profile = await findUserById(id);

  if (!profile) {
    throw { type: "not found" };
  }

  return { name: profile.name, credit: profile.credit };
}

export async function getAlbum(id: number) {
  const album = await findAlbum(id);
  return album.map((each) => each.pokemonId);
}
