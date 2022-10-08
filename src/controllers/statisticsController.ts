import { Request, Response } from "express";

export async function requestProfile(req: Request, res: Response) {
  const id = parseInt(res.locals.id);
  const profile = await getProfile(id);

  res.status(200).send(profile);
}

export async function requestAlbum(req: Request, res: Response) {
  const id = parseInt(res.locals.id);

  const album = await getAlbum(id);

  res.status(200).send(album);
}
