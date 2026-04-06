import Joi from 'joi';

export const createRecordSchema = Joi.object({
    amount: Joi.number().positive().required(),
    type: Joi.string().valid('income', 'expense').required(),
    category: Joi.string().required(),
    date: Joi.date().optional(),
    notes: Joi.string().optional()
});

export const updateRecordSchema = Joi.object({
    amount: Joi.number().positive().optional(),
    type: Joi.string().valid('income', 'expense').optional(),
    category: Joi.string().optional(),
    date: Joi.date().optional(),
    notes: Joi.string().optional()
});