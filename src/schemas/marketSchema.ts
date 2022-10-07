import joi from "joi";

const marketSchema = joi.object({
  pokemonId: joi.number().min(1).max(151),
  amount: joi.number().integer().min(1),
});

export { marketSchema };
