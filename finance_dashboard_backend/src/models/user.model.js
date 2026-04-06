import mongoose from 'mongoose';

const { Schema, model} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['viewer', 'analyst', 'admin'],
            default: 'viewer'
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        }
    },
    { timestamps: true }
);
const User = model('User', userSchema);

export default User;