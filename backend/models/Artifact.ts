import { Schema, model, Document } from 'mongoose';

export interface IArtifact extends Document {
  title: string;
  researchArea: string;
  imageUrl?: string;
  location: string;
  startDate: Date;
  endDate: Date;
  researchCommunity: string;
}

const artifactSchema = new Schema<IArtifact>({
  title: { type: String, required: true },
  researchArea: { type: String, required: true },
  imageUrl: { type: String,},
  location: { type: String, required: true },
  startDate: { type: Date,  },
  endDate: { type: Date,  }
});

const ArtifactModel = model<IArtifact>('Artifact', artifactSchema);

export default ArtifactModel;