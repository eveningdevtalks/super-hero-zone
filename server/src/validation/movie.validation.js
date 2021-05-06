const Joi = require("joi");

const studios = ["marvel", "dc"];
const tags = ["trending", "other"];

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      title: Joi.string().required(),
      description: Joi.string().optional(),
      imageUrl: Joi.string().optional().allow(null),
      rating: Joi.number().optional(),
      studio: Joi.string()
        .valid(...studios)
        .optional(),
      releaseDate: Joi.date().allow(null).optional(),
      tag: Joi.string()
        .valid(...tags)
        .optional(),
    }),
  },
  update: {
    body: Joi.object({
      _id: Joi.forbidden(),
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      imageUrl: Joi.string().optional().allow(null),
      rating: Joi.number().optional(),
      studio: Joi.string()
        .valid(...studios)
        .optional(),
      releaseDate: Joi.date().allow(null).optional(),
      tag: Joi.string()
        .valid(...tags)
        .optional(),
    }),
  },
};
