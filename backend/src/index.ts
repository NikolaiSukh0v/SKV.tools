import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import { createClient } from '@supabase/supabase-js';
import userRoutes from './routes/UserRoutes';
import toolRoutes from './routes/ToolRoutes'; // Ensure toolRoutes is imported

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to allow requests from your frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specified methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specified headers
}));

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Supabase Client
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

// Routes
app.get('/', (req, res) => {
  res.send('Hello from SKV.tools Backend!');
});

app.use('/api/users', userRoutes);
app.use('/api/tool', toolRoutes); // Ensure toolRoutes is used

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
