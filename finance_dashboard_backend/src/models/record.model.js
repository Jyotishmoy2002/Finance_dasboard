import mongoose from 'mongoose';

const { Schema, model} = mongoose;

const recordSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['income', 'expense'],
            required: true
        },
        category: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        notes: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);
const Record = model('Record', recordSchema);
export default Record;