import { Request, Response } from 'express';
import ArchaeologistService from '../services/ArchaeologistService';

class ArchaeologistController {
    static async createArchaeologist(req: Request, res: Response) {
        try {
            const archaeologist = await ArchaeologistService.createArchaeologist(req.body);
            res.status(201).json(archaeologist);
        } catch (error: unknown) { // specify the type as unknown
            if (error instanceof Error) { // type guard to check if it's an instance of Error
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    static async getArchaeologistById(req: Request, res: Response) {
        try {
            const archaeologist = await ArchaeologistService.getArchaeologistById(req.params.id);
            if (!archaeologist) {
                return res.status(404).json({ message: 'Archaeologist not found' });
            }
            res.status(200).json(archaeologist);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    static async getAllArchaeologists(req: Request, res: Response) {
        try {
            const archaeologists = await ArchaeologistService.getAllArchaeologists();
            res.status(200).json(archaeologists);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }

    static async submitFundingRequest(req: Request, res: Response) {
        try {
            const fundingRequest = await ArchaeologistService.submitFundingRequest(req.params.id, req.body);
            res.status(201).json(fundingRequest);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    }
}

export default ArchaeologistController;
