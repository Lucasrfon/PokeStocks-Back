export async function getProfile(id: number) {
  const profile = await findProfile(id);

  if(!profile) {
    throw { type: "not found" }
  }
  return profile
}

export async function getAlbum(id: number) {
    return await findAlbum(id);
  }