import Funding from '../models/Funding';
import { IFunding } from '../models/Funding'; // Import the interface for typing

class FundingService {
    async createFunding(data: { user: string; artifact: string; amount: number }): Promise<IFunding> {
        const funding = new Funding(data);
        await funding.save();
        return funding;
    }

    async getFundingByArtifact(artifactId: string): Promise<IFunding[]> {
        return Funding.find({ artifact: artifactId }).populate('user').exec();
    }

    async getFundingByUser(userId: string): Promise<IFunding[]> {
        return Funding.find({ user: userId }).populate('artifact').exec();
    }
    
}

export default new FundingService();
