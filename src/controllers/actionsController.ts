import { Request, Response } from "express";

export async function requestJobs(req: Request, res: Response) {
  const jobs = await getJobs();

  res.status(200).send(jobs);
}

export async function applyForJob(req: Request, res: Response) {
  const id = parseInt(res.locals.id);
  const pokemonId = req.body;
  await checkApplication(id, pokemonId);

  res.status(200).send("Pokemon trabalhando");
}
