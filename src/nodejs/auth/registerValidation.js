const Joi = require('@hapi/joi');
const registerValidation = function (data) {
    const schema = Joi.object({
        Email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'vn'] } })
            .required()
            .messages({
                'string.email': `Định dạng Email không hợp lệ`,
                'any.required': `Email không được để trống`
              }),
        Username: Joi.string()
            .alphanum()
            .min(5)
            .required()
            .messages({
                'string.min': `Tên đăng nhập phải có tối thiểu 3 kí tự`,
                'string.alphanum': `Tên đăng nhập chỉ có các kí tự chữ và số`,
                'any.required': `Tên đăng nhập không được để trống`,
              }),
        Password: Joi.string()
            .alphanum()
            .min(8)
            .required()
            .messages({
                'string.min': `Mật khẩu phải có tối thiểu 8 kí tự`,
                'string.alphanum': `Mật khẩu chỉ có các kí tự chữ và số`,
                'any.required': `Mật khẩu không được để trống`,
              }),
            
    }).options({ abortEarly: false });
    return schema.validate(data)
}
module.exports = registerValidation