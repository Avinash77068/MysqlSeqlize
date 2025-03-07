
import Joi from "joi";

export const userSchema=Joi.object(
    {
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    age:Joi.number().integer().min(0).max(100).required() ,
    mobileNumber:Joi.string().required(),
    isActive:Joi.boolean().default(true)
   }
)