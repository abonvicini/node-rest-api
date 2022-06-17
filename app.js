dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Routes
import { TaskRouter } from './src/routes/taskRoute.js';
import { DeployRouter } from './src/routes/deployRoute.js';

const app = express();

//Connect with the database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to the database');
});

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);

// Routes Middleware
app.use('/api/task', TaskRouter());
app.use('/api/deploy', DeployRouter());

// Como escuchamos el puerto 3000
app.listen(3001);
