import Artifact from '../models/Artifact';
import ArtifactModel, { IArtifact } from '../models/Artifact';

class ArtifactService {
    async createArtifact(data: { title: string; description: string; fundingGoal: number; archaeologist: string }): Promise<IArtifact> {
        const artifact = new Artifact(data);
        await artifact.save();
        return artifact;
    }

    async getArtifactById(id: string): Promise<IArtifact | null> {
        return Artifact.findById(id).populate('archaeologist').exec();
    }

    async getAllArtifacts(): Promise<IArtifact[]> {
        return Artifact.find().populate('archaeologist').exec();
    }
}

export default new ArtifactService();
