const Joi = require("joi");
const objectId = require('joi-objectid')(Joi)


const projectValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    budget: Joi.number().min(2).required(),
    description: Joi.string().min(20).required(),
    category: objectId().required(),
    association: objectId().required(),
    images: Joi.array().items(Joi.string()),
    
});
  return schema.validate(data);
};

module.exports = projectValidation;
