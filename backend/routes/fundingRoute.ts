import express from 'express';
import fundingController from '../controllers/fundingController';

const router = express.Router();

router.post('/', fundingController.createFunding);


router.get('/user/:id', fundingController.getFundingById)

export default router;
