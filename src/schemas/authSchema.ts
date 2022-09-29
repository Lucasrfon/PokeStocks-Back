import joi from "joi";

const newUserSchema = joi.object({
    name: joi.string().pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]*$/).required(),
    email: joi.string().email().required(),
    confirmEmail: joi.string().required().valid(joi.ref('email')),
    password: joi.string().length(8).required(),
    confirmPassword: joi.string().required().valid(joi.ref('password'))
});

export default newUserSchema