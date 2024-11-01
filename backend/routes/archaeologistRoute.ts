import express from 'express';
import archaeologistController from '../controllers/archaeologistController';

const router = express.Router();

// Create a new archaeologist profile
router.post('/', archaeologistController.createArchaeologist);

// Get an archaeologist by ID
router.get('/:id', archaeologistController.getArchaeologistById);

// Get all archaeologists
router.get('/', archaeologistController.getAllArchaeologists);

// Submit a funding request
router.post('/:id/funding', archaeologistController.submitFundingRequest);

export default router;
