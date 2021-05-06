const Joi = require("joi");

module.exports = {
  login: {
    body: Joi.object({
      login: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
  register: {
    body: Joi.object({
      login: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
};
