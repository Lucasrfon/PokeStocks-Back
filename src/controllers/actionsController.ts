import { Request, Response } from "express";
import { checkApplication, getJobs } from "../services/actionsService";

export async function requestJobs(req: Request, res: Response) {
  const jobs = await getJobs();

  res.status(200).send(jobs);
}

export async function applyForJob(req: Request, res: Response) {
  const id = parseInt(res.locals.id);
  const { pokemonId, jobId } = req.body;
  await checkApplication(id, pokemonId, jobId);

  res.status(200).send("Pokemon trabalhando");
}
