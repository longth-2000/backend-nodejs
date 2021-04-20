const Joi = require('@hapi/joi');
const profileValidation = function (data) {
    const schema = Joi.object({
         Firstname: Joi.string()
            .required(),
           
        Lastname: Joi.string()
            .required(),
            
        Age: Joi.string()
            .required(),
            
            
    }).options({ abortEarly: false });
    return schema.validate(data)
}
module.exports = profileValidation