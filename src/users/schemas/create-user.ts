import * as Joi from 'joi';

export const UserSchema = Joi.object({
  username: Joi.string().email().required(),

  password: Joi.string()
    .pattern(
      new RegExp(/^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[0-9])(?=.*[a-z]).{8,}$/),
    )
    .required(),

  phoneNumber: Joi.string()
    .length(11)
    .pattern(new RegExp(/^09\d+$/))
    .required(),

  fullName: Joi.string(),
}).options({
  abortEarly: false,
});
