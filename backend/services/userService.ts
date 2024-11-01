import User from '../models/User';
import { IUser } from '../models/User'; // Import the interface for typing

class UserService {
    async createUser(walletAddress: string): Promise<IUser> {
        const user = new User({ walletAddress });
        await user.save();
        return user;
    }

    async getUserByWallet(walletAddress: string): Promise<IUser | null> {
        return User.findOne({ walletAddress }).exec();
    }

    async getAllUsers(): Promise<IUser[]> {
        return User.find().exec();
    }
}

export default new UserService();
