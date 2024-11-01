import mongoose, { Schema } from 'mongoose';

const fundingRequestSchema = new Schema({
  artifactId: { type: String, required: true },
  fundingAmount: { type: Number, required: true },
  funderAddress: { type: String, required: true },
}, { timestamps: true });

const FundingRequest = mongoose.model('FundingRequest', fundingRequestSchema);
export default FundingRequest;
