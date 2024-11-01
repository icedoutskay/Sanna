import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db'; 
import archaeologistRoute from './routes/archaeologistRoute';
import artifactRoute from './routes/artifactRoutes';
import fundingRoute from './routes/fundingRoute';




dotenv.config();
connectDB(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/archaeologists', archaeologistRoute);
app.use('/api/artifacts', artifactRoute);
app.use('/api/funding', fundingRoute)



app.use(cors({
  origin: 'https://sanna-nine.vercel.app/',  
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

  
