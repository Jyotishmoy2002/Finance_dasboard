import Joi from 'joi';

export const registerSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'analyst', 'viewer').required()
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const updateUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).optional(),
    role: Joi.string().valid('admin', 'analyst', 'viewer').optional(),
    status: Joi.string().valid('active', 'inactive').optional()
});