import { Request, Response } from 'express';
import ArtifactModel, { IArtifact } from '../models/Artifact';

class ArtifactController {
    // Create new artifact
    public async createArtifact(req: Request, res: Response): Promise<void> {
        try {
            const artifactData: IArtifact = req.body;
            const newArtifact = new ArtifactModel(artifactData);
            await newArtifact.save();
            res.status(201).json(newArtifact);
        } catch (error) {
            console.error('Error creating artifact:', error);
            res.status(500).json({ message: 'Error creating artifact' });
        }
    }

    // Get all artifacts
    public async getAllArtifacts(req: Request, res: Response): Promise<void> {
        try {
            const artifacts = await ArtifactModel.find();
            res.status(200).json(artifacts);
        } catch (error) {
            console.error('Error retrieving artifacts:', error);
            res.status(500).json({ message: 'Error retrieving artifacts' });
        }
    }

    // Get artifact by ID
    public async getArtifactById(req: Request, res: Response): Promise<void> {
        try {
            const artifact = await ArtifactModel.findById(req.params.id);
            if (artifact) {
                res.status(200).json(artifact);
            } else {
                res.status(404).json({ message: 'Artifact not found' });
            }
        } catch (error) {
            console.error('Error retrieving artifact:', error);
            res.status(500).json({ message: 'Error retrieving artifact' });
        }
    }
}

export default new ArtifactController();
