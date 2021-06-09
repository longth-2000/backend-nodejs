const Joi = require('@hapi/joi');
const profileValidation = function (data) {
    const schema = Joi.object({
        Fullname: Joi.string()
            .required()
            .messages({
                'string.empty': `Họ và tên không được để trống`,
                'any.required': `Họ và tên không được để trống`
            }),
        Province: Joi.string()
            .required()
            .messages({
                'string.empty': `Tỉnh không được để trống`,
                'any.required': `Họ và tên không được để trống`
            }),
        District: Joi.string()
            .required()
            .messages({
                'string.empty': `Huyện không được để trống`,
                'any.required': `Huyện không được để trống`
            }),
        Sex: Joi.string()
            .required()
            .messages({
                'string.empty': `Giới tính không được để trống`,
                'any.required': `Giới tính không được để trống`
            }),
           
        Level: Joi.string()
            .required()
            .messages({
                'string.empty': `Trình độ học vấn được để trống`,
                'any.required': `Trình độ học vấn được để trống`
            }),

    }).options({ abortEarly: false });
    return schema.validate(data)
}
module.exports = profileValidation