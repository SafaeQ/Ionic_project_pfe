const Joi = require("joi");

const projectValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    budget: Joi.number().min(6).required(),
    description: Joi.string().min(20).required(),
});
  return schema.validate(data);
};

module.exports = projectValidation;
