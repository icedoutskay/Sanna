import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    walletAddress: string;
    createdAt: Date;
}

const userSchema: Schema<IUser> = new Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
