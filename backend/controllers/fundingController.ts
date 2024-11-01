import { Request, Response } from 'express';
import FundingModel, { IFunding } from '../models/Funding';

class FundingController {
    // Create new funding request
    public async createFunding(req: Request, res: Response): Promise<void> {
        try {
            const fundingData: IFunding = req.body;
            const newFunding = new FundingModel(fundingData);
            await newFunding.save();
            res.status(201).json(newFunding);
        } catch (error) {
            console.error('Error creating funding:', error);
            res.status(500).json({ message: 'Error creating funding' });
        }
    }

    // Get all funding requests
    public async getAllFundings(req: Request, res: Response): Promise<void> {
        try {
            const fundings = await FundingModel.find();
            res.status(200).json(fundings);
        } catch (error) {
            console.error('Error retrieving fundings:', error);
            res.status(500).json({ message: 'Error retrieving fundings' });
        }
    }

    // Get funding by ID
    public async getFundingById(req: Request, res: Response): Promise<void> {
        try {
            const funding = await FundingModel.findById(req.params.id);
            if (funding) {
                res.status(200).json(funding);
            } else {
                res.status(404).json({ message: 'Funding not found' });
            }
        } catch (error) {
            console.error('Error retrieving funding:', error);
            res.status(500).json({ message: 'Error retrieving funding' });
        }
    }
}

export default new FundingController();
