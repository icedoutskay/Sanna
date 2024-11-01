import mongoose, { Document, Schema } from 'mongoose';

 export interface IFunding extends Document {
  user: mongoose.Types.ObjectId;
  artifact: mongoose.Types.ObjectId; 
  funderAddress: string; 
  fundingAmount: number; 
  budgetAllocation: number;
  createdAt: Date;
}

const fundingSchema: Schema<IFunding> = new Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  },
  artifact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artifact',
      required: true,
  },
  fundingAmount: {
      type: Number,
      required: true,
  },

  createdAt: {
      type: Date,
      default: Date.now,
  },
});

const project = {
  budgetAllocation: null, 
  otherProperty: 'value',
};

const Funding = mongoose.model<IFunding>('Funding', fundingSchema);
export default Funding;