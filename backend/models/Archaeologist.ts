import { Schema, model, Document } from 'mongoose';

interface ArchaeologistDocument extends Document {
  name: string;
  profile: string;
  email: string;
  contactInfo: string;
  position: string;
  institution: string;
  
}

const archaeologistSchema = new Schema<ArchaeologistDocument>({
  name: { type: String, required: true },
  profile: { type: String, required: true },
  email: { type: String, required: true },
  contactInfo: { type: String, required: true },
  position: { type: String, required: true},
  institution: { type: String, required: true}
});

export default model<ArchaeologistDocument>('Archaeologist', archaeologistSchema);
