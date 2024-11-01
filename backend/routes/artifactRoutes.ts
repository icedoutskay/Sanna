import express from 'express';
import artifactController from '../controllers/artifactController';

const router = express.Router();

router.post('/artifacts', artifactController.createArtifact);
router.get('/artifacts', artifactController.getAllArtifacts);
router.get('/artifacts/:id', artifactController.getArtifactById);

export default router;
