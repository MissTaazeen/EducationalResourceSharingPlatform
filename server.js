import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import express from 'express';
import connectDB from './config/db.js'; // Ensure the file extension is included



import authRoutes from './routes/authRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use(rateLimit({
    windowMs: 15*60*1000,
    mas: 100
}));

app.use('/api/auth', authRoutes);
app.use('/api/resources', resoureRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));