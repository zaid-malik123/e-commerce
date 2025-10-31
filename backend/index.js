// packages import
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


// files import
import { connectDB } from './src/db/db.js';
import authRoute from "./src/routes/auth.routes.js"

// environment variables configuration
dotenv.config();

// express app initialization
const app = express();

// middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/auth", authRoute)

// server initialization
const PORT = process.env.PORT || 5000;
connectDB()
const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
};

startServer();