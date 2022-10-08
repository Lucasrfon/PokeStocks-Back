import joi from "joi";

const marketSchema = joi.object({
  pokemonId: joi.number().min(1).max(151).required(),
  amount: joi.number().integer().min(1).required(),
});

export { marketSchema };
