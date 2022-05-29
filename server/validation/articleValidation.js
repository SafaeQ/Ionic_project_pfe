const Joi = require("joi");

const articleValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    date: Joi.date().min('01-01-2003').required(),
    description: Joi.string().min(20).required(),
    progress: Joi.boolean().required(),
});
  return schema.validate(data);
};

module.exports = articleValidation;
