import Archaeologist from '../models/Archaeologist';

interface ArchaeologistData {
  name: string;
  profile: string;
  expertise: string;
  email: string;
  contactInfo: string;
  position: string;
  institution: string;
}

interface FundingRequestData {
  amount: number;
  purpose: string;
  details?: string;
}

const createArchaeologist = async (data: ArchaeologistData) => {
  const archaeologist = new Archaeologist(data);
  return await archaeologist.save();
};

const getAllArchaeologists = async () => {
  return await Archaeologist.find();
};

const getArchaeologistById = async (id: string) => {
  return await Archaeologist.findById(id);
};

const submitFundingRequest = async (id: string, fundingData: FundingRequestData) => {
  const archaeologist = await Archaeologist.findById(id);
  if (!archaeologist) {
    throw new Error('Archaeologist not found');
  }
  // Assuming there is a field in the archaeologist model to store funding requests
 // archaeologist.fundingRequests.push(fundingData);
  return await archaeologist.save();
};

export default {
  createArchaeologist,
  getAllArchaeologists,
  getArchaeologistById,
  submitFundingRequest // Ensure to export the new method
};
