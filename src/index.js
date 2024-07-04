import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import mongoose from 'mongoose';
import connectDB from './db/db.js';
import { DB_NAME } from './constants.js';

// Validate environment variables
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('DB_NAME:', DB_NAME);

// Connect to the database
connectDB();
